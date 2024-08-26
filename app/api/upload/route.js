import { S3Client } from '@aws-sdk/client-s3';
import { Upload as S3Upload } from '@aws-sdk/lib-storage';
import mongoose, { set } from 'mongoose';
import Update from '@/models/updatesubmission';
import { NextResponse } from 'next/server';
import Users from '@/models/userModel';

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function POST(request) {
  const data = await request.formData();
  const week = data.get('week');
  const day = data.get('day');
  const email = data.get('email');
  const description = data.get('description');
  const files = data.getAll('files');

  if (!files.length) {
    return NextResponse.json({ error: 'No files uploaded' }, { status: 400 });
  }

  try {
    const uploadPromises = files.map(async (file) => {
      const upload = new S3Upload({
        client: s3Client,
        params: {
          Bucket: process.env.AWS_S3_BUCKET_NAME,
          Key: `${Date.now()}-${file.name}`,
          Body: file.stream(),
          ContentType: file.type,
        },
      });

      const result = await upload.done();
      return `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${result.Key}`;
    });

    const fileUrls = await Promise.all(uploadPromises);

    // Store in MongoDB
    const newUpload = new Update({
      week,
      day,
      email,
      description,
      files: fileUrls,
    });

    await newUpload.save();
    //set users current day to the next day of update
    if(Number(day) === 7) await Users.updateOne({email},{$set:{currentDay: 1,currentWeek: Number(week)+1}} )
    else await Users.updateOne({email},{$set:{currentDay: Number(day)+1}} )
    return NextResponse.json({ message: 'Files uploaded and data saved.', fileUrls }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

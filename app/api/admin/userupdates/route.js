import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// import Upload from '../../../models/Upload'; // Import the model
import Update from '@/models/updatesubmission';
import { connectDB } from '@/utils/mongodb';
import { NextResponse } from 'next/server';
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function GET(request) {
  try {
    await connectDB()
    const uploads = await Update.find().sort({ uploadedAt: -1 });
    console.log("uploads in data",uploads)
    // Generate pre-signed URLs
    const signedUrls = await Promise.all(
      uploads.map(async (upload) => {
        const fileUrls = await Promise.all(
          upload.files.map(async (fileUrl) => {
            const key = fileUrl.split('/').pop(); // Extract the file key from the URL
            const command = new GetObjectCommand({
              Bucket: process.env.AWS_S3_BUCKET_NAME,
              Key: key,
            });

            return await getSignedUrl(s3Client, command, { expiresIn: 3600 }); // URL expires in 1 hour
          })
        );
        return {
          ...upload._doc,
          files: fileUrls,
        };
      })
    );

    return NextResponse.json(signedUrls, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

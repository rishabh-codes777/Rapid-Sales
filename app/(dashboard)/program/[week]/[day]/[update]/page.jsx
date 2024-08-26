"use client";
import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useRouter } from 'next/navigation';
import Welcome from '@/components/program/updates/welcome';
import { useSession } from 'next-auth/react';
import Swal from 'sweetalert2';

function Updates({ params }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const weeks = params.week;
  const weekNumber = weeks.match(/\d+/)[0];
  const days = params.day;
  const dayNumber = days.match(/\d+/)[0];
  const [isForm, setIsForm] = useState(false);
  const [files, setFiles] = useState([]);
  const [week, setWeek] = useState(weekNumber);
  const [day, setDay] = useState(dayNumber);
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (status === "authenticated") {
      setEmail(session.user.email);
    }
  }, [session, status]);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('week', week);
    formData.append('day', day);
    formData.append('email', email);
    formData.append('description', description);
    Array.from(files).forEach((file) => {
      formData.append('files', file);
    });

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    if (response.status === 200) {
      Swal.fire({
        title: 'Success!',
        text: 'Your update has been submitted',
        icon: 'success',
        confirmButtonText: `<i class="fa fa-thumbs-up"></i> Cool`,
        confirmButtonColor: '#2d2de1',
      }).then(() => {
        router.push(`/program/week${weekNumber}`);
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong, please try again',
        icon: 'error',
        confirmButtonText: `<i class="fa fa-thumbs-down"></i> Ok`,
      });
    }
  };

  const goBack = () => {
    router.back();
  };

  if (!isForm)
    return (
      <Welcome setIsForm={setIsForm} goBack={goBack} week={weekNumber} day={dayNumber} />
    );

  return (
    <div className="h-screen flex items-center justify-center bg-white text-black overflow-y-scroll pb-20 md:pb-0">
      <div className="w-full md:w-3/4 lg:w-1/2 min-h-[calc(100dvh-57px)] max-w-6xl mx-4 md:mx-24 pb-12 md:py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-start mb-4">
          Week #{weekNumber} Update
        </h2>
        <p className="mb-6 text-gray-600">You made it to week {weekNumber}. Keep going!</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-black font-semibold">Week</label>
            <div className="relative mt-2">
              <i className="fas fa-calendar-week text-lg absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                value={`Week ${week}`}
                readOnly
                required
                className="w-full pl-10 pr-3 p-3 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div>
            <label className="block text-black font-semibold">Day</label>
            <div className="relative mt-2">
              <i className="fas fa-calendar-day text-lg absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                value={`Day ${dayNumber}`}
                readOnly
                required
                className="w-full pl-10 pr-3 p-3 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div>
            <label className="block text-black font-semibold">Describe Your Progress</label>
            <div className="relative mt-2">
              <textarea
                placeholder="What you have achieved so far"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black h-24 resize-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-black font-semibold">Uploads</label>
            <div className="relative mt-2">
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                required
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="flex items-center cursor-pointer">
                <i className="fas fa-upload text-lg mr-2 text-gray-400"></i>
                <span>{files.length > 0 ? `${files.length} file(s) selected` : "Click to upload files"}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-fit py-3 px-4 bg-cta text-white font-bold rounded-lg hover:scale-[1.03] transition duration-300 flex items-center gap-2 cursor-pointer"
            >
              <i className="fas fa-paper-plane text-lg"></i>
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Updates;

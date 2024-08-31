"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";

const LoginPage = ({ setIsLoginPage }) => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const res = await signIn("credentials", {
        email: e.target.email.value,
        password: e.target.password.value,
        redirect: false,
      });

      if (res.error) {
        setLoader(false);
        setError("Invalid credentials");
      } else {
        router.push("/");
      }
    } catch (err) {
      setLoader(false);
      setError("Something went wrong");
    }
  };

  const handleGoogle = async () => {
    try {
      const res = await signIn("google", {
        redirect: false,
      });
      if (res.error) {
        setError(res.error);
      } else {
        router.push("/");
      }
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <div className="relative flex h-screen items-center justify-center bg-gray-200">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/mnt/data/artistic-blurry-colorful-wallpaper-background.jpg"
        alt="Background"
      />

      {/* Overlay for slight darkening effect */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      {/* Rounded Box Container */}
      <div className="relative w-full max-w-4xl border border-black rounded-3xl bg-white p-8 shadow-lg z-10 flex">
        <div className="w-full flex flex-wrap">
          {/* Left Side - Background Image */}
          <div className="hidden md:flex w-1/2 rounded-l-3xl overflow-hidden">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url('https://img.freepik.com/free-photo/view-3d-confident-businessman_23-2150709932.jpg?t=st=1724745376~exp=1724748976~hmac=78d49440763ae47c729e333a4949b3731e07d314aa550bc2b1c0f0974a2e3ece&w=740')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8">
            <div className="w-full bg-white rounded-xl">
              <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                Create account
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 rounded-full hover:bg-green-600 transition-colors"
                >
                  {loader ? <BeatLoader color={"#fff"} size={10} /> : "Create account"}
                </button>
              </form>
              <div className="mt-4 flex items-center justify-center">
                <button
                  onClick={handleGoogle}
                  className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-800 py-2 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <path
                      d="M19.6372 8.61467C16.5004 8.61312 13.3636 8.6139 10.2269 8.61426C10.2273 9.91531 10.2253 11.2164 10.2276 12.517C12.0442 12.5166 13.8608 12.5162 15.6771 12.517C15.4666 13.7637 14.7256 14.9039 13.6749 15.6058C13.0144 16.0499 12.2556 16.3381 11.4732 16.4752C10.6858 16.6096 9.87218 16.6268 9.08673 16.4677C8.28799 16.3084 7.52554 15.9756 6.86041 15.5065C5.79686 14.7593 4.98519 13.6661 4.56844 12.4357C4.14231 11.1843 4.13918 9.79183 4.57039 8.54159C4.86959 7.66041 5.36759 6.84643 6.02179 6.18402C6.82874 5.35792 7.87787 4.76737 9.0082 4.5252C9.97607 4.31859 10.9967 4.35802 11.9443 4.6447C12.7497 4.88923 13.4921 5.33057 14.1003 5.91136C14.7151 5.30008 15.3267 4.6853 15.9404 4.07289C16.2622 3.74324 16.6005 3.42803 16.9121 3.08941C15.9802 2.22697 14.8877 1.53371 13.6941 1.09546C11.5451 0.304563 9.12148 0.287776 6.95804 1.03656C4.51999 1.87124 2.44402 3.69447 1.293 5.99895C0.892263 6.79302 0.599691 7.64058 0.423936 8.51236C-0.0182152 10.6844 0.289966 13.0002 1.29182 14.9785C1.94293 16.2698 2.87642 17.4177 4.00874 18.3176C5.07701 19.1695 6.32217 19.7987 7.64236 20.1499C9.30821 20.5967 11.0814 20.5865 12.7583 20.2049C14.2737 19.8562 15.7076 19.132 16.8524 18.0751C18.0624 16.9631 18.9256 15.498 19.3826 13.9235C19.881 12.2061 19.9497 10.3727 19.6372 8.61467Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Continue with Google
                </button>
              </div>
              <div className="mt-4 text-center text-black">
                Already have an account?{" "}
                <button
                  onClick={() => setIsLoginPage(false)}
                  className="text-green-500 hover:underline"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import Link from "next/link";
const Hero = () => {
  var gradient = `bg-gradient-to-bl from-purple-200 via-purple-400 to-purple-800`;
  return (
    <>
      <div className="flex justify-center pt-32 text-gray-50 text-center">
        <h1 className="lg:md:text-6xl text-3xl font-bold max-w-3xl">
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-100 to-gray-400`}
          >
            Share{" "}
            <span className={`text-transparent bg-clip-text ${gradient}`}>
              Secrets
            </span>{" "}
            in a breeze, fully encrypted.
          </span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center pt-6 px-2">
        <h2 className="text-gray-400 lg:md:sm:text-lg text-sm text-center max-w-2xl font-medium">
          Share sensitive information securely and easily with Secrets, a free
          encrypted secret sharing web app.
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center py-12 space-x-2">
        <Link href="/new">
          <div className="px-8">
            <div className="grid gap-8 items-start justify-center">
              <div className="relative group">
                <div
                  className={`absolute -inset-0.5 ${gradient} rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt`}
                ></div>
                <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                  <span className="flex items-center px-2 space-x-5">
                    <span className="text-gray-100 font-medium">
                      Get Started
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex justify-center items-center pt-14 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-down text-gray-300"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="18" y1="13" x2="12" y2="19"></line>
          <line x1="6" y1="13" x2="12" y2="19"></line>
        </svg>
      </div>
    </>
  );
};

export default Hero;

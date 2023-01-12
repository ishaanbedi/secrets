import Link from "next/link";
const Hero = () => {
  return (
    <section className=" min-h-screen bg-gradient-to-b from-black via-gray-900 ">
      <div className="flex justify-center pt-32 text-gray-50 text-center">
        <h1 className="lg:md:text-8xl text-3xl font-bold max-w-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-100 to-gray-400">
            Share{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-purple-600">
              Secrets
            </span>{" "}
            in a breeze, fully encrypted.
          </span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center pt-6 px-2">
        <h2 className="text-gray-400 text-lg text-center max-w-2xl font-medium">
          Securely share sensitive information with ease using Secrets, the free
          and fully encrypted secret sharing web application.
        </h2>
      </div>
      <div className="flex justify-center py-12 space-x-5">
        <Link href="/create">
          <div className="px-8">
            <div className="grid gap-8 items-start justify-center">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                  <span className="flex items-center space-x-5">
                    <span className="text-gray-100 font-medium">
                      Generate a new secret
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

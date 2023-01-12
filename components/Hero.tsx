import Link from "next/link";
const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-purple-900/10 py-12">
      <div className="flex justify-center pt-32 text-gray-50 text-center">
        <h1 className="lg:md:text-6xl text-3xl font-bold max-w-3xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-100 to-gray-400">
            Share{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500">
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
                <div className="absolute -inset-0.5 bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
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
        <Link href="/about">
          <button className="bg-gray-50 px-12 border transition delay-75 duration-300 ease-in-out hover:bg-black hover:text-gray-50 rounded-md p-3">
            About
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <main className="bg-black">
      <Head>
        <title>About | Secrets</title>
      </Head>
      <section className="min-h-screen bg-gradient-to-b from-black to-purple-900/10">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
            <div className="lg:w-1/2">
              <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-100 to-gray-400 sm:text-4xl sm:leading-none xl:max-w-lg">
                Secrets is a free encrypted secret sharing application.
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-base text-gray-300 md:text-lg font-semibold">
                Secrets acts as a secure and reliable platform for the sharing
                of sensitive information.
                <br />
                Whether you need to share passwords, environment variables, code
                snippets, or other confidential information, our
                fully encrypted service ensures that your information is kept
                safe and private.
                <br />
                Our user-friendly interface makes sharing easy, allowing you to
                share with your team, family, or friends with complete
                confidence.
                <br />
                Experience the peace of mind that comes with secure sharing and
                try{" "}
                <Link href="/">
                  <span className="text-transparent bg-clip-text bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500">
                    Secrets
                  </span>{" "}
                </Link>
                today.
              </p>
            </div>
          </div>
          <div className="grid gap-8 row-gap-10 grid-cols-2 lg:grid-cols-4 py-4">
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-lock"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="5" y="11" width="14" height="10" rx="2"></rect>
                  <circle cx="12" cy="16" r="1"></circle>
                  <path d="M8 11v-4a4 4 0 0 1 8 0v4"></path>
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-gray-50">
                Secure and private
              </h6>
              <p className="mb-3 text-sm text-gray-300">
                Secrets uses the latest encryption technology to ensure that
                your information is kept safe and private.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-asterisk-simple"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 12v-9"></path>
                  <path d="M12 12l-9 -2.5"></path>
                  <path d="M12 12l9 -2.5"></path>
                  <path d="M12 12l6 8.5"></path>
                  <path d="M12 12l-6 8.5"></path>
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-gray-50">
                Password Protected
              </h6>
              <p className="mb-3 text-sm text-gray-200">
                Set a unique password for each secret you share, ensuring that
                only the intended recipients have access to the information.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-skull"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M12 4c4.418 0 8 3.358 8 7.5c0 1.901 -.755 3.637 -1.999 4.96l-.001 2.54a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-2.54c-1.245 -1.322 -2 -3.058 -2 -4.96c0 -4.142 3.582 -7.5 8 -7.5z"></path>
                  <path d="M10 17v3"></path>
                  <path d="M14 17v3"></path>
                  <circle cx="9" cy="11" r="1"></circle>
                  <circle cx="15" cy="11" r="1"></circle>
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-gray-50">
                Expiration Control
              </h6>

              <p className="mb-3 text-sm text-gray-200">
                Share sensitive information for a limited time, ensuring that it
                is not accessible after it is no longer relevant.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-database"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
                  <path d="M4 6v6a8 3 0 0 0 16 0v-6"></path>
                  <path d="M4 12v6a8 3 0 0 0 16 0v-6"></path>
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5 text-gray-50">
                Your Data
              </h6>
              <p className="mb-3 text-sm text-gray-200">
                Secrets are stored in our database, and once they reach their
                expiration period, they are deleted permanently.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center pt-14 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-down text-gray-300"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="18" y1="13" x2="12" y2="19"></line>
              <line x1="6" y1="13" x2="12" y2="19"></line>
            </svg>
          </div>
        </div>
      </section>
      <section>
        <div className="min-h-screen bg-gradient-to-b from-purple-900/10 to-purple-900/30 pt-12">
          <h1 className="text-3xl text-center py-6 font-bold text-gray-50">
            Privacy of your data
          </h1>
          <div className="flex flex-col space-y-3 justify-center items-center px-2 py-4">
            <p className="text-gray-300 lg:md:text-lg text-sm text-center italic max-w-4xl flex justify-center items-center">
              Your data is safe with us. We do not collect or sell any of your
              personal information that can be used to track you, needless to
              say we take the protection of your privacy seriously. We store
              your secrets that you choose to generate in our database, that too
              in an encrypted format, and once they reach their expiration
              period, they are deleted permanently.
            </p>
            <p className="text-gray-300 lg:md:text-lg text-sm text-center italic max-w-4xl flex justify-center items-center">
              Your secrets are used for the sole purpose of sharing by you only
              and will not be used for any other purpose. We believe respecting
              all the compliance laws and regulations is the right thing to do.
            </p>
            <p className="text-gray-300 lg:md:text-lg text-sm text-center italic max-w-4xl flex justify-center items-center">
              In case you have any questions or concerns, please feel free to
              contact me at hi[at]ishaanbedi[dot]in
            </p>
            <p className="text-gray-300 lg:md:text-lg text-sm text-center italic max-w-4xl flex justify-center items-center">
              We hope you abide by our services.
            </p>
          </div>
          <Link href="/">
            <div className="px-8 my-12">
              <div className="grid gap-8 items-start justify-center">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                    <span className="flex items-center px-2 space-x-5">
                      <span className="text-gray-100 font-medium">
                        Start using Secrets
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;

import Link from "next/link";
const About = () => {
  var gradient = `bg-gradient-to-bl from-purple-200 via-purple-400 to-purple-800`;
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
        <div className="lg:w-1/2">
          <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-100 to-gray-400 sm:text-4xl sm:leading-none xl:max-w-lg">
            Secrets is a free encrypted secret sharing application.
          </h2>
        </div>
        <div className="lg:w-1/2">
          <p className="text-base text-gray-300 md:text-lg font-semibold">
            Whether you need to share passwords, environment variables, code
            snippets, or other confidential information, our fully encrypted
            service ensures that your information is kept safe and private.
            <br />
            Our user-friendly interface makes sharing easy, allowing you to
            share with your team, family, or friends with complete confidence.
            <br />
            Experience the peace of mind that comes with secure sharing and try{" "}
            <Link href="/new">
              <span className={`text-transparent bg-clip-text ${gradient}`}>
                Secrets
              </span>{" "}
            </Link>
          </p>
        </div>
      </div>
      <div className="grid gap-8 row-gap-10 grid-cols-2 lg:grid-cols-4 py-12">
        <div>
          <div
            className={`flex items-center justify-center w-16 h-16 mb-4 rounded-full ${gradient}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-lock"
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
              <rect x="5" y="11" width="14" height="10" rx="2"></rect>
              <circle cx="12" cy="16" r="1"></circle>
              <path d="M8 11v-4a4 4 0 0 1 8 0v4"></path>
            </svg>
          </div>
          <h6 className="mb-2 font-semibold leading-5 text-gray-50">
            Secure and private
          </h6>
          <p className="mb-3 text-sm text-gray-300">
            Secrets uses the best encryption technology to ensure that your
            information is kept safe and private.
          </p>
        </div>
        <div>
          <div
            className={`flex items-center justify-center w-16 h-16 mb-4 rounded-full ${gradient}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-asterisk-simple"
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
            Set a unique password for each secret you share, ensuring that only
            the intended recipients have access to the information.
          </p>
        </div>
        <div>
          <div
            className={`flex items-center justify-center w-16 h-16 mb-4 rounded-full ${gradient}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-skull"
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
            Share sensitive information for a limited time, ensuring that it is
            not accessible after it is no longer relevant.
          </p>
        </div>
        <div>
          <div
            className={`flex items-center justify-center w-16 h-16 mb-4 rounded-full ${gradient}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-database"
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
    </div>
  );
};

export default About;

const Working = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-100 sm:text-4xl md:mx-auto">
            How does Secrets work?
          </h2>
          <p className="text-base text-gray-300 ">
            We are transparent! Get to know what happens behind the scenes when
            you create a secret?
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-4 sm:grid-cols-2 pt-12">
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold text-gray-50">Step 1</p>
              <svg
                className="w-6 text-gray-100 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-300">
              User enters a secret with customizations like password protection
              and setting validity, which is then encrypted at the backend and
              sent over to the database safely and securely.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold text-gray-50">Step 2</p>
              <svg
                className="w-6 text-gray-100 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-300">
              A unique URL is generated for that secret, which references the
              encrypted secret record in the database. The creator of the secret
              can share this URL with the intended recipient (team, client,
              etc).
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold text-gray-50">Step 3</p>
              <svg
                className="w-6 text-gray-100 transform rotate-90 sm:rotate-0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
            <p className="text-gray-300">
              The application checks for a valid URL and unexpired secret on
              each request at the backend before sending anything to the client,
              only proceeding if the request is valid and handling errors
              gracefully.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between mb-6">
              <p className="text-2xl font-bold text-gray-50">Final Stage</p>
              <svg
                className="w-8 text-gray-100"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polyline
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  points="6,12 10,16 18,8"
                />
              </svg>
            </div>
            <p className="text-gray-300">
              The secret remains encrypted on the client side and is decrypted
              only when the user enters the correct password (if applicable) and
              the secret is still valid and unexpired, by sending a request to
              the backend for decryption.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-gray-300 py-8 text-center italic">
            Secrets use AES-256-CBC encryption algorithm to encrypt your secrets
            and the password is hashed using SHA-256 algorithm.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Working;

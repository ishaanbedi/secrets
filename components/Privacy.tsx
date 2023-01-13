import Link from "next/link";
const Privacy = () => {
  var gradient = `bg-gradient-to-bl from-purple-200 via-purple-400 to-purple-800`;

  return (
    <div>
      <div className="min-h-screen pt-12">
        <h1 className="text-3xl text-center py-6 font-bold text-gray-50">
          Privacy of your data
        </h1>
        <div className="flex flex-col space-y-3 justify-center items-center px-2 py-4">
          <p className="text-gray-300 lg:md:text-lg text-sm text-center italic max-w-4xl flex justify-center items-center">
            Your data is safe with us. We do not collect or sell any of your
            personal information that can be used to track you, needless to say
            we take the protection of your privacy seriously. We store your
            secrets that you choose to generate in our database, that too in an
            encrypted format, and once they reach their expiration period, they
            are deleted permanently.
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
        <Link href="/new">
          <div className="px-8 my-12">
            <div className="grid gap-8 items-start justify-center">
              <div className="relative group">
                <div
                  className={`absolute -inset-0.5 ${gradient} rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt`}
                ></div>
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
    </div>
  );
};

export default Privacy;

import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="mx-auto max-w-screen-xl px-4 pb-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-row justify-center items-center text-gray-50 sm:justify-start">
              <div className="flex flex-row justify-center items-center">
                This is a free and{" "}
                <Link
                  className="ml-1 underline underline-offset-4"
                  target={"_blank"}
                  href="https://www.github.com/ishaanbedi/secrets.ishn.xyz"
                >
                  open source project.
                </Link>
              </div>
            </div>
          <Link href="https://www.ishaanbedi.in" target="_blank">
            <p className="mt-4 text-center text-sm font-semibold text-gray-50 lg:mt-0 lg:text-right">
              Ishaan Bedi | {new Date().getFullYear()}
            </p>
          </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

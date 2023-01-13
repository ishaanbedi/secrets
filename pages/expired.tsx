import Head from "next/head";
import Link from "next/link";

const Expired = () => {
  var gradient = `bg-gradient-to-bl from-purple-200 via-purple-400 to-purple-800`;
  return (
    <section
      className={`h-screen flex justify-center items-center bg-black text-gray-50`}
    >
      <Head>
        <title>Expired | Secrets</title>
      </Head>
      <div className="text-center">
        <h1 className="lg:md:text-3xl text-xl font-semibold">
          Oops! That{" "}
          <Link href="/">
            <span className={`text-transparent bg-clip-text ${gradient}`}>
              secret
            </span>{" "}
          </Link>
          has expired!
        </h1>
        <h3 className="lg:md:text-lg text-sm py-3 ">
          First time here?{" "}
          <Link className="underline underline-offset-4" href="/">
            Explore secrets!{" "}
          </Link>
        </h3>
        <h4 className="py-2 text-gray-200">
          Do you think this is a mistake?{"  "}
          <Link
            href="https://github.com/ishaanbedi/secrets/issues/new"
            target={"_blank"}
            className="underline underline-offset-4"
          >
            Let the developer know.
          </Link>
        </h4>
      </div>
    </section>
  );
};

export default Expired;

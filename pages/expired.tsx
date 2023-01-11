import Head from "next/head";
import Link from "next/link";

const Expired = () => {
  return (
    <section className="h-screen flex justify-center items-center bg-black text-gray-50">
      <Head>
        <title>Expired | Secrets</title>
      </Head>
      <div className="text-center">
        <h1 className="lg:md:text-3xl text-xl font-semibold">
          Oops! That{" "}
          <Link href="/">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500">
              secret
            </span>{" "}
          </Link>
          has expired!
        </h1>
        <h2 className="lg:md:text-lg text-sm py-3 ">
          First time here? <Link className="underline underline-offset-4" href="/">Create a secret! </Link>
        </h2>
      </div>
    </section>
  );
};

export default Expired;

import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Secrets</title>
      </Head>
      <section className="bg-black/90 py-5 h-screen">
        <Hero />
      </section>
    </>
  );
}

import Head from "next/head";
import Hero from "../components/Hero";
import About from "../components/About";
import Working from "../components/Working";
import Privacy from "../components/Privacy";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Secrets</title>
      </Head>
      <main className="bg-black min-h-screen bg-gradient-to-b from-black via-purple-900/30 to-purple-900/40">
        <section className="py-12">
          <Hero />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Working />
        </section>
        <section>
          <Privacy />
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

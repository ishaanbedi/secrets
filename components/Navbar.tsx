import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className="bg-black py-5 px-8 border border-x-0 border-t-0 border-gray-800 sticky">
        <ul>
          <li>
            <Link href="/">
              <h1 className="text-gray-50 font-bold text-xl">Secrets</h1>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
const Hero = () => {
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="flex justify-center pt-24 text-gray-50 text-center">
        <h1 className="lg:md:text-6xl text-3xl font-bold max-w-2xl">
          Share{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500">
            Secrets
          </span>{" "}
          in a breeze, fully encrypted.
        </h1>
      </div>
      <div className="flex justify-center pt-6">
        <h2 className="text-gray-100 text-center max-w-3xl">
          Secrets is a free, open-source, and fully encrypted secret sharing web
          app.
        </h2>
      </div>
      <div className="flex justify-center py-12 space-x-5">
        <Link href="/create">
          <button className="text-gray-50 bg-black px-4 border border-gray-500 transition delay-75 duration-300 ease-in-out hover:border-gray-50 rounded-md p-3">
            Create a secret
          </button>
        </Link>
        <button
          onClick={openModal}
          className="bg-gray-50 px-12 border transition delay-75 duration-300 ease-in-out hover:bg-black hover:text-gray-50 rounded-md p-3"
        >
          About
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-700 bg-opacity-10" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-black/90 p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between py-3">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-50"
                    >
                      About Secrets
                    </Dialog.Title>
                    <button onClick={closeModal} className="text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-200">
                      Secrets is a free, open-source, and fully encrypted secret
                      sharing web app. It is built with Next.js, Tailwind CSS,
                      and TypeScript.
                    </p>
                  </div>

                  <div className="mt-4 flex justify-start space-x-3">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it!
                    </button>
                    <Link
                      target={"_blank"}
                      href="https://www.github.com/ishaanbedi/secrets"
                    >
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        GitHub
                      </button>
                    </Link>
                    <Link href="/privacy">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Privacy
                      </button>
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Hero;

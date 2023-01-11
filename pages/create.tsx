import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { Switch } from "@headlessui/react";
import Head from "next/head";
import Link from "next/link";
export default function Create() {
  const [secret, setSecret] = useState("");
  const [passwordProtected, setPasswordProtected] = useState(false);
  const [password, setPassword] = useState("");
  const [validity, setValidity] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [resultModalOpen, setResultModalOpen] = useState(false);
  const [result, setResult] = useState("");
  const [copyText, setCopyText] = useState("Copy");
  function closeModal() {
    setResultModalOpen(false);
  }

  const handleSubmit = async () => {
    if (secret === "") {
      alert("Secret cannot be empty");
      return;
    }
    if (passwordProtected && password === "") {
      alert("Password cannot be empty");
    }
    setLoading(true);
    const res = await fetch("/api/create-secret", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        passwordProtected,
        secret,
        password,
        validity,
      }),
    });
    const data = await res.json();
    setResult(data);
    setResultModalOpen(true);
    console.log(data);
    setLoading(false);
    return;
  };
  return (
    <div className="mx-auto w-screen h-screen bg-black/90 text-gray-50 px-4">
      <Transition appear show={resultModalOpen} as={Fragment}>
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
            <div className="fixed inset-0 bg-gray-700 bg-opacity-5" />
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
                      Awesome, your secret is ready!
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
                      Your secret is now ready to be shared with anyone.
                    </p>
                    <Link
                      className="my-3 text-underline underline-offset-4 text-gray-50 font-semibold"
                      href={`/`}
                    >
                      secrets.ishn.xyz/
                      {result.substring(0, 10) + "..."}
                    </Link>
                  </div>

                  <div className="mt-4 flex justify-start space-x-3">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>

                    <button
                      type="button"
                      disabled={copyText === "Copied!"}
                      className={`${
                        copyText === "Copied!" && "cursor-not-allowed bg-red-50"
                      }inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2`}
                      onClick={() => {
                        setCopyText("Copied!");
                        navigator.clipboard.writeText(
                          `https://secrets.ishn.xyz/${result}`
                        );
                        setTimeout(() => {
                          setCopyText("Copy");
                        }, 2000);
                      }}
                    >
                      {copyText}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Head>
        <title>Create a secret | Secrets</title>
      </Head>
      <div className="text-center py-4">
        <h1 className="text-4xl font-bold pt-4 pb-8">
          Create a{" "}
          <Link href={`https://secrets.ishn.xyz/${result}`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500">
              secret
            </span>
          </Link>
        </h1>
      </div>
      <center>
        <form className="flex flex-col justify-center items-center">
          <span className="flex flex-col justify-center w-full  ">
            <div>
              <textarea
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                className="textarea textarea-primary lg:md:w-2/6 w-full h-44 focus:ring-none text-gray-50 outline-none focus:outline-none border-2 border-gray-700 focus:border-gray-50 ring-0  bg-black rounded-md transition delay-75 duration-300 ease-in-out"
                placeholder="Enter the secret you'd like to share"
              ></textarea>
              <Switch.Group>
                <div className="flex items-center justify-center py-5">
                  <Switch.Label className="mr-4 cursor-pointer text-gray-50 font-semibold">
                    Protect with a password
                  </Switch.Label>
                  <Switch
                    checked={passwordProtected}
                    onChange={() => {
                      setPasswordProtected(!passwordProtected);
                      setPassword("");
                      setValidity(1);
                    }}
                    className={`${
                      passwordProtected ? "bg-blue-500" : "bg-gray-200"
                    } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ring-0 border-none outline-none `}
                  >
                    <span
                      className={`${
                        passwordProtected ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-black transition-transform`}
                    />
                  </Switch>
                </div>
              </Switch.Group>
              <div>
                {passwordProtected && (
                  <input
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="mb-6 textarea textarea-primary lg:md:w-2/6 w-full focus:ring-none text-gray-50 outline-none focus:outline-none border-2 border-gray-700 focus:border-gray-50 ring-0  bg-black rounded-md transition delay-75 duration-300 ease-in-out"
                    placeholder="Enter a password to protect your secret..."
                  />
                )}
              </div>
              <div>
                <select
                  onChange={(e) => setValidity(parseInt(e.target.value))}
                  className="w-2/6 text-left select select-bordered select-primary text-gray-50 bg-black transition delay-75 duration-300 ease-in-out focus:outline-none focus:ring-none focus:border-gray-50 cursor-pointer"
                >
                  <option selected disabled>
                    The secret expires after...
                  </option>
                  <option value={1}>1 view</option>
                  <option value={2}>2 views</option>
                  <option value={3}>3 views</option>
                  <option value={5}>5 views</option>
                  <option value={10}>10 views</option>
                  <option value={50}>50 views</option>
                  <option value={-1}>Never</option>
                </select>
              </div>
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                  type="submit"
                  className={`my-8 
                  ${
                    secret === "" ||
                    (passwordProtected && password === "") ||
                    loading
                      ? "cursor-not-allowed"
                      : "hover:bg-black hover:text-gray-50"
                  }
                  lg:md:w-2/6 w-full bg-gray-50 text-black border transition delay-75 duration-300 ease-in-out rounded-md p-3`}
                  disabled={
                    secret === "" ||
                    (passwordProtected && password === "") ||
                    loading
                  }
                >
                  {loading ? (
                    <span className="flex justify-center items-center animate-spin">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-circle-dotted"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <line x1="7.5" y1="4.21" x2="7.5" y2="4.22"></line>
                        <line x1="4.21" y1="7.5" x2="4.21" y2="7.51"></line>
                        <line x1="3" y1="12" x2="3" y2="12.01"></line>
                        <line x1="4.21" y1="16.5" x2="4.21" y2="16.51"></line>
                        <line x1="7.5" y1="19.79" x2="7.5" y2="19.8"></line>
                        <line x1="12" y1="21" x2="12" y2="21.01"></line>
                        <line x1="16.5" y1="19.79" x2="16.5" y2="19.8"></line>
                        <line x1="19.79" y1="16.5" x2="19.79" y2="16.51"></line>
                        <line x1="21" y1="12" x2="21" y2="12.01"></line>
                        <line x1="19.79" y1="7.5" x2="19.79" y2="7.51"></line>
                        <line x1="16.5" y1="4.21" x2="16.5" y2="4.22"></line>
                        <line x1="12" y1="3" x2="12" y2="3.01"></line>
                      </svg>
                    </span>
                  ) : (
                    "Generate Secret"
                  )}
                </button>
              </div>
            </div>
          </span>
        </form>
      </center>
    </div>
  );
}

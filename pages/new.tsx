import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Switch } from "@headlessui/react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
export default function Create() {
  const [secret, setSecret] = useState("");
  const [passwordProtected, setPasswordProtected] = useState(false);
  const [password, setPassword] = useState("");
  const [validity, setValidity] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [resultModalOpen, setResultModalOpen] = useState(false);
  const [result, setResult] = useState("");
  const [copyText, setCopyText] = useState("Copy");
  var closeModal = () => {
    setCopyText("Copy");
    setPasswordProtected(false);
    setPassword("");
    setValidity(-1);
    setSecret("");
    setResultModalOpen(false);
  };
  const handleSubmit = async () => {
    if (secret === "") {
      alert("Secret cannot be empty");
      return;
    }
    if (passwordProtected && password === "") {
      alert("Password cannot be empty");
    }
    setLoading(true);
    const res = await axios.post("/api/create-secret", {
      passwordProtected,
      secret,
      password,
      validity,
    });
    const data = res.data;
    setResult(data);
    setResultModalOpen(true);
    setLoading(false);
    return;
  };
  return (
    <div className="mx-auto w-screen h-screen bg-black text-gray-50 px-4 pt-8">
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-50 p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-between py-3">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-black"
                    >
                      Awesome, your secret is ready!
                    </Dialog.Title>
                    <button onClick={closeModal} className="text-black">
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
                    <p className="text-sm text-gray-800">
                      Your secret is now ready to be shared with anyone.
                    </p>
                    <Link
                      className="my-3 text-underline underline-offset-4 text-gray-700 font-semibold"
                      href={`https://secrets.ishn.xyz/secret/${result}`}
                      target={"_blank"}
                    >
                      secrets.ishn.xyz/secret/
                      {result.substring(0, 10) + "..."}
                    </Link>
                  </div>

                  <div className="mt-4 flex justify-start space-x-3">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-gray-50 hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>

                    <button
                      type="button"
                      disabled={copyText === "Copied!"}
                      className={`${
                        copyText === "Copied!" && "cursor-not-allowed bg-black"
                      } inline-flex justify-center rounded-md border border-transparent bg-black px-4 py-2 text-sm font-medium text-gray-50 hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2`}
                      onClick={() => {
                        setCopyText("Copied!");
                        navigator.clipboard.writeText(
                          `https://secrets.ishn.xyz/secret/${result}`
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
        <h1 className="lg:md:sm:text-5xl text-4xl font-bold pt-4 pb-8">
          Create a{" "}
          <Link href={`/`}>
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500">
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
                placeholder="Enter the secret you'd like to encrypt and share"
                disabled={loading}
              ></textarea>
              <div className={`${loading && "cursor-not-allowed"}`}>
                <Switch.Group>
                  <div className="flex items-center justify-center py-5">
                    <Switch.Label className="mr-4 cursor-pointer text-gray-50 font-semibold">
                      Protect with a password
                    </Switch.Label>
                    <Switch
                      disabled={loading}
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
              </div>
              <div>
                {passwordProtected && (
                  <input
                    onKeyDown={(e) => {
                      var allowed = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=,./<>?;:'"[]{}\|~\``;
                      allowed += "Backspace";
                      if (allowed.indexOf(e.key) === -1) {
                        e.preventDefault();
                      }
                    }}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className={`mb-6 textarea textarea-primary lg:md:w-2/6 w-full focus:ring-none text-gray-50 outline-none focus:outline-none border-2 border-gray-700 focus:border-gray-50 ring-0  bg-black rounded-md transition delay-75 duration-300 ease-in-out ${
                      loading && "cursor-not-allowed"
                    }`}
                    placeholder="Enter a password to protect your secret..."
                    disabled={loading}
                  />
                )}
              </div>
              <div>
                <select
                  disabled={loading}
                  onChange={(e) => setValidity(parseInt(e.target.value))}
                  className={`lg:md:w-2/6 w-full text-left select select-bordered select-primary text-gray-50 bg-black transition delay-75 duration-300 ease-in-out focus:outline-none focus:ring-none focus:border-gray-50 cursor-pointer border-gray-700 ring-0 rounded-md ${
                    loading && " cursor-not-allowed"
                  }`}
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
                      ? "cursor-not-allowed text-gray-50"
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
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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

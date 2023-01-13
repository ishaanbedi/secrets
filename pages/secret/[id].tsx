import { Context } from "vm";
import { getXataClient } from "../../src/xata";
import { useState } from "react";
import axios from "axios";
import Head from "next/head";
import Link from "next/link";

const DecodeSecret = ({
  record,
}: {
  record: {
    secret: string;
    visits: number;
    validity: number;
    password: string;
    passwordProtected: boolean;
  };
}) => {
  var gradient = `bg-gradient-to-bl from-purple-200 via-purple-400 to-purple-800`;
  const [password, setPassword] = useState("");
  const [showSecret, setShowSecret] = useState(false);
  const [secret, setSecret] = useState("");
  const [fetched, setFetched] = useState(false);
  const handleSubmit = async () => {
    if (record.passwordProtected) {
      const res = await axios.get("/api/decode-password", {
        params: {
          userPassword: password,
          serverPassword: record.password,
        },
      });
      if (!res.data) {
        return alert("Wrong password");
      }
    }
    const res = await axios.get("/api/decode-secret", {
      params: {
        term: record.secret,
      },
    });
    setShowSecret(!showSecret);
    setFetched(true);
    setSecret(res.data);
  };
  return (
    <section className="min-h-screen bg-black text-gray-50">
      <Head>
        <title>Shared Secret | Secrets</title>
      </Head>
      <h1 className="font-semibold lg:md:sm:text-3xl text-xl px-1  text-center py-12">
        Here&apos;s the{" "}
        <Link href="/">
          <span className={`text-transparent bg-clip-text ${gradient}`}>
            secret
          </span>{" "}
        </Link>
        you&apos;re looking for.
      </h1>
      <center>
        <form className="flex flex-col justify-center items-center">
          <span className="flex flex-col justify-center w-full  ">
            <div className="px-4">
              <textarea
                className="textarea textarea-primary lg:md:w-2/6 w-full h-44 focus:ring-none text-gray-50 outline-none focus:outline-none border-2 border-gray-700 focus:border-gray-50 ring-0  bg-black rounded-md transition delay-75 duration-300 ease-in-out"
                readOnly
                value={
                  showSecret
                    ? secret
                    : "Secret will be displayed here once you reveal it..."
                }
              ></textarea>
              <div className="flex flex-col items-center ">
                {record.passwordProtected ? (
                  <div className="flex flex-col w-full justify-center items-center">
                    <input
                      disabled={showSecret}
                      type="password"
                      className={`${
                        showSecret ? "cursor-not-allowed" : ""
                      } lg:md:w-2/6 w-full my-6 focus:ring-none text-gray-50 outline-none focus:outline-none border-2 border-gray-700 focus:border-gray-50 ring-0  bg-black rounded-md transition delay-75 duration-300 ease-in-out `}
                      placeholder="Enter the password to reveal the secret."
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setSecret(record.secret);
                        handleSubmit();
                      }}
                      type="submit"
                      disabled={password === "" || fetched}
                      className={` 
                      ${
                        password === "" || fetched
                          ? "cursor-not-allowed bg-gray-300"
                          : ""
                      }                      
                      lg:md:sm:w-2/6 w-full border transition delay-75 duration-300 ease-in-out rounded-md p-3 bg-gray-50 text-black`}
                    >
                      {fetched ? (
                        <span className="flex justify-center items-center space-x-2">
                          Secret Revealed
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-check ml-2"
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
                            <path d="M5 12l5 5l10 -10"></path>
                          </svg>
                        </span>
                      ) : (
                        "Click here to reveal the secret."
                      )}
                    </button>
                  </div>
                ) : (
                  <button
                    disabled={fetched}
                    onClick={(e) => {
                      e.preventDefault();
                      if (!fetched) {
                        handleSubmit();
                      }
                    }}
                    type="submit"
                    className={`my-8 
                  lg:md:w-2/6 w-full border transition delay-75 duration-300 ease-in-out rounded-md p-3
                  ${
                    !showSecret
                      ? "bg-gray-50 text-black"
                      : "text-gray-50 bg-black"
                  }
                  ${fetched ? "cursor-not-allowed" : ""}
                  
                  `}
                  >
                    {!fetched ? (
                      "Click here to reveal the secret."
                    ) : (
                      <span className="flex justify-center items-center space-x-2">
                        Secret Revealed
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-check ml-2"
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
                          <path d="M5 12l5 5l10 -10"></path>
                        </svg>
                      </span>
                    )}
                  </button>
                )}
              </div>
              <div className="py-5">
                {record.validity === -1 ? (
                  <h3>
                    The secret does not have any expiry period. It&apos;ll be
                    available here, forever.
                  </h3>
                ) : (
                  <h3>
                    {record.validity - record.visits - 1 === 0 ? (
                      <span className="max-w-2xl">
                        This secret will expire after this view.
                      </span>
                    ) : (
                      <>
                        This secret will expire after{" "}
                        {record.validity - record.visits - 1} more{" "}
                        {record.validity - record.visits - 1 === 1
                          ? "view"
                          : "views"}
                        .
                      </>
                    )}
                  </h3>
                )}
                {showSecret && (
                  <Link href="/">
                    <div className="px-8 my-12">
                      <div className="grid gap-8 items-start justify-center">
                        <div className="relative group">
                          <div
                            className={`absolute -inset-0.5 ${gradient} rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt`}
                          ></div>
                          <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                            <span className="flex items-center px-2 space-x-5">
                              <span className="text-gray-100 font-medium">
                                Create a new secret
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </span>
        </form>
      </center>
    </section>
  );
};
export default DecodeSecret;
export async function getServerSideProps(context: Context) {
  const xata = getXataClient();
  const { id } = context.query;
  const record = await xata.db.secrets_database.read(`rec_${id}`);
  if (!record) {
    var check = await xata.db.expired_secrets_alias.getAll();
    check = check.filter((item) => item.alias === `rec_${id}`);
    if (check) {
      return {
        redirect: {
          destination: "/expired",
        },
      };
    }
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
  var views = record.visits;
  var validity = record.validity;
  if (validity !== -1) {
    views = views + 1;
    await xata.db.secrets_database.update(`rec_${id}`, {
      visits: views,
    });
    if (views > validity) {
      await xata.db.expired_secrets_alias.create({
        alias: `rec_${id}`,
      });
      await xata.db.secrets_database.delete(`rec_${id}`);
      return {
        redirect: {
          destination: "/expired",
          permanent: false,
        },
      };
    }
  }

  var secret = record.secret;
  var password = record.password;
  var clientRecord = {
    secret: secret,
    visits: record.visits,
    validity: record.validity,
    password: password,
    passwordProtected: record.protected,
  };
  return {
    props: {
      record: clientRecord,
    },
  };
}

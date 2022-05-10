/* This example requires Tailwind CSS v2.0+ */
import { PhoneIcon } from "@heroicons/react/outline";
import { MailIcon } from "@heroicons/react/solid";
import Head from "next/head";
import NextLink from "next/link";
import NextImage from "next/image";
import type { NextPage } from "next";
import { supportLinks } from "@/static/contact-us.data";

type Props = {};

const IndexPage: NextPage<Props> = ({}) => {
  return (
    <>
      <Head>
        <title>How it works | Bookation</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="index,follow" />
      </Head>
      <div className="bg-white">
        {/* Header */}
        <div className="relative pb-32 bg-gray-800">
          <div className="absolute inset-0">
            <NextImage
              className="w-full h-full object-cover"
              src="/we-love-you.jpg"
              alt=""
              layout="fill"
              blurDataURL="/we-love-you.jpg"
            />

            <div
              className="absolute inset-0 bg-gray-800 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              24x7 Support
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              Facing any issues? Don't worry - We'll provide 24x7 support to
              resolve your issue.
            </p>
          </div>
        </div>

        {/* Overlapping cards */}
        <section
          className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Contact us
          </h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
            {supportLinks.map((link) => (
              <div
                key={link.name}
                className="flex flex-col bg-white rounded-2xl shadow-xl"
              >
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                  <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                    <link.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">
                    {link.name}
                  </h3>
                  <p className="mt-4 text-base text-gray-500">
                    {link.description}
                  </p>
                </div>
                <div>
                  <ul
                    role="list"
                    className="flex flex-wrap justify-center gap-x-8"
                  >
                    {link.teamMembers.map((person) => (
                      <li key={person.name}>
                        <div className="space-y-4 flex justify-center">
                          <div className="space-y-2">
                            <div className="text-xs font-medium lg:text-sm">
                              <h3>{person.name}</h3>
                              <p className="text-indigo-600">{person.role}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {link.teamMembers.map((member, index) => (
                  <div key={`member-contact-us-${index}`}>
                    <div className="bg-gray-50 flex justify-center">
                      {member.contactNumber ? (
                        <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                          <div className="flow-root">
                            <a
                              href={`tel:${member.contactNumber}`}
                              className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                            >
                              <PhoneIcon
                                className="flex-shrink-0 h-6 w-6 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="ml-3">
                                {"Contact us" as const}
                              </span>
                            </a>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                      <div />
                      {member.contactEmail ? (
                        <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                          <div className="flow-root">
                            <NextLink
                              href={`https://mail.google.com/mail/u/0/?source=mailto&to=${member.contactEmail}&fs=1&tf=cm`}
                            >
                              <a
                                target="_blank"
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 transition ease-in-out duration-150"
                              >
                                <MailIcon
                                  className="flex-shrink-0 h-6 w-6 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span className="ml-3">
                                  {"Email us" as const}
                                </span>
                              </a>
                            </NextLink>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default IndexPage;

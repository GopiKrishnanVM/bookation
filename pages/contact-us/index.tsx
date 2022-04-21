import { NextPage } from "next";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import NextLink from "next/link";
import Image from "next/image";

type Props = {};

const IndexPage: NextPage<Props> = ({}) => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Sales Support
              </h2>
              <div className="mt-3">
                <p className="text-lg text-gray-500">
                  Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                  volutpat massa dictumst amet. Sapien tortor lacus arcu.
                </p>
              </div>
              <div className="mt-9">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <PhoneIcon
                      className="h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>+91 9626166481</p>
                    <p className="mt-1">Mon-Sun 8am to 6pm PST</p>
                  </div>
                </div>
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <MailIcon
                      className="h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <NextLink href="https://mail.google.com/mail/?view=cm&source=mailto&to=thewritersparadise.official@gmail.com">
                      <a rel="noreferrer" target="_blank">
                        <p>thewritersparadise.official@gmail.com</p>
                      </a>
                    </NextLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 md:mt-0">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Technical Support
              </h2>
              <div className="mt-3">
                <p className="text-lg text-gray-500">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, repellat error corporis doloribus similique,
                  voluptatibus numquam quam, quae officiis facilis.
                </p>
              </div>
              <div className="mt-9">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <PhoneIcon
                      className="h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <p>+91 9842025958</p>
                    <p className="mt-1">Mon-Fri 8am to 6pm PST</p>
                  </div>
                </div>
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <MailIcon
                      className="h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 text-base text-gray-500">
                    <NextLink href="https://mail.google.com/mail/?view=cm&source=mailto&to=thewritersparadise.official@gmail.com">
                      <a rel="noreferrer" target="_blank">
                        <p>thewritersparadise.official@gmail.com</p>
                      </a>
                    </NextLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="inline text-3xl font-extrabold tracking-tight text-gray-900 sm:block sm:text-4xl">
            Want product news and updates?
          </h2>
          <p className="inline text-3xl font-extrabold tracking-tight text-indigo-600 sm:block sm:text-4xl">
            Sign up for our newsletter.
          </p>
          <form className="mt-8 sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Notify me
              </button>
            </div>
          </form>
        </div>
      </div> */}
    </>
  );
};

export default IndexPage;

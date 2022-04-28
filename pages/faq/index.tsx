import { classNames } from "@/utility/css-helper";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Head from "next/head";

const faqs = [
  {
    question: "1. How much time will it take to publish a book?",
    answer: "It will take two days for kindle and seven days for paperback.",
  },
  {
    question: "2. Does Bookation edit the format of the book??",
    answer: "Yes, we have well-qualified editors to do the job for you.",
  },
  {
    question: "3. Does Bookation verify the content of the books?",
    answer:
      "Yes, we have well-qualified readers to validate the writings. Your book will only be published after validation by our experts.",
  },
  {
    question: "4. How much does the Bookation charge to publish a book??",
    answer:
      "Our service for you is completely free. We will not charge you for anything.",
  },
];

export default function Example() {
  return (
    <>
      <Head>
        <title>Frequently asked questions | Bookation</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="index,follow" />
      </Head>
      <div>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <h2 className="text-center text-3xl font-extrabold  sm:text-4xl mt-3  text-black">
              Frequently asked questions
            </h2>
            <dl className="mt-6 space-y-6 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                          <span className="font-semibold text-black">
                            {faq.question}
                          </span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={classNames(
                                open ? "-rotate-180" : "rotate-0",
                                "h-6 w-6 transform"
                              )}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="mt-2 text-base hover:text-blue-600">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

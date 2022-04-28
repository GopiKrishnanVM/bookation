import type { NextPage } from "next";
import Head from "next/head";

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
      <section className="networklisted py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap mx-3">
            <div
              className="
            flex flex-col
            w-full
            items-start
            md:text-left md:w-1/3
            lg:w-2/5
          "
            >
              <div className="max-w-xs mb-12">
                <h4
                  className="
                font-inter
                text-base
                font-semibold600
                text-blue-600
                uppercase
                mb-3
              "
                >
                  Understand Our Process!
                </h4>
                <h2
                  className="
                font-inter
                text-2xl
                md:text-3xl
                font-semibold
                text-gray-900
                mb-6
              "
                >
                  Join our publications and publish your books.
                </h2>
                <div className="max-w-xs lg:pr-8 sm:w-full">
                  <p className="font-inter text-base font-normal text-gray-500">
                    Our onboarding process is simple and straightforward and our
                    team of experts will guide you every step of the way.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-full md:w-4/6 lg:w-3/5">
              <ol className="networklisted__decimal list-bullet-items">
                <li className="mb-12 md:mb-6">
                  <div className="networklisted__decimal--content max-w-xl">
                    <h3 className="font-inter text-lg font-medium mt-2">
                      Basic Details
                    </h3>
                    <p className="mt-2 font-inter text-base font-normal text-gray-500">
                      A google form will be sent to you. You need to fill in
                      some basic details about you and your book.
                    </p>
                  </div>
                </li>
                <li className="mb-12 md:mb-6">
                  <div className="networklisted__decimal--content max-w-xl">
                    <h3 className="font-inter text-lg font-medium mt-2">
                      Submit your Book
                    </h3>
                    <p className="mt-2 font-inter text-base font-normal text-gray-500">
                      Once the google form is submitted, our sales team will
                      contact you and you need to submit your writings.
                    </p>
                  </div>
                </li>

                <li className="mb-12 md:mb-6">
                  <div className="networklisted__decimal--content max-w-xl">
                    <h3 className="font-inter text-lg font-medium mt-2">
                      Time to edit
                    </h3>
                    <p className="mt-2 font-inter text-base font-normal text-gray-500">
                      Don't know how to edit ! Don't worry we've got the best
                      editors to do the job for you.
                    </p>
                  </div>
                </li>
                <li className="mb-12 md:mb-6">
                  <div className="networklisted__decimal--content max-w-xl">
                    <h3 className="font-inter text-lg font-medium mt-2">
                      Under Review!
                    </h3>
                    <p className="mt-2 font-inter text-base font-normal text-gray-500">
                      We've got people to carefully go through your writing and
                      make sure everything looks fine.
                    </p>
                  </div>
                </li>
                <li className="mb-12 md:mb-6">
                  <div className="networklisted__decimal--content max-w-xl">
                    <h3 className="font-inter text-lg font-medium mt-2">
                      Confirmation
                    </h3>
                    <p className="mt-2 font-inter text-base font-normal text-gray-500">
                      Once all set, we'll contact you to confirm once everything
                      looks fine for you!
                    </p>
                  </div>
                </li>
                <li className="mb-12 md:mb-6">
                  <div className="networklisted__decimal--content max-w-xl">
                    <h3 className="font-inter text-lg font-medium mt-2">
                      Done
                    </h3>
                    <p className="mt-2 font-inter text-base font-normal text-gray-500">
                      Once your book document verified and approved.It will
                      availabe for purchase in various platform like Amazon,
                      Flipkart and Notion Press.
                    </p>
                  </div>
                </li>
                <li className="mb-12 md:mb-6">
                  <div className="networklisted__decimal--content max-w-xl">
                    <h3 className="font-inter text-lg font-medium mt-2">
                      Get Paid
                    </h3>
                    <p className="mt-2 font-inter text-base font-normal text-gray-500">
                      Once the book gets published, you'll get sales
                      notifications and reports on each 24hrs.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndexPage;

import { classNames } from "@/utility/css-helper";
import { NextPage } from "next";
import { CheckIcon } from "@heroicons/react/solid";
import NextLink from "next/link";
import Image from "next/image";
import { steps } from "@/static/how-works.data";

type Props = {};

const IndexPage: NextPage<Props> = ({}) => {
  return (
    <>
      <section className="networklisted">
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
                  BECOME an Author
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
                  <p className="font-inter text-base font-normal text-gray-500 mb-4">
                    Join our publications & Publish your book without investment
                  </p>
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
                      Create a Account
                    </h3>
                    <p className="mt-2 font-inter text-base font-normal text-gray-500">
                      Submit your interest to get started and a member of our
                      partnerships team will be in touch. Discuss the benefits
                      of joining our network of introducers.
                    </p>
                  </div>
                </li>
                <li className="mb-12 md:mb-6">
                  <div className="networklisted__decimal--content max-w-xl">
                    <h3 className="font-inter text-lg font-medium mt-2">
                      Fill Basic Details
                    </h3>
                    <p className="mt-2 font-inter text-base font-normal text-gray-500">
                      We have a straightforward online application process where
                      we'll ask you about your business so we can verify your
                      account and get you setup.
                    </p>
                  </div>
                </li>
                <li className="mb-12 md:mb-6">
                  <div className="networklisted__decimal--content max-w-xl">
                    <h3 className="font-inter text-lg font-medium mt-2">
                      Upload Your Documents
                    </h3>
                    <p className="mt-2 font-inter text-base font-normal text-gray-500">
                      Once verified and approved, you'll be invited to access
                      our online platform where you'll be able to start managing
                      your students. All in one place.
                    </p>
                  </div>
                </li>
                <li className="mb-12 md:mb-6">
                  <div className="networklisted__decimal--content max-w-xl">
                    <h3 className="font-inter text-lg font-medium mt-2">
                      Under Reviewing Status
                    </h3>
                    <p className="mt-2 font-inter text-base font-normal text-gray-500">
                      You've to upload your book documents for verification.
                    </p>
                  </div>
                </li>
                <li className="mb-12 md:mb-6">
                  <div className="networklisted__decimal--content max-w-xl">
                    <h3 className="font-inter text-lg font-medium mt-2">
                      Done
                    </h3>
                    <p className="mt-2 font-inter text-base font-normal text-gray-500">
                      Once your book document verified and approved, Your book
                      comes to live and It will availabe for purchase in various
                      platform like Amazon, Flipkart and Notion Press.
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

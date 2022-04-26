import type { NextPage } from "next";
import NextLink from "next/link";
import Image from "next/image";
import { IPublicationsModel } from "@/models/publications.model";
import axios from "axios";

type Props = { payload: Array<IPublicationsModel> };

const IndexPage: NextPage<Props> = ({ payload }) => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Published Books
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {payload.map((product) => (
            <div key={product._id}>
              <div className="relative">
                <div className="relative w-full h-72 rounded-lg overflow-hidden">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    layout="fill"
                    className="w-full h-full object-center object-cover"
                  ></Image>
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.author.name}
                  </p>
                </div>
                <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                  />
                  <p className="relative text-lg font-semibold text-white">
                    {product.price}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <NextLink href={`/publications/${product.slug}`}>
                  <a className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200">
                    Go to Details
                    <span className="sr-only">, {product.name}</span>
                  </a>
                </NextLink>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const response = await axios.get<Array<IPublicationsModel>>(
    `${process.env.API_BASE_URL}publications/`
  );

  return {
    props: { payload: response?.data ?? [] } as Props, // will be passed to the page component as props
  };
}

export default IndexPage;

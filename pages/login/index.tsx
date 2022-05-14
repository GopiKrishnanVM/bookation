import SignInComponent from "@/components/login/signin.component";
import SignUpComponent from "@/components/login/signup.component";
import type { NextPage } from "next";
import NextImage from "next/image";
import { useState } from "react";

type Props = {};

const IndexPage: NextPage<Props> = ({}) => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  return (
    <>
      <div className="min-h-screen  flex">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          {isSignUp == true ? (
            <SignUpComponent onSignUp={setIsSignUp} />
          ) : (
            <SignInComponent onSignUp={setIsSignUp} />
          )}
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <NextImage
            className="absolute inset-0 h-full w-full object-cover"
            src="https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_960_720.jpg"
            blurDataURL="https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_960_720.jpg"
            alt=""
            layout="fill"
          />
        </div>
      </div>
    </>
  );
};

export default IndexPage;

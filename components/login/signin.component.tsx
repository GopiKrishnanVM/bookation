import NextImage from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputComponent from "../forms/input.component";
import ErrorComponent from "../forms/error.component";
export type SignInComponentProps = {
  onSignUp: (isSignUp: boolean) => void;
};

const SignInSchema = Yup.object().shape({
  password: Yup.string().required("Required"),

  emailAddress: Yup.string().email("Invalid email").required("Required"),
});

const SignInComponent: React.FC<SignInComponentProps> = ({ onSignUp }) => {
  const { errors, touched, values, handleChange, handleSubmit } = useFormik({
    initialValues: { emailAddress: "", password: "" },
    onSubmit: (e) => {
      console.log(e);
    },
    validationSchema: SignInSchema,
  });
  return (
    <div className="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <NextImage
          className="h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
          layout="fixed"
          height={48}
          width={48}
        />

        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8">
        <div className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <InputComponent
                label="Email address"
                name="emailAddress"
                onChanged={handleChange}
                values={values.emailAddress}
              />
              <ErrorComponent
                message={
                  touched.emailAddress == true && errors.emailAddress
                    ? errors.emailAddress
                    : ""
                }
              />
            </div>
            <div className="space-y-1">
              <InputComponent
                label="Password"
                name="password"
                onChanged={handleChange}
                values={values.password}
              />
              <ErrorComponent
                message={
                  touched.password == true && errors.password
                    ? errors.password
                    : ""
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center"></div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>

            <div
              className="text-center text-sm"
              onClick={() => {
                onSignUp(true);
              }}
            >
              <span> New to Bookation ? </span>
              <span className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign up
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;

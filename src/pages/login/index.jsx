import dynamic from "next/dynamic";

import Header from "@/components/ui/Header";
import { Button, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import AuthCredential from "@/components/shared/AuthCredential";

const Login = dynamic(() => Promise.resolve(LoginPage), { ssr: false });

const LoginPage = () => {
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [messageApi, contextHolder] = message.useMessage();

  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    router.push("/");
    reset();
    messageApi.open({
      type: "success",
      content: "User login Successfully!",
    });
  };
  return (
    <>
      {contextHolder}
      <div className="bg-[url('/auth.webp')] bg-no-repeat bg-cover">
        <Header />
        <div className="flex relative justify-center items-center h-screen">
          <AuthCredential />
          <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div className="px-6 py-4">
              <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
                Welcome Back
              </h3>
              <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
                Please Login
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full mt-4">
                  <input
                    className="block w-full px-4 py-4 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                    type="email"
                    placeholder="Email Address"
                    aria-label="Email Address"
                    {...register("email", { required: true })}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-red-600 mt-2" role="alert">
                      Email is required*
                    </p>
                  )}
                </div>
                <div className="w-full mt-4">
                  <input
                    className="block w-full px-4 py-4 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    {...register("password", {
                      required: "Password is required*",
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                  />
                  {errors.password && (
                    <p className="text-red-600 mt-2" role="alert">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between mt-4">
                  <a
                    href="#"
                    className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500"
                  >
                    Forget Password?
                  </a>

                  <Button size="large" htmlType="submit" type="primary">
                    Log In
                  </Button>
                </div>
              </form>
            </div>
            <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
              <span className="text-sm text-gray-600 dark:text-gray-200">
                Don&#39;t have an account?{" "}
              </span>

              <Link
                href="/register"
                className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

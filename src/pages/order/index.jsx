import RootLayout from "@/components/layout/RootLayout";
import { Button, DatePicker, message } from "antd";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const Order = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [messageApi, contextHolder] = message.useMessage();

  const onSubmit = (data) => {
    console.log(data);
    // router.push("/");
    messageApi.open({
      type: "success",
      content: "Booking Successful!",
    });
    reset();
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      {contextHolder}
      <div className="main-container ">
        <h1 className="text-center mt-10">
          Provide necessary information for booking
        </h1>
        <div className="w-full md:w-1/3 shadow-2xl p-10 border border-solid border-gray-200 mx-auto mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-4 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Full Name"
                aria-label="Full Name"
                {...register("fullName", { required: true })}
                aria-invalid={errors.fullName ? "true" : "false"}
              />
              {errors.fullName?.type === "required" && (
                <p className="text-red-600 mt-2" role="alert">
                  Full Name is required*
                </p>
              )}
            </div>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-4 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="number"
                placeholder="Phone Number"
                aria-label="Phone Number"
                {...register("phone", { required: true })}
                aria-invalid={errors.phone ? "true" : "false"}
              />
              {errors.phone?.type === "required" && (
                <p className="text-red-600 mt-2" role="alert">
                  Phone Number is required*
                </p>
              )}
            </div>
            <div className="w-full mt-4">
              <DatePicker
                className="block w-full px-4 py-4 mt-2 text-black placeholder-black bg-white border border-solid border-black rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                onChange={onChange}
              />
            </div>
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
                type="text"
                placeholder="Address"
                aria-label="address"
                {...register("address", {
                  required: "Address is required*",
                })}
                aria-invalid={errors.address ? "true" : "false"}
              />
              {errors.address && (
                <p className="text-red-600 mt-2" role="alert">
                  {errors.address.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between mt-4">
              <Button
                size="large"
                htmlType="submit"
                className="w-full"
                type="primary"
              >
                Confirm Book
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Order;

Order.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

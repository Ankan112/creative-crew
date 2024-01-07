import { getUser } from '@/constant';
import { Button, DatePicker, message } from 'antd';
import { useForm } from 'react-hook-form';

export default function OrderPageForm() {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const [messageApi, contextHolder] = message.useMessage();

    const onSubmit = (data) => {
        reset();
        messageApi.open({
            type: "success",
            content: "New Service Creates successfully!",
        });
        console.log(data)
    };
    const user = getUser();
  const newUser = {...user, name:'Ankan Halder',phone:8809883921}
    return (
        <>
            {contextHolder}
            <div className='w-full border border-solid border-gray-300 p-10 rounded-lg shadow-xl md:w-2/5 mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full mt-4">
                <input
                  className="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  defaultValue={newUser.name}
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
                  className="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="number"
                  placeholder="Phone Number"
                  defaultValue={newUser.phone}
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
                    <input
                        className="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        type="date"
                        placeholder="Date"
                        aria-label="date"
                        {...register("date", { required: true })}
                        aria-invalid={errors.date ? "true" : "false"}
                    />
                    {errors.date?.type === "required" && (
                        <p className="text-red-600 mt-2" role="alert">
                            Date is required*
                        </p>
                    )}
                </div>
              <div className="w-full mt-4">
                <input
                  className="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  placeholder="Email Address"
                  defaultValue={newUser.email}
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
                  className="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
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

              <div className="flex items-center justify-between mt-6">
                <Button
                  size="large"
                  htmlType="submit"
                  className="w-full accent-color hover:bg-none"
                  type="primary"
                >
                  Place Order
                </Button>
              </div>
            </form>
            </div>
        </>
    )
}
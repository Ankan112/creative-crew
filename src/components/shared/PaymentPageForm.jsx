import { Button, message } from 'antd';
import { useForm } from 'react-hook-form';

export default function PaymentPageForm() {
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
    return (
        <>
            {contextHolder}
            <div className='w-full border border-solid border-gray-300 p-10 rounded-lg shadow-xl md:w-2/5 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full mt-4">
                        <label htmlFor="name">Name</label>
                        <input
                            className="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            type="text"
                            placeholder="Name"
                            aria-label="name"
                            {...register("name", { required: true })}
                            aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name?.type === "required" && (
                            <p className="text-red-600 mt-2" role="alert">
                                Name is required*
                            </p>
                        )}
                    </div>
                    <div className="w-full mt-4">
                        <label htmlFor="email">Email</label>
                        <input
                            className="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            type="text"
                            placeholder="email"
                            aria-label="email"
                            {...register("email", { required: true })}
                            aria-invalid={errors.email ? "true" : "false"}
                        />
                        {errors.email?.type === "required" && (
                            <p className="text-red-600 mt-2" role="alert">
                                Email body is required*
                            </p>
                        )}
                    </div>
                    <div className="w-full mt-4">
                        <label htmlFor="price">Price</label>
                        <input
                            className="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            type="text"
                            placeholder="Price"
                            aria-label="price"
                            {...register("time", { required: true })}
                            aria-invalid={errors.price ? "true" : "false"}
                        />
                        {errors.price?.type === "required" && (
                            <p className="text-red-600 mt-2" role="alert">
                                Price is required*
                            </p>
                        )}
                    </div>
                    <div className="w-full mt-4">
                        <label htmlFor="location">Location</label>
                        <input
                            className="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                            type="text"
                            placeholder="location"
                            aria-label="location"
                            {...register("time", { required: true })}
                            aria-invalid={errors.location ? "true" : "false"}
                        />
                        {errors.location?.type === "required" && (
                            <p className="text-red-600 mt-2" role="alert">
                                Location is required*
                            </p>
                        )}
                    </div>
                    <div className="w-full mt-6">


                        <Button size="large" className='w-full accent-color text-white' htmlType="submit" type="primary">
                            Confirm Payment
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}
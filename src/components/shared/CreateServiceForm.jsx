import { Button, message } from 'antd';
import { useForm } from 'react-hook-form';

export default function CreateSerivceForm() {
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
                    <label htmlFor="notification">Serice Title</label>
                    <input
                        className="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        type="text"
                        placeholder="Service Title"
                        aria-label="title"
                        {...register("title", { required: true })}
                        aria-invalid={errors.title ? "true" : "false"}
                    />
                    {errors.title?.type === "required" && (
                        <p className="text-red-600 mt-2" role="alert">
                            Title is required*
                        </p>
                    )}
                </div>
                <div className="w-full mt-4">
                    <label htmlFor="notification">Description</label>
                    <input
                        className="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        type="text"
                        placeholder="Description"
                        aria-label="description"
                        {...register("description", { required: true })}
                        aria-invalid={errors.description ? "true" : "false"}
                    />
                    {errors.description?.type === "required" && (
                        <p className="text-red-600 mt-2" role="alert">
                            Description body is required*
                        </p>
                    )}
                </div>
                <div className="w-full mt-4">
                    <label htmlFor="path">Path</label>
                    <input
                        className="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        type="text"
                        placeholder="Service Path"
                        aria-label="path"
                        {...register("time", { required: true })}
                        aria-invalid={errors.path ? "true" : "false"}
                    />
                    {errors.path?.type === "required" && (
                        <p className="text-red-600 mt-2" role="alert">
                            Service Path is required*
                        </p>
                    )}
                </div>
                <div className="w-full mt-6">
                

                    <Button size="large" className='w-full accent-color text-white' htmlType="submit" type="primary">
                        Create Service
                    </Button>
                </div>
            </form>
            </div>
        </>
    )
}
import { Button, message } from 'antd';
import { useForm } from 'react-hook-form';

export default function NotifictionForm() {
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
            content: "Notification sent successfully!",
        });
        console.log(data)
    };
    return (
        <>
            {contextHolder}
            <div className='w-full border border-solid border-gray-300 p-10 rounded-lg shadow-xl md:w-2/5 mx-auto'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full mt-4">
                    <label htmlFor="notification">Notification Name</label>
                    <input
                        className="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        type="text"
                        placeholder="Notification"
                        aria-label="notification"
                        {...register("notification-name", { required: true })}
                        aria-invalid={errors.notification ? "true" : "false"}
                    />
                    {errors.notification?.type === "required" && (
                        <p className="text-red-600 mt-2" role="alert">
                            Notification Name is required*
                        </p>
                    )}
                </div>
                <div className="w-full mt-4">
                    <label htmlFor="notification">Notification Body</label>
                    <input
                        className="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        type="text"
                        placeholder="Notification"
                        aria-label="notification"
                        {...register("notification-body", { required: true })}
                        aria-invalid={errors.notification ? "true" : "false"}
                    />
                    {errors.notification?.type === "required" && (
                        <p className="text-red-600 mt-2" role="alert">
                            Notification body is required*
                        </p>
                    )}
                </div>
                <div className="w-full mt-4">
                    <label htmlFor="notification">Time</label>
                    <input
                        className="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                        type="date"
                        placeholder="Time"
                        aria-label="notification"
                        {...register("time", { required: true })}
                        aria-invalid={errors.notification ? "true" : "false"}
                    />
                    {errors.notification?.type === "required" && (
                        <p className="text-red-600 mt-2" role="alert">
                            Notification Time is required*
                        </p>
                    )}
                </div>
                <div className="w-full mt-6">
                

                    <Button size="large" className='w-full accent-color text-white' htmlType="submit" type="primary">
                        Send Notification
                    </Button>
                </div>
            </form>
            </div>
        </>
    )
}
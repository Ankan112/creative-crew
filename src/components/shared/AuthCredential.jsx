function AuthCredential() {
    return (
        <div className="absolute flex justify-center bg-secondary lg:p-5 rounded-md items-center top-[20%] right-[18%]">
            <div className="hidden lg:block">
                <h4>User Credential</h4>
                <p className="mt-1 mb-[2px]">Email: user@gmail.com</p>
                <p>Password: 123456</p>
                <h4 className="mt-3">Admin Credential</h4>
                <p className="mt-1 mb-[2px]">Email: admin@admin.com</p>
                <p>Password: 123456</p>
            </div>
        </div>
    )
}
export default AuthCredential;
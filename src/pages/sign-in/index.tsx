import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../../helpers/yup";
import { Link, useNavigate } from "react-router-dom";
import { ILoginData } from "../../common/interfaces/auth";
import { useAppDispatch } from "../../store";
import { loginUser } from "../../store/thunks/auth";
import AuthImageBlockComponent from "../../components/auth-image-block";

const  SignInPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(LoginSchema,),
    });


    const handleSubmitForm = (data: ILoginData) => {
        dispatch(loginUser(data)).unwrap().then(() => {
            navigate('/')
        })
    }

    return (
        <div className="flex h-screen">
            <AuthImageBlockComponent />

            <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
                <div className="max-w-md w-full p-6">
                    <h1 className="text-3xl font-semibold mb-6 text-black text-center">Sign In</h1>

                    <form onSubmit={handleSubmit(handleSubmitForm)}>
                        <div className="mb-4 relative">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="text" id="email" {...register("email")}
                                   className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"/>
                            <div className="absolute w-full top-15">
                                <p className="text-red-400 text-sm">{errors["email"]?.message}</p>
                            </div>
                        </div>
                        <div className="mb-12 relative">
                            <label htmlFor="password"
                                   className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" {...register("password")}
                                   className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                            <div className="absolute w-full top-15">
                                <p className="text-red-400 text-sm">{errors["password"]?.message}</p>
                            </div>
                        </div>
                        <div>
                            <button type="submit"
                                    className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Sign
                                In
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-sm text-gray-600 text-center">
                        <p>Don't have an account? <Link to="/register" className="text-black hover:underline">Registration
                            here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;
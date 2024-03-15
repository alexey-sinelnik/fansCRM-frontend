import { useAppDispatch, useAppSelector } from "../../store";
import { JSX, useEffect } from "react";
import { getAllUsers } from "../../store/thunks/auth";
import { IoExit } from "react-icons/io5";
import { logout } from "../../store/slices/auth";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const {users} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch]);

    const handleLogout = () => {
        dispatch(logout())
        sessionStorage.removeItem('token')
        navigate('/login')
    }

    const renderUserTable: JSX.Element[] = users && users.map((user) => (
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={user.dataValues.id}>
            <th scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {user.dataValues.name}
            </th>
            <td className="px-6 py-4">
                {user.dataValues.email}
            </td>
        </tr>
    ))
    return (
        <div className="relative w-full p-8 overflow-x-auto sm:rounded-lg">
            <div className="w-full flex justify-center my-12"><h1 className="text-4xl font-bold uppercase">User list</h1></div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        User name
                    </th>
                    <th scope="col" className="px-6 py-3">
                            User email
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderUserTable}
                    </tbody>
                </table>
            <div className="w-full flex justify-center mt-12">
                <button type="button"
                        onClick={handleLogout}
                        className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                    <IoExit className="inline w-5 h-5 me-3 text-white"/>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default HomePage;
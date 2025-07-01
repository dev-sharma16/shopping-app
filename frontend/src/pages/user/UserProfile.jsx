import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { asyncDeleteUser, asyncLogOutUser, asyncUpdateUser } from '../../store/actions/userActions';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function UserProfile() {
    const {id} = useParams()
    console.log(id);

    const userData = useSelector((state)=>state.user.data)
    console.log(userData);
    
    const { register, reset, handleSubmit } = useForm({
        defaultValues: {
            username: userData?.username,
            email: userData?.email,
            password: userData?.password
        }
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const UpdateUserHandler = (user) => {
        console.log(user);
        dispatch(asyncUpdateUser(id,user));
    } 

    const DeleteHandler = () => {
        dispatch(asyncDeleteUser(id))
        navigate('/');
    }
    
    const logoutHandler = () => {
        dispatch(asyncLogOutUser())
        navigate('/login');
    }

    return (
        <>
            <div className='w-full flex'>
                {/* <img className='w-1/2 h-1/2' src={product.image} alt="" /> */}
                <div className="px-3 w-1/2 h-1/2">
                    <h1 className='font-thin text-2xl'>{userData.id}</h1>
                    <h2 className='mb-5 text-5xl '>{userData.username}</h2>
                    <p className='mb-5'>{userData.email}</p>
                    <button 
                        onClick={logoutHandler}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 hover:shadow-md"
                    >
                        LogOut
                    </button>
                </div>
            </div>
            <form onSubmit={handleSubmit(UpdateUserHandler)} className='flex flex-col '>
                <input 
                    {...register('username')}
                    type="text" 
                    className='outline-0 border-b p-2 text-2xl'
                    placeholder='Product Image'
                />
                <input 
                    {...register('email')}
                    type="email" 
                    className='outline-0 border-b p-2 text-2xl'
                    placeholder='Title'
                />
                <input 
                    {...register('password')}
                    type="text" 
                    className='outline-0 border-b p-2 text-2xl'
                    placeholder='Price'
                />
                <div className='flex gap-5'>
                    <button 
                        className='border-amber-50 border-1 mt-5 text-xl rounded-xl p-1 w-full'
                    >
                        Update Profile
                    </button>
                    <button 
                        onClick={DeleteHandler}
                        className='border-amber-50 border-1 mt-5 text-xl rounded-xl p-1 w-full'
                    >
                        Delete Account
                    </button>
                </div>
            </form> 
        </>
    )
}

export default UserProfile
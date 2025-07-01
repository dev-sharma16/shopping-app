import axios from '../../api/axiosConfig'
import { loadUser, removeUser } from '../reducers/userSlice';

export const asyncRegisterUser = (user) => async(dispatch, getState) => {
    try {
        const res = await axios.post('/users', user);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

export const asyncLoginUser = (user) => async(dispatch, getState) => {
    try {
        const {data} = await axios.get(`/users?email=${user.email}&password=${user.password}`);
        localStorage.setItem("user", JSON.stringify(data[0]))
        console.log(data[0]);
    } catch (error) {
        console.log(error);
    }
}

export const asyncLogOutUser = () => async(dispatch, getState) => {
    try {
        localStorage.removeItem("user");
        dispatch(removeUser())
        console.log("User logged out..!");
    } catch (error) {
        console.log(error);
    }
}

export const asyncCurrentUser = () => async(dispatch, getState) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        if(user){
            dispatch(loadUser(user))
        } else{
            console.log("User not found..!");
        }
    } catch (error) {
        console.log(error);
    }
}

export const asyncUpdateUser = (id,user) => async(dispatch, getState) => {
    try {
        const {data} = await axios.patch('/users/'+id, user);
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(asyncCurrentUser())
    } catch (error) {
        console.log(error);
    }
}

export const asyncDeleteUser = (id) => async(dispatch, getState) => {
    try {
        await axios.delete('/users/'+id);
        asyncLogOutUser();
    } catch (error) {
        console.log(error);
    }
}
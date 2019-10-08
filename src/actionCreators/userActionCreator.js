import {ADD_USER, EDIT_USER, DELETE_USER, LOGOUT_USER, LOGIN_USER} from "../actionTypes";

export const a_addUser=(user)=>{
    console.log("Add User action creator invoked!");
    return {
        type:ADD_USER,
        payload: user
    }

};

export const a_editUser=(user)=>{
    console.log("Edit User action creator invoked!");
    return {
        type:EDIT_USER,
        payload: user
    }

};

export const a_deleteUser=(userId)=>{
    console.log("Delete User action creator invoked!");
    return {
        type:DELETE_USER,
        payload: userId
    }

};

export const a_loginUser=(userId)=>{
    console.log("Login User action creator invoked!");
    return {
        type:LOGIN_USER,
        payload: userId
    }

};

export const a_logoutUser=(userId)=>{ // is UserId needed ?
    console.log("Logout User action creator invoked!");
    return {
        type:LOGOUT_USER,
        payload: userId
    }

};
import {ADD_USER, EDIT_USER, DELETE_USER, LOGIN_USER, LOGOUT_USER} from "../actionTypes";


const usersState ={
    users :[
        {"userId" : "001", "name":"Mukul", "email":"mukul@bitcs.in", "password": "11", "role":"admin"},
        {"userId" : "002", "name":"Mukul-2", "email":"mukul-2@bitcs.in", "password": "acdefgh", "role":"user"},
        {"userId" : "003", "name":"Mukul-3", "email":"mukul-3@bitcs.in", "password": "acdefgh", "role":"admin"},
        {"userId" : "004", "name":"Mukul-4", "email":"mukul-4@bitcs.in", "password": "acdefgh", "role":"manager"},
        {"userId" : "005", "name":"Mukul-5", "email":"mukul-5@bitcs.in", "password": "acdefgh", "role":"user"},
        {"userId" : "006", "name":"Mukul-6", "email":"mukul-6@bitcs.in", "password": "acdefgh", "role":"manager"}
    ],
    isLoggedIn: false,
    curr_user: {}
};

const users = (state= usersState,action) => {

    switch(action.type){

        case ADD_USER : {
            // Good place to add userId ? or it should be in actionCreator ?
            const newUser = {
                ...action.payload ,
                usersId : Math.floor(Math.random()*2000).toString().padStart(4,'0')
            }
            console.log("User Added ! :- ", newUser);
            // return the updated state
            return {
                ...state,
                users : [...state.users, newUser]
            }

        }
        case EDIT_USER : {
            let newUsers = state.users.map((user)=> user.userId === action.payload.userId ? action.payload : user);
            console.log("Users Updated (EDITED! :- ",newUsers);
            return{
                ...state,
                users: newUsers
            }

        }
        case DELETE_USER : {
            let newUsers = state.users.filter((user)=> user.userId !==action.payload.userId );
            console.log("Users Updated (DELTED! :- ",newUsers);
            return{
                ...state,
                users: newUsers
            }

        }
        case LOGIN_USER : {

             // update when password is hashed
            console.log(action);
             let curr_user = state.users.filter((user)=> {

                 return (user.name === action.payload.name_email && user.password=== action.payload.password)
                        ||
                        (user.email === action.payload.name_email && user.password === action.payload.password)



                 // console.log(user.name, user.email, user.password, action.payload.name_email, action.payload.password,
                 //     (((user.email === action.payload.name_email) && (user.email === action.payload.name_email))
                 //     || ((user.name === action.payload.name_email) && (user.email === action.payload.name_email)))
                 // );
                 //
                 // return (
                 //     (user.email === action.payload.name_email) || (user.email === action.payload.name_email)
                 //     && user.password === action.payload.password
                 // );

             });

             // user credentials matched
             if(curr_user.length > 0) {
                 console.log("Users Matched (LOGGEDIN) :- ",curr_user);
                 return{
                     ...state,
                     isLoggedIn: true,
                     curr_user: {...curr_user[0]}
                 }
             }
             // wrong credentials given
             else{
                 console.log("Users Not Matched (LOGIN ERROR):- ");
                 // should I set some error message here ?
                 return state

             }

        }

        case LOGOUT_USER : {

            // should it be straight forward logout
            console.log("User Logged Out");
            return {
                ...state,
                isLoggedIn:false,
                curr_user:{}
            }

        }

        default : {
            return state;
        }

    }

}

export default users;
let initState ={
    users :[
        {"userId" : "001", "name":"Mukul", "email":"mukul@bitcs.in", "password": "11", "role":"admin"},
        {"userId" : "002", "name":"Mukul-2", "email":"mukul-2@bitcs.in", "password": "acdefgh", "role":"user"},
        {"userId" : "003", "name":"Mukul-3", "email":"mukul-3@bitcs.in", "password": "acdefgh", "role":"admin"},
        {"userId" : "004", "name":"Mukul-4", "email":"mukul-4@bitcs.in", "password": "acdefgh", "role":"manager"},
        {"userId" : "005", "name":"Mukul-5", "email":"mukul-5@bitcs.in", "password": "acdefgh", "role":"user"},
        {"userId" : "006", "name":"Mukul-6", "email":"mukul-6@bitcs.in", "password": "acdefgh", "role":"manager"}
    ],
    meals:[
        {"mealId" : "001", "mealName":"Dish", "calories":"200", "date":"12-09-2020"},
        {"mealId" : "002", "mealName":"Dish-2", "calories":"1200", "date":"12-09-2020"},
        {"mealId" : "003", "mealName":"Dish-3", "calories":"2200", "date":"24-10-2019"},
        {"mealId" : "004", "mealName":"Dish-4", "calories":"2030", "date":"09-12-2008"},
        {"mealId" : "005", "mealName":"Dish-5", "calories":"2004", "date":"12-09-2020"},
        {"mealId" : "006", "mealName":"Dish-6", "calories":"400", "date":"09-12-2008"}
    ],
    isLoggedIn: false,
    curr_user: {"userId" : "003", "name":"Mukul-3", "email":"mukul-3@bitcs.in", "role":"admin"},
    isUser:false
}

const rootReducer = (state= initState, action)=>{

    // User reducers
    if(action.type==='LOGIN'){
       console.log(action,state);
       let curr_user = state.users.filter(user=>{
            return (user.name === action.payload.name_email && user.password === action.payload.password  )
                ||
                (user.email === action.payload.name_email && user.password === action.payload.password )
            });

        if (curr_user.length > 0){
            return {
                ...state,
                isLoggedIn: true,
                curr_user: {
                    ...curr_user[0]
                }
            }
        }
        else{
            return{
                ...state,
                isLoggedIn: false,
                curr_user: null
            }
        }

    }
    else if(action.type==='LOGOUT'){
        console.log(action,state);
        return{
            ...state,
            isLoggedIn: false,
            curr_user: null
        }

    }

    else if(action.type==='ADD_USER'){
        console.log(action,state);
        // isUser tracks if there is some existing user
        let isUser = state.users.filter(user=>{
            return (user.name === action.payload.email )
        });

        if (isUser.length > 0){
            return {
                ...state,
                isUser: true,
            }
        }
        else{
            const newUser = {
                ...action.payload,
                'userId' : Math.floor(Math.random()*100).toString()
            }

            return{
                ...state,
                users: [...state.users, newUser ],
                isLoggedIn: true,
                curr_user: newUser
            }
        }

    }

    else if(action.type==='EDIT_USER') {
        console.log(action, state);

        let users = state.users.map((user) => {

            if (user.userId === action.payload.userId) {
                console.log("matched");
                return action.payload;
            } else {
                console.log("Not matched");
                return user;
            }

        });
        console.log(users);
        return {
            ...state,
            users: users


        }
    }
    else if (action.type=='DELETE_USER'){
        let users = state.users.filter(user=>user.userId != action.payload);
        return {
            ...state,
            users: users
        }
    }
    // Meals Reducers

    if(action.type ==='ADD_MEAL'){

        let  date = new Date().toJSON().slice(0, 10);
        date = date.slice(8, 10) + '-'
                + date.slice(5, 7) + '-'
                + date.slice(0, 4);

        const newMeal = {
            ...action.payload,
            'date':date,
            'mealId' : Math.floor(Math.random()*100).toString()
        }
        console.log(newMeal);
        console.log(action.payload);
        return {
            ...state,
            meals: [...state.meals, newMeal]
        }
    }

    if(action.type === 'EDIT_MEAL'){

        console.log(state.meals, action.payload);
        let meals = state.meals.map((meal)=>{

            if(meal.mealId === action.payload.mealId){
                console.log("matched");
                return action.payload;
            }else{
                console.log("Not matched");
                return meal;
            }

        });
        console.log(meals);
        return{
            ...state,
            meals: meals
        }
    }

    if(action.type ==='DELETE_MEAL'){
        let meals = state.meals.filter(meal=>meal.mealId != action.payload);
        return {
            ...state,
            meals: meals
        }
    }











    else{
        console.log('NO Type mathed ,', state);
        return state;

    }
}

export default rootReducer;
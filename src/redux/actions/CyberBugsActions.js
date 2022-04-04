import { USER_SIGNIN_API, USER_SIGNUP_API } from "../constants/Cyberbugs/Cyberbugs"



export const singinCyberbugAction = (email, password) => {
    return {
        type: USER_SIGNIN_API,
        userLogin: {
            email: email,
            password: password
        }
    }
}

export const signupCyberbugAction = (email, password,name,phonenumber) => {
    return {
        type: USER_SIGNUP_API,
        userSignup: {
            email: email,
            password: password,
            name:name,
            phonenumber:phonenumber

        }
    }
}
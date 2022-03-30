import { useReducer } from 'react';
import classes from './signup.module.css';

const Signup = (props) => {
    // 1- Check the Validity (Regex)
    const easyPasswordLow = new RegExp("^(?=.*[a-z])");
    const easyPasswordUpp = new RegExp("^(?=.*[A-Z])");
    const normalPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
    const strongPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    // 2- Create Reducer for Type of Action
    const usernameReducer = (state, action) => {
        if (action.type === 'USERNAME_INPUT') {
            return { value: action.val, isValid: action.val.length > 4 && isNaN(action.value) }
        }
        return { value: "", isValid: false }
    }

    const emailReducer = (state, action) => {
        if (action.type === 'EMAIL_INPUT') {
            return { value: action.val, isValid: action.val.includes('@') }
        }
        return { value: "", isValid: false }
    }

    const passwordReducer = (state, action) => {
        if (action.type === 'PASSWORD_INPUT') {
            return { value: action.val, isValid: strongPassword.test(action.val) }
        }
        return { value: "", isValid: false }
    }

    const confirmPasswordReducer = (state, action) => {
        if (action.type === 'CONFIRM_PASSWORD_INPUT') {
            return { value: action.val, isValid: action.val === passwordState.value }
        }
        return { value: "", isValid: false }
    }

    // 3- Create const for Type of Action
    const [usernameState, dispatchUsername] = useReducer(usernameReducer, { value: "", isValid: null });
    const [emailState, dispatchEMail] = useReducer(emailReducer, { value: "", isValid: null });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: "", isValid: null });
    const [confirmPasswordState, dispatchConfirmPassword] = useReducer(confirmPasswordReducer, { value: "", isValid: null });

    // 4- Dispatch Each Action
    const usernameChangeHandler = (event) => {
        dispatchUsername({ type: 'USERNAME_INPUT', val: event.target.value });
    }

    const emailChangeHandler = (event) => {
        dispatchEMail({ type: 'EMAIL_INPUT', val: event.target.value });
    }

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: 'PASSWORD_INPUT', val: event.target.value });
    }

    const confirmPasswordChangeHandler = (event) => {
        dispatchConfirmPassword({ type: 'CONFIRM_PASSWORD_INPUT', val: event.target.value });
    }

    // 5- Submit Data
    const submitHandler = (event) => {
        event.preventDefault();

        const userData = {
            avatar: 'https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            username: usernameState,
            email: emailState,
            password: passwordState,
            confirmPassword: confirmPasswordState,
            date: new Date()
        };

        console.log(userData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes['input-group']}>
                <label>Username</label>
                <input
                    type="text"
                    onChange={usernameChangeHandler} />
            </div>
            <div className={classes['input-group']}>
                <label>Email</label>
                <input
                    type="email"
                    onChange={emailChangeHandler} />
            </div>
            <div className={classes['input-group']}>
                <label>Password</label>
                <input type="password"
                    onChange={passwordChangeHandler} />
                {easyPasswordLow.test(passwordState.value) && <div className={classes.easyCheck}></div> || easyPasswordUpp.test(passwordState.value) && <div className={classes.easyCheck}></div>}
                {normalPassword.test(passwordState.value) && <div className={classes.normalCheck}></div>}
                {strongPassword.test(passwordState.value) && <div className={classes.strongCheck}></div>}
            </div>
            <div className={classes['input-group']}>
                <label>Confirm Password</label>
                <input type="password"
                    onChange={confirmPasswordChangeHandler} />
                {confirmPasswordState.value === passwordState.value && confirmPasswordState.value.length >= 8 && <div className={classes.strongCheck}></div>}
            </div>
            <button className={classes.button} type='submit'>Submit</button>
        </form>
    );
};

export default Signup;
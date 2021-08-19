import React, {useState} from 'react';

import axios from 'axios';
import * as yup from 'yup'
const Form = () => {
const[form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    agree: false,
})

const changeVlaue = (event) => {
const {name, type, } = event.target

}
    return(
        <div>
            <form>
                <label htmlFor="name">Name:</label>
                <input onChange={changeVlaue} name="name" type="text" id="name" placeholder="Your name here"/>

                <label htmlFor="email">Email:</label>
                <input name="email" type="email" id="email" placeholder="Your email here"/>

                <label htmlFor="password">Password:</label>
                <input  name="password" type="password" id="password" placeholder="Your password here"/>

                <label htmlFor="terms">Terms of Service:</label>
                <input name="agree" type="checkbox" id="terms"/>

                <button type={"submit"} name="submitBtn" id="submitBtn">Submit</button>
            </form>
        </div>
    )}

export default Form
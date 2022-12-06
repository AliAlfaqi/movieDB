import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Joi from 'joi'

export default function Login({ saveUserData }) {


    const navigate = useNavigate();
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState('')
    const [errorList, setErrorList] = useState([])
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        age: 0,
        email: '',
        password: ''
    })

    async function sendLoginDataToApi() {
        let { data } = await axios.post(`https://route-egypt-api.herokuapp.com/signin`, user);
        if (data.message == 'success') {
            setisLoading(false);
            localStorage.setItem('userToken', data.token)
            saveUserData()
            navigate('/home')
        }
        else {
            setisLoading(false)
            setError(data.message)
        }
    }

    function getUserData(e) {
        let myUser = { ...user };
        myUser[e.target.name] = e.target.value;
        setUser(myUser)

    }

    function submitLoginForm(e) {
        setisLoading(true)
        e.preventDefault();
        let validation = validateLoginForm();
        if (validation.error) {
            setisLoading(false)
            setErrorList(validation.error.details);

        }
        else {

            sendLoginDataToApi();
        }
    }

    function validateLoginForm() {
        let scheme = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            password: Joi.string()

        })
        return scheme.validate(user, { abortEarly: false });

    }

    return <>
        {/* {errorList.map((err, index) => {
            if (err.context.label == 'password') {
                return <div key={index} className="alert alert-danger my-2">invalid password</div>
            }
            else {
                return <div key={index} className="alert alert-danger my-2">{err.message}</div>
            }
        }
        )} */}

        {error.length > 0 ? <div className="alert alert-danger my-2">{error} </div> : ''}

        <form onSubmit={submitLoginForm}>
            <label htmlFor="first_name">email :</label>
            <input onChange={getUserData} type="text" className='form-control my-input my-2' name='email' id='' />
            <div className='alert alert-danger my-2' >
                <p>{errorList.filter((err) => err.context.label == 'email')[0]?.message}</p>
            </div>
            <label htmlFor="first_name">password :</label>
            <input onChange={getUserData} type="password" className='form-control my-input my-2' name='password' id='' />
            <div className='alert alert-danger my-2' >
                <p>{errorList.filter((err) => err.context.label == 'password')[0]?.message}</p>
            </div>
            <button className='btn btn-info my-2' type='submit' >
                {isLoading == true ? <i className='fas fa-spinner fa-spin'></i> : 'Login'}
            </button>
        </form>
    </>
}



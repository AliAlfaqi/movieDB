import React from 'react'

export default function Profile({ userData }) {
    let { first_name, last_name, age, email } = userData
    return <>
        <h4>Name : {first_name} {last_name}</h4>
        <h4>Age : {age}</h4>
        <h4>E-mail : {email}</h4>
    </>
}

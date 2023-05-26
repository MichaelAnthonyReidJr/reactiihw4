import React, { useState } from 'react'
import './MyForm.css'
function MyForm() {

    let [firstName, setFirstName] = useState("")
    let [lastName, setLastName] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Hello ${firstName} ${lastName}!`)
    }

    return (
        <form>
            <label></label>
            <input
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                placeholder = "First Name"
            ></input>
            <br/>

            <label></label>
            <input
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                placeholder = "Last Name"
            ></input>
            <br />

            <button onClick={handleSubmit}>GREET ME</button>
        </form>
    )
}
export default MyForm;

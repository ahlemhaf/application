import React, { useState } from 'react'
import axios from 'axios'
function Register() {

    const [register, setRegister] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setRegister(() => {
            return { ...register, [id]: value }
        })
    }

    const handleSubmit = async () => {
        console.log(register);
        await axios.post('http://localhost:3000/users', register)
    }

    return (
        <div className='d-flex flex-column  justify-content-start'>
            <h1>Register Form</h1>
            <form className='p-3 col-6'>
                <div className="form-group">
                    <label forhtml="name" className="form-group"> Name: </label>
                    <input type="text" onChange={handleChange} className="form-control" id="firstName" placeholder="Entrez votre Nom " />
                </div>
                <div className="form-group">
                    <label forhtml="prenom">Last Name: </label>
                    <input type="text" onChange={handleChange} className="form-control" id="lastName" placeholder="Entrez votre Prenom " />
                </div>
                <div className="form-group">
                    <label forhtml="email">Email</label>
                    <input type="email" onChange={handleChange} className="form-control" id="email" placeholder="Entrez votre Email" />
                </div>
                <div className="form-group">
                    <label forhtml="password">Password</label>
                    <input type="password" onChange={handleChange} className="form-control" id="password" placeholder="Entrez votre Password" />
                </div>

                <button type="button" onClick={handleSubmit} className="btn btn-primary" >Submit</button>

            </form>

        </div>
    )
}

export default Register

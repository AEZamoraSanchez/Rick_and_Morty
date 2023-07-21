import { useState } from "react";



const Form = () => {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const escribe = (event) =>  {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })
        console.log(event)
    }

    const [errors, setErrors] = useState({})


    return (
        <div>
            <form>
                <label htmlFor=""></label>
                <input placeholder="ingresa tu email" onChange={escribe} name="email" type="email" />
                <hr />
                <label htmlFor=""></label>
                <input placeholder="ingresa tu password" onChange={escribe} name="password" type="password" />
                <hr />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;
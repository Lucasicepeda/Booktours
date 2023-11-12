import { useState } from 'react';
import Swall from 'sweetalert2';
import './Login.css';
import { postLogin } from '../../helpers/login.js';

const Logins = () => {

    const [values, setValues] = useState({ email: '', password: '' });

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await postLogin(values);

        if (data.error) {
            Swall.fire({
                text: data.error,
                toast: true,
                position: "top-right",
                showConfirmButton: false
            });
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        };
        
        if (data.data.accesToken) {
            localStorage.setItem('token', data.data.accesToken);
            window.location = '/';
        };
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email </label>
                    <input onChange={handleInputChange} value={values.email} type="text" name="email" required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input onChange={handleInputChange} value={values.password} type="password" name="password" required />
                </div>
                <button className="registro" type="submit">Iniciar sesión</button>
            </form>
        </div>
    );
};

export default Logins;
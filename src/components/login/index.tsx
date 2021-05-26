import React, { useState } from 'react'
import { toast } from 'react-toastify';

import { Container } from './styles';
import InputBase from '../input';
import Api from '../../services/api/index';
import api from '../../services/api/index';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleChangeEmail = (e: React.FormEvent<HTMLInputElement>) =>
        setEmail(e.currentTarget.value)
    
    const handleChangePassword = (e: React.FormEvent<HTMLInputElement>) =>
        setPass(e.currentTarget.value)
        
    const handleSubmite = async (e: React.MouseEvent<HTMLElement>) =>{
        e.preventDefault();

        try {
            const response = await Api.login(email, pass);
            if(response.status === 201){
                Api.setHeaders(response.data.token);
            }
            console.log(response);
        } catch (error) {
            toast.dark(error);
        }
        
    }
    
    
    return (
        <Container>
            <div>
                <div className="box">
                    <h1>LOGIN</h1>
                    <h1>Email:</h1>
                    <input type="text" value={email} className="input" onChange={handleChangeEmail}/>
                    <h1>Senha:</h1>
                    <input type="password" value={pass} className="input" onChange={handleChangePassword}/>
                    <a className="bnt" onClick={handleSubmite}>ENTRAR</a>

                </div>
            </div>
        </Container>

    )
};

export default Login;

import React, { useState } from 'react'

import { Container } from './styles';
import InputBase from '../../components/Input';

import { Redirect } from 'react-router-dom';


import Api from '../../services/api/index';
import NavBar from '../navbar';

import history from '../../services/history';

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap" rel="stylesheet"/> </link>

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [erro, setErro] = useState(false);
    const [auth, setAuth] = useState(false);

    const handleChangeEmail = (e: React.FormEvent<HTMLInputElement>) =>
        setEmail(e.currentTarget.value)
    
    const handleChangePassword = (e: React.FormEvent<HTMLInputElement>) =>
        setPass(e.currentTarget.value)
        
    const handleSubmit = async (e: React.MouseEvent<HTMLElement>) =>{
        e.preventDefault();
        try{
            const response = await Api.login(email, pass) 
            if(response.status === 201){
                sessionStorage.setItem('token', JSON.stringify(response.data.token))
                Api.setHeaders(response.data.token);
                history.push('/navbar')
                setAuth(true);
            }
        }catch{         
        setErro(true);
    }
                 
    }
    
    
    return (
        <Container>
            
            <div>
                <div className="box">
                    <h1 className="nome">LOGIN</h1>
                    <h1 className="tipo">Email:</h1>
                    <div className="input">
                        <InputBase handle={handleChangeEmail} text="Digite o seu email" type="EMAIL"/>
                    </div>
                    <h1 className="tipo">Senha:</h1>
                    <div className="input">
                        <InputBase handle={handleChangePassword} text="Digite a sua senha" type="PASS" pass/>
                    </div>
                    <a className="bnt" onClick={handleSubmit}>ENTRAR</a>
                    <div className='linha'></div>
                    {erro && <h2>Email ou senha inválidos</h2>}

                </div>
            </div>
        </Container>

    )
};

export default Login;

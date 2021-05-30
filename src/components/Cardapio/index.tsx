import React, { useEffect, useState } from 'react'

import { Topico } from './styles';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Api from '../../services/api/index';
import history from '../../services/history';


<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap" rel="stylesheet"/> </link>

interface ITopicos{
    created_at: string;
    id: string; 
    idUser: string; 
    name: string; 
    updated_at: string; 
}

interface IMenu{
    id: string;
    categoryId: string;
    categoryName: string;
    idUser: string;
    name: string;
    description: string;
    price: string;
    created_at: string;
    updated_at: string;
}

interface IRequest{
    category: ITopicos[];
    menu?: IMenu[] | [];
}

const Cardapio: React.FC = () => {
    const [dados, setDados] = useState<IRequest>();
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            history.push('/login')
        }else{
            Api.setHeaders(JSON.parse(token));
        }
    }, []);

    useEffect(() => {
        Api.getMenu().then((response) =>{
            setDados(response.data);
        }
        )
    }, []);

    console.log(dados);

    return (
        <Topico>
            <div className="topico">
            </div>
        </Topico>
    )
};

export default Cardapio;

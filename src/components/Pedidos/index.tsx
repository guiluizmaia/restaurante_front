import React, { useEffect, useState } from 'react'

import { Topico } from './styles';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Api from '../../services/api/index';
import history from '../../services/history';


<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap" rel="stylesheet"/> </link>

const Pedidos: React.FC = () => {
    const [dados, setDados] = useState<any>();
    
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if(!token){
            history.push('/login')
        }else{
            Api.setHeaders(JSON.parse(token));
        }
    }, []);

    /*const response = useEffect(() => {
        return async() =>{
            await Api.getMenuTopic() 
    }
    }, [])*/


    return (
        <Topico>
            <div className="topico">
                
            </div>
        </Topico>
    )
};

export default Pedidos;

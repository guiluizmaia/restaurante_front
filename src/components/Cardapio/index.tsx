import React, { useEffect, useState } from 'react'

import { Topico } from './styles';


import Api from '../../services/api/index';
import history from '../../services/history';


import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CreateIcon from '@material-ui/icons/Create';
import VisibilityIcon from '@material-ui/icons/Visibility';

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
    menu: IMenu[] | [];
}

const Cardapio: React.FC = () => {
    const [dados, setDados] = useState<IRequest>({category: [], menu: []});
    
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


    return (
        <Topico>
            <div className="topico">
                <div className="container">
                    {dados.category.map(e =>{
                        return(
                            <>
                        <div className="topic">
                            <h1>{e.name}</h1>
                            <div>
                                <ExpandLessIcon className="iconI" style={{ fontSize: 50, marginRight: 40, cursor: 'pointer'}}/> 
                            </div>
                        </div>
                        <div className="found">
                            {dados.menu.map((i: IMenu) =>{
                                if(i.categoryId === e.id){
                                return(
                                    <div className="topicMenu">
                                        <h1>- {i.name}</h1>
                                        <div>
                                            <VisibilityIcon className="iconI" style={{ fontSize: 45, marginRight: 20, marginBottom: 3, cursor: 'pointer'}}/> 
                                            <CreateIcon className="iconI" style={{ fontSize: 45, marginRight: 20, marginBottom: 3, cursor: 'pointer'}}/> 
                                            <DeleteOutlineIcon className="iconI" style={{ fontSize: 50, marginRight: 40, cursor: 'pointer'}}/> 
                                        </div>
                                    </div>
                                    )}
                                }
                            )}
                        </div>
                        </>) 
                    }
                    )}   
                </div> 
            </div>
        </Topico>
    )
};

export default Cardapio;

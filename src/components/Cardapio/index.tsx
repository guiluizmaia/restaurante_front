import React, { useEffect, useState } from 'react'

import { Topico } from './styles';


import Api from '../../services/api/index';
import history from '../../services/history';


import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';

import Fundo from '../Fundo';
import ModalNewItem from '../ModalNewItem';


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
    const [open, setOpen] = useState<String[]>([]);

    const [name, setName] = useState<String>('');
    const [descript, setDescript] = useState<String>('');

    useEffect(() => {
        const token = sessionStorage.getItem('token');
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

    const handleChangeName = (e: React.FormEvent<HTMLInputElement>) =>
        setName(e.currentTarget.value)
    
    const handleChangeDescript = (e: React.FormEvent<HTMLTextAreaElement>) =>
        setDescript(e.currentTarget.value)

    const handleChangeOpen = async (id: string) =>{
        if(!open.find((e) => e === id)){
            setOpen([...open, id]);         
        }
    }

    const handleChangeClose = async (id: string) =>{
        if(open.length !== 1){
            const base = await open.findIndex((e) => e === id);       
            open.splice(base, 1)
            
            setOpen(open);
        }else {
            setOpen([])
        }         
    }


    return (
        <Topico>
                <AddIcon className="iconPlus" style={{ fontSize: 80, marginRight: 40, cursor: 'pointer', color: '#d3d3d3'}}/> 

                <div className="container">
                    {dados.category.map((e) =>{
                         return(
                             <div>
                                {!open.find((i) => i === e.id) ?
                                    <>
                                    <div className="topicNo">
                                        <h1>{e.name}</h1>
                                        <div>
                                            <ExpandMoreIcon className="iconI" onClick={() => handleChangeOpen(e.id)} style={{ fontSize: 50, marginRight: 40, cursor: 'pointer'}}/> 
                                        </div>
                                    </div>
                                    </>
                                    :
                                    <>
                                  <div className="topic">
                                      <h1>{e.name}</h1>
                                      <div>
                                          <ExpandLessIcon className="iconI" onClick={() => handleChangeClose(e.id)} style={{ fontSize: 50, marginRight: 40, cursor: 'pointer'}}/> 
                                      </div>
                                  </div>
                                  <div className="found">
                                      {dados.menu.map((i: IMenu) =>{
                                          if(i.categoryId === e.id){
                                          return(
                                              <div className="topicMenu">
                                                  <div className="caixaMenu">
                                                    <h1>- {i.name}</h1>
                                                    <h2>{i.description}</h2>
                                                  </div>
                                                  <div>
                                                      <CreateIcon className="iconI" style={{ fontSize: 45, marginRight: 20, marginBottom: 3, cursor: 'pointer'}}/> 
                                                      <DeleteOutlineIcon className="iconI" style={{ fontSize: 50, marginRight: 40, cursor: 'pointer'}}/> 
                                                  </div>
                                              </div>
                                              )}
                                          }
                                      )}
                                  </div>
                                </>
                                }
                             </div>
                         )
                     }
                    )}   
                </div> 
                <Fundo>
                    <ModalNewItem handleChangeName={handleChangeName} handleChangeDescript={handleChangeDescript}/>
                </Fundo>
        </Topico>
    )
};

export default Cardapio;

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
import ModalConfirm from '../ModalConfirm';
import ModalEditItem from '../ModalEditItem ';




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
    menu: IMenu[];
}

const Cardapio: React.FC = () => {
    const [dados, setDados] = useState<IRequest>({category: [], menu: []});
    const [open, setOpen] = useState<String[]>([]);
    const [modalNew, setModalNew] = useState<boolean>(false);
    const [modalExc, setModalExc] = useState<boolean>(false);
    const [modalEdit, setModalEdit] = useState<boolean>(false);



    const [idSelected, setIdSelected] = useState<string>('');
    const [id, setId] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [descript, setDescript] = useState<string>('');
    const [price, setPrice] = useState<string>('');


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
    
 
    const handleChangePrice = (e: React.FormEvent<HTMLInputElement>) =>
        setPrice(e.currentTarget.value)
    
    const handleChangeIdSelected = (id: string) =>
        setIdSelected(id);

    const submitNew = async() =>{
        await Api.postMenu(idSelected, name, descript, price).then((response) =>{
            dados.menu.push(response.data);
            setDados(dados);
            handleChangeModalNew();
        })
    }

    const editNew = async() =>{
        await Api.editMenu(id, idSelected, name, descript, price).then((response) =>{
            const index = dados.menu.findIndex(e => e.id === id);
            dados.menu[index] = response.data;
            setDados(dados);
            handleChangeModalEdit();
        })
    }

    const handleDelete = async (id: string) =>{
        await Api.deleteMenu(id);
        const index = dados.menu.findIndex(e => e.id === id);
        const item = dados.menu.find(e => e.id === id);
        if(item){
            handleChangeClose(item.categoryId);
        }
        dados.menu.splice(index, 1);
        console.log(dados)
        setDados(dados);
    }
    

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

    const handleChangeModalNew = () => {
        setModalNew(!modalNew);
    }

    const handleChangeModalExc = () => {
        setModalExc(!modalExc);
    }

    const handleChangeModalEdit = () => {
        setModalEdit(!modalEdit);
    }

    const buttonDelete = (id: string) =>{
        setIdSelected(id);
        handleChangeModalExc();
    }

    const buttonEdit = (id: string, name:string, description: string, price: string) =>{
        setId(id);
        setName(name);
        setDescript(description);
        setPrice(price);
        handleChangeModalEdit();
    }

    const buttonConfirmDelete = () =>{
        handleDelete(idSelected);
        handleChangeModalExc();
    }


    return (
        <Topico>
                <AddIcon className="iconPlus" onClick={handleChangeModalNew} style={{ fontSize: 80, marginRight: 40, cursor: 'pointer', color: '#d3d3d3'}}/> 

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
                                      {dados.menu.map((i: IMenu, index) =>{
                                          if(i.categoryId === e.id){
                                          return(
                                              <div className="topicMenu">
                                                  <div className="caixaMenu">
                                                    <h1>- {i.name}</h1>
                                                    <h2>{i.description}</h2>
                                                    <h2>R$ {i.price}</h2>

                                                  </div>
                                                  <div>
                                                      <CreateIcon className="iconI" onClick={() => buttonEdit(i.id, i.name, i.description, i.price)} style={{ fontSize: 45, marginRight: 20, marginBottom: 3, cursor: 'pointer'}}/> 
                                                      <DeleteOutlineIcon className="iconI" onClick={() => buttonDelete(i.id)} style={{ fontSize: 50, marginRight: 40, cursor: 'pointer'}}/> 
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
                {modalNew && 
                    <Fundo>
                        <ModalNewItem handleChangeModal={handleChangeModalNew} data={dados.category} handleChangeName={handleChangeName} handleChangePrice={handleChangePrice} handleChangeDescription={handleChangeDescript} handleChangeIdSelected={handleChangeIdSelected} submitNew={submitNew}/>
                    </Fundo>
                }

                {modalEdit && 
                    <Fundo>
                        <ModalEditItem handleChangeModal={handleChangeModalEdit} data={dados.category} handleChangeName={handleChangeName} handleChangePrice={handleChangePrice} handleChangeDescription={handleChangeDescript} handleChangeIdSelected={handleChangeIdSelected} edit={editNew} name={name} description={descript} price={price}/>
                    </Fundo>
                }

                {modalExc &&
                    <Fundo>
                        <ModalConfirm text="Tem certeza de que deseja excluir esse item do menu?" handleChangeModal={handleChangeModalExc} buttonConfirm={buttonConfirmDelete}/>
                    </Fundo>
                }
        </Topico>
    )
};

export default Cardapio;

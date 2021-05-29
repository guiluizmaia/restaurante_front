import React, { useEffect, useState } from 'react'

import { Topico } from './styles';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Api from '../../services/api/index';
import history from '../../services/history';
import Fundo from '../Fundo';
import ModalConfirm from '../ModalConfirm';



<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap" rel="stylesheet"/> </link>

interface ISelected{
    id: string;
    index: number;
}

interface ITopicos{
    created_at: string;
    id: string; 
    idUser: string; 
    name: string; 
    updated_at: string; 
}

const Topicos: React.FC = () => {
    const [dados, setDados] = useState<ITopicos[]>([]);
    const [name, setName] = useState<string>('');
    const [modal, setModal] = useState<boolean>(false);
    const [selected, setSelected] = useState<ISelected>({ id: '', index: -1});

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            history.push('/login')
        }else{
            Api.setHeaders(JSON.parse(token));
        }
    }, []);
    
    useEffect(() => {
        Api.getMenuTopic().then((response) =>{
            setDados(response.data);
        }
        )
    }, []);

    const handleChangeName = (e: React.FormEvent<HTMLInputElement>) =>
        setName(e.currentTarget.value)


    const handleChangeSelected = ({id, index}: ISelected) =>{
        setSelected({id, index})
    }

    const handleChangeModal = () =>
        setModal(!modal)
    

    const buttonTrash = ({id, index}: ISelected) =>{
        handleChangeSelected({id, index});
        handleChangeModal();
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLElement>) =>{
        e.preventDefault();
        if(name !== ""){
        const response = await Api.postMenuTopic(name);
        setDados([...dados, response.data]); 
        setName('')
        }
    }

    const handleDelete = async ({id, index}: ISelected) =>{
        await Api.deleteMenuTopic(id);
        dados.splice(index, 1);
        setDados(dados);
        setModal(false);
    }

    const buttonConfirm = () =>{
        handleDelete(selected);
    }

    return (
        <>

        <Topico>
            <div className="topico">
                <div className="add">
                    <input type="text" placeholder="Criar novo tópico" value={name} onChange={handleChangeName}/>
                    <div className="item" onClick={handleSubmit}>
                        <PlaylistAddIcon className="icon" style={{ fontSize: 100, color: '#fff' }}/>
                    </div>
                </div>
                <div className="container">
                {dados.map((e:ITopicos, index) =>{
                    return(
                    <div className="topic">
                        <h1>{e.name}</h1>
                        <DeleteOutlineIcon className="icon" onClick={() => buttonTrash({id: e.id, index})} style={{ fontSize: 50, marginRight: 40, cursor: 'pointer'}}/> 
                    </div>) 
                }
                )}   
                </div>           
            </div>
        </Topico>
        { modal &&
            <Fundo>
                <ModalConfirm text='Tem certeza que seja excluir esse tópico (caso exclua todos os itens do cardápio relacionados a ele serão excluidos também)' 
                handleChangeModal={handleChangeModal} buttonConfirm={buttonConfirm}/>
            </Fundo>
        }
        </>

    )
};

export default Topicos;

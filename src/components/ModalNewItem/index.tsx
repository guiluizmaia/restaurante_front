import React, { useState } from 'react'

import { Modal } from './styles';

import Api from '../../services/api/index';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


interface ITopicos{
    created_at?: string;
    id?: string; 
    idUser?: string; 
    name: string; 
    updated_at?: string; 
}

interface IRequest{
    data: ITopicos[];
    handleEdit?: () => void;
    handleChangeModal: () => void;
    submitNew: () => void;
    handleChangeName: (e: React.FormEvent<HTMLInputElement>) => void;
    handleChangeDescription: (e: React.FormEvent<HTMLTextAreaElement>) => void;
    handleChangePrice: (e: React.FormEvent<HTMLInputElement>) => void;
    handleChangeIdSelected: (id: string) => void;
}

function ModalNewItem({handleChangeModal, handleChangeName, handleChangePrice, handleChangeDescription, handleChangeIdSelected, submitNew, data}: IRequest) {
    const [open, setOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<ITopicos>({
        name: "Escolha o tópico"
    });

    const handleChangeOpen = () =>
        setOpen(!open)
    
    const handleChangeSelected = (data: ITopicos) =>{
        handleChangeOpen();
        if(data.id){
            handleChangeIdSelected(data.id);
        }
        setSelected(data);
    }
    
    return (
        <Modal>
            <h1>Criar novo Item</h1>
            <input type="text" placeholder="Nome do Novo Item" onChange={handleChangeName} />
            <textarea placeholder="Descrição do item" onChange={handleChangeDescription} />
            <input type="text" placeholder="Preço" onChange={handleChangePrice} />

            {open === false ?
                <div className="dropdown" onClick={handleChangeOpen}>
                    <h2>{selected.name}</h2>
                    <ExpandMoreIcon className="iconI" style={{ fontSize: 50, marginRight: 40, cursor: 'pointer'}}/> 
                </div>
                :
                <div className="dropdownSelect" >
                    <div className="title">
                        <h2>Escolha o tópico</h2>
                        <ExpandLessIcon className="iconI" onClick={handleChangeOpen} style={{ fontSize: 50, marginRight: 40, cursor: 'pointer'}}/>
                    </div>
                    {data.map(e =>{
                        return(
                            <div className="itens" onClick={() => handleChangeSelected({name: e.name, id: e.id})}>
                                <h2>{e.name}</h2>
                            </div> )
                        })
                    }
                </div>
            }    
            <div className="icons">
                <CheckIcon className="icon" onClick={submitNew} />
                <CloseIcon className="icon" onClick={handleChangeModal} />
            </div>
        
        </Modal>
    );
}

export default ModalNewItem;

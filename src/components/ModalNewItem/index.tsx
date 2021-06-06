import React from 'react'

import { Modal } from './styles';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

interface IRequest{
    handleEdit?: () => void;
    handleChangeModal?: () => void;
    handleChangeName: (e: React.FormEvent<HTMLInputElement>) => void;
    handleChangeDescript: (e: React.FormEvent<HTMLTextAreaElement>) => void;
}

function ModalNewItem({handleChangeName, handleChangeDescript}: IRequest) {
    return (
        <Modal>
            <h1>Criar novo Item</h1>
            <input type="text" placeholder="Nome do Novo Item" onChange={handleChangeName} />
            <textarea placeholder="Descrição do item" onChange={handleChangeDescript} />
            <div className="icons">
                <CheckIcon className="icon" />
                <CloseIcon className="icon" />
            </div>
        </Modal>
    );
}

export default ModalNewItem;

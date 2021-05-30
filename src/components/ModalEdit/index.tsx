import React from 'react'

import { Modal } from './styles';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

interface IRequest{
    handleEdit: () => void;
    handleChangeModal: () => void;
    handleChangeName: (e: React.FormEvent<HTMLInputElement>) => void;
}

function ModalEdit({handleChangeModal, handleChangeName, handleEdit}: IRequest) {
    return (
        <Modal>
            <h1>Editar Tópico</h1>
            <input type="text" placeholder="Novo nome do tópico" onChange={handleChangeName}/>
            <div className="icons">
                <CheckIcon className="icon" onClick={handleEdit}/>
                <CloseIcon className="icon" onClick={handleChangeModal}/>
            </div>
        </Modal>
    );
}

export default ModalEdit;

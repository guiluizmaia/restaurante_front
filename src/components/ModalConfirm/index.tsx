import React from 'react'

import { Modal } from './styles';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

interface IRequest{
    text: string;
    handleChangeModal: () => void;
    buttonConfirm: () => void;
}

function ModalConfirm({ text, handleChangeModal, buttonConfirm }: IRequest) {
    return (
        <Modal>
            <h1>{text}</h1>
            <div className="icons">
                <CheckIcon className="icon" onClick={buttonConfirm} />
                <CloseIcon className="icon" onClick={handleChangeModal}/>
            </div>
        </Modal>
    );
}

export default ModalConfirm;

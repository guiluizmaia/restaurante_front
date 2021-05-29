import React from 'react'

import button from './styles';

interface IRequest {
    handleSubmit:(e: React.MouseEvent<HTMLElement>) => Promise<void>;
    name: string
}

function Button({ handleSubmit, name }: IRequest) {
    return (
        <button>
            <a className="bnt" onClick={handleSubmit}>{name}</a>
        </button>

    );
}

export default Button;

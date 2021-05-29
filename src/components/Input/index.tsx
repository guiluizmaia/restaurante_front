import React from 'react'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import InputB from './styles';
import { EmojiEventsTwoTone } from '@material-ui/icons';

interface IRequest {
    handle: (e: React.FormEvent<HTMLInputElement>) => void;
    text?: string;
    type?: string;
    pass?: boolean;
}

function InputBase({ handle, text, type, pass }: IRequest) {
    let emoji
    if(type === 'EMAIL'){ 
        emoji = <PersonOutlineIcon style={{ fontSize: 40, backgroundColor: 'transparent' }}/> 
    } else if(type === 'PASS'){
        emoji = <LockOpenIcon style={{ fontSize: 40, backgroundColor: 'transparent' }}/>
    }
    
    return (
        <InputB>
            {emoji}
            {pass ? <input type="password" name="email" className="input" placeholder={text} onChange={handle} /> : <input type="text" name="email" className="input" placeholder={text} onChange={handle} />}
        </InputB>

    );
}

export default InputBase;

import React, { useState } from 'react'

import { Bar, Page } from './styles';
import Topicos from '../Topicos';
import Cardapio from '../Cardapio';
import Pedidos from '../Pedidos';
import PedidoToday from '../PedidoToday';




import MenuBookIcon from '@material-ui/icons/MenuBook';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TimelineIcon from '@material-ui/icons/Timeline';

<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap" rel="stylesheet"/> </link>

const NavBar: React.FC = () => {
    const [select, setSelect] = useState('');


    const handleChangeSelected = async (e: React.MouseEvent<HTMLElement>, texto: string) =>{
        e.preventDefault();
        setSelect(texto);
        console.log('clicou')           
    }
    return (
        <Page>
        <Bar>
            {select !== 'topicos' ? 
            <div className="item" onClick={ (e: React.MouseEvent<HTMLElement>) =>{
                        setSelect('topicos');
                        e.preventDefault();
                        console.log(select)           
            }}>
                <MenuIcon className='icon' name='topicos'/>
            </div>
            :
            <div className="itemSelect" >
                <MenuIcon className='icon' name='topicos'/>
            </div>
            }

            {select !== 'cardapio' ? 
            <div className="item" onClick={ (e: React.MouseEvent<HTMLElement>) =>{
                        setSelect('cardapio');
                        e.preventDefault();
                        console.log(select)           
            }}>
                <MenuBookIcon className='icon' name='cardapio'/>
            </div>
            :
            <div className="itemSelect" >
                <MenuBookIcon className='icon' name='cardapio'/>
            </div>
            }

            {select !== 'pedidos' ? 
            <div className="item" onClick={ (e: React.MouseEvent<HTMLElement>) =>{
                        setSelect('pedidos');
                        e.preventDefault();
                        console.log(select)           
            }}>
                <ShoppingCartIcon className='icon' name='pedidos'/>
            </div>
            :
            <div className="itemSelect" >
                <ShoppingCartIcon className='icon' name='pedidos'/>
            </div>
            }

            {select !== 'pedidotoday' ? 
            <div className="item" onClick={ (e: React.MouseEvent<HTMLElement>) =>{
                        setSelect('pedidotoday');
                        e.preventDefault();
                        console.log(select)           
            }}>
                <TimelineIcon className='icon' name='pedidotoday'/>
            </div>
            :
            <div className="itemSelect" >
                <TimelineIcon className='icon' name='pedidotoday'/>
            </div>
            }
        </Bar>
            <div className="page">
                {select === "topicos" && <Topicos />}
                {select === "cardapio" && <Cardapio />}
                {select === "pedidos" && <Pedidos />}
                {select === "pedidotoday" && <PedidoToday />}


            </div>
        </Page>
        
    )
};

export default NavBar;

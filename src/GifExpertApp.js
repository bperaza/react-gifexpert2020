import React, {useState} from 'react';
import {AddCategoria} from './components/AddCategoria';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categorias = ['One Punch', 'Samurai', 'Dragon Ball'];

    const [categorias, setCategorias] = useState(['Green Bay']);
    // const handleAdd= () =>{
    //     setCategorias([...categorias,'Betta']);
    // }
    return ( 
        <div>
            <h2>Gif Expert App</h2>
            <AddCategoria setCategorias={ setCategorias }/>

            <hr/>
            <ol>
                {
                    categorias.map( cate =>{
                        // console.log('categoria:' + cate)
                        return <GifGrid key={cate} categoria={cate} />
                    })
                }
            </ol>
        </div>
     );
}


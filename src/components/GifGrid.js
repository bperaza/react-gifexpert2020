import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({categoria}) => {

    const {data: images, loading}=  useFetchGifs(categoria)

    return (
        <>
            <h3>{categoria}</h3>
            { loading ? 'Cargando...' : ''}
            <div className="card-grid">
                {
                        images.map (img =>(
                            
                                <GifGridItem
                                    key ={img.id}
                                    img={img}
                                />
                        ))
                }
            </div>
        </>
         );
    // const state=  useFetchGifs();
    // const [imagenes, setImagenes] = useState([]);
    // const  getGifs = async () =>{
    //     const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=3Uf37yKDmVOeBczAiVOwyxAgCk88Ca3r`;
    //     const resp= await fetch(url);
    //     const {data} = await resp.json();
    //     const gifs = data.map ( img =>{
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images?.downsized_medium.url
    //         }
    //     })
    //     // console.log(gifs);
    //     setImagenes(gifs);
    // }
}


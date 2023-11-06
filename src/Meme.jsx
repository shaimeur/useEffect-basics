import { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import data from './data';
import './Memes.css'


const Meme = () =>{

    const [images,setImages] = useState([]) ;

    const addImage = (id) =>{
        const selectedImage = data.find((item) => item.id === id);
        if(selectedImage){
            setImages((prev) =>(
                [...prev,{
                        id:uuidv4(),
                        img: selectedImage.img
                    }
                ]
               ))
        }

    }

    const deleteImage = (id) =>{
        // console.log(id)
        setImages((prev) => prev.filter((image) => image.id !== id))
    }

    return (
        <div className='Memes'>
            <h1>Memes</h1>

            {
                images.map(({id,img})=>(
                    <img onClick={() => deleteImage(id)} key={id} src={img}/>
                ))
            }
            <section>
                <button onClick={() => addImage(1)}>Insane</button>
                <button onClick={() => addImage(2)}>Volume</button>
                <button onClick={() => addImage(3)}>Rock</button>
            </section>
        </div>
    )
}
export default Meme
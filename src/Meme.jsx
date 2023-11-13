import { useState,useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import data from './data';
import './Memes.css'


const Meme = () =>{

    const [images,setImages] = useState([]) ;
    const [title,setTitle] = useState('')



    useEffect(()=>{
        document.title = title;

        window.scroll({
            top: Number.MAX_SAFE_INTEGER ,
            behavior:'smooth'
        })


    },[images,title])


    // useEffect(()=>{

    // },[images])

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
            <h1>Memes : {title}</h1>
        <input type="text" value={title} onChange={(e)=> setTitle( e.target.value)} />
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
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../css/view-image.css'

const ViewImage = () => {
    const { id } = useParams();

    const [image, setImage] = useState();
    const [mess, setMess] = useState('')

    useEffect(() => {
        axios.get(`https://image-upload-server.vercel.app/view/${id}`)
            .then((res) => {
                setImage(res.data.image)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='main'>
            {
               image && <img className='imgg' src={image} alt="" />
            }
            {
                <h2>{mess}</h2>
            }
        </div>
    )
}

export default ViewImage

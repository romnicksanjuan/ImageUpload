import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
        <div style={{
            display:'flex',
            justifyContent:'center'
        }}>
            {
               image && <img style={{
              maxWidth:'50%',
              maxHeight:'50%',
            //   placeItems:'center'
               }} src={image} alt="" />
            }
            {
                <h2>{mess}</h2>
            }
        </div>
    )
}

export default ViewImage

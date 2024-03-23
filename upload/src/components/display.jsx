import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import styles from '../css/display.module.css'



const Display = () => {
    const [image, setImage] = useState([])
    const [imageclick, setImageClick] = useState()
    useEffect(() => {
        axios.get('https://image-upload-server.vercel.app/display')
            .then(res => setImage(res.data))
            .catch(err => console.error(err))
    }, [])

    const navigate = useNavigate()



    const handleClick = (imageId) => {
        navigate(`/view/${imageId}`)
    }



    return (
        <div className={styles.main} >

            <h2 className={styles.h2}>My Gallery</h2>

            <div className={styles.second}>

            
            {
                image.map(img => (
                    <ul key={img._id}>
                    <li>
                        <img src={img.image} alt="" />
                    </li>
                    </ul>
                ))
                
             }
            
                
            </div>

            
        </div>


    )
}

export default Display

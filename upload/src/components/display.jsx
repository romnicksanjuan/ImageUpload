import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


const Display = () => {
    const [image, setImage] = useState([])
    useEffect(() => {
        axios.get('https://image-upload-server.vercel.app/display')
            .then(res => setImage(res.data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            {image.map((img,index) => (
                <ul key={index}>
                    <li>
                        <img style={{
                            height:'100px',
                            width:'100px'
                        }} src={img.image} alt="" />
                    </li>
                </ul>
            ))

            }

        </div>
    )
}

export default Display

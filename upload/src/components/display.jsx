import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



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
        <div style={{

            height: 'auto',
            width: '800px',
            maxWidthidth: '80%',
            justifyContent: 'center',


        }}>

            <h2 style={{ textAlign: 'center' }}>My Gallery</h2>

            <div style={{
                background: 'whitesmoke',
                display: 'grid',
                gridTemplateColumns: 'repeat(4,1fr)',
                // gridAutoRows:'100px',
                // height: '100%',
                // flexWrap: 'wrap',
                // width:'auto',

                // overflow: 'auto',
                // position:'relative',
                // width:'100%',
                // height:'0',
                padding: '10px',
                gap: '5px',
                margin: 'auto',
                // padding: '10px',
                maxWidth: '80%',
                border: '1px solid white',
                // background:'whitesmoke',
                placeItems: 'center',
                // objectFit:'contain'
                // backgroundSize:'contain'


            }}>

                {image.map((img) => (
                    <div style={{
                        padding: '0',
                        // margin: '0',
                        // background:'red'
                        height: '150px'

                    }} key={img._id} onClick={() => handleClick(img._id)}>
                        <li style={{
                            listStyle: 'none',
                        }} >
                            <img style={{
                                cursor: 'pointer',
                                height: '150px',
                                // maxHeighteight:'100px',
                                width: '150px',
                                objectFit: 'cover',
                                padding: '0',
                                margin: '0'
                            }} src={img.image} alt="" />
                        </li>
                    </div>

                ))
                }
            </div>

            {
                imageclick && <img src={imageclick} alt="" />
            }
        </div>


    )
}

export default Display

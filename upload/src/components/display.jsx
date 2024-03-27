import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../css/display.css'



const Display = () => {
    const [image, setImage] = useState([])
    const [imageclick, setImageClick] = useState()
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () =>{
        setTimeout(() => {
            axios.get('https://image-upload-server.vercel.app/display')
            .then(res => {
                setImage(res.data)
                setLoader(false)
            })
            .catch(err => console.error(err))
        }, 1000);
    }

    const navigate = useNavigate()



    const handleClick = (imageId) => {
        navigate(`/view/${imageId}`)
    }



    return (

        <>
            {
                loader ? <div className='container'>
                    <div className='spinner'>

                    </div>
                </div> :
                    <div className='main' >

                        <h2 className='h2'>My Gallery</h2>

                        <div className='second'>


                            {
                                image.map(img => (
                                    <ul key={img._id}>
                                        <li onClick={() => handleClick(img._id)}>
                                            <img src={img.image} alt="" />
                                        </li>
                                    </ul>
                                ))

                            }


                        </div>


                    </div>
            }
        </>



    )
}

export default Display

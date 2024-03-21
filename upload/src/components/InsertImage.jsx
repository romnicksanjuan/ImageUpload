
// ImageUpload.js
import React, { useEffect, useState } from "react";
import { storage } from "../firebase";
import axios from 'axios'
import {Link} from 'react-router-dom'

const InsertImage = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState()


  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`romnick/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        // Error function
        console.log(error);
      },
      () => {
        // Complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            // You can use the URL to display the image or store it in a database
            saveImageUrlToMongoDB(url)
           
            setMessage("successfully uploaded")
          });
      }
    );
  };

  const saveImageUrlToMongoDB = (imageUrl) => {
    axios.post('https://image-upload-server.vercel.app/', { imageUrl })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  // const saveImageUrlToMongoDB = (imageUrl) => {
  //   fetch("http://localhost:3000", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ imageUrl }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error("Error saving image URL:", error));
  // };
 




  return (
    <div>
      <div>
      <Link to={'/display'}>My Gallery</Link>
      <br />
      {
        message && <h2>{message}</h2>
      }
      <progress value={progress} max="100" />
      {progress > 0 && "Uploading: " + progress + "%"}
      <br />
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      </div>
     
    </div>
  );
};

export default InsertImage;

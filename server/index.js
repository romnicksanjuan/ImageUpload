const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Image = require('./model/imageModel')
const bodyParser = require('body-parser')

const app = express();

mongoose.connect('mongodb+srv://romnick:1234@romnickdb.e14diyv.mongodb.net/imageUp')
.then(() =>{
    console.log('connected success')
})
.catch((err) =>{
    console.log(err)
})

app.use(cors({
    origin:['http://localhost:5173'],
    methods:['POST','GET']
}))
app.use(express.json())
app.post('/save', async(req,res) =>{
    const {imageUrl} = req.body
    try {
        const saveImage = new Image({image:imageUrl})
        await saveImage.save();
        res.status(200).json({message:'success', saveImage})
    } catch (error) {
        console.log(error)
    }

})

app.get('/display',  async(req,res) =>{
    try {
        const getImage = await Image.find({})

        res.json(getImage)
    } catch (error) {
        console.log(error)
    }
})

// app.post("/save", async (req, res) => {
//     const { imageUrl } = req.body;
  
//     try {
//       // Create a new Image document and save it to the database
//       const newImage = new Image({ url: imageUrl });
//       await newImage.save();
  
//       res.status(201).json({ message: "Image URL saved successfully" });
//     } catch (error) {
//       console.error("Error saving image URL:", error);
//       res.status(500).json({ error: "Failed to save image URL" });
//     }
//   });


const port = process.env.port || 3000
app.listen(port, () =>{
    console.log(`server is running on port ${port}`)
})
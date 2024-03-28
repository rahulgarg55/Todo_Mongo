const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(express.json()); //middlewareee...

app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/taskmanager',{
useNewUrlParser:true,
useUnifiedTopology:true
}).then(()=>console.log("connected to MongoDB"))
.catch((err)=>console.log("Could not connect to MongoDB",err));



app.use('/api/tasks',taskRoutes);

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));
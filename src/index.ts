import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({extended:false}))


app.get('/', (req, res) => {
    res.send('Hello Sam!');
})

app.post('/',(req,res) => {
    res.send({
        data:req.body,
    })
})

app.listen(4000, () => {
    console.log('The application is listening on port 4000!');
})
const express = require('express')
// step-1
const app = express()
// create instance of express
const port = 3000;
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  // res.status(200).json({ message: 'all OK' })
  res.render('pages/index', {test: 'Hello', 'test1': 'hello world'});
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// TEXT/HTML AND JSON 
// /login ---> login content is coming from server 
// JSON SERVER REST APIS 
// SSR server side rendering ---rendering html from server 

/*
NODE JS SERVER -- TEMPLATING ENGINE --- HTML

                -- ejs
                -- jade
                -- pug

*/
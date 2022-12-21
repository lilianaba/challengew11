const router = require('express').Router();
const uuid = require('../helpers/uuid');
const utils = require('../helpers/fsUtils');

router.get('/notes',(req,res) =>{
    utils.readFromFile('./db/db.json').then(data=>res.json(JSON.parse(data)))
});

router.post('/notes',(req,res) =>{
   let newNote = {
    title:req.body.title,
    text:req.body.text,
    id:uuid()
   } 
   utils.readAndAppend(newNote,'./db/db.json');
   let response = {
    status:'Success',
    body:newNote,
   }
   res.json(response);
})

router.delete('/notes/:id',(req,res) =>{
    const noteID = req.params.id;
    utils.readAndRemove(noteID,'./db/db.json');
    let response = {
        status:'Note Removed'
    }
    res.json(response);

})


module.exports = router;

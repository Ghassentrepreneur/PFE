//Router
const router = require("express").Router();
//Model
const COMMENT = require('./Model');
 

//@GET
router.get('',async(req,res)=>{
    try{
        const _Comment =  COMMENT.find().then((result)=>{
            return res.status(200).json({
                message: "GET All Comments Successfully",
                data: result
              });
        }).catch((error)=>{
            return res.status(400).json({
                message: `GET All Comments Has Failed : ${error} `
              });
        })
        return await _Comment;
    }
    catch(err){
        return res.status(400).json({
            message: "Something went wrong when trying to GETAll  Comments",
            error: err
          });
         }
});

//@POST
router.post('',async(req,res)=>{
    try{
        //KEYS
    const { comment , articleID,userID,userImg,userName } = req?.body;
   
     const _Comment = new COMMENT({
      comment, 
      articleID,
      userID,
      userImg ,
      userName

     });
     return  _Comment.save((error, result) => {
        if (error) {
          return res.status(400).json({
            message: "Failed to Save Comment",
          });
        }
        if (result) {
            return res.status(200).json({
                message: "POST Comment Successfully",
                data: result
              });
      
        }
      });
       
    }catch(err){
        return res.status(400).json({
            message: "Something went wrong when trying to POST Comments",
            error: err
          });
         }
})
//@DELETE
router.delete('/:id',async (req, res) => {
    try{
        const _Comment =  COMMENT.findByIdAndDelete(req.params.id).then(()=>{
            return res.status(200).json({
                message: "DELETE Comment Successfully"
              });
        }).catch((error)=>{
            return res.status(400).json({
                message: `DELETE Comment Has Failed : ${error} `
              });
        })
        return await _Comment;
    }
    catch(err){
        return res.status(400).json({
            message: "Something went wrong when trying to DELETE Comment",
            error: err
          });
         }
    
    })

//@PUT
router.put('/:id',async (req, res)=>{
    try{
        const _Comment =  COMMENT.findByIdAndUpdate(req.params.id,req.body,{new:true}).then(()=>{
            return res.status(200).json({
                message: "UPDATE Comment Successfully"
              });
        }).catch((error)=>{
            return res.status(400).json({
                message: `UPDATE Comment Has Failed : ${error}`
              });   
        })
        return await _Comment;
    }
    catch(err){
        return res.status(400).json({
            message: "Something went wrong when trying to UPDATE Comment",
            error: err
          });
         }
    
})        
 module.exports = router;
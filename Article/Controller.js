//Router
const router = require("express").Router();
//Model
const ARTICLE = require('./Model');

//@GET
router.get('',async(req,res)=>{
    try{
        const _article =  ARTICLE.find().then((result)=>{
            return res.status(200).json({
                message: "GET All Articles Successfully",
                data: result
              });
        }).catch((error)=>{
            return res.status(400).json({
                message: `GET All Articles Has Failed : ${error} `
              });
        })
        return await _article;
    }
    catch(err){
        return res.status(400).json({
            message: "Something went wrong when trying to GET Articles",
            error: err
          });
         }
});

//@POST
router.post('',async(req,res)=>{
    try{
        //KEYS
    const { title , description ,image} = req?.body;
    const CreatedAt =  Date.now();
     const _article = new ARTICLE({
      title, 
      description,
       CreatedAt ,
       image
     });
     return  _article.save((error, user) => {
        if (error) {
          return res.status(400).json({
            message: "Failed to Save Article",
          });
        }
        if (user) {
            return res.status(200).json({
                message: "POST Article Successfully",
                data: user
              });
      
        }
      });
       
    }catch(err){
        return res.status(400).json({
            message: "Something went wrong when trying to POST Articles",
            error: err
          });
         }
})
//@DELETE
router.delete('/:id',async (req, res) => {
    try{
        const _article =  ARTICLE.findByIdAndDelete(req.params.id).then(()=>{
            return res.status(200).json({
                message: "DELETE Article Successfully"
              });
        }).catch((error)=>{
            return res.status(400).json({
                message: `DELETE Article Has Failed : ${error} `
              });
        })
        return await _article;
    }
    catch(err){
        return res.status(400).json({
            message: "Something went wrong when trying to DELETE Article",
            error: err
          });
         }
    
    })

//@PUT
router.put('/:id',async (req, res)=>{
    try{
        const _article =  ARTICLE.findByIdAndUpdate(req.params.id,req.body,{new:true}).then(()=>{
            return res.status(200).json({
                message: "UPDATE Article Successfully"
              });
        }).catch((error)=>{
            return res.status(400).json({
                message: `UPDATE Article Has Failed : ${error}`
              });   
        })
        return await _article;
    }
    catch(err){
        return res.status(400).json({
            message: "Something went wrong when trying to UPDATE Article",
            error: err
          });
         }
    
})        
 module.exports = router;
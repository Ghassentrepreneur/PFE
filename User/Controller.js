//Router
const router = require("express").Router();
//Model
const USER = require('./Model');
//Bcrypt
const bcrypt = require("bcrypt");

//@GET
router.get('',async(req,res)=>{
    try{
        const _user =  USER.find().then((result)=>{
            return res.status(200).json({
                message: "GET All Users Successfully",
                data: result
              });
        }).catch((error)=>{
            return res.status(400).json({
                message: `GET All Users Has Failed : ${error} `
              });
        })
        return await _user;
    }
    catch(err){
        return res.status(400).json({
            message: "Something went wrong when trying to GET Users",
            error: err
          });
         }
});

//@POST
router.post('',async(req,res)=>{
    try{
        //KEYS
    const { fullName , image ,email} = req?.body;
    const password = await bcrypt.hash(req.body.password, 10);
 
     const _user = new USER({
      fullName, 
      image,
      email  ,
      password
     });
     return  _user.save((error, user) => {
        if (error) {
          return res.status(400).json({
            message: "Failed to Save User",
          });
        }
        if (user) {
            return res.status(200).json({
                message: "POST User Successfully",
                data: user
              });
      
        }
      });
       
    }catch(err){
        return res.status(400).json({
            message: "Something went wrong when trying to POST Users",
            error: err
          });
         }
})
//@DELETE
router.delete('/:id',async (req, res) => {
    try{
        const _user =  USER.findByIdAndDelete(req.params.id).then(()=>{
            return res.status(200).json({
                message: "DELETE User Successfully"
              });
        }).catch((error)=>{
            return res.status(400).json({
                message: `DELETE User Has Failed : ${error} `
              });
        })
        return await _user;
    }
    catch(err){
        return res.status(400).json({
            message: "Something went wrong when trying to DELETE User",
            error: err
          });
         }
    
    })

//@PUT
router.put('/:id',async (req, res)=>{
    try{
        const _user =  USER.findByIdAndUpdate(req.params.id,req.body,{new:true}).then(()=>{
            return res.status(200).json({
                message: "UPDATE User Successfully"
              });
        }).catch((error)=>{
            return res.status(400).json({
                message: `UPDATE User Has Failed : ${error}`
              });   
        })
        return await _user;
    }
    catch(err){
        return res.status(400).json({
            message: "Something went wrong when trying to UPDATE User",
            error: err
          });
         }
    
})        
 module.exports = router;
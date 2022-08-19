const {Tryout} = require('./model/tryout.js');


// read all Tryout(GET REQUEST)
const readAlltryout = async (reg,res) =>{
try {
  const tryout = await tryout.find({}); 
  return res.status(200).json({
    success: true,
    message:'All tryout found successfully',
    data: tryout


  })
  
  

} catch (error) {
    console.log(`oops! something went wrong: $(error)`);
    res.status(400).send(`oops! something went wrong:${error}`);
    
}
}


// read a tryout(GET REQUEST)
const readtryout= async(req, res) => {
    try {
        
    } catch (error) {
        console.log(`oops! faild to get info on tryout: ${error}`);
        res.status(400). send(`oops! faild to get info on tryout:${error}`);

    }

}

// create a tryout(POST REQUEST)
 const createtryout= async(req, res) =>{
    try {
        const newtryout = await tryout.create
        
    } catch (error) {
        console. log(`oops! fails to create tryout:${error}`);
        res.status(400). send(`faild to create person:${error}`);
        
    }

 }
//  update a tryout(PUT/PUTCH REQUEST)
const updatetryout = async(req, res) => {
    try {
        const updatedtryout= await tryout.findByIdAndUpdate(req.params.id, {...req.body});
        
    } catch (error) {
        console.log(`oops! failed to update tryout:${error}`);
        res.status(400). send(`faild to create tryout:${error}`);
        
        
    }
    // delete a tryout(DELET REQUEST)
    const deletryout = async(req, res) =>{
 try {
    
 } catch (error) {
    
 }
    }

}







//  module.export = {
//     readAlltryout
//     readtryout
//     createtryout
//     updatetryout
//     delettryou


//  }


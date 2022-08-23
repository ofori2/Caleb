const {Tryout} = require('./model/tryout.js');


// read all Person(GET REQUEST)
const readAllperson = async (reg,res) =>{

try {
  const person = await tryout.find({}); 
  return res.status(200).json({
    sucess: true,
    message:'All person found successfully',
    data: person

  })
  

} catch (error) {
    console.log(`oops! something went wrong: $(error)`);
    res.status(400).send(`oops! something went wrong:${error}`);
    
}
}


// read a person(READ REQUEST)
const readperson= async(req, res) => {
    try {
        const person=await person.findbyid(req.person.id);
        res.status(200).json({
            sucess:true,
            message:'person found successfully',
            data:person

        })
        
    } catch (error) {
        console.log(`oops! faild to get info on person: ${error}`);
        res.status(400). send(`oops! faild to get info on person:${error}`);

    }

}

// create a person(CREATE REQUEST)
 const createperson= async(req, res) =>{
    try {
        const newperson = await person.create({...req.body});
        res.status(200).json({
            sucess:true,
            message:('person successfully created'),
            data:newperson
        })
        
    } catch (error) {
        console. log(`oops! fails to create person:${error}`);
        res.status(400). send(`faild to create person:${error}`);
        
    }

 }
//  update a person(PUT/PATCH REQUEST)
    const updatedPerson = async(request, response)=>{

    }
    try {
        const updatedperson= await person.findbyIdAndUpdate(req.params.id, {...req.body});
        res.status(200).json({
            sucess:true,
            message:('person successfully updated'),
            data: upadatedPerson
        })
        
    } catch (error) {
        console.log(`oops! failed to update person:${error}`);
        res.status(400). send(`faild to create person:${error}`);
        
        
    }
    
     

    
 










 module.export = {
    readAllperson
    readperson
    createperson
    upadatperson
    deleteperson

 }

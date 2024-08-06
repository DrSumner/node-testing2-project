
const data = require('./data-model')

const  checkId = (req,res,next) => {
data.getById(req.params.id)
.then(data => {
    if(data && Object.keys(data).length > 0){
        req.data = data
       next() 
    }
    else 
    return res.status(404).json({message: 'invalid id'})
})    
}

const validateBody = (req,res,next) => {
    const {name, age} = req.body
    if(!name){
        return  res.status(401).json({message: 'name is required'})
    }
    if(typeof name !== 'string' || name.length > 128 ){
        return  res.status(401).json({message: 'invalid name'})
    }
    if(!age){
        return  res.status(401).json({message: 'age is required'})
    }
    if(age && typeof age !== 'number'){
       return res.status(401).json({message: 'age must be a number'})
    }
    next()
}

const nameCheck = (req,res,next) => {
    const {name} = req.body
    data.getByFilter(name)
    .then( data => {
        if(data) {
            return res.status(401).json({message: "name already taken"})
        }
        else next()
    })
}

module.exports = {
    checkId, validateBody, nameCheck,
}
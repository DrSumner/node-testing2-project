
const data = require('./data-model')

const  checkId = (req,res,next) => {
data.getById(req.params.id)
.then(data => {
    if(data && Object.keys(data).length > 0){
        req.data = data
       next() 
    }
    else 
    return res.status(401).json({message: 'invalid id'})
})
    
    
}

module.exports = {
    checkId
}
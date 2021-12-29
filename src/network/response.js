const success = function (req,res,status,page,information){
  console.log(information)
  res.status(status).render(page,{data:information});
}
const error = function(req,res,status,page,data){
  res.status(status).render(page);
}

module.exports = {success,error};
const validator = require('validator');
const isEmpty = require('./isEmpty')

module.exports = function validateRegistration(data){
    
    const errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    
    if (!validator.isLength(data.password, {min: 6, max:20})) {
        errors.password = "Mot de passe doit etre entre  6 et 30 !"
    }
    if (!validator.isLength(data.password2,  {min: 6, max:20})) {
        errors.password2 = "confirme Mot de passe doit etre entre  6 et 30 !"
    }
    if (validator.isEmpty(data.password)) {
        errors.password = "obligatoire Mot de passe"
    }
    if (validator.isEmpty(data.password2)) {
        errors.password2 = "obligatoire Mot de passe"
    }
    if (!validator.isEmail(data.email)) {
        errors.email = "obligatoire email"
    }
    if (validator.isEmpty(data.name)) {
        errors.name = "obligatoire nom"
    }
    if (validator.isEmpty(data.email)) {
        errors.email = "obligatoire email"
    }
    
    

   

    if(!validator.equals(data.password, data.password2)){
       errors.password2 = "Mot de passe doit etre identique"
    }






    return{
        errors,
        isValid: isEmpty(errors)
    }
}
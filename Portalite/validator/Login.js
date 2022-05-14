const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateLogin(data){
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
   
    if (!validator.isEmail(data.email)) {
        errors.email = " email invalide"
    }

    if (validator.isEmpty(data.email)) {
        errors.email = " email obligatoire"
    }

    

    if(!validator.isLength(data.password, {min: 6, max: 20})){
        errors.password = "Mot de passe doit etre entre  6 et 30 !"
    }
    
    if(validator.isEmpty(data.password)){
        errors.password = " Mot de passe obligatoire "
     }
    

    return {
        errors,
        isValid: isEmpty(errors)
    }

}
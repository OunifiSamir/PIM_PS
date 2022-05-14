const validator = require('validator');

const isEmpty = require('./isEmpty')

module.exports = function validateProfileInput(data){

    let errors = {};

    data.handle = !isEmpty(data.handle) ? data.handle : '';
    data.status = !isEmpty(data.status) ? data.status : '';
    data.skills = !isEmpty(data.skills) ? data.skills : '';
    


    if (!validator.isLength(data.handle, {min: 2, max:40})) {
        errors.handle = 'Text entre 2 et 40 caracteres !';
    }

    if (validator.isEmpty(data.handle)) {
        errors.handle = 'Text est obligtoire';
    }


    if (validator.isEmpty(data.status)) {
        errors.status = 'Status est obligtoire';
    }

    if (validator.isEmpty(data.skills)) {
        errors.skills = 'Competences est obligtoire';
    }

    if (!isEmpty(data.website)) {
        if (!validator.isURL(data.website)) {
            errors.website = "invalid url";
        }
    }

    if (!isEmpty(data.youtube)) {
        if (!validator.isURL(data.youtube)) {
            errors.youtube = "invalid url";
        }
    }

    if (!isEmpty(data.linkedin)) {
        if (!validator.isURL(data.linkedin)) {
            errors.linkedin = "invalid url"
        }
    }

    if (!isEmpty(data.twitter)) {
        if (!validator.isURL(data.twitter)) {
            errors.twitter = "invalid url"
        }
    }

    if (!isEmpty(data.facebook)) {
        if (!validator.isURL(data.facebook)) {
            errors.facebook = "invalid url"
        }
    }
    if (!isEmpty(data.instagram)) {
        if (!validator.isURL(data.instagram)) {
            errors.instagram = "invalid url"
        }
    }
    
  

    return{
        errors,
        isValid: isEmpty(errors)
    }

};
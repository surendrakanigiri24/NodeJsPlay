const Joi = require('joi');

const userRegistrationSchema = Joi.object({

    id: Joi.string(),
    
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    firstName: Joi.string()
        .min(2)
        .max(30)
        .required(),

    lastName: Joi.string()
        .min(2)
        .max(30)
        .required(),

    role: Joi.string()
        .required(),

    isVerified: Joi.boolean(),

    verificationToken: Joi.string(),

    // repeat_password: Joi.ref('password'),

    access_token: [
        Joi.string(),
        Joi.number()
    ],

    birth_year: Joi.number()
        .integer()
        .min(1900)
        .max(2013),

    
})

module.exports = userRegistrationSchema;
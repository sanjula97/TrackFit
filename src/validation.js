import Joi from '@hapi/joi'

//Register validation
const registerVlidation = async (data) => {
    const schema =Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    }); 

    // try {
    //     const validation = await schema.validateAsync(data);
    //     res.send(validation);
    // } catch (error) {
    //     res.status(400).send(error.details[0].message);
    // }

    // const { error, value } = schema.validate(data);
    // if (error) {
    //     res.status(400).send(error.details[0].message);
    // } else {
    //     res.send(value);
    // }

    // return schema.validateAsync(data);
    
    return schema.validate(data);
}

export default registerVlidation;
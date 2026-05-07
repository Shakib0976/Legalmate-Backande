import z from "zod";


const createUserValidationSchema = z.object({

    body : z.object({
        name : z.string(),
        email : z.string().email(),
        password : z.string().min(6).max(20),
        role : z.enum(["lawyer", "admin", "client"]).default("client"),
    })
})


export const UserValidations = {
    createUserValidationSchema 
}
import z from "zod";


const createAuthValidation = z.object({
    body : z.object({
        email : z.string({required_error: "Email is required"}).email(),
        password : z.string({required_error: "Password is required"}).min(6).max(20),
    })
})
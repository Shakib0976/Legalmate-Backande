export interface TUser {
    email : string,
    password : string,
    name : string,
    image?: string
    role: "lawyer" | "admin" | "client",
    status: "active" | "inactive",
    isDeleted: boolean
}
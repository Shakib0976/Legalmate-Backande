export interface TUser {
    email : string,
    password : string,
    name : string,
    role: "lawyer" | "admin" | "client",
    status: "active" | "inactive",
    isDeleted: boolean
}



export interface TClient {
    name : string,
    email : string,
    address : string,
    image?: string,
    location?: string;
    occupation?: string;
    status : "approved" | "pending" | "rejected"
    isDeleted : boolean;
}
import type { Types } from "mongoose";


export type TExperience = {
    title: string;
    company: string;
    location: string;
    description: string;
    startDate: String;
    endDate: String;
    isCurrent: boolean;
}

export type TEducation = {
    degree: string;
    fieldOfStudy?: string;
    institution: string;
    endDate?: String;
    startDate: String;
    isCurrent?: boolean;
    honors?: string;
    description?: string;
}

export type TLicense = {
    state : string;
    licenseNumber?: string;
    acquiredDate : string;
    expirationDate? : string;
    status : "active" | "inactive" | "suspended" | "revoked";
}

export type TReview = {
    reviewerName : string;
    reviewerEmail?: string;
    date : string;
    comment : string;
    rating : number;
    
}


export type TAvailability = {
    days : string[];
    timeSlots : string[];
}

export type TLawyer = {
    name : string;
    user: Types.ObjectId,
    email : string;
    // basic info   
    profileImage? : string;
    about? : string;
    contactNumber : string;
    location? : string;
    workArea?: string;
    practiceAreas? : string[];
    specializations?: string[];
    status : "approved" | "pending" | "rejected";
    isVerified : boolean;
    // license
    license : TLicense;
    // education 
    education? : TEducation[];
    // experience
    experience? : TExperience[];
    consultationFee? : number;
    consultationTime? : string;
    rating? : number ;
    totalReview? : number ;
    reviews? : TReview[];
    // documents
    documents? : string[];
    solvedCases ? : number;
    availability ? : TAvailability;
    isDeletes : boolean;

};

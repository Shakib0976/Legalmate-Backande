

import { Schema, model } from "mongoose";
import type { TAvailability, TEducation, TExperience, TLawyer, TLicense, TReview } from "./lawyer.interface.js";


// Experience Schema
const experienceSchema = new Schema<TExperience>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
    },
    isCurrent: {
      type: Boolean,
    },
  },
  { _id: false }
);

// Education Schema
const educationSchema = new Schema<TEducation>(
  {
    degree: {
      type: String,
      required: true,
      trim: true,
    },
    fieldOfStudy: {
      type: String,
      trim: true,
    },
    institution: {
      type: String,
      required: true,
      trim: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
    },
    isCurrent: {
      type: Boolean,
      default: false,
    },
    honors: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { _id: false }
);


const licenseSchema = new Schema<TLicense>(
  {
    state: {
      type: String,
      required: true,
      trim: true,
    },
    licenseNumber: {
      type: String,
      trim: true,
    },
    acquiredDate: {
      type: String,
      required: true,
    },
    expirationDate: {
      type: String,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "suspended", "revoked"],
      default: "active",
    },
  },
  { _id: false }
);

// Review Schema
const reviewSchema = new Schema<TReview>(
  {
    reviewerName: {
      type: String,
      required: true,
      trim: true,
    },
    reviewerEmail: {
      type: String,
      trim: true,
    },
    date: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
  },
  { _id: false }
);

// Availability Schema
const availabilitySchema = new Schema<TAvailability>(
  {
    days: {
      type: [String],
      default: [],
    },
    timeSlots: {
      type: [String],
      default: [],
    },
  },
  { _id: false }
);

// Lawyer Main Schema
const lawyerSchema = new Schema<TLawyer>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    profileImage: {
      type: String,
    },

    about: {
      type: String,
      trim: true,
    },

    contactNumber: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      trim: true,
    },

    workArea: {
      type: String,
      trim: true,
    },

    practiceAreas: {
      type: [String],
      default: [],
    },

    specializations: {
      type: [String],
      default: [],
    },

    status: {
      type: String,
      enum: ["approved", "pending", "rejected"],
      default: "pending",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    license: {
      type: licenseSchema,
      required: true,
    },

    education: {
      type: [educationSchema],
      default: [],
    },

    experience: {
      type: [experienceSchema],
      default: [],
    },

    consultationFee: {
      type: Number,
      min: 0,
    },

    consultationTime: {
      type: String,
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    totalReview: {
      type: Number,
      default: 0,
    },

    reviews: {
      type: [reviewSchema],
      default: [],
    },

    documents: {
      type: [String],
      default: [],
    },

    solvedCases: {
      type: Number,
      default: 0,
    },

    availability: {
      type: availabilitySchema,
    },

    isDeletes: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Lawyer = model<TLawyer>("Lawyer", lawyerSchema);
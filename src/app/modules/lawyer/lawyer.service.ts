import { Lawyer } from "./lawyer.model.js"


const getAllLawyersFromDB = async () => {

    const result = await Lawyer.find({ isDeleted: false })
    return result;
}

const getSingleLawyerFromDB = async (id: string) => {

    const result = await Lawyer.findOne({ _id: id, isDeleted: false })
    return result;
}

const updateBasicInfoFromDB = async (id: string, data: any) => {
    const result = await Lawyer.findOneAndUpdate(
        { _id: id, isDeleted: false },
        data,
        { new: true }
    )
    return result;
}

export const LawyerService = {
    getAllLawyersFromDB,
    getSingleLawyerFromDB,
    updateBasicInfoFromDB,
}
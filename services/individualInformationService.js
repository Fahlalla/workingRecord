import { individualInformationMap } from "../models/individualInformationModel.js"

const getIndividualInformationByEmail = (email) => {
  return individualInformationMap.get(email)
}

export {getIndividualInformationByEmail}
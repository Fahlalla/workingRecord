import { individualInformationMap } from "../models/individualInformation.js"

const getIndividualInformationByEmail = (email) => {
  return individualInformationMap.get(email)
}

export {getIndividualInformationByEmail}
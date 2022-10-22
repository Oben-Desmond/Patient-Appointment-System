import { PatientRecord } from "../types";



export function getDaterFormat(records: PatientRecord[]) {

    const lastRecordId = records.length > 0 ? records[records.length - 1].sn : 0;
    const date = new Date()
    const day = (date.getDate() + "").length <= 1 ? ("0" + date.getDate()) : (date.getDate() + "")
    const month = (date.getMonth() + "").length <= 1 ? ("0" + date.getMonth()) : (date.getMonth() + "")
    const year = (date.getFullYear() + "")

    return `A${lastRecordId + 1}${day}${month}${year}`


}
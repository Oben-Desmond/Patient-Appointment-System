import { PatientRecord } from "../types";


export function getNextSN(records: PatientRecord[]) {
    const lastRecordId = records.length > 0 ? records[records.length - 1].sn : 0;

    return lastRecordId + 1;

}
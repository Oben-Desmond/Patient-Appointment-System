
export interface PatientRecord {
    sn: number,
    name: string,
    address: string,
    phone: string,
    email: string,
    timestamp?: number,
    age: number,
    sex: 'male' | 'female',
    first_time: boolean,
    city: string,
    ap_comment: string,
    post_ap_comment: string,
    code: string,
    status: 'missed' | 'passed' | 'rescheduled' | 'pending'

}
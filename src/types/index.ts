
export interface PatientRecord {
    name: string,
    number: string,
    address: string,
    phone: string,
    email: string,
    timestamp?: number,
    age: number,
    sex: 'male' | 'female',
    ap_comment: string,
    post_ap_comment: string,
    code: string,
    status: 'missed' | 'passed' | 'rescheduled' | 'pending'

}
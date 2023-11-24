export interface Employee{
    _id?:string,
    login: string,
    password: string,
    tokenBadge?: string,
    scopes :string,
    status: boolean // Present = 1, Absent = 0
}
export interface IResultObject<TResponse> {
    errors?: string[]
    data?: TResponse   
}

export interface IUserInfo {
    "token": string,
    "refreshToken": string,
    "firstName": string,
    "lastName": string
}

export type stringOrNull = string | null;
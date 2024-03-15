export interface ILoginData {
    email: string;
    password: string;
}

export interface IRegisterData {
    name: string;
    email: string;
    password: string;
}

export interface IAuthState {
    user: IPublicUser;
    users: IPublicUser[]
}

export interface IPublicUser {
    dataValues: IUserDataType
}

interface IUserDataType {
    id: number
    name: string
    email: string,
    createdAt: string,
    updatedAt: string
    token: string
}
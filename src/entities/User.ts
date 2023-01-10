interface IUser{
    email: string,
    password: string
}

export class User{

    public props: IUser

    constructor(props: IUser){
        this.props = props
    }

}
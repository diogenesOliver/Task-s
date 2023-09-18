interface UserProps{
    name: string,
    email: string,
    password: string,
    confirm_password: string,
    createdAt: Date,
    updatedAt: Date
}

export class User{
	private props: UserProps

	get name(){
		return this.props.name
	}

	get email(){
		return this.props.name
	}

	get password(){
		return this.props.name
	}

	get confirm_password(){
		return this.props.name
	}

	constructor(props: UserProps){
		const { confirm_password, password } = props

		if(password != confirm_password)
			throw new Error('Invalid password')

		this.props = props
	}
}
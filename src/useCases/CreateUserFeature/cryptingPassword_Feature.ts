import { genSalt, hash } from 'bcrypt'

export async function cryptingPassword(password: string, confirmPassword: string){
	const SALT: string = await genSalt(14)
	const CRYPTO_PASSWORD: string = await hash(
		password, SALT
	)

	password = CRYPTO_PASSWORD
	confirmPassword = CRYPTO_PASSWORD

	return {
		password,
		confirmPassword
	}
}
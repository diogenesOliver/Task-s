import { compare } from 'bcrypt'

export async function verifyPasswordWithCryptPassword(password: string, cryptPassword: string): Promise<boolean>{
	return await compare(password, cryptPassword)
}
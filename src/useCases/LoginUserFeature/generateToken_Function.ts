import { config } from 'dotenv'
config()

import { sign } from 'jsonwebtoken'

export function generateAToken(userId: string): string{
	return sign({}, process.env.SECRET_KEY as string, {
		subject: userId
	})
}
import { StatusCodes } from '../../logs/statusCode'

export async function verifyngInputsValues(userDataArray: string[], reply?: any): Promise<any> {
	for (const data of userDataArray) {
		if (data == ' ')
			return reply?.status(StatusCodes.BadRequest).send('Invalid input')
	}

	return userDataArray
}
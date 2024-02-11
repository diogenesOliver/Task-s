import { StatusCodes } from '../../logs/statusCode'

import { Request, Response } from 'express'
import { DeleteTaskService } from '../../repositories/DeleteTaskService/DeletTaskRepository'

export class DeleteTaskController{
	constructor(
		private deleteTaskService: DeleteTaskService
	){}

	async deleteTaskController(req: Request, res: Response){
		try{
			await this.deleteTaskService.deleteData(req.params.id)
	
			return res.status(StatusCodes.Success).send('Task deleted successfully')
		}catch(e: any){
			console.error(e)
			res.status(StatusCodes.ServerError).send('Internal Error - [500]')
		}
	}
}
import { Request, Response } from 'express'
import { DeleteTaskService } from '../../repositories/DeleteTaskService/DeletTaskRepository'

export class DeleteTaskController{
	constructor(
		private deleteTaskService: DeleteTaskService
	){}

	async deleteTaskController(req: Request, res: Response){
		try{
			await this.deleteTaskService.deleteData(req.params.id)
	
			return res.status(200).send('Task deleted successfully')
		}catch(e: any){
			console.error(e)
			res.status(500).send('Internal Error - [500]')
		}
	}
}
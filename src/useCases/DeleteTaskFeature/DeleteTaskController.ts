import { Request, Response } from 'express'
import { DeleteTaskService } from '../../repositories/DeleteTaskService/DeletTaskRepository'

export class DeleteTaskController{
	constructor(
		private deleteTaskService: DeleteTaskService
	){}

	async deleteTaskController(req: Request, res: Response){
		try{
			await this.deleteTaskService.deleteData(
				parseInt(req.params.id)
			)
	
			return res.status(200).send('Task deleted successfully')
		}catch(e: any){ console.log(e) }
	}
}
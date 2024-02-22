/* import { FastifyInstance } from 'fastify'
import { z } from 'zod'

class CommentTaskController {
	async taskComment(app: FastifyInstance){
		app.get('/comment/taskId', { websocket: true }, (connection, request) => {
			connection.socket.on('message', message => {
				connection.socket.send(`This is you message ${message}`)
			})
            
			const getParams = z.object({
				taskId: z.string().cuid()
			})

			const { taskId } = getParams.parse(request.params)
		})
	}
}

export const commentTaskInstance = new CommentTaskController() */
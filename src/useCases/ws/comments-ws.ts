import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { commenting } from '../../utils/comments-pub-sub' 

class CommentTaskController {
	async taskComment(app: FastifyInstance){
		app.get('/comment/:taskId', { websocket: true }, (connection, request) => {
			const getTaskParams = z.object({
				taskId: z.string().cuid()
			})

			const { taskId } = getTaskParams.parse(request.params)

			commenting.subscriber(taskId, (message) => {
				connection.socket.send(JSON.stringify(message))
			})

		})
	}
}

export const commentTaskPubSubInstance = new CommentTaskController()
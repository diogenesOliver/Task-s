type Message = { taskId: string, comment: string }
type Subscriber = (messgae: Message) => void

class CommentPubSub{
	private channels: Record<string, Subscriber[]> = {}

	subscriber(taskId: string, subscriber: Subscriber){
		if(!this.channels[taskId])
			this.channels[taskId] = []

		this.channels[taskId].push(subscriber)
	}

	publish(taskId: string, message: Message){
		if(!this.channels[taskId])
			return

		for(const subscriber of this.channels[taskId]){
			subscriber(message)
		}
	}
}

export const commenting = new CommentPubSub()
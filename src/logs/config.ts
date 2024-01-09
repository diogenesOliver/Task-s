import { pino } from 'pino'
const pinoExec = pino({
	transport: {
		target: 'pino-pretty',
		options: {
			colorize: true
		}
	},
	level: 'debug'
})

export default pinoExec
export async function countOfDaysToCompleteATask(initialDate: string, endsDate: string): Promise<number> {
	const SECONDS: number = 1000
	const MINUTE: number = SECONDS * 60
	const HOUR: number = MINUTE * 60
	const DAY: number = HOUR * 24

	const diff = new Date(initialDate).getTime() - new Date(endsDate).getTime()

	return Math.floor(diff / DAY)
}
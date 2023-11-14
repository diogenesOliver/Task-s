export async function countOfDaysToCompleteATask(initialDate: string, endsDate?: string): Promise<number | null> {
	if (!endsDate) return null

	const SECONDS: number = 1000
	const MINUTE: number = SECONDS * 60
	const HOUR: number = MINUTE * 60
	const DAY: number = HOUR * 24

	const diff = new Date(endsDate).getTime() - new Date(initialDate).getTime()

	return Math.floor(diff / DAY)
}
export async function countOfDaysToCompleteATask( endsDate?: string | null): Promise<number | any> {
	if (!endsDate) return null

	const SECONDS: number = 1000
	const MINUTE: number = SECONDS * 60
	const HOUR: number = MINUTE * 60
	const DAY: number = HOUR * 24

	const diff = ( new Date(endsDate).getDate() - new Date().getDate() ) + 1

	return diff
}
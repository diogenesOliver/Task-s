export async function setEndsDate(endsDate: string | null): Promise<Date | null> {
	if (!endsDate)
		return null

	const newDate: string = new Date().toISOString().split('T')[0]
	if (endsDate < newDate)
		throw new Error('Invalid value from ends date, try again.')

	return new Date(endsDate)
}
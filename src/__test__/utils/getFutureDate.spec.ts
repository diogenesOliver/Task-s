import { expect, test } from 'vitest'
import { getFutureDate } from './GetFutureDate'

test('Increases date with on year', () => {
	const year = new Date().getFullYear()
	expect(getFutureDate(`${year}-08-10`).getFullYear()).toEqual(year + 1)
})
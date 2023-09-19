export default {
	preset: 'ts-jest',
	automock: false,
	rootDir: '.',
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	testMatch: [
		'<rootDir>/**/*.spec.ts',
	],
}
export default {
  preset: 'ts-jest',
  automock: false,
  rootDir: '.',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageThreshold: {
    global: {
      statements: 75,
      branches: 75,
      lines: 75,
      functions: 75
    }
  },
  testMatch: [
    '<rootDir>/**/*.spec.ts',
  ],
};
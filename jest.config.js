module.exports = {
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/auth/$1',
    '@interfaces/(.*)': '<rootDir>/src/app/types/$1',
    '@environments/(.*)': '<rootDir>/src/environments/$1',
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};

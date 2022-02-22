module.exports = {
  globalSetup: './jest.global-setup.js',
  modulePaths: ['<rootDir>/src/'],
  preset: 'ts-jest',
  resetMocks: true,
  testEnvironment: 'node'
};

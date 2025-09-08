module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleFileExtensions: ['js','jsx','json'],
    transform: { '^.+\\.[tj]sx?$': 'babel-jest' }
};
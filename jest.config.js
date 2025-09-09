module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleFileExtensions: ['js','jsx','json'],
    transform: { '^.+\\.[tj]sx?$': 'babel-jest' }
    collectCoverage: true,                                  // make Jest produce coverage
    coverageDirectory: 'coverage',                          // write reports into ./coverage
    coverageReporters: ['json', 'html', 'text-summary', 'lcov'] // 'json' is required for Codecov

};


module.exports = {
    preset: 'ts-jest',
    roots: ['<rootDir>/src'],
    "testMatch": [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    testEnvironment: 'node',
    collectCoverage: true,
    coveragePathIgnorePatterns: [
      '<rootDir>/build/',
      '<rootDir>/dist/',
      '<rootDir>/node_modules/',
    ],
    coverageDirectory: '<rootDir>/coverage/',
    verbose: true
  };
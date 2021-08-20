const jestBaseConfig = require('../../jest.config.base');

module.exports = {
    ...jestBaseConfig,
    roots: [
        ...jestBaseConfig.roots,
        '<rootDir>/tests'
    ]
}
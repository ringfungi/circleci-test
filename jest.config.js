const { defaults } = require("jest-config");

module.exports = {
  // roots: ["<rootDir>/src"],
  testTimeout: 30000,
  coveragePathIgnorePatterns: ["node_modules", "express"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.js?$",
  moduleFileExtensions: [...defaults.moduleFileExtensions, "js"],
  testEnvironment: 'node',
};
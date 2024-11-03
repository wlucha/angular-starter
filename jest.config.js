module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/src/setupJest.ts"],
  reporters: ["default", "jest-junit"],
  transformIgnorePatterns: ["!node_modules/"],
};

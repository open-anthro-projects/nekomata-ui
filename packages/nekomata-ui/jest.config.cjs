module.exports = {
    transform: {
      "^.+\\.svelte$": [
        "svelte-jester",
        { preprocess: "./svelte.config.test.cjs" },
      ],
      "^.+\\.ts$": "ts-jest",
      "^.+\\.js$": "ts-jest",
    },
    modulePathIgnorePatterns:["<rootDir>/src/routes","<rootDir>/src/app.d.ts","<rootDir>/src/app.html","index.ts"],
    moduleFileExtensions: ["js", "ts", "svelte"],
    moduleNameMapper: {
      "^\\$lib(.*)$": "<rootDir>/src/lib$1",
      "^\\$app(.*)$": [
        "<rootDir>/.svelte-kit/dev/runtime/app$1",
        "<rootDir>/.svelte-kit/build/runtime/app$1",
      ],
    },
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
    collectCoverageFrom: ["src/**/*.{ts,tsx,svelte,js,jsx}"],
  };
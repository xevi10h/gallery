import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "./src/setupTests.ts",
  ],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

export default config;

module.exports = {
  "nycCoverage": false,
  "coverage": false,
  "auto_compose": true,
  "node": "14",
  "parallel": 3,
  "test_framework": "jest --config ../../jest.config.js --runTestsByPath --runInBand",
  "tests": "__tests__/*.spec.ts",
  "extras": {
    "tester": {
      "working_dir": "/src/packages/plugin-prometheus",
      "volumes": [
        "${PWD}/../../:/src:cached"
      ],
      environment: {
        TS_NODE_TRANSPILE_ONLY: "true",
        TS_NODE_TYPE_CHECK: "false",
        TS_NODE_FILES: "true"
      }
    }
  }
}

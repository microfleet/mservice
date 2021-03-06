module.exports = {
  "nycCoverage": false,
  "coverage": false,
  "auto_compose": true,
  "node": "14",
  "tester_flavour": "rdkafka-tester",
  "parallel": 1,
  "test_framework": "jest --config ./jest.config.js --runTestsByPath",
  "tests": "__tests__/**/*.spec.ts",
  "arbitrary_exec": ["node scripts/rebuild-kafka.js"],
  "extras": {
    "tester": {
      "working_dir": "/src/packages/plugin-kafka",
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

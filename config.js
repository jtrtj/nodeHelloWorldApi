var environments = {};

environments.development = {
  httpPort: 43556,
  envName: "development"
};

var currentEnvironment =
  typeof process.env.NODE_ENV == "string"
    ? process.env.NODE_ENV.toLowerCase()
    : "";

var environmentToExport =
  typeof environments[currentEnvironment] == "object"
    ? environments[currentEnvironment]
    : environments.development;

module.exports = environmentToExport;

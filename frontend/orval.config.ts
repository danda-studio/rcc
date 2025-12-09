console.log("API_URL", process.env.API_URL);

module.exports = {
  client: {
    input: `${process.env.API_URL}/swagger/v1/swagger.json`,
    output: {
      target: "./src/shared/api/generated.ts",
      schemas: "./src/shared/api/scheme",
      client: "react-query",
      baseUrl: process.env.API_URL,
    },
  },
};

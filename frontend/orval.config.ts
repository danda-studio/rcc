module.exports = {
  client: {
    input: "https://diplomatic-staci-rcc-c14bdd3f.koyeb.app/swagger/v1/swagger.json",
    output: {
      target: "./src/shared/api/generated.ts",
      schemas: "./src/shared/api/scheme",
      client: "react-query",
      baseUrl: "http://api.rsk-olimpiyskiy.ru",
    },
  },
};

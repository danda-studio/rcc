module.exports = {
    client: {
        input: 'https://rcc-7z0s.onrender.com/swagger/v1/swagger.json',
        output: {
            target: './src/shared/api/generated.ts',
            schemas: './src/shared/api/scheme',
            client: 'react-query',
            baseUrl: 'https://rcc-7z0s.onrender.com',
        },
    },
};
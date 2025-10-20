module.exports = {
    client: {
        input: 'https://rcc-7z0s.onrender.com/swagger/v1/swagger.json',
        output: {
            target: './src/shared/api/generated.ts', // вот сюда сгенерируется клиент
            schemas: './src/shared/api/scheme', // это для схем
            client: 'react-query', // или axios/fetch
        },
    },
};
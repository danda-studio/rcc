# Билдим приложение
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Копируем и восстанавливаем зависимости
COPY backend/RCC/RCC/RCC.csproj .
RUN dotnet restore RCC.csproj

# Копируем исходный код и публикуем
COPY backend/RCC/RCC/ .
RUN dotnet publish -c Release -o /app/publish

# Финальный образ
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "RCC.dll"]
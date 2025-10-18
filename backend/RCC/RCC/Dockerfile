# Билдим приложение
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Копируем и восстанавливаем зависимости
COPY ["backend/RCC/RCC/RCC.csproj", "backend/RCC/RCC/"]
RUN dotnet restore "backend/RCC/RCC/RCC.csproj"

# Копируем исходный код и публикуем
COPY . .
WORKDIR "/src/backend/RCC/RCC"
RUN dotnet publish -c Release -o /app/publish

# Финальный образ
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .	
ENTRYPOINT ["dotnet", "RCC.dll"]

# Принудительно включаем Development режим
ENV ASPNETCORE_ENVIRONMENT=Development
ENV ASPNETCORE_URLS=http://0.0.0.0:80
EXPOSE 80
ENTRYPOINT ["dotnet", "RCC.dll"]
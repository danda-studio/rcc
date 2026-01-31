# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

#  опируем только backend/RCC, чтобы не копировать весь проект
COPY backend/RCC/RCC/ ./RCC/
WORKDIR /src/RCC
RUN dotnet publish RCC.csproj -c Release -o /app/publish

# Stage 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "RCC.dll"]

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY backend/RCC/RCC/RCC.csproj .
RUN dotnet restore RCC.csproj
COPY backend/RCC/RCC/ .
RUN dotnet publish RCC.csproj -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "RCC.dll"]
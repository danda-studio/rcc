FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Копируем .csproj и восстанавливаем зависимости (для кэширования слоёв)
COPY *.csproj ./
RUN dotnet restore

# Копируем весь остальной код
COPY . .

# Публикуем проект (без указания имени .csproj)
RUN dotnet publish -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "RCC.dll"]
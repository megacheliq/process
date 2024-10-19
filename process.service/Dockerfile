FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

COPY process.service/*.csproj ./process.service/
COPY DataAccess/*.csproj ./DataAccess/
ENV PATH="$PATH:/root/.dotnet/tools"

RUN dotnet restore ./process.service/process.service.csproj

COPY . .

WORKDIR /app/process.service

RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

COPY --from=build /app/process.service/out .

# Установка пакета OpenSSL для генерации сертификата
RUN apt-get update && apt-get install -y openssl

# Генерация самоподписанного сертификата
RUN openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /app/https.key -out /app/https.crt \
    -subj "/CN=localhost"

# Устанавливаем переменные среды для Kestrel
ENV ASPNETCORE_URLS=http://+:5000;https://+:443
ENV ASPNETCORE_Kestrel__Certificates__Default__Path=/app/https.crt
ENV ASPNETCORE_Kestrel__Certificates__Default__KeyPath=/app/https.key

# Открываем порты
EXPOSE 5000 443

ENTRYPOINT ["dotnet", "process.service.dll"]

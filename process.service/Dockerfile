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

ENV ASPNETCORE_URLS=https://+:443
ENV ASPNETCORE_Kestrel__Certificates__Default__Path=/app/https.crt
ENV ASPNETCORE_Kestrel__Certificates__Default__KeyPath=/app/https.key

EXPOSE 443

ENTRYPOINT ["dotnet", "process.service.dll"]

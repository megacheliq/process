FROM quay.io/keycloak/keycloak:latest as builder

# Enable health and metrics support
ENV KC_HEALTH_ENABLED=true
ENV KC_METRICS_ENABLED=true

# Configure a database vendor
ENV KC_DB=postgres

WORKDIR /opt/keycloak
# for demonstration purposes only, please make sure to use proper certificates in production instead
RUN keytool -genkeypair -storepass password -storetype PKCS12 -keyalg RSA -keysize 2048 -dname "CN=server" -alias server -ext "SAN:c=DNS:localhost,IP:127.0.0.1" -keystore conf/server.keystore
RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:latest
COPY --from=builder /opt/keycloak/ /opt/keycloak/

# change these values to point to a running postgres instance
ENV KC_DB=postgres \
    KC_DB_URL=jdbc:postgresql://keycloakdb:5432/keycloak \
    KC_DB_USERNAME=keycloak \
    KC_DB_PASSWORD=password \
    KC_HOSTNAME=localhost \
    KC_HOSTNAME_STRICT=false \
    KC_HOSTNAME_STRICT_HTTPS=false \
    KC_LOG_LEVEL=info \
    KC_METRICS_ENABLED=true \
    KC_HEALTH_ENABLED=true \
    KEYCLOAK_ADMIN=barakichbamich@gmail.com \
    KEYCLOAK_ADMIN_PASSWORD=4I!T@z2yrQM7z8@!

COPY ./keycloak-export/ /opt/keycloak/data/import/

ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start", "--import-realm"]
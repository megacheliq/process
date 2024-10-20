FROM quay.io/keycloak/keycloak:latest as builder

# Enable health and metrics support
ENV KC_HEALTH_ENABLED=true
ENV KC_METRICS_ENABLED=true

# Configure a database vendor
ENV KC_DB=postgres

WORKDIR /opt/keycloak

RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:latest
COPY --from=builder /opt/keycloak/ /opt/keycloak/

ENV KC_DB=postgres \
    KC_DB_URL=jdbc:postgresql://keycloakdb:5432/keycloak \
    KC_DB_USERNAME=keycloak \
    KC_DB_PASSWORD=password \
    KC_HOSTNAME=tradexclub.ru \
    KC_HOSTNAME_STRICT=false \
    KC_HOSTNAME_STRICT_HTTPS=true \
    KC_LOG_LEVEL=info \
    KC_METRICS_ENABLED=true \
    KC_HEALTH_ENABLED=true \
    KEYCLOAK_ADMIN=barakichbamich@gmail.com \
    KEYCLOAK_ADMIN_PASSWORD=4I!T@z2yrQM7z8@! \
    KC_HTTPS_KEYSTORE=/opt/keycloak/conf/privkey.pem \
    KC_HTTPS_CERTIFICATE=/opt/keycloak/conf/fullchain.pem;

COPY ./keycloak-export/ /opt/keycloak/data/import/

ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start", "--import-realm"]
FROM quay.io/keycloak/keycloak:latest as builder

ENV KC_HEALTH_ENABLED=true
ENV KC_METRICS_ENABLED=true

ENV KC_DB=postgres

WORKDIR /opt/keycloak

RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:latest
COPY --from=builder /opt/keycloak/ /opt/keycloak/

RUN chmod 644 /opt/keycloak/conf/fullchain.pem /opt/keycloak/conf/privkey.pem

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
    KEYCLOAK_ADMIN_PASSWORD=4I!T@z2yrQM7z8@!

COPY ./keycloak-export/ /opt/keycloak/data/import/

ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start", "--https-certificate-file=/opt/keycloak/fullchain.pem", "--https-certificate-key-file=/opt/keycloak/privkey.pem", "--import-realm", "--verbose"]

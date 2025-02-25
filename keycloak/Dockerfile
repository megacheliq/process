FROM quay.io/keycloak/keycloak:latest as builder

ENV KC_HEALTH_ENABLED=true
ENV KC_METRICS_ENABLED=true

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
    KEYCLOAK_ADMIN_PASSWORD=4I!T@z2yrQM7z8@!

COPY ./keycloak-export/ /opt/keycloak/data/import/

COPY ./fullchain.pem /opt/keycloak/conf/fullchain.pem
COPY ./privkey.pem /opt/keycloak/conf/privkey.pem

ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start", "--https-certificate-file=/opt/keycloak/conf/fullchain.pem", "--https-certificate-key-file=/opt/keycloak/conf/privkey.pem", "--import-realm", "--verbose"]

## Description

Luke Rogerson's Bubble technical test.
The API uses Nest.js connected to a MongDB database.
The OIDC auth provider is [Keycloak](https://www.keycloak.org/).

I have tried to follow a similar tech stack as is currently used at Bubble.

## Getting Started

```bash
yarn
yarn up
```

Running `yarn up` will build and run all the containers (see `docker-compose.yml` for details), as well as populating the MongoDB database with sample bookings data.

You will then need to login to Keycloak to create a realm, user and client with which to authenticate. Please see [this guide for details](https://tomas-pinto.medium.com/keycloak-clients-and-roles-a-tutorial-b334147f1dbd). The admin console is at http://localhost:8000/auth/, with the username `admin` and the password `password`.

⚠️⚠️ **NOTE**: you should use `http://auth:8000` as the `Root URL` instead of localhost when creating your client, as we are running Keycloak inside of Docker and it needs to resolve to the Docker hostname instead of localhost.

## Testing the API

Once you have setup Keycloak, use the included Postman collection to auth and attach the returned token as part of the request via the `AUTHORIZATION` header.

## Considerations

This should not be considered as a production ready API! However, I have tried to follow good practices around API design and SOLID principles.
The code standard uses the [adapter pattern](https://refactoring.guru/design-patterns/adapter).

import { BookingsModule } from './application/bookings/bookings.module';

import { Module } from '@nestjs/common';
import {
  KeycloakConnectModule,
  AuthGuard,
  ResourceGuard,
  RoleGuard,
} from 'nest-keycloak-connect';
import { APP_GUARD } from '@nestjs/core';
@Module({
  imports: [
    KeycloakConnectModule.register({
      authServerUrl: process.env.AUTH_SERVER_URL,
      realm: 'Parent',
      clientId: process.env.CLIENT_ID,
      secret: process.env.CLIENT_SECRET as string,
    }),
    BookingsModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}

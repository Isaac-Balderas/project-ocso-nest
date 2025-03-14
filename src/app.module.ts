import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesModule } from './employees/employees.module';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { ProvidersModule } from './providers/providers.module';
import { ManagersModule } from './managers/managers.module';
import { RegionsModule } from './regions/regions.module';
import { LocationsModule } from './locations/locations.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.host,
    port: Number(process.env.port),
    username: "postgres",
    password: process.env.pass,
    database: process.env.name,
    entities: [],
    autoLoadEntities: true,
    synchronize: true,
  }), 
  EmployeesModule, ProductsModule, ProvidersModule, ManagersModule, RegionsModule, LocationsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    PokemonModule,
  ],
})
export class AppModule {}

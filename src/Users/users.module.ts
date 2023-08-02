import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    providers:[
        //Aqui van los servicios
    ],
    controllers:[
        //Aqui van los controllers
    ],

})
export class UsersModule {}
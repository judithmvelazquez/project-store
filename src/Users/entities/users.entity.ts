import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {

@PrimaryGeneratedColumn({ type:'int4' }) //este decorador hace referencia al primary key(llave primaria)
id: number;

@Column({ type: 'varchar', length:100, nullable: false})
name: string;

@Column({ type: 'varchar', length:300, nullable: false})
password: string;

@Column({type: 'varchar', nullable: false})
email: number;

@Column({type: 'varchar', nullable: false}) 
sexo: number;

@Column({type: 'boolean', nullable: false, default: true}) 
active: true;
}

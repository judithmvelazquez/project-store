import { IsBoolean, IsNotEmpty, IsNumber,IsString,MaxLength } from "class-validator";


export  class createUsersDto {
    @IsNotEmpty()
    @IsNumber()
    id: number;
    //Los decoradores en el dto validan que la infgo quese agregue sea la

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name:string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    password:string;

    @IsNumber()
    @IsNotEmpty()
    @MaxLength(100)
    email: number;

    @IsNumber()
    @IsNotEmpty()
    @MaxLength(100)
    sexo: string;

    @IsBoolean()
    @IsNotEmpty()
    @MaxLength(100)
    active: true;









}
    

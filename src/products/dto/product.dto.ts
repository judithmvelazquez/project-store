import { IsNotEmpty, IsNumber,IsString,MaxLength } from "class-validator";

export  class createProductoDto {
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
    description:string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    stock: number;







}
    

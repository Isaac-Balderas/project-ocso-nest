import { IsEmail, IsString, MaxLength } from "class-validator";
import { Product } from "src/products/entities/product.entity";

export class CreateProviderDto extends Product {
    @IsString()
    @MaxLength(100)
    providerName: string;
    @IsEmail()
    @IsString()
    providerEmail: string;
    @IsString()
    @MaxLength(15)
    providerPhoneNumber: string;
}

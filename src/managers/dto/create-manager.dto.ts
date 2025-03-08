import { IsEmail, IsNumber, IsString, MaxLength } from "class-validator";
import { Manager } from "../entities/manager.entity";

export class CreateManagerDto extends Manager{
    @IsString()
    @MaxLength(80)
    declare managerFullName: string;
    @IsString()
    @IsEmail()
    declare managerEmail: string;
    @IsNumber()
    declare managerSalary: number;
    @IsString()
    @MaxLength(10)
    declare managerPhoneNumber: string;
}

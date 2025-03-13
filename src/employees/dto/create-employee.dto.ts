import { IsEmail, IsObject, IsOptional, IsString, MaxLength } from "class-validator";
import { Employee } from "../entities/employee.entity";
import { Location } from "src/locations/entities/location.entity";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";


export class LocationEmployeeDto extends Location{
    @ApiProperty()
    declare locationId: number;

    @ApiPropertyOptional()
    declare locationName: string;

    @ApiPropertyOptional()
    declare locationLatLng: number[];

    @ApiPropertyOptional()
    declare locationAddress: string;
}

export class CreateEmployeeDto extends Employee{
    @ApiProperty() 
    @IsString()
    @MaxLength(30)
    declare employeeName: string;

    @ApiProperty()
    @IsString()
    @MaxLength(70)
    declare employeeLastName: string;

    @ApiProperty()
    @IsString()
    @MaxLength(10)
    declare employePhoneNumber: string;

    @ApiProperty()
    @IsString()
    @IsEmail()
    declare employeeEmail: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsObject()
    declare location: LocationEmployeeDto;
}

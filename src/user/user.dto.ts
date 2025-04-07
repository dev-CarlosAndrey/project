import { ApiProperty } from "@nestjs/swagger";

export class UserDto{

    @ApiProperty(
        {
            description: "Id único de um usuario.",
            example: '1'
        }
    )
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    age: number;

    @ApiProperty()
    email: string;
}
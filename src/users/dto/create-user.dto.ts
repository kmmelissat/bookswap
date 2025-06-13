import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The email of the user',
    example: 'melissa@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'The name of the user',
    example: 'Melissa Solorzano',
  })
  name: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'holaprofeee',
  })
  password: string;
}

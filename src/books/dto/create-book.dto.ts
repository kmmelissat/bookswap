import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({
    description: 'The title of the book',
    example: 'Sunrise on the Reaping',
  })
  title: string;

  @ApiProperty({
    description: 'The author of the book',
    example: 'Suzanne Collins',
  })
  author: string;

  @ApiProperty({
    description: 'A brief description of the book',
    example:
      'Sunrise on the Reaping is a novel by Suzanne Collins, published in 2025 (The Hunger Games series).',
  })
  description: string;
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto, userId: number) {
    const book = this.booksRepository.create({
      ...createBookDto,
      createdBy: { id: userId },
    });
    return this.booksRepository.save(book);
  }

  async findAll() {
    return this.booksRepository.find({
      relations: ['createdBy'],
      select: {
        id: true,
        title: true,
        author: true,
        description: true,
        createdBy: {
          id: true,
          name: true,
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}

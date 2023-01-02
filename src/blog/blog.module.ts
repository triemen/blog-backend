import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogService } from './blog.service';
import { BlogSchema } from './schemas/blog.schema';
import { BlogController } from './blog.controller';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: BlogSchema }])],
  providers: [BlogService],
  controllers: [BlogController],
})
export class BlogModule {}

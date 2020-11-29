import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
  imports: [UserModule, PostModule],
})
export class PrismaModule {}

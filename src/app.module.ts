import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ArticlesModule } from './articles/articles.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkspacesModule } from './workspaces/workspaces.module';

@Module({
  imports: [
    ArticlesModule,
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://test:test@cluster0.2m0jb.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=mongodb-vscode%200.6.10&ssl=true',
      {
        autoCreate: true,
      },
    ),
    WorkspacesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

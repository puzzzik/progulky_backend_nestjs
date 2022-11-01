import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import {RolesService} from "./roles.service";
import {SequelizeModule} from "@nestjs/sequelize";
import {Role} from "./roles.model";
import {User} from "../users/users.model";

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
      SequelizeModule.forFeature([Role, User])
  ],
  exports: [RolesService]
})
export class RolesModule {}

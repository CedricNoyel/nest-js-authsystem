import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { Workspace, WorkspaceDocument } from './entities/workspace.entity';

@Injectable()
export class WorkspacesService {
  constructor(
    @InjectModel(Workspace.name)
    private workspaceModel: Model<WorkspaceDocument>,
  ) {}

  async create(CreateWorkspaceDTO: CreateWorkspaceDto): Promise<any> {
    const createdCat = new this.workspaceModel(CreateWorkspaceDTO);
    return createdCat.save();
  }

  async findAll(): Promise<Workspace[]> {
    return this.workspaceModel.find().exec();
  }

  async findById(id): Promise<Workspace> {
    const customer = await this.workspaceModel.findById(id).exec();
    return customer;
  }

  async find(req): Promise<any> {
    return await this.workspaceModel.find(req).exec();
  }

  async update(id, CreateWorkspaceDTO: UpdateWorkspaceDto): Promise<any> {
    return await this.workspaceModel.findByIdAndUpdate(id, CreateWorkspaceDTO, {
      new: true,
    });
  }

  async delete(id): Promise<any> {
    return await this.workspaceModel.findByIdAndRemove(id);
  }
}

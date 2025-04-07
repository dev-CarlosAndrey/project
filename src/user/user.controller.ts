import { Body, Controller, Post, Get, Param, Delete } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('users')
export class UserController {

    constructor(private readonly UserService: UserService) { }

    @Post()
    create(@Body() user: UserDto){
        return this.UserService.create(user)
    }

    @Get()
    @ApiOperation(
        {
            summary: 'Search all users',
            description: 'Return list of all users registered'
        }
    )
    findAll(){
        return this.UserService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string){
        return this.UserService.findById(id)
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return this.UserService.delete(id)
    }
    
}

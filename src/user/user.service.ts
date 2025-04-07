import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {

    private users: UserDto[] = []

    create(user: UserDto){
        this.users.push(user)
        return(user);
    }

    findAll(){
        return this.users;
    }

    findById(id: string){
        return this.users.find(user => user.id == id)
    }

    updateUser(id: string){
        
    }

    delete(id: string){
        const userIndex = this.users.findIndex(user => user.id == id);
        if (userIndex === -1 ) {
            return {message: "O id informado não existe."}
        }
        this.users.splice(userIndex, 1)
        return {message: "O usuario com o id informado foi deletado."}
    }
}

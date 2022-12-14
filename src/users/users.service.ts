import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users: any[]

  constructor(){
    this.users = [
      {
        userid: 1,
        username: 'farid', 
        password: 'farid123',
        pet: {
          name: 'jenny',
          picId: 1
        } 
      },
      {
        userid: 2,
        username: 'fadilah', 
        password: 'farid123',
        pet: {
          name: 'gopher',
          picId: 2
        } 
      }
    ]
  }
 async findOne(username: string): Promise<any> {
    return this.users.find(user => user.username === username)
 }
}

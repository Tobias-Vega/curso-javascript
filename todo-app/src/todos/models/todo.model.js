import { v7 as uuid, v7 } from 'uuid'


export class Todo {


  constructor(description) {

    this.id = v7();
    this.description = description;
    this.done = false;
    this.createdAt = new Date();

  }



}
export class Category {
     id?: string;
     name: string;
     position: number;
    
  
  
    constructor(id: string, name:string, position:number) {
      this.id = id;
      this.name = name;
      this.position = position;
    }
}

export default Element;
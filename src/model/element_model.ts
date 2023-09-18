export class Element {
     id?: string;
    private categoryId: string;
    private userId?: string;
     name: string;
     prix: number;
    private image: string;
    private description: string;
    
  
  
    constructor(id: string, categoryId:string, userId:string, name: string, prix: number, image: string, description:string) {
      this.id = id;
      this.categoryId = categoryId;
      this.userId = userId;
      this.name = name;
      this.prix = prix;
      this.image = image;
      this.description = description;
    }
}

export default Element;
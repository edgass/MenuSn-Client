export class SingleElementInCommande {
    private hotelId : string;
    private command: SingleElementInCommande;
    private emplacement: string;
    private date: Date;
    
  
  
    constructor(hotelId:string,command:SingleElementInCommande,emplacement: string,date:Date) {
      this.hotelId = hotelId;
      this.command = command;
      this.emplacement = emplacement;
      this.date = date;


    }
}

export default Element;
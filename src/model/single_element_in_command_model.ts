import Element from "./element_model";

export class SingleElementInCommandeModel {
     element: Element;
     quantity: number;
    
  
  
    constructor(element:Element,quantity: number) {
      this.element = element;
      this.quantity = quantity;

    }
}

export default SingleElementInCommandeModel;
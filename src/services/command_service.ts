import db from "../firebase-config";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Category } from "../model/category-model";
import Element from "../model/element_model";


//const elementsCollectionRef = collection(db, "elements");


export class CommandService{

    

    
   // async postNewCommand(hotelId:string,tableId:String,) : Promise<Element[]>{
        async postNewCommand(hotelId:string,tableId:String,clientName:string){
            var elements : Element[] = [];
            const storedValue = localStorage.getItem("command");
            if(storedValue !== null && storedValue !== ""){
                elements = JSON.parse(storedValue ?? "");
            }
       
        try{
             // Ajouter un nouveau document à la collection "commandes"
    const docRef = await addDoc(collection(db, "commande"), {
        hotelId:"dkzhbzek",
        emplacement: "Table 5",
        printed:false,
        delivered: false,
        elements: elements,
        state : "Attente",
        clientName:clientName
        
      });
  
      console.log("Commande créée avec succès !", docRef.id);
      return docRef.id;
        }catch(e){
            console.log(e);
        
        }
    }



    
/*     async getAllCategory(): Promise<Category[]>{
        var categorys : Category[] = [];
        const resp = db.collection('category');
        const elemResp = db.collection('elements');
        var data= await resp.get();
            data.docs.forEach (async(item)=>{
            
               var listElement = await db.collection('elements').where('userId' ,'==', 'jqbkvhqd').where('categoryId' ,'==', item.id).get();
             //  console.log("doc lengt "+listElement  )   
               if(1==1) {
                categorys = [...categorys,item.data()] as Category[];   
               }     
               })
           console.log(categorys)
                        return categorys;   
    } */

}

const commandService = new CommandService();
export default commandService;
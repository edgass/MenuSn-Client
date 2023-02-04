import db from "../firebase-config";
import { Category } from "../model/category-model";
import Element from "../model/element_model";


//const elementsCollectionRef = collection(db, "elements");


export class MenuService{

    

    
    async getAllElements(catId:string) : Promise<Element[]>{
       
        var elements : Element[] = [];
        try{
            const resp = db.collection('elements');
            // var data= await resp.get();
             var data= await resp.where('userId' ,'==', 'jqbkvhqd').where('categoryId' ,'==', catId).get();
         
                 data.docs.forEach(item=>{
                     console.log(item)
                   elements = [...elements,item.data()] as Element[];
              //  var element : Element = new Element(item.id,item.data().name,item.data().userId,item.data().name,item.data().prix,item.data().image,item.data().description);
                //   elements = [...elements,element] as Element[];
                    })
               //  console.log(elements)
                             return elements;  
        }catch(e){
            console.log(e);
            return elements
        }
    }
    async getAllRestoElements(){       
    }

    async getAllCategory(): Promise<Category[]>{
        var categorys : Category[] = [];
        try{
           
            const resp = db.collection('category');
            var data= await resp.get();
    
                data.docs.forEach(item=>{
                    var category : Category = new Category(item.id,item.data().name,item.data().position);
                    console.log(category)
                 //  categorys = [...categorys,item.data()] as Category[];           
                    categorys = [...categorys,category] as Category[];           
                   })
             
                            return categorys;  
        }catch(e){
            console.log(e)
            return categorys; 
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

    async getElementsListCategoryByResto(){
        
    }

    async getSingleElement(){
        
    }
}

const menuService = new MenuService();
export default menuService;
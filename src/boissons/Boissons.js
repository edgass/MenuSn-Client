import React from 'react';
import { SingleFood } from "../single_food";


export function Boissons(){
    const boissons = [
        {
            id:1,
            name:"Boisson Drink",
            prix:"2500",
            link:"https://assets.isu.pub/document-structure/210331224409-5e4befbb1a7a8ed5290f163810089fa6/v1/e96af03fbfd7435c447dca0e03176840.jpg"
        },
        {
            id:2,
            name:"Rafraish Ete",
            prix:"3000",
            link:"https://epicier.ca/wp-content/uploads/2021/06/Quoi-boire-avec-des-repas-ete-au-BBQ.jpg"
        },
        {
            id:3,
            name:"Sodas",
            prix:"1500",
            link:"https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2019.2F07.2F10.2Ff5231d06-acc2-432f-bcbc-bc63a8c19276.2Ejpeg/1200x900/quality/80/crop-from/center/sodas-jus-de-fruit-7-bonnes-raisons-d-eviter-les-boissons-sucrees.jpeg"
        },
        {
            id:4,
            name:"Bissap",
            prix:"2000",
            link:"https://www.awalebiz.com/images/blog/11/50373_w1024h768c1cx3000cy2002-min.jpg"
        },
    ]
    return(
        <div className="px-10 py-5 w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            { boissons.map((boisson) => (<SingleFood name={boisson.name} price={boisson.prix} link={boisson.link}/>))}
        </div>
    )

}

export default Boissons;
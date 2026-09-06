
export interface Product{
 title: string;
 category:string;
description: string;
id:number;
image:string;
price:number;
rating:{
    count:number;
    rate:number;
}
}

export interface ProductCardProps{
    product:Product
}
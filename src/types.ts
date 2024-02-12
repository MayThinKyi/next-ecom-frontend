export type Image={
    color:string,
    colorCode: string,
    image:
    string,
}
export type User={
    id: string,
    name: string,
    email: string,
    image:string,
    createdAt:string,
    updatedAt: string,
    role: string,
}
export type Review={
    id: string,
    userId: string,
    productId: string,
    rating: number,
    comment:string,
    createdDate:string,
    user:User ,
  } 
export type Product={
    id: string,
    name: string,
    description:string,
    price: number,
    brand: string,
    category: string,
    inStock: boolean,
    images: Image[],
    reviews: Review[]
}
export type CartProduct={
  id:number;
  productId:string;
  name:string;
  price:number;
  brand:string;
  category:string;
  selectedImage:Image;
  quantity:number;
}

export type CartContextType={
  cartProducts:CartProduct[];
  addProduct:(product:CartProduct)=>void;
  clearCart:()=>void;
  removeCartItem:(cartId:number)=>void;
  addQuantity:(cartId:number)=>void;
  decreaseQuantity:(cartId:number)=>void;
}
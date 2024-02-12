import ProductDetails from '@/components/ProductDetails';
import { products } from '@/utils/products';
import { Metadata } from 'next';

type Props={
    params:{
        productId:string;
    }
}
export function generateMetadata({params:{productId}}:Props):Metadata{
    const product=products.filter((product)=>product.id===productId)[0];
    return {
        title:product.name,
        description:product.description
    }
}

const ProductDetailsPage = ({params:{productId}}:Props) => {
   
  return (
    <ProductDetails productId={productId} />
  )
}

export default ProductDetailsPage

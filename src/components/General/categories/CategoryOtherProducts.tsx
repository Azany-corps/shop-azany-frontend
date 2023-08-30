import React from 'react';
import ProductI from './ProductI';

interface CategoriesProps {
  styles: string;
  title: string;
  products?: any[];
}

const CategoryOtherProducts = ({ styles, title, products }: CategoriesProps) => {
  return (
    <div className="mx-12 my-10 xs:mx-auto">
      <div className={`${styles} px-8 py-4 flex justify-between rounded-tl-lg rounded-tr-lg`}>
        <p className="">{title}</p>
      </div>
      <div className="flex flex-row gap-4 py-4 items-center bg-white overflow-x-scroll">
        {products && products.length > 0 ? (
          products.map((product) => <ProductI key={product.id} data={product} />)
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}

export default CategoryOtherProducts;

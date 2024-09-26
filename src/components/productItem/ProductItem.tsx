import React from "react";
import Button from "../button/Button";
import { Products } from "../../types/server";

type ProductItem = Products 

function ProductItem({title , id , price , description , image , rating}:ProductItem) {
  return (
    <div className="border shadow rounded">
      <img src={image} className="rounded-t" alt="product Image" />
      <div className="flex  justify-between flex-row-reverse p-2 px-4">
        <h4>{id}</h4>
        <h3>{title}</h3>
        <span>{price}</span>
      </div>
      <div className=" px-4 line-clamp-2 text-justify">
        <p>
         {description}
        </p>
        <p>{rating.rate}</p>
        <p>{rating.count}</p>
      </div>
      <div>
        <Button variant="primary" className='rounded  flex justify-center mt-2 h-10 items-center  hover:bg-blue-100'>add to cart</Button>
      </div>
    </div>
  );
}

export default ProductItem;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { checkVariant } from "../../components/button/Button";
import { getProduct } from "../../services/api";
import { Products } from "../../types/server";

function Product() {
  const params = useParams<{id: string }>();
  const [productData , setProductData] = useState<Products>()
useEffect(()=>{
getProduct(params.id as string).then(result => setProductData(result))
},[])
  return (
    <Container>
      <div className="text-sm my-4 text-justify grid grid-cols-12 h-fit flex-row-reverse mt-6  rounded-2xl ">
        <div className="col-span-9 bg-blue-100 p-4 rtl  rounded-s-xl">
          <p className="">
            {productData?.description}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center px-2 col-span-3 bg-blue-200 border border-white rounded-e-2xl">
          <img
            src={productData?.image}
            className=" rounded  shadow-lg border mt-6"
            alt=""
          />
          <Button
            onClick={() => {
              alert("test");  
            }}
            style={{padding:"10px 20px" , borderRadius:"10px" , margin:"10px",boxShadow:"-1px 1px 5px 1px rgba(1 , 1 , 1 , 0.3)"}}
            variant="danger"
            id="btn-2"

          >
            add to cart
          </Button>
          {/* <Button
          style={{color:"red"}}
          variant="primary"
          >button2</Button>
          <Button
          variant="secondary"
          >gray</Button>
          <Button
          variant="success"
          >green</Button>
          <Button
          variant="warning"
          >yellow</Button> */}
        <div className="border flex flex-col rounded-xl shadow-inner text-center [&>*]:p-2 ">
        <div className="flex flex-col "><strong>Price : </strong><span>{productData?.price}</span><strong>cat : </strong><span>{productData?.category}</span></div>
          
        <div><span><strong>count : </strong>{productData?.rating.count}</span><span>{productData?.rating.rate}</span></div>
        </div>
        </div>
      </div>
    </Container>
  );
}

export default Product;

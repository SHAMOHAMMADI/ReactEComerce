import React from "react";
import Button from "../button/Button";

function ProductItem() {
  return (
    <div className="border shadow rounded">
      <img src="/10.jpg" className="rounded-t" alt="product Image" />
      <div className="flex  justify-between flex-row-reverse p-2 px-4">
        <h3>عنوان محصول</h3>
        <span>55$</span>
      </div>
      <div className=" px-4 line-clamp-2 text-justify">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
          ipsam, excepturi ad velit ullam quo nostrum soluta quaerat enim.
          Placeat ex incidunt debitis voluptatem perferendis perspiciatis magnam
          architecto mollitia iure obcaecati, voluptates expedita quis, ipsum,
          quibusdam laboriosam facere aspernatur laborum provident voluptas.
          Aspernatur itaque consequatur quae inventore autem doloribus laborum.
        </p>
      </div>
      <div>
        <Button>add to cart</Button>
      </div>
    </div>
  );
}

export default ProductItem;

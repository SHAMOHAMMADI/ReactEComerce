import React from "react";
import Button from "../button/Button";

function CartItem() {
  return (
    <div className=" border shadow-md rounded flex flex-col justify-center text-right ">
      <img src="/12.jpg" alt="itemPicture" className="w-full rounded-md " />
      <div className="p-4">
        <h3>عنوان محصول</h3>
        <div>توضیح</div>
        <div className="grid grid-cols-4 text-right [&>*]:my-4">
          <Button
            variant="primary"
            style={{ borderRadius: "10px", maxWidth: "120%" }}
          >
            +
          </Button>
          <span className="border text-center mx-2">{2}</span>
          <Button
            variant="primary"
            style={{
              borderRadius: "10px",
              border: "1px solid",
              maxWidth: "120%",
            }}
          >
            -
          </Button>
          <Button
            variant="danger"
            style={{ borderRadius: "10px", maxWidth: "4 rem" }}
          >
            حذف
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

import React from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import { checkVariant } from "../../components/button/Button";

function Product() {
  const params = useParams();

  return (
    <Container>
      <div className="text-sm my-4rounded-lg text-justify grid grid-cols-12 h-36 flex-row-reverse">
        <div className="col-span-9 bg-blue-100 p-4 rtl">
          <p className="">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center px-2 col-span-3 bg-blue-200 ">
          <img
            src="/11.jpg"
            className=" rounded  shadow-lg border my-auto"
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
        </div>
      </div>
    </Container>
  );
}

export default Product;

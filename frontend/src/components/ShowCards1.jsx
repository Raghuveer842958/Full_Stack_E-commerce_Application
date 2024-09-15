import React from "react";
import BestProductCart from "./cards/BestProductCart";
import TwoProductCartBox from "./cards/TwoProductCartBox";
import ThreeProductCartBox from "./cards/ThreeProductCartBox";
import FourProductCartBox from "./cards/FourProductCartBox";
import useGetProductsByCategories from "../customHooks/useGetProductsByCategories";

const ShowCards1 = () => {
  const data1 = useGetProductsByCategories("66e434df2751888d32bc2aa1"); // furniture
  const data2 = useGetProductsByCategories("66e632676684d546aff07b13"); // Shirt
  const data3 = useGetProductsByCategories("66e639e76684d546aff07b94"); // Women Shirt
  const data4 = useGetProductsByCategories("66e63eb86684d546aff07c14"); // girl Dress

  // https://www.freepik.com/free-photos-vectors/ecommerce-product  //main source
  // https://www.freepik.com/free-photos-vectors/shoes //for images
  const data5 = [
    {
      name: "First",
      image:
        "https://img.freepik.com/free-photo/3d-illustration-computer-with-paper-bags-credit-cards_58466-14581.jpg?size=626&ext=jpg&ga=GA1.1.512504967.1726394299&semt=ais_hybrid",
    },
    {
      name: "Second",
      image:
        "https://img.freepik.com/premium-photo/online-fashion-retail-catalog-display-with-clothing-accessories-layout_1299106-16009.jpg?size=626&ext=jpg&ga=GA1.1.512504967.1726394299&semt=ais_hybrid",
    },
  ];
  const data6 = [
    {
      name: "First",
      image:
        "https://img.freepik.com/free-photo/laptop-blank-screen-hopping-cart-full-gifts-with-copyspace-online-shopping-concept_1423-92.jpg?size=626&ext=jpg&ga=GA1.1.512504967.1726394299&semt=ais_hybrid",
    },
    {
      name: "Second",
      image:
        "https://img.freepik.com/free-photo/front-view-cyber-monday-composition_23-2149055981.jpg?size=626&ext=jpg&ga=GA1.1.512504967.1726394299&semt=ais_hybrid",
    },
  ];
  const allImages = [
    {
      name: "First",
      image:
        "https://img.freepik.com/free-photo/laptop-blank-screen-hopping-cart-full-gifts-with-copyspace-online-shopping-concept_1423-92.jpg?size=626&ext=jpg&ga=GA1.1.512504967.1726394299&semt=ais_hybrid",
    },
    {
      name: "Second",
      image:
        "https://img.freepik.com/free-photo/front-view-cyber-monday-composition_23-2149055981.jpg?size=626&ext=jpg&ga=GA1.1.512504967.1726394299&semt=ais_hybrid",
    },
    {
      name: "Third",
      image:
        "https://img.freepik.com/free-photo/laptop-blank-screen-hopping-cart-full-gifts-with-copyspace-online-shopping-concept_1423-92.jpg?size=626&ext=jpg&ga=GA1.1.512504967.1726394299&semt=ais_hybrid",
    },
    {
      name: "Fourth",
      image:
        "https://img.freepik.com/free-photo/front-view-cyber-monday-composition_23-2149055981.jpg?size=626&ext=jpg&ga=GA1.1.512504967.1726394299&semt=ais_hybrid",
    },
    {
      name: "Fifth",
      image:
        "https://img.freepik.com/free-photo/beautiful-smart-asian-young-entrepreneur-business-woman-owner-sme-checking-product-stock-scan-qr-code-working-home_7861-1364.jpg?size=626&ext=jpg&ga=GA1.1.512504967.1726394299&semt=ais_hybrid",
    },
    {
      name: "Sixth",
      image:
        "https://img.freepik.com/free-photo/young-asian-woman-startup-small-business-freelance-seller-clothing-isolated-pink-background_74952-4116.jpg?size=626&ext=jpg&ga=GA1.1.512504967.1726394299&semt=ais_hybrid",
    },
    {
      name: "Seventh",
      image:
        "https://img.freepik.com/free-photo/beautiful-smart-asian-young-entrepreneur-business-woman-owner-sme-online-checking-product-stock-save-computer-working-home_7861-1475.jpg?size=626&ext=jpg&ga=GA1.1.512504967.1726394299&semt=ais_hybrid",
    },
  ];

  if (!data1 || !data2 || !data3 || !data4) return;

  // console.log(data1?.items, data2?.items, data3?.items, data4?.items);

  return (
    <div className="">
      <BestProductCart data={data3?.items?.slice(1, 6)} />
      <TwoProductCartBox data={data5} />
      <div className="flex border border-black m-2">
        <ThreeProductCartBox data={data1?.items?.slice(0, 3)} />
        <FourProductCartBox data={data1?.items?.slice(3, 7)} />
        <FourProductCartBox data={data1?.items?.slice(7, 11)} />
      </div>
      <BestProductCart data={data4?.items?.slice(1, 6)} />
      <div className="flex border border-black m-2">
        <FourProductCartBox data={data1?.items?.slice(0, 3)} />
        <FourProductCartBox data={data1?.items?.slice(3, 7)} />
        <ThreeProductCartBox data={data2?.items?.slice(7, 11)} />
      </div>
      <TwoProductCartBox data={data6} />
    </div>
  );
};

export default ShowCards1;

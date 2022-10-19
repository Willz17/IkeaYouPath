import CartItems from "./CartItems.js";

function Section_Item(props) {
  let Listing = props.ItemListing[0];
  let RecListing = props.ItemListing[1];
  console.log(RecListing);
  return (
    <div>
      {Listing.map((obj, index) => (
        <CartItems
          name={obj.name}
          section={obj.section}
          image={obj.img}
          recImage0={RecListing[0].img}
          recImage1={RecListing[1].img}
          recImage2={RecListing[2].img}
          recName0={RecListing[0].name}
          recName1={RecListing[1].name}
          recName2={RecListing[2].name}
        />
      ))}
    </div>
  );
}

export default Section_Item;

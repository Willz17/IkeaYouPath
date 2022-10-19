import CartItems from "./CartItems.js";

function Section_Item(props) {
  let Listing = props.ItemListing[0];
  let RecListing = props.ItemListing[1];

  return (
    <div>
      {Listing.map((obj, index) => (
        <CartItems
          name={obj.name}
          section={obj.section}
          image={obj.img}
          recImage={RecListing.img}
          recName={RecListing.name}
        />
      ))}
    </div>
  );
}

export default Section_Item;

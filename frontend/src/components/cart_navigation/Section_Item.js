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
          subSection={obj.subSection}
          price={obj.price}
          number={obj.number}
          image={obj.image}
          recImage={RecListing[0].image}
          recName={RecListing[0].name}
        />
      ))}
    </div>
  );
}

export default Section_Item;

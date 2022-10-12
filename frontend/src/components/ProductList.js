import NewSearch from "./NewSearch";

import './ProductList.css'
const ProductList = (props) => {
    const DUMMY_DATA = {
        Knives: {
            name1: "First Knife",
            name2: "Second Knife",
            name3: "Third Knife"
        }
    };    
    


    const fetchAllProduct = (term) => {
        // console.log(DUMMY_DATA.props)
        
        let products;
        
        if(term){

        }else{
         products = DUMMY_DATA.Knives;
        }
        return products;
    }
    // console.log(fetchAllProduct().name1)
    return (
        <div>
            <NewSearch />
            <ul className="ul_list">
                <li className="item_add">
                    {fetchAllProduct().name3}
                    <button className="add_to_cart" type="submit" >Add to cart</button>
                </li>
                <li>
                    {fetchAllProduct().name2}
                    <button className="add_to_cart" type="submit" >Add to cart</button>
                </li>
                <li>
                    {fetchAllProduct().name3}
                    <button className="add_to_cart" type="submit" >Add to cart</button>
                </li>
            </ul>
        </div>
        
      );
}

export default ProductList;
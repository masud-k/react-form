import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";



const Special = ({asset}) => {

    const gift = useContext(AssetContext);
    return (
        <div>
            <h3>Special</h3>
            <h4>Has: {asset}</h4>
            <h4>Also has: {gift}</h4>
        </div>
    );
};

export default Special;
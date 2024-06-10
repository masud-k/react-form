import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import './Grandpa.css'
import { createContext, useState } from "react";

export const AssetContext = createContext('gold')
export const MoneyContext = createContext(1000)

const Grandpa = () => {

    const [money, setMoney] = useState(1000)

    const asset = 'diamond'
    return (
        <div className="grandpa ">
            <h2>Grandfather</h2>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Father asset={asset}></Father>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;
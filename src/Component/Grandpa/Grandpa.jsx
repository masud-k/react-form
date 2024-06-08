import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import './Grandpa.css'

const Grandpa = () => {
    return (
        <div className="grandpa ">
            <h2>Grandfather</h2>
            <section className="flex">
                <Father></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";

const Grandpa = () => {
    return (
        <div>
            <h3>Grandpa</h3>
            <Father></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
        </div>
    );
};

export default Grandpa;
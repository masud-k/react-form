import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";


const Father = ({asset}) => {
    return (
        <div>
            <h3>Father</h3>
            <section className="flex">
                <Myself asset={asset} />
                <Brother />
                <Sister />
            </section>
        </div>
    );
};

export default Father;
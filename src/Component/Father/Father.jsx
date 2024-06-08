import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";


const Father = () => {
    return (
        <div>
            <h3>Father</h3>
            <section className="flex">
                <Myself />
                <Brother />
                <Sister />
            </section>
        </div>
    );
};

export default Father;
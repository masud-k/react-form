import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className="flex">
                <Cousin name={'Dew'} asset={asset}></Cousin>
                <Cousin name={'Drops'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;
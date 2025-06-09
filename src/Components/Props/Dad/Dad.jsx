import Myself from "./Myself";
import Sister from "./Sister";


const Dad = () => {
    return (
        <div>
            <h2>Dad</h2>
            <section className="flex">
                <Myself></Myself>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;
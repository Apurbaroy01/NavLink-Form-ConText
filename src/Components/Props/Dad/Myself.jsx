import { useContext } from "react";
import { Data } from "../Props";




const Myself = () => {
    const girt=useContext(Data)
    return (
        <div>
            <h2>MySelf</h2>
            {girt}
           
        </div>
    );
};

export default Myself;
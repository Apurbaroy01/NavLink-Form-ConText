
import { useLoaderData } from "react-router-dom";
import User from "./User/User";


const About = () => {
    const user=useLoaderData()
    return (
        <div>
            <h1>User: {user.length}</h1>
            <div className="grid grid-cols-3 gap-5 p-6">
                {
                    user.map(user=><User user={user}></User>)
                }
                
            </div>
        </div>
    );
};

export default About;
import { useNavigate } from "react-router-dom";


const Error = () => {
    const navegate=useNavigate();

    const handleBack=()=>{
        navegate(-1)
        console.log('go back')
    }
    return (
        <div className='text-5xl text-center font-extrabold '>
            <h1> 404 Error 👊</h1>
            <button onClick={handleBack} className="btn">Back</button>
        </div>
    );
};

export default Error;
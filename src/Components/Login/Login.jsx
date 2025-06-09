

const Login = () => {

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data={
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }

        console.log("Submit data",data)
            
    }
    
    return (
        

        <div className="text-center">

            <h1 className="font-bold">Login Form</h1>


            <form onSubmit={handleSubmit}>

                <div className="space-y-4 mt-5">

                    <input type="text" name="name"  /> <br />
                    <input type="text" name="email"  /><br />
                    <input type="password" name="password" /><br />
                    <input className="btn" type="submit"  />

                </div>

            </form>
            
            
        </div>
    );
};

export default Login;
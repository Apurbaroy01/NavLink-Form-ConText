

const User = ({user}) => {
    const{id, name, email}=user
    return (
        <div className="border  rounded-2xl p-5 text-center"> 
            <div>
                <p>ID:{id}</p>
                <h2>Name: {name}</h2>
                <h2>Email: {email}</h2>
            </div>
            
        </div>
    );
};

export default User;
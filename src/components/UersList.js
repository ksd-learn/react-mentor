export const UsersList = ({ users, deleteUser }) => {
    return (
        <ul> 
            {users.map(({name, email, id}) => {
                return (
                    <li key={id}>
                        <p>Name:{name}</p>
                        <p>Email:{email}</p>
                    <button onClick={() => {deleteUser(id)}} >Delete</button>
                    </li>
                );
            })}
        </ul>
    )
}
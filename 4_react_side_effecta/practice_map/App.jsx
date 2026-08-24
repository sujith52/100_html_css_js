function App(){
    const fruitsarray = ['apple','mango','lime','sweetmango','ginger','beetroot']
    const users = [
        { id: 1, name: 'Alice', role: 'Designer', online: true },
        { id: 2, name: 'Bob', role: 'Developer', online: false },
        { id: 3, name: 'Charlie', role: 'Admin', online: true },
    ];
    const categories = [
        {
            id: 'cat1',
            title: 'Work',
            tasks: [{ id: 't1', text: 'Email Boss', priority: 'High' }, { id: 't2', text: 'Submit Report', priority: 'Low' }]
        },
        {
            id: 'cat2',
            title: 'Personal',
            tasks: [{ id: 't3', text: 'Buy Milk', priority: 'High' }]
        }
        ];
    
    return(
        <>
       {/* {categories.map((categories)=> (
            {tasks.priority === 'High' ? 'All is completed man'}
       ))} */}


        </>
    )
}

















{/* <h1>It is div man!</h1>
            <ul>
            {fruitsarray.map((fruits, index)=>(
                <li key={index}>{fruits}</li>
            ))}
            </ul> */}

 {/* {users.map((users)=>(
            <div key={users.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                <h1 >{users.name}</h1>
                <p>{users.role}</p>
                <p style={{color : users.online ? 'green' : 'red'}}>
                    {users.online ? 'Online' : 'Offline'}</p>
            </div>
        ))} */}
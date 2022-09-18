const Todos = (props) => {


    return (
        <div>
            {props.todos.map((todo, index) => (
                <li>{todo.name} </li>

            ))}

        </div>
    )
};

export default Todos;
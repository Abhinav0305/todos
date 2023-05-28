import Todos from './Todos';

function TodoTable(props){
    //lets render dynamically the table rows-
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col">Assigned</th>
                </tr>
            </thead>
            <tbody>
            {
                props.todos.map(todo => {
                    return(
                        <Todos rowNumber = {todo.rowNumber}
                        rowDescription={todo.rowDescription}
                        rowAssigned={todo.rowAssigned}/>
                    )
                })
            }
            </tbody>
        </table>
    );
}

export default TodoTable;
import useFetch from '../../../Hooks/useFetch';
import './index.css'

function ItemsList() {
  const { data: todos, isLoading, isError} = useFetch('todos');

  if (isError) { return <p className='error'>Something went wrong...</p> }

  return (
    <div>
        <h2>Items List</h2>
        {isLoading ? <p>Loading...</p> : (
          <ul>
            {todos.map((item) => (
              <li key={item.id} className='item'>{item.title}</li>
            ))}
          </ul>
        ) }
    </div>
  );
}

export default ItemsList;

import { useSelector} from 'react-redux';

function App() {
  const todos = useSelector(state => state.todos.list)
  console.log(todos);
  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
    <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-3xl border">
          <div className="mb-4">
              <h1 className="text-gray-700 text-3xl font-bold">Todo List</h1>
              <div className="flex mt-4">
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-800" placeholder="Add Todo" />
                  <button className="p-2 border-2 rounded text-teal-500 border-teal-500  hover:text-white hover:bg-teal-500">Add</button>
              </div>
          </div>
          <div>
              <div className="flex mb-4 items-center">
                  <p className="mr-auto text-gray-700">Add another component to Tailwind Components</p>
                  <button className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600">Done</button>
                  <button className="p-1 px-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600">Remove</button>
              </div>
              <div className="flex justify-between mb-4 items-center">
                <p className="mr-auto line-through text-green-600">Submit Todo App Component to Tailwind Components</p>
                <div className="flex items-center">
                  <button className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray-400 hover:bg-gray-400">Not Done</button>
                  <button className="p-1 px-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600">Remove</button>
                </div>  
              </div>
          </div>
      </div>
  </div>
  );
}

export default App;

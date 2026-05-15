function Users(props) {

  return (
    <div className="grid grid-cols-4 gap-6 p-5">
      
      <div className="border p-5 rounded">
        <h2 className="text-2xl mb-3">User-1</h2>
        <button
          onClick={props.increment}
          className="p-3 bg-green-600 text-white rounded"
        >
          Add User
        </button>
      </div>

      <div className="border p-5 rounded">
        <h2 className="text-2xl mb-3">User-2</h2>
        <button
          onClick={props.increment}
          className="p-3 bg-green-600 text-white rounded"
        >
          Add User
        </button>
      </div>

      <div className="border p-5 rounded">
        <h2 className="text-2xl mb-3">User-3</h2>
        <button
          onClick={props.increment}
          className="p-3 bg-green-600 text-white rounded"
        >
          Add User
        </button>
      </div>

      <div className="border p-5 rounded">
        <h2 className="text-2xl mb-3">User-4</h2>
        <button
          onClick={props.increment}
          className="p-3 bg-green-600 text-white rounded"
        >
          Add User
        </button>
      </div>

    </div>
  );
}

export default Users;
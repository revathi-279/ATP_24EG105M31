import { useState } from "react";
import { useForm } from "react-hook-form";

function UserTable() {
  const [users, setUsers] = useState([]);
  const { register, handleSubmit, reset } = useForm();

  const onFormSubmit = (userObj) => {
    setUsers([...users, userObj]);
    reset();
  };

  return (
    <div className="m-5">
      <h1 className="text-4xl text-center text-rose-800">Create User & Add into Table</h1>
      
      <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
        {/* First name */}
        <div className="mb-3">
          <label htmlFor="fname">First Name</label>
          <input type="text" {...register("firstName")} id="fname" className= "m-1 w-full p-2 rounded border" />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email">Email ID</label>
          <input type="email" {...register("email")} id="email" className="m-1 w-full p-2 rounded border" />
        </div>

        {/* Date of Birth - Fixed ID to 'dob' */}
        <div className="mb-3">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" {...register("dateOfBirth")} id="dob" className="m-1 w-full p-2 rounded border" />
        </div>

        <button type="submit" className="block m-auto bg-rose-200 px-4 py-4 rounded-2xl text-rose-800 font-semibold">
          Add New User
        </button>
      </form>

      {/* Table to display List of Users */}
        <table className="mt-5 mx-auto text-1xl border">
          <thead>
            <tr>
              <th className="border px-5 py-3">First name</th>
              <th className="border px-5 py-3">Email ID</th>
              <th className="border px-5 py-3">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {users.map((userObj, index) => (
              <tr key={index}>
                <td className="border px-5 py-3">{userObj.firstName}</td>
                <td className="border px-5 py-3">{userObj.email}</td>
                <td className="border px-5 py-3">{userObj.dateOfBirth}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}

export default UserTable;
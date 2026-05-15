function Usercount(props) {
  console.log("Usercount component");

  return (
    <div className="mb-10">
      <h1 className="text-5xl text-rose-900">
        USER COUNT: {props.count}
      </h1>
    </div>
  );
}

export default Usercount;
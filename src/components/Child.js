function Child(props) {
  return (
    <div className={props.className ? props.className : "default-class"}>
      {/* <h3>Child Component</h3> */}
      {/* <p>{props.name}</p> */}
      {props.name ? <h3>Name: {props.name}</h3> : <p>No name passed</p>}
      {props.obj ? (
        <>
          <h3>
            Object: {props.obj.id} - {props.obj.name}
          </h3>
          <p>{props.obj.items}</p>
        </>
      ) : (
        <p>No object passed</p>
      )}
    </div>
  );
}

export default Child;

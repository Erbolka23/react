import { useParams } from "react-router-dom";

function UpdateOrder() {
  const { id } = useParams();

  return (
    <div className="container">
      <div className="card">
        <h1>Update Order</h1>
        <p>Editing order #{id}</p>

        <button>Save Changes</button>
      </div>
    </div>
  );
}

export default UpdateOrder;

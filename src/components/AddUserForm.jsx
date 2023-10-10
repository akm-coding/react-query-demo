import { useState } from "react";
import { useRequestProcessor } from "../req-processor/requestProcessor";
import axiosClient from "../utils/axios";

function AddUserForm() {
  const { mutate } = useRequestProcessor();
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    mutate("addUser", () =>
      axiosClient.post("/photos", { name }).then((res) => res.data)
    );
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button type="submit">Add User</button>
    </form>
  );
}

export default AddUserForm;

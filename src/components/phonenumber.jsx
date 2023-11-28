import React, { useState } from "react";

const Phonenumber = () => {
    const [data, setData] = useState("");
    console.log(data);
  return (
    <div className="form-floating">
    <input
      type="text"
      placeholder="Enter reg number"
      id="ph-no"
      className="form-control"
      onChange={(e) => setData(e.target.files)}
    />
    <label for="ph-no">
      <p>phone number </p>
    </label>
    </div>

  );
};

export default Phonenumber;

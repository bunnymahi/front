import React, { useState } from "react";

const Image = () => {
  const [imageSelected, setImageSelected] = useState(false);

  const handleImageChange = (e) => {
    
    if (e.target.files.length > 0) {
      setImageSelected(true);
    }
  };

  return (
    <div>
      <div className="upload">
        <label htmlFor="input-file">
          Upload image
        </label>
        <input
          type="file"
          id="input-file"
          onChange={handleImageChange}
        />
      </div>
      {imageSelected && (
        <button type="submit" id="btn">Submit</button>
      )}
    </div>
  );
};

export default Image;

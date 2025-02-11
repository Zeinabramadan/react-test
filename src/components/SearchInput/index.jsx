import React, { useState } from "react";

const SearchInput = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  console.log("SearchInput component rendered");

  return (
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
  );
};

export default React.memo(SearchInput);
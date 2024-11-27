// src/components/Form.js

import React, { useState } from "react";

function Form({ handleAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      id: Date.now(),
      quantity,
      description,
      
      packed: false,
    };

    handleAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Add an item:</h3>
      <input
        type="text"
        placeholder="Item description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        min="1"
        max="20"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;

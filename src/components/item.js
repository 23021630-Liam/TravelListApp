// src/components/Item.js

import React from "react";

function Item({ item, handleDeleteItem, handleUpdateItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => handleUpdateItem(item.id)}
      />
      <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
        {item.description} ({item.quantity})
      </span>
      <button onClick={() => handleDeleteItem(item.id)} aria-label="Delete item">
        ❌
      </button>
    </li>
  );
}

export default Item;

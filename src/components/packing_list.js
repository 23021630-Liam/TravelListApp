// src/components/PackingList.js

import React from "react";
import Item from "./item";

function PackingList({
  items,
  sortCriteria,
  handleSortItems,
  handleDeleteItem,
  handleUpdateItem,
  handleClearItems,
}) {
  const sortedItems = [...items].sort((a, b) => {
    if (sortCriteria === "description") {
      return a.description.localeCompare(b.description);
    } else if (sortCriteria === "packed") {
      return a.packed === b.packed ? 0 : a.packed ? -1 : 1; // Packed first
    } else {
      return a.id - b.id; // Input order
    }
  });

  return (
    <div className="list">
      <div className="actions">
        <select
          onChange={(e) => handleSortItems(e.target.value)}
          value={sortCriteria}
        >
          <option value="inputOrder">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
        <button onClick={handleClearItems}>Clear All</button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem}
            handleUpdateItem={handleUpdateItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;

// src/App.js

import React, { useState } from "react";
import Logo from "./components/logo";
import Form from "./components/form";
import PackingList from "./components/packing_list";
import Stats from "./components/stats";

function App() {
  const [items, setItems] = useState([]); // State for list items
  const [sortCriteria, setSortCriteria] = useState("inputOrder"); // Sorting criteria

  // Add a new item
  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  // Delete an item by ID
  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  // Update an item's packed status
  function handleUpdateItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Update sorting criteria
  function handleSortItems(criteria) {
    setSortCriteria(criteria);
  }

  // Clear all items
  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList
        items={items}
        sortCriteria={sortCriteria}
        handleSortItems={handleSortItems}
        handleDeleteItem={handleDeleteItem}
        handleUpdateItem={handleUpdateItem}
        handleClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
const input = screen.getByPlaceholderText(/New Task/i);

export default App;

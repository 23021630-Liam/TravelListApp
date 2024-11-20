import React, { useState } from 'react';

function Logo() {
  return <h1>My Travel List</h1>;
}

function Form({ handleAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (description.trim() === "") {
      alert("Description cannot be empty.");
      return;
    }

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    handleAddItem(newItem);


    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>

      <select
        id="quantity"
        name="quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <input
        type="text"
        id="description"
        name="description"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

function Item({ item }) {
  return (
    <li style={{ textDecoration: item.packed ? "line-through" : "none" }}>
      {item.description} (x{item.quantity})
    </li>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage =
    totalItems > 0 ? ((packedItems / totalItems) * 100).toFixed(2) : 0;

  return (
    <footer className="stats">
      <em>
        You have {totalItems} items in the list. You already packed {packedItems} (
        {packedPercentage}%).
      </em>
    </footer>
  );
}

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList items={items} />
      <Stats items={items} />
    </div>
  );
}

export default App;

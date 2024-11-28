import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Item from "./Item";



function PackingList({ items, togglePacked, updateQuantity, deleteItem, updatePriority }) {
  const lowPriorityItems = items.filter(item => item.priority === 'low');
  const mediumPriorityItems = items.filter(item => item.priority === 'medium');
  const highPriorityItems = items.filter(item => item.priority === 'high');

  return (
    <div className="list">
      <ul>
        {/* Render items with high priority */}
        {highPriorityItems.map((item) => (
          <li key={item.id}>
            <Item
              item={item}
              togglePacked={togglePacked}
              updateQuantity={updateQuantity}
              deleteItem={deleteItem}
              updatePriority={updatePriority}
            />
          </li>
        ))}

        {/* Render items with medium priority */}
        {mediumPriorityItems.map((item) => (
          <li key={item.id}>
            <Item
              item={item}
              togglePacked={togglePacked}
              updateQuantity={updateQuantity}
              deleteItem={deleteItem}
              updatePriority={updatePriority}
            />
          </li>
        ))}

        {/* Render items with low priority */}
        {lowPriorityItems.map((item) => (
          <li key={item.id}>
            <Item
              item={item}
              togglePacked={togglePacked}
              updateQuantity={updateQuantity}
              deleteItem={deleteItem}
              updatePriority={updatePriority}
            />
          </li>
        ))}

      </ul>
    </div>
  );
}

function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = totalItems > 0 ? Math.round((packedItems / totalItems) * 100) : 0;

  // Filter items by priority
  const lowPriorityItems = items.filter(item => item.priority === 'low');
  const mediumPriorityItems = items.filter(item => item.priority === 'medium');
  const highPriorityItems = items.filter(item => item.priority === 'high');

  // Calculate packed items by priority
  const lowPriorityPacked = lowPriorityItems.filter(item => item.packed).length;
  const mediumPriorityPacked = mediumPriorityItems.filter(item => item.packed).length;
  const highPriorityPacked = highPriorityItems.filter(item => item.packed).length;

  // Calculate packed percentage by priority
  const lowPriorityPercentage = lowPriorityItems.length > 0 ? Math.round((lowPriorityPacked / lowPriorityItems.length) * 100) : 0;
  const mediumPriorityPercentage = mediumPriorityItems.length > 0 ? Math.round((mediumPriorityPacked / mediumPriorityItems.length) * 100) : 0;
  const highPriorityPercentage = highPriorityItems.length > 0 ? Math.round((highPriorityPacked / highPriorityItems.length) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        You have {totalItems} items in the list. You already packed {packedItems} ({packedPercentage}%).
      </em>
      <div>
        <h4>Priority Breakdown:</h4>
        <p>Low Priority: {lowPriorityPacked} packed ({lowPriorityPercentage}%)</p>
        <p>Medium Priority: {mediumPriorityPacked} packed ({mediumPriorityPercentage}%)</p>
        <p>High Priority: {highPriorityPacked} packed ({highPriorityPercentage}%)</p>
      </div>
    </footer>
  );
}

function App() {
  const [items, setItems] = useState([
    { id: 1, description: "Shirt", quantity: 5, packed: false, priority:"medium" },
    { id: 2, description: "Pants", quantity: 2, packed: false, priority: "medium" },
  ]);

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  function togglePacked(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function updateQuantity(id, quantity) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  }

  function updatePriority(id, newPriority) {
    setItems((prevItems) =>
        prevItems.map((item) =>
            item.id === id ? { ...item, priority: newPriority } : item
        )
    );
}

  function deleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList
        items={items}
        togglePacked={togglePacked}
        updateQuantity={updateQuantity}
        deleteItem={deleteItem}
        updatePriority={updatePriority}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;

import { useState } from "react";

export default function Form({ handleAddItem }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [priority, setPriority] = useState("medium");

    function handleSubmit(e) {
        e.preventDefault();
        if (description) {
            const newItem = {
            id: Date.now(),
            description: description,
            quantity: quantity,
            priority: priority,
            packed: false,
            };
            handleAddItem(newItem);
            setDescription("");
            setQuantity(1);
            setPriority("medium");
        }
        }
    
        return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need to pack?</h3>
            <label>
            <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            >
                {[...Array(11).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                    {num + 1}
                </option>
                ))}
            </select>
            </label>
            <input
            type="text"
            placeholder="Item..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <label>
                Priority:
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </label>
            <button type="submit">Add</button>
        </form>
        );
    }
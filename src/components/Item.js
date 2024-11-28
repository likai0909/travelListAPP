
export default function Item({ item, togglePacked, updateQuantity, deleteItem, updatePriority }) {
        return (
        <div className="item">
            <label>
            <input
                type="checkbox"
                checked={item.packed}
                onChange={() => togglePacked(item.id)}
            />
            <span
                style={{
                textDecoration: item.packed ? "line-through" : "none",
                }}
            >
                {item.description} ({item.quantity})
            </span>
            </label>
            <select
            value={item.quantity}
            onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
            >
            {[...Array(11).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                {num + 1}
                </option>
            ))}
            </select>
            <button className="delete-button" onClick={() => deleteItem(item.id)}>
        Delete
    </button>
    <div className={`priority-indicator ${item.priority}`} />
    <h3>Priority: 
    <select 
        value={item.priority} 
        onChange={(e) => updatePriority(item.id, e.target.value)}
    >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
    </select>
</h3>
    
        </div>
        );
    }
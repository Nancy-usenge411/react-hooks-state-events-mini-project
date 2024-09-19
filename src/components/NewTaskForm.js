import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // Initialize state for text and category
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") {
      alert("Task details cannot be empty");
      return;
    }

    const newTask = {
      text: text,       
      category: category, 
    };

  
    onTaskFormSubmit(newTask);

    // Reset form fields after submission
    setText("");
    setCategory(categories[0]);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)} // Updates state on input change
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category} 
          onChange={(e) => setCategory(e.target.value)} // Updates state on selection change
        >
          {categories
            .filter((cat) => cat !== "All") 
            .map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

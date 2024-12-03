import {useState} from "react";

function TagList({ value, onChange }) {
    const [currentTag, setCurrentTag] = useState("");
  
    const addTag = (e) => {
      if (e.key === "Enter" && currentTag.trim() !== "") {
        e.preventDefault();
        if (!value.includes(currentTag)) {
          onChange([...value, currentTag.trim()]); 
          setCurrentTag("");
        }
      }
    };
  
    const removeTag = (index) => {
      onChange(value.filter((_, i) => i !== index)); 
    };
  
    return (
      <div className="bg-transparent border-2 rounded-lg border-gray-600 focus:border-white flex flex-wrap items-center p-2 gap-1">
        {value.map((tag, index) => (
          <div
            key={index}
            className="bg-blue-600 text-white px-3 py-1 rounded-lg flex items-center gap-2"
          >
            {tag}
            <button
              type="button"
              className="text-red-400 font-bold"
              onClick={() => removeTag(index)}
            >
              ×
            </button>
          </div>
        ))}
        <input
          id="tag-input"
          type="text"
          className="bg-transparent border-none flex-grow focus:border-none focus:ring-transparent"
          placeholder="Enter a tag..."
          value={currentTag}
          onChange={(e) => setCurrentTag(e.target.value)}
          onKeyDown={addTag}
          name="taglist"
        />
      </div>
    );
  }
  
  export default TagList;
  
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = ({ value, onChange }) => {
  
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: [] }],
      [{ background: [] }]
    ],
  };

  const formats = [
    "header", 
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "link",
    "color",
    "image",
     "color", "background"
  ];

  return (
    <ReactQuill
      value={value}
      onChange={onChange} // Pass changes to Formik
      modules={modules}
      formats={formats}
      placeholder="Start typing..."
      name="textEditor"
    />
  );
};

export default TextEditor;

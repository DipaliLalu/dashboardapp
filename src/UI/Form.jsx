import FileUpload from "./FileUpload/FileUpload";
import TagList from "./TagList/TagList";
import TextEditor from "./Quill/TextEditor";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { validationSchema } from "../schemas";
import { useNavigate } from "react-router-dom";

function Form({ curData }) {
  const notify = () => toast.success('Blog Created');
  const update = () => toast.success('Blog Edited');
  const userData = JSON.parse(localStorage.getItem('isAuthenticate'));
  const data = JSON.parse(localStorage.getItem('blogData')) || [];
  const navigate = useNavigate();

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const initialValues = {
    title: curData?.title || "",
    description: curData?.description || "",
    fileupload: curData?.fileupload || null,
    textEditor: curData?.textEditor || "",
    taglist: curData?.taglist || [],
    user: userData?.user,
    // id:curData?.id||id,
  };

  const { values, handleChange, errors, handleSubmit, touched, setFieldValue } = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        let base64Image;
        if (values.fileupload instanceof File) {
          base64Image = await toBase64(values.fileupload);
        } else if (curData && curData.fileupload) {
          base64Image = curData.fileupload;
        } else {
          base64Image = null;
        }
        // console.log('path',values.fileupload);
        values.fileupload = base64Image;
        const blogData = {
          ...values
        };
        console.log(blogData)
        if (curData) {
          const updatedData = data.map((item) =>
            item.title === curData.title ? blogData : item
          );
          localStorage.setItem("blogData", JSON.stringify(updatedData));
          resetForm();
          update();
          navigate('/bloglist')
        } else {
          data.push(blogData);
          localStorage.setItem("blogData", JSON.stringify(data));
          resetForm();
          notify();
        }

      } catch (error) {
        console.error("Error processing the image:", error);
      }
    },
  });
  const titleAllow = data.filter((e) => e.title === values.title);
  console.log(titleAllow)

  return (
    <form
      className="dark:bg-gray-900 p-2 md:p-10 rounded-xl dark:text-white flex flex-col gap-5 w-full overflow-auto"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="bg-transparent border-2 rounded-lg focus:border-white"
          placeholder="Enter your blog title.."
          name="title"
          id="title"
          onChange={handleChange}
          value={values.title}
          disabled={curData}
        />
        {curData?null:titleAllow.length > 0 ? (<p className="text-red-500">Title already exists.</p>) : null}
        {errors.title && touched.title && <p className="text-red-500">{errors.title}</p>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="description">Description</label>
        <textarea
          className="bg-transparent border-2 rounded-lg focus:border-white"
          placeholder="Enter your blog description.."
          name="description"
          id="description"
          rows="4"
          cols="50"
          onChange={handleChange}
          value={values.description}
        />
        {errors.description && touched.description && (
          <p className="text-red-500">{errors.description}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="cover">Cover</label>
        <FileUpload
          value={values.fileupload}
          onChange={(file) => setFieldValue("fileupload", file)}
        />
        {errors.fileupload && touched.fileupload && (
          <p className="text-red-500">{errors.fileupload}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="content">Content</label>
        <TextEditor
          value={values.textEditor}
          onChange={(content) => setFieldValue("textEditor", content)}
        /></div>
      {errors.textEditor && touched.textEditor && (
        <p className="text-red-500">{errors.textEditor}</p>
      )}


      <div className="flex flex-col gap-2">
        <label htmlFor="tag-input">Tags</label>
        <TagList
          value={values.taglist}
          onChange={(tags) => setFieldValue("taglist", tags)}
        />
        {errors.taglist && touched.taglist && <p className="text-red-500">{errors.taglist}</p>}
      </div>

      <div className="flex justify-end">
        <button className="bg-blue-600 md:w-1/2 w-full p-3 rounded-xl text-white" type="submit">
          {curData ? "Save Changes" : "Create a Blog"}
        </button>
        <ToastContainer />

      </div>
    </form>
  );
}

export default Form;

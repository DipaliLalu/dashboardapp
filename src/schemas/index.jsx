import * as Yup from 'yup';
const checkAvailabilityUsername=(fullname)=>{
    const data=JSON.parse(localStorage.getItem('users'));
    return data.every((curele) => curele.fullname !== fullname);
}
export const signupSchema=Yup.object({
    fullname:Yup.string().min(2).max(25).required("Please enter fullname").test("fullname", "This name has already been taken", function (fullname) {
        return checkAvailabilityUsername(fullname);
}),
    email:Yup.string().email().required("Please enter email"),
    password:Yup.string().min(6).required("Please enter password"),
    mobileNo:Yup.string().max(10).required('Please enter mobile no.')
});

export const signinSchema=Yup.object({
    fullname:Yup.string().min(2).max(25).required("Please enter fullname"),
    password:Yup.string().min(2).max(25).required("Please enter password")
})
export const validationSchema = Yup.object({
    title: Yup.string().required("Title is required").min(3, "Title is too short"),
    description: Yup.string().required("Description is required"),
    fileupload: Yup.mixed().required("Cover image is required"),
    taglist: Yup.array().min(1, "At least one tag is required"),
    textEditor: Yup.string().required("Content is required"),
  });

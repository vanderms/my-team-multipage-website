import { Formik, Form, Field, ErrorMessage, yupToFormErrors } from "formik";
import * as Yup from "yup";

export default function ContactForm() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        company: "",
        title: "",
        message: "",
      }}
      validationSchema={Yup.object({
        name: Yup.string().max(30, "max 30 characters").required("field is required"),
        email: Yup.string().email().required("field is required"),
        company: Yup.string(),
        title: Yup.string(),
        message: Yup.string().required("field is required").max(600, "max 600 characters"),
      })}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      {(formik) => (
        <Form>
          <label>
            <span className="sr-only">Name:</span>
            <Field name="name" type="text" placeholder='Email'/>
            <span>
              <ErrorMessage name="name" />
            </span>
          </label>
          <label>
            <span className="sr-only">Email:</span>
            <Field name="email" type="email" placeholder='Email'/>
            <span>
              <ErrorMessage name="name" />
            </span>
          </label>
          <label>
            <span className="sr-only">Name:</span>
            <Field name="name" type="text" />
            <span>
              <ErrorMessage name="name" />
            </span>
          </label>
          <label>
            <span className="sr-only">Name:</span>
            <Field name="name" type="text" />
            <span>
              <ErrorMessage name="name" />
            </span>
          </label>
        </Form>
      )}
    </Formik>
  );
}

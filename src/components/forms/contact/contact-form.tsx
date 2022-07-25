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
        <Form
          className={`flex flex-col gap-6

          [&_input]:bg-transparent [&_input]:w-full [&_input]:border-b
          [&_input]:h-[2.625rem] [&_input]:px-4 [&_input]:text-[0.9375rem]

          [&_textarea]:bg-transparent [&_textarea]:w-full [&_textarea]:border-b 
          [&_textarea]:h-20 [&_textarea]:px-4  [&_textarea]:text-[0.9375rem]      
        `}
        >
          <label>
            <span className="sr-only">Name:</span>
            <Field
              name="name"
              type="text"
              placeholder="Name"
              className={
                formik.errors.name && formik.touched.name
                  ? "border-secondary"
                  : "border-neutral-50"
              }
            />
            <span className="text-[0.75rem] text-secondary font-bold">
              <ErrorMessage name="name" />
            </span>
          </label>
          <label>
            <span className="sr-only">Email:</span>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className={
                formik.errors.email && formik.touched.email
                  ? "border-secondary"
                  : "border-neutral-50"
              }
            />
            <span className="text-[0.75rem] text-secondary font-bold">
              <ErrorMessage name="email" />
            </span>
          </label>
          <label>
            <span className="sr-only">Company name:</span>
            <Field
              name="company"
              type="text"
              placeholder="Company Name"
              className={
                formik.errors.company && formik.touched.company
                  ? "border-secondary"
                  : "border-neutral-50"
              }
            />
            <span className="text-[0.75rem] text-secondary font-bold">
              <ErrorMessage name="company" />
            </span>
          </label>
          <label>
            <span className="sr-only">Title:</span>
            <Field
              name="title"
              type="text"
              placeholder="Title"
              className={
                formik.errors.title && formik.touched.title
                  ? "border-secondary"
                  : "border-neutral-50"
              }
            />
            <span className="text-[0.75rem] text-secondary font-bold">
              <ErrorMessage name="title" />
            </span>
          </label>
          <label>
            <span className="sr-only">Message:</span>
            <Field
              as="textarea"
              name="message"
              type="text"
              placeholder="Message"
              className={
                formik.errors.message && formik.touched.message
                  ? "border-secondary"
                  : "border-neutral-50"
              }
            />
            <span className="text-[0.75rem] text-secondary font-bold">
              <ErrorMessage name="message" />
            </span>
          </label>
          <div>
            <button
              type="submit"
              className="bg-neutral-50 text-neutral-850 h-12 w-[7.6875rem] text-[1.125rem] rounded-full"
            >
              submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

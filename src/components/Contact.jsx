import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { COMPANY, phoneLink, whatsappLink } from "../constants.js";

const contactValidationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
 
  phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Please enter a valid 10-digit phone number")
    .required("Phone number is required"),
 
  from: Yup.string()
    .required("Moving from location is required"),
 
  to: Yup.string()
    .required("Moving to location is required"),
 
  service: Yup.string()
    .required("Please select a service"),
});
export default function Contact() {
  const initialValues = {
    name: "",
    phone: "",
    from: "",
    to: "",
    service: "Home Relocation",
    message: "",
  };

  const onSubmit = (values) => {
    const subject = `New Relocation Enquiry from ${values.name || "Website"}`;

    const body =
      `New enquiry for ${COMPANY.name}\n\n` +
      `Name: ${values.name}\n` +
      `Phone: ${values.phone}\n` +
      `Moving from: ${values.from}\n` +
      `Moving to: ${values.to}\n` +
      `Service: ${values.service}\n` +
      `Message: ${values.message}\n`;

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(COMPANY.email)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <span className="section__eyebrow">Get In Touch</span>

          <h2 className="section__title">
            Contact India's Trusted Packers and Movers
          </h2>

          <p className="section__lead">
            Looking for reliable home shifting, office relocation, packing and
            moving, car transportation or warehousing services? Contact Suvidha
            Relocation Services today and get a free moving quote within 30
            minutes.
          </p>

          <ul className="contact__list">
            <li>
              <span className="contact__icon">📞</span>
              <div>
                <small>Call Us</small>
                <a href={`tel:${phoneLink(COMPANY.phonePrimary)}`}>
                  {COMPANY.phonePrimary}
                </a>
                {" / "}
                <a href={`tel:${phoneLink(COMPANY.phoneSecondary)}`}>
                  {COMPANY.phoneSecondary}
                </a>
              </div>
            </li>

            <li>
              <span className="contact__icon">✉️</span>
              <div>
                <small>Email Us</small>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </div>
            </li>

            <li>
              <span className="contact__icon">💬</span>
              <div>
                <small>WhatsApp</small>
                <a
                  href={whatsappLink(COMPANY.phonePrimary)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat with us instantly
                </a>
              </div>
            </li>
          </ul>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={contactValidationSchema}
          onSubmit={onSubmit}
        >
          {({ touched, errors }) => (
            <Form className="contact__form">
              <div className="contact__row">
                <div className="form__group">
                  <Field
                    name="name"
                    placeholder="Your Name"
                    className={touched.name && errors.name ? "input-error" : ""}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error-text"
                  />
                </div>

                <div className="form__group">
                  <Field
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className={
                      touched.phone && errors.phone ? "input-error" : ""
                    }
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error-text"
                  />
                </div>
              </div>

              <div className="contact__row">
                <div className="form__group">
                  <Field
                    name="from"
                    placeholder="Moving From"
                    className={touched.from && errors.from ? "input-error" : ""}
                  />
                  <ErrorMessage
                    name="from"
                    component="div"
                    className="error-text"
                  />
                </div>

                <div className="form__group">
                  <Field
                    name="to"
                    placeholder="Moving To"
                    className={touched.to && errors.to ? "input-error" : ""}
                  />
                  <ErrorMessage
                    name="to"
                    component="div"
                    className="error-text"
                  />
                </div>
              </div>

              <div className="form__group">
                <Field as="select" name="service">
                  <option value="Home Relocation">Home Relocation</option>
                  <option value="Office Relocation">Office Relocation</option>
                  <option value="Packing & Unpacking">
                    Packing &amp; Unpacking
                  </option>
                  <option value="Car & Bike Transport">
                    Car &amp; Bike Transport
                  </option>
                  <option value="Warehousing & Storage">
                    Warehousing &amp; Storage
                  </option>
                </Field>
                <ErrorMessage
                  name="service"
                  component="div"
                  className="error-text"
                />
              </div>

              <div className="form__group">
                <Field
                  as="textarea"
                  name="message"
                  rows="4"
                  placeholder="Tell us about your move..."
                  className={
                    touched.message && errors.message ? "input-error" : ""
                  }
                />
               
              </div>

              <button type="submit" className="btn btn--primary btn--block">
                Send Enquiry by Email
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

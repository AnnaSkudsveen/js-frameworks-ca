import { useForm } from "react-hook-form";

/**
 * Contact component renders a contact form where users can submit their inquiries.
 *
 * The form includes:
 * - Full name input (with validation for minimum length).
 * - Dropdown to select a subject (with validation).
 * - Email input (with validation for proper email format).
 * - Message textarea (with validation for minimum length).
 *
 * When submitted, the form logs the input data to the console.
 *
 * @component
 * @returns {JSX.Element} Contact form.
 */
function Contact() {
  const { register, handleSubmit } = useForm();

  /**
   * Handles the form submission.
   * Logs the form data to the console.
   *
   * @param {Object} data - The form data.
   */
  function onFormSubmit(data) {
    console.log(data);
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit(onFormSubmit)}>
      <h1 style={{ fontSize: "40px" }}>Contact us</h1>
      <input
        type="text"
        placeholder="Full name"
        {...register("fullName", {
          required: "Full Name is required",
          minLength: { value: 3, message: "Must be at least 3 characters" }
        })}
      />

      <select {...register("subject", { required: "Please select a subject" })}>
        <option value="" disabled selected>
          What's the Subject?
        </option>
        <option value="return-refund">Return & Refund</option>
        <option value="order-issue">Order Issue</option>
        <option value="product-inquiry">Product Inquiry</option>
        <option value="shipping">Shipping & Delivery</option>
        <option value="general">General Inquiry</option>
      </select>

      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email address"
          }
        })}
      />

      <textarea
        type="text"
        placeholder="Your message here"
        {...register("body", {
          required: "Message is required",
          minLength: { value: 3, message: "Must be at least 3 characters" }
        })}
      ></textarea>

      <button>Send</button>
    </form>
  );
}

export default Contact;

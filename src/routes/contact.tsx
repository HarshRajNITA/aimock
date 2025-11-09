// export default function ContactPage() {
//   return (
//     <div className="max-w-3xl mx-auto py-16 px-4">
//       <h1 className="text-3xl font-bold mb-4">Contact</h1>
//       <p className="text-gray-600 leading-relaxed">
//         If you have any queries or suggestions, feel free to reach out.
//       </p>
//       <ul className="mt-4 text-gray-700">
//         <li>Email: support@aimock.com</li>
//         <li>Phone: +91 XXXXX XXXXX</li>
//       </ul>
//     </div>
//   );
// }
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // Later: Send data to backend or email service
    alert("Thank you for reaching out! We will get back to you soon.");
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <p className="text-gray-600 mb-8">
        Have any questions, feedback or suggestions? Fill out the form below and we will
        get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded-lg p-6 border">
        <div>
          <label className="block text-sm font-medium mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300 outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black  text-white py-2 rounded-md font-medium transition"
        >
          Send Message
        </button>
      </form>

      {/* Contact Details Section */}
      {/* <div className="mt-10 p-6 border rounded-lg shadow-sm bg-gray-50">
        <h2 className="text-xl font-semibold mb-3">Our Contact Details</h2>
        <ul className="text-gray-700 space-y-1">
          <li>Email: <strong>support@aimock.com</strong></li>
          <li>Phone: <strong>+91 98765 43210</strong></li>
          <li>Location: <strong>India</strong></li>
        </ul>
      </div> */}
    </div>
  );
}

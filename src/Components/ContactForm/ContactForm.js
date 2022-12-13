import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xpznveno");
  if (state.succeeded) {
    return <p>I'll get in touch shortly</p>;
  }
  return (
    <div className="lg:w-3/4 bg-stone-300 mx-auto p-10 pb-20 mb-11">
      <h1 className=" text-zinc-900 text-3xl font-bold mt-10">Contact Me</h1>
      <form className="lg:w-1/2 mx-auto" onSubmit={handleSubmit}>
        <label
          className="block text-zinc-900 text-start font-semibold mt-10 mb-2"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          className="input input-bordered inline-block w-full"
          id="email"
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label className="block text-zinc-900 text-start font-semibold mt-10 mb-2">
          Your message
        </label>
        <textarea
          className="textarea textarea-bordered h-24 inline-block w-full"
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="btn btn-error text-white block w-full mt-5"
          type="submit"
          disabled={state.submitting}
        >
          Send Your Email
        </button>
      </form>
    </div>
  );
}
function App() {
  return <ContactForm />;
}
export default App;

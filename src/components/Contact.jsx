import React, { useLayoutEffect } from "react";
import FAQ from "./FAQ";

function Contact() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className="flex flex-col row container space-y-4">
      <div className="flex flex-col px-10">
      <h1 className="text-3xl">Contact</h1>
      <p className="text-2xl">
        Have a question? We'd love to hear from you. We do our best to respond
        within one business day.
      </p>
      <div className="space-y-2">
        <p className="text-xl">Email</p>
        <p className="text-xl">7 days a week</p>
      </div>

      <div className="space-y-2">
        <p className="text-xl">Phone:</p>
        <p className="text-xl">000-000-0000</p>
        <p className="text-xl">Monday - Friday 7am - 9pm EST</p>
        <p className="text-xl">Saturday - Sunday 10am - 5pm EST</p>
      </div>

      <div className="space-y-2">
        <p className="text-xl">Address:</p>
        <p className="text-xl">1234 Example Street, New York, US</p>
      </div>
      </div>
      

      <FAQ />
    </div>
  );
}

export default Contact;

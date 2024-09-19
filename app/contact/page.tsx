"use client";
import Link from "next/link";
import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Contact me</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
          </div>
          <button type="submit">Send</button>
        </form>
          <h3>Get in touch</h3>
          <p>
            If you have any questions or would like to work together, please
            feel free to reach out to me.
          </p>
          <Link href="/contact">Email me</Link>
      </div>
    </div>
  );
};

export default Contact;

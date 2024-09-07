"use client";
import Link from "next/link";
import React from "react";

import "./contact.css";

type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="contact-container">
      Connnect with me on the following platforms:
      <div className="social-links">
        <Link className="mr-5" href="https://www.instagram.com/calledahsan/ ">
          Instagram
        </Link>
        <Link className="mr-5" href="https://www.facebook.com/calledahsan">
          Facebook
        </Link>
        <Link className="mr-5" href="https://www.linkedin.com/in/calledahsan/">
          LinkedIn
        </Link>
      </div>
    </div>
  );
};

export default Contact;

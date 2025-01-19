import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  message,
}) => (
  <div>
    <h1>Message from, {name}</h1>
    <p>{email}</p>
    <p>{phone}</p>
    <p>{message}</p>
  </div>
);

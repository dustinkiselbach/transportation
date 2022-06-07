import { rgba } from "polished";
import React from "react";
import styled from "styled-components";

interface ContactFormProps {
  onChange: (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  formRef: React.RefObject<HTMLFormElement>;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  onChange,
  formRef,
}) => {
  return (
    <Form ref={formRef}>
      <label htmlFor="name">Name or Email*</label>
      <input
        name="name"
        type="text"
        placeholder="Name or Email"
        {...{ onChange }}
      />
      <label htmlFor="subject">Subject*</label>
      <input
        name="subject"
        type="text"
        placeholder="Subject"
        {...{ onChange }}
      />
      <label htmlFor="message">Message*</label>
      <textarea
        name="message"
        placeholder="Your message..."
        {...{ onChange }}
      />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    color: ${(props) => rgba(props.theme.colors.colorText, 0.75)};
  }

  input,
  textarea {
    background-color: ${(props) => props.theme.colors.colorOffWhite};
    border: none;
    padding: 1rem;
    margin: 1rem 0;
    &:focus {
      outline: 2px solid ${(props) => props.theme.colors.colorSecondary};
    }
  }
`;

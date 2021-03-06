import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { rgba } from "polished";
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { ContactForm } from "../components/ContactForm";

import { Layout } from "../components/Layout";
import { CONTACT_SEO } from "../seo/next-seo.config";
import Image from "next/image";
import { SectionHeader } from "../components/SectionHeader";

const Contact: React.FC = ({}) => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.currentTarget.name]: e.currentTarget.value });
  };

  const onSubmit = async () => {
    setLoading((isLoading) => !isLoading);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 4000);
      } else {
        // const info = await res.json()
        // console.log(info)
        router.push("contact/success");
      }
    } catch (e) {
      console.log("Error:" + e);
    }
    setLoading((isLoading) => !isLoading);
  };

  return (
    <>
      <NextSeo {...CONTACT_SEO} />
      <Layout>
        <SectionHeader title="Contact">
          <ContactContent>
            <ContactItems>
              <h2>Contact Us</h2>
              <ContactItem>
                <li>Donny Ybarra, Mobility Manager</li>
                <li>phone: (315) 366-8190</li>
                <li>fax: (315) 684-9290</li>
                <li>email: dymobility@gmail.com</li>
              </ContactItem>
              <ContactItem>
                <li>Madison County Rural Health Council</li>
                <li>100 Eaton St, PO Box 187 Morrisville, NY 13408</li>
              </ContactItem>
              <Image
                src="/GOMADISONNY.png"
                alt="Rural Health Logo"
                width={226}
                height={226}
              />
            </ContactItems>
            <ContactFormContainer>
              <h2>Send Us a Message!</h2>
              <ContactForm {...{ onChange }} />
              <ErrorMsg>{error ? "Please complete all fields" : null}</ErrorMsg>
              <Button text="Send Message" {...{ onSubmit, loading }} />
            </ContactFormContainer>
          </ContactContent>
        </SectionHeader>
      </Layout>
    </>
  );
};

export default Contact;

const ContactContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  h2 {
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const ContactItems = styled.div`
  flex: 1;
  @media (max-width: 600px) {
    flex: 0 0 100%;
  }
`;

const ContactItem = styled.ul`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  li {
    &:first-child {
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    &:not(:first-child) {
      color: ${(props) => rgba(props.theme.colors.colorText, 0.9)};
      margin-bottom: 5px;
    }
  }
`;
const ContactFormContainer = styled.div`
  flex: 1;
  @media (max-width: 600px) {
    margin-top: 2rem;
    flex: 0 0 100%;
  }
`;
const ErrorMsg = styled.div`
  margin: 1rem 0;
  color: #dc3545;
  font-weight: 500;
`;

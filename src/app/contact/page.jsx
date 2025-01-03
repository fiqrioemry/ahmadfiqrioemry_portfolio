"use client";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const info = [
  {
    icon: <IoLogoWhatsapp />,
    title: "Whatsapp",
    description: "0821-6094-5033",
    link: "https://wa.me/082160945033",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ahmadfiqrioemry.com",
    link: "mailto:ahmadfiqrioemry@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Kelapa Raya No. 11 Medan, Sumatera Utara",
    link: "https://maps.app.goo.gl/YV3AfrqRmHLmRDxD8",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstname, lastname, email, phone, service, message } = formData;

    const mailtoLink = `mailto:ahmadfiqrioemry@gmail.com?subject=${encodeURIComponent(
      `Hai, saya ${firstname} ${lastname}, tertarik dengan layanan ${service}`
    )}&body=${encodeURIComponent(
      `Halo, saya ${firstname} ${lastname}.
      Email: ${email}
      Phone: ${phone}
      Pesan: ${message}`
    )}`;

    window.location.href = mailtoLink;
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.3,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none max-w-[800px]">
            <form
              className="flex flex-col gap-6 p-10 bg-secondary dark:border dark:border-primary dark:rounded-nonerounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Lets Work Together</h3>
              <p className="text-justify">
                Whether looking to create a sleek web presence, unlock
                data-driven insights, or implement machine learning solutions,
                Im here to bring your ideas to life. Lets collaborate and build
                something impactful.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={(e) => handleChange("firstname", e.target.value)}
                  required
                />
                <Input
                  type="text"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={(e) => handleChange("lastname", e.target.value)}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                />
                <Input
                  type="text"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                />
              </div>

              {/* select */}
              <Select onValueChange={(value) => handleChange("service", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="Data Analysis">Data Analysis</SelectItem>
                    <SelectItem value="Machine Learning">
                      Machine Learning
                    </SelectItem>
                    <SelectItem value="UI/UX Design">UI / UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                required
              />

              {/* btn */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="flex bg-background items-center rounded-md gap-2"
              >
                Send message
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-start xl:justify-end order-1 xl:orer-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <Link href={item.link}>
                      <Button
                        variant="primary"
                        size="icon"
                        className="text-2xl"
                      >
                        {item.icon}
                      </Button>
                    </Link>
                    <div className="flex-1">
                      <p className="text-dark dark:text-light">{item.title}</p>
                      <h3 className="text-sm">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

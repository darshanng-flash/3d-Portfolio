// File: app/components/main/Contact.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

type FormData = { name: string; email: string; message: string };

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ mode: "onTouched" });

  const onSubmit = async (values: FormData) => {
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error("Email service is not configured.");
      return;
    }
    try {
      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, values, { publicKey: PUBLIC_KEY });
      if (res.status === 200) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try later.");
    }
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        Get in <span className="text-purple">Touch</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 max-w-xl space-y-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="w-full rounded-md border border-gray-800 bg-black-100 px-3 py-2 outline-none focus:border-purple"
            placeholder="Darshan N G"
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Enter a valid email" },
            })}
            className="w-full rounded-md border border-gray-800 bg-black-100 px-3 py-2 outline-none focus:border-purple"
            placeholder="name@example.com"
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Message</label>
          <textarea
            rows={5}
            {...register("message", { required: "Message is required", minLength: { value: 5, message: "Too short" } })}
            className="w-full rounded-md border border-gray-800 bg-black-100 px-3 py-2 outline-none focus:border-purple"
            placeholder="Write your message..."
          />
          {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          type="submit"
          className="px-5 py-2 rounded-md bg-purple text-black font-semibold disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </section>
  );
};

export default Contact;

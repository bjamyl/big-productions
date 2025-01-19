"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BeatLoader } from "react-spinners";
import { Resend } from "resend";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { EmailTemplate } from "./EmailTemplate";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Your name must be at least 2 characters.",
  }),
  email: z.string().email(),
  phone: z.string().max(10, {
    message: "Phone number must not be more than 10 digits",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters",
  }),
});


export function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email:"",
      phone:"",
      message:""
    },
  });

  const [loading, setIsLoading] = useState(false);

  async function onSubmit(formData: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "alhassanjamil0@gmail.com",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    });

    const result = await response.json();
    if (response.ok) {
      console.log("Email sent successfully:", result);
      setIsLoading(false);
      toast("Message sent");
    } else {
      console.error("Error sending email:", result);
      setIsLoading(false);
      toast("Message sending failed");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  className="rounded-none"
                  placeholder="Sarkodie"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="rounded-none"
                  placeholder="rema@gmail.com"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input
                  className="rounded-none"
                  placeholder="0500000000"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Leave us a message..."
                  className="resize-none rounded-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="rounded-none px-6 py-5" type="submit">
          {loading ? <BeatLoader /> : "Send message"}
        </Button>
      </form>
    </Form>
  );
}

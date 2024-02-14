"use client";

import { z } from "zod";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import CustomFileInput from "./CustomFileInput";

const formSchema = z.object({
  firstname: z.string().min(1, { message: "First name is required" }),
  surname: z.string().min(1, { message: "Surname is required" }),
  email: z
    .string()
    .min(1, { message: "Email address is required" })
    .email({ message: "Invalid email address" }),
  phone: z.string(),
  message: z.string().min(1, { message: "This field is required" }),
  consent: z.literal<boolean>(true, {
    errorMap: () => ({
      message: "Please read and accept the terms and conditions",
    }),
  }),
  signature: z.string().min(1, { message: "Your signature is required" }),
  files: z.array(z.string()),
  //   consent: z.boolean().refine((val) => val === true, {
  //     message: "Please read and accept the terms and conditions",
  //   }),
});

const FormComponent = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      surname: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
      signature: "",
      files: [],
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log({ ...values });

    form.reset();
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          {/* firstname */}
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  First name <span>*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jane"
                    {...field}
                    className={
                      form.formState.errors[field.name] ? "border-red-500" : ""
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* surname */}
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Surname <span>*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Doe"
                    {...field}
                    className={
                      form.formState.errors[field.name] ? "border-red-500" : ""
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email address <span>*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="jane.doe@email.com"
                    {...field}
                    className={
                      form.formState.errors[field.name] ? "border-red-500" : ""
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    {...field}
                    className={
                      form.formState.errors[field.name] ? "border-red-500" : ""
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  What would you like us to know? <span>*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message here..."
                    {...field}
                    className={
                      form.formState.errors[field.name] ? "border-red-500" : ""
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* file */}
          <FormField
            control={form.control}
            name="files"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <CustomFileInput
                    onChange={(files) => field.onChange(files)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* consent */}
          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <p>
                    <Checkbox
                      className="mr-2"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />{" "}
                    I am the sole rights holder of the Content, I am over 18
                    years old and I accept the above Terms & Conditions OR I am
                    the parent or legal guardian of the sole rights holder of
                    the Content who is under 18 years old and I accept the above
                    Terms & Conditions on the right’s holder’s behalf as agent
                    or attorney, as if I was the rights holder for these
                    purposes.
                  </p>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* signature */}
          <FormField
            control={form.control}
            name="signature"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Sign your name <span>*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className={
                      form.formState.errors[field.name] ? "border-red-500" : ""
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* button */}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default FormComponent;

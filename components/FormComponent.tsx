/* eslint-disable react/no-unescaped-entities */
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
  // files: z.array(z.string()),
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
    <div className="lg:px-20 px-6 lg:pt-20 pt-8 lg:pb-52 pb-20 bg-white">
      <div className="max-w-[800px] w-full">
        <div className="">
          <p className="text-custom-gray mb-8 text-sm lg:text-base">
            Feel free to submit your video, photo, or story to The Daily Times
            by uploading it below. We're excited to share the best submissions
            across our Facebook, Instagram, Twitter, YouTube, Snapchat, TikTok,
            and website.
            <br /> <br />
            If your video becomes an individual post on The Daily Times Facebook
            page or if we feature your story on our website, you'll receive
            ₦200,000.
            <br /> <br />
            We're actively seeking content that entertains, inspires, and
            motivates our audience. Whether it's a rib-tickling fail, an
            awe-inspiring showcase of talent, or a heart warming narrative of
            triumph over adversity, we're eager to witness it!
          </p>

          <p className="text-custom-brightred font-bold text-lg lg:text-2xl mb-6">
            Required *
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 text-custom-gray"
          >
            {/* firstname */}
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="lg:text-lg font-normal mb-4 text-custom-gray">
                    First Name{" "}
                    <span className="font-medium text-custom-red">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      {...field}
                      className={
                        form.formState.errors[field.name]
                          ? "border-red-500"
                          : ""
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
                  <FormLabel className="lg:text-lg font-normal mb-4 text-custom-gray">
                    Surname{" "}
                    <span className="font-medium text-custom-red">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      {...field}
                      className={
                        form.formState.errors[field.name]
                          ? "border-red-500"
                          : ""
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
                  <FormLabel className="lg:text-lg font-normal mb-4 text-custom-gray">
                    Email Address{" "}
                    <span className="font-medium text-custom-red">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      {...field}
                      className={
                        form.formState.errors[field.name]
                          ? "border-red-500"
                          : ""
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
                  <FormLabel className="lg:text-lg font-normal mb-4 text-custom-gray">
                    Phone
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      {...field}
                      className={
                        form.formState.errors[field.name]
                          ? "border-red-500"
                          : ""
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <hr className="border border-white" />
            <hr className="border border-custom-lightgray" />

            {/* message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="lg:text-lg font-normal mb-4 text-custom-gray">
                    What would you like us to know?{" "}
                    <span className="font-medium text-custom-red">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message here..."
                      {...field}
                      className={
                        form.formState.errors[field.name]
                          ? "border-red-500"
                          : ""
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
                      onChange={(files) => {
                        field.onChange(files.map((file) => file.name));
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <hr className="border border-white" />
            <hr className="border border-custom-lightgray" />

            <div className="bg-custom-white rounded border-2 border-gray-200 border-dashed py-6 px-9">
              <p className="text-custom-gray font-semibold lg:text-base text-sm">
                By clicking 'I Accept' below, I acknowledge and agree to the
                terms outlined in the{" "}
                <span className="text-custom-red">
                  Content Assignment Agreement.
                </span>{" "}
                In doing so, I understand that I am transferring all
                intellectual property rights to The Daily Times for the content
                I submit. The Daily Times will have exclusive rights to utilize
                this content across various media platforms. I also confirm that
                any individuals featured in the content have consented to these
                terms. Furthermore, I agree to indemnify The Daily Times for any
                breaches of the agreement.
              </p>
            </div>

            {/* consent */}
            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex gap-4 items-start">
                      <Checkbox
                        className="h-6 w-6 border border-custom-gray rounded"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <p className="text-custom-gray lg:text-base text-sm">
                        I affirm that I am the sole rights holder of the Content
                        and that I am over 18 years old. I accept the above
                        Terms & Conditions. Alternatively, if the sole rights
                        holder of the Content is under 18 years old, I confirm
                        that I am their parent or legal guardian, and I accept
                        the above Terms & Conditions on their behalf as agent or
                        attorney, as if I were the rights holder for these
                        purposes.
                      </p>
                    </div>
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
                  <FormLabel className="lg:text-lg font-normal mb-4 text-custom-gray">
                    Sign your name{" "}
                    <span className="font-medium text-custom-red">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className={
                        form.formState.errors[field.name]
                          ? "border-red-500"
                          : ""
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* button */}
            <div className="flex items-center w-full">
              <Button
                type="submit"
                className="text-white py-5 rounded-[10px] w-[300px] h-14 lg:text-base text-sm mx-auto lg:mx-0"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default FormComponent;

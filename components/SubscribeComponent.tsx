/* eslint-disable react/no-unescaped-entities */
"use client";

import { z } from "zod";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email address is required" })
    .email({ message: "Invalid email address" }),
});

const SubscribeComponent = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log({ ...values });

    form.reset();
  }
  return (
    <div className="max-w-screen-xxl w-full mx-auto bg-[#F7F7F7] px-6 lg:py-28 py-7">
      <div className="mx-auto max-w-[768px] w-full">
        <h4 className="font-bold lg:text-5xl text-3xl text-center mb-6">
          Subscribe to our newsletter
        </h4>
        <p className="lg:text-lg mb-10 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>

        <div className="lg:w-2/3 w-full mx-auto">
          <div className="w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-x-4 text-custom-gray flex items-center"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1 border">
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          {...field}
                          className={`w-full border-custom-gray h-12 p-3 rounded-none ${
                            form.formState.errors[field.name]
                              ? "border-custom-brightred"
                              : ""
                          }`}
                        />
                      </FormControl>
                      {/* <FormMessage /> */}
                    </FormItem>
                  )}
                />

                {/* button */}
                <Button
                  type="submit"
                  className="text-white h-14 py-3 px-6 rounded-none"
                >
                  Sign Up
                </Button>
              </form>
            </Form>
          </div>

          <p className="text-custom-gray text-xs mt-4 text-center">
            By clicking Sign Up you're confirming that you agree with our Terms
            and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscribeComponent;

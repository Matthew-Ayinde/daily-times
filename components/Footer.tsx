import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

const Footer = () => {
  const currentYear = moment().format("YYYY");
  return (
    <div className="max-w-screen-xxl px-16 py-20 w-full mx-auto">
      <div className="">
        <div className="mb-8">
          <Image
            alt="alt Image"
            width={200}
            height={34.57}
            src={"/logo.svg"}
            className=""
          />
        </div>

        <div className="flex items-center gap-8">
          {["one", "two", "three", "four", "five"].map((link) => (
            <Link key={link} href={""} className="font-semibold capitalize">
              Link {link}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16 flex items-center justify-between pt-8 border-t border-custom-black">
        <div className="flex items-center flex-wrap gap-6 text-custom-black text-sm">
          <p className="underline">Privacy Policy</p>
          <p className="underline">Terms of service</p>
          <p className="underline">Cookies Settings</p>
        </div>

        <div>
          <p className="text-custom-black text-sm">
            @{currentYear} Daily Times Nigeria. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

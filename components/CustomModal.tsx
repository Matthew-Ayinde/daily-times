import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const CustomModal = () => {
  return (
    <div className="h-full w-screen bg-custom-black/50">
      <div className="w-full h-full flex-center lg:px-[150px] px-10 lg:py-100px py-6">
        <div className="max-w-screen-xxl w-full mx-auto bg-white">
          <div className="bg-custom-red lg:px-100px px-6 py-10 ">
            <Image
              alt="alt Image"
              width={160}
              height={29.38}
              src={"/logo-white.svg"}
              className=""
            />

            <p className="font-bold text-32px mt-4 text-white">
              We Value Your Privacy
            </p>
          </div>

          <div className="lg:pl-100px lg:pr-44 pr-6 pl-8 lg:pt-20 lg:pb-48 pt-10 pb-16">
            <p>
              We and our technology partners ask for your consent to the use of
              cookies to store and access personal data on your
              <br />
              device; for example: unique identifiers and your browsing
              patterns. This may be used for advert and content
              <br />
              personalisation, measurement, audience insight and products
              development. Some of our <b>partners</b> process personal
              <br />
              data on the basis of legitimate interest.
            </p>
            <br></br>
            <p>
              Consent is optional, however may restrict content and advert
              personalization. Choices made here apply only to this site. You
              can change your consent, view settings and our list of 164
              partners and the purposes for which consent is required at any
              time by using the link at the bottom of the page.View our{" "}
              <b>Privacy Policy</b> for more information.
            </p>
            <br></br>
            Click <b>‘Accept’</b> below if you are happy with this. You can
            change or withdraw your consent, or read further information by
            <br />
            clicking, <b>‘Settings’</b>.<br></br>
            <br></br>
            <div className="mt-4 flex gap-4">
              <Button className="rounded-xl w-36 h-14 bg-[#333333] text-white">
                Settings
              </Button>
              <Button
                variant="outline"
                className="rounded-xl w-36 h-14 border-black"
              >
                Accept Cookies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;

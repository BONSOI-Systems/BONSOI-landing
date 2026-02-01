import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../public/img/avatar_elena.png";
import userTwoImg from "../public/img/avatar_marcus.png";
import userThreeImg from "../public/img/avatar_sarah.png";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-6 md:gap-10 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-6 sm:px-10 md:px-14 rounded-2xl py-8 sm:py-10 md:py-14 dark:bg-trueGray-800">
            <p className="text-lg sm:text-xl md:text-2xl leading-normal ">
              BONSOI Systems transformed our data infrastructure. Their <Mark>AI-driven analytics</Mark> gave us insights we didn&apos;t know were possible.
            </p>

            <Avatar
              image={userOneImg}
              name="Elena Rodriguez"
              title="Director of Technology"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-6 sm:px-10 md:px-14 rounded-2xl py-8 sm:py-10 md:py-14 dark:bg-trueGray-800">
            <p className="text-lg sm:text-xl md:text-2xl leading-normal ">
              The scalability of their solutions is unmatched. We went from a pilot to full deployment in weeks. Truly a <Mark>seamless integration</Mark> experience.
            </p>

            <Avatar
              image={userTwoImg}
              name="Marcus Chen"
              title="Senior Solutions Architect"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-6 sm:px-10 md:px-14 rounded-2xl py-8 sm:py-10 md:py-14 dark:bg-trueGray-800">
            <p className="text-lg sm:text-xl md:text-2xl leading-normal ">
              I was impressed by their engineering excellence. They didn&apos;t just build software; they engineered a <Mark>strategic asset</Mark> for our business growth.
            </p>

            <Avatar
              image={userThreeImg}
              name="Sarah Jenkins"
              title="Chief Operations Officer"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-6 sm:mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-12 h-12 sm:w-14 sm:h-14">
        <Image
          src={props.image}
          width="56"
          height="56"
          alt="Avatar"
          placeholder="blur"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <div className="text-base sm:text-lg font-medium">{props.name}</div>
        <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

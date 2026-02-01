import React from "react";
import { Container } from "@/components/Container";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <Container
      className={`flex w-full flex-col mt-8 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.preTitle && (
        <div className="inline-flex items-center justify-center px-4 py-2 mb-4 text-sm font-semibold tracking-wide text-blue-700 bg-blue-50 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-3xl mt-2 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 lg:text-4xl xl:text-5xl dark:text-white text-balance">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl mt-6 text-lg leading-relaxed text-gray-600 lg:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </Container>
  );
}


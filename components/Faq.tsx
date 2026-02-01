"use client";
import React from "react";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "What makes BONSOI Systems different from other development companies?",
    answer:
      "BONSOI Systems combines cutting-edge AI/ML expertise with full-stack development prowess and Web3 innovation. We don't just build applications—we architect intelligent, scalable solutions that evolve with your business. Our team stays ahead of technology trends, ensuring you always have access to the most advanced tools and methodologies.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve diverse industries including fintech, healthcare, e-commerce, logistics, education, and blockchain startups. Our AI/ML solutions are particularly impactful in predictive analytics, automation, computer vision, and natural language processing across any sector seeking digital transformation.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity and scope. A simple MVP can take 4-8 weeks, while enterprise-grade AI/ML solutions typically require 3-6 months. We use agile methodology with 2-week sprints, providing regular updates and deliverables so you see progress continuously.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We offer flexible pricing models including fixed-price projects, time-and-material contracts, and dedicated team arrangements. After understanding your requirements during our free consultation, we provide a detailed proposal with transparent pricing. We also offer milestone-based payments to align with your budget.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Absolutely. We offer comprehensive support packages including 24/7 monitoring, bug fixes, security updates, performance optimization, and feature enhancements. Our maintenance plans ensure your applications remain secure, efficient, and up-to-date with the latest technologies.",
  },
  {
    question: "Can you help migrate existing applications to modern technologies?",
    answer:
      "Yes, we specialize in application modernization and cloud migration. Whether you need to migrate legacy systems to modern frameworks, integrate AI/ML capabilities, or transition to cloud infrastructure, we ensure minimal downtime and maximum performance improvement.",
  },
];

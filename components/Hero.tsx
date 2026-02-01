import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import heroImg from "../public/img/hero.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap animate-fade-in py-12 lg:py-20">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-blue-700 bg-blue-50 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
              <span className="flex w-2 h-2 mr-2 bg-blue-600 rounded-full animate-pulse"></span>
              Trusted by Industry Leaders
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 lg:text-5xl xl:text-6xl dark:text-white text-balance">
              Transform Your Vision with{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI-Powered Innovation
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-600 lg:text-xl dark:text-gray-300">
              BONSOI Systems delivers cutting-edge{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">AI/ML</span>,{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">Web3</span>, and{" "}
              <span className="font-semibold text-pink-600 dark:text-pink-400">Full-Stack</span> solutions
              that drive digital transformation. Our expert team crafts scalable, intelligent applications
              tailored to your business goals.
            </p>

            <div className="flex flex-col mt-8 space-y-4 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                Start Your Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-800 transition-all duration-300 bg-white border-2 border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
              >
                Explore Services
              </Link>
            </div>

            <div className="flex items-center mt-10 space-x-8">
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-gray-200 dark:bg-gray-700"></div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">95%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
              </div>
              {/* <div className="w-px h-12 bg-gray-200 dark:bg-gray-700"></div> */}
              {/* <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Countries Served</div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
            <Image
              src={heroImg}
              width="616"
              height="617"
              className="relative object-cover transition-transform duration-500 hover:scale-105"
              alt="BONSOI Systems - AI/ML and Full-Stack Solutions"
              loading="eager"
              placeholder="blur"
              priority
            />
          </div>
        </div>
      </Container>
    </>
  );
};

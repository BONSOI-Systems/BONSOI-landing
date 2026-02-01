"use client";

import { Container } from "@/components/Container";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import {
  BuildingOffice2Icon,
  HeartIcon,
  ShoppingBagIcon,
  TruckIcon,
  AcademicCapIcon,
  BanknotesIcon
} from "@heroicons/react/24/solid";
import { Check } from "lucide-react";

export default function SolutionsPage() {
  return (
    <main className="bg-black min-h-screen text-white overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-900/20 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-900/10 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative z-10 px-4">

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20"
          >
            <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6 text-xs sm:text-sm font-semibold tracking-wider text-blue-400 uppercase bg-blue-900/20 rounded-full border border-blue-500/20">
              Our Solutions
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Industry-Specific <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Innovation</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Every industry has unique challenges. We deliver customized technology solutions that address your specific needs and drive measurable business outcomes.
            </p>
          </motion.div>

          {/* Fintech */}
          <IndustrySection
            icon={<BanknotesIcon className="w-8 h-8 sm:w-10 sm:h-10" />}
            title="Fintech Solutions"
            subtitle="Transform financial services with cutting-edge technology"
            gradient="from-green-600 to-emerald-600"
            delay={0.1}
          >
            <SolutionCard
              title="Digital Banking Platforms"
              description="Build modern, secure digital banking solutions with real-time transactions, account management, and mobile-first experiences."
              features={["Mobile Banking Apps", "Account Aggregation", "Real-time Payments", "KYC/AML Compliance"]}
            />
            <SolutionCard
              title="Payment Processing Systems"
              description="Develop robust payment gateways and processing solutions with fraud detection and multi-currency support."
              features={["Payment Gateway Integration", "Fraud Detection AI", "Multi-currency Support", "PCI DSS Compliance"]}
            />
            <SolutionCard
              title="Blockchain & Crypto"
              description="Create cryptocurrency exchanges, wallets, and DeFi platforms with enterprise-grade security."
              features={["Crypto Exchange Development", "Wallet Solutions", "DeFi Protocols", "Token Creation"]}
            />
            <SolutionCard
              title="Risk Management Systems"
              description="Implement AI-powered risk assessment and fraud prevention systems for financial institutions."
              features={["Credit Scoring Models", "Fraud Detection", "Risk Analytics", "Compliance Monitoring"]}
            />
          </IndustrySection>

          {/* Healthcare */}
          <IndustrySection
            icon={<HeartIcon className="w-8 h-8 sm:w-10 sm:h-10" />}
            title="Healthcare Solutions"
            subtitle="Improve patient care with intelligent healthcare technology"
            gradient="from-red-600 to-pink-600"
            delay={0.2}
          >
            <SolutionCard
              title="Telemedicine Platforms"
              description="Build secure video consultation platforms with appointment scheduling and electronic health records."
              features={["Video Consultations", "EHR Integration", "Prescription Management", "HIPAA Compliance"]}
            />
            <SolutionCard
              title="AI Diagnostics"
              description="Deploy machine learning models for medical image analysis, disease prediction, and treatment recommendations."
              features={["Medical Image Analysis", "Disease Prediction", "Treatment Optimization", "Clinical Decision Support"]}
            />
            <SolutionCard
              title="Patient Management Systems"
              description="Streamline hospital operations with comprehensive patient management and workflow automation."
              features={["Patient Records", "Appointment Scheduling", "Billing Integration", "Inventory Management"]}
            />
            <SolutionCard
              title="Health Monitoring Apps"
              description="Create mobile apps for patient health tracking, medication reminders, and wellness programs."
              features={["Vital Signs Monitoring", "Medication Reminders", "Health Analytics", "Wearable Integration"]}
            />
          </IndustrySection>

          {/* E-Commerce */}
          <IndustrySection
            icon={<ShoppingBagIcon className="w-8 h-8 sm:w-10 sm:h-10" />}
            title="E-Commerce Solutions"
            subtitle="Scale your online business with powerful e-commerce platforms"
            gradient="from-purple-600 to-indigo-600"
            delay={0.3}
          >
            <SolutionCard
              title="Custom E-Commerce Platforms"
              description="Build scalable online stores with advanced features, payment integrations, and analytics."
              features={["Product Management", "Shopping Cart", "Payment Gateway", "Order Tracking"]}
            />
            <SolutionCard
              title="AI-Powered Recommendations"
              description="Increase sales with personalized product recommendations using machine learning algorithms."
              features={["Product Recommendations", "Dynamic Pricing", "Customer Segmentation", "Inventory Optimization"]}
            />
            <SolutionCard
              title="Marketplace Development"
              description="Create multi-vendor marketplaces with vendor management, commission systems, and analytics."
              features={["Multi-vendor Support", "Commission Management", "Vendor Dashboard", "Review System"]}
            />
            <SolutionCard
              title="Mobile Commerce Apps"
              description="Develop native mobile shopping apps with seamless checkout and push notifications."
              features={["Native Mobile Apps", "Push Notifications", "Mobile Payments", "Offline Mode"]}
            />
          </IndustrySection>

          {/* Logistics */}
          <IndustrySection
            icon={<TruckIcon className="w-8 h-8 sm:w-10 sm:h-10" />}
            title="Logistics & Supply Chain"
            subtitle="Optimize operations with intelligent logistics solutions"
            gradient="from-blue-600 to-cyan-600"
            delay={0.4}
          >
            <SolutionCard
              title="Fleet Management Systems"
              description="Track and manage your fleet with real-time GPS tracking, route optimization, and maintenance scheduling."
              features={["Real-time Tracking", "Route Optimization", "Fuel Management", "Driver Performance"]}
            />
            <SolutionCard
              title="Warehouse Management"
              description="Streamline warehouse operations with inventory tracking, barcode scanning, and automation."
              features={["Inventory Management", "Barcode Scanning", "Order Fulfillment", "Analytics Dashboard"]}
            />
            <SolutionCard
              title="Supply Chain Visibility"
              description="Gain end-to-end supply chain visibility with blockchain-based tracking and IoT integration."
              features={["Blockchain Tracking", "IoT Sensors", "Supplier Management", "Demand Forecasting"]}
            />
            <SolutionCard
              title="Last-Mile Delivery"
              description="Optimize last-mile delivery with AI-powered routing and customer communication systems."
              features={["Dynamic Routing", "Delivery Tracking", "Customer Notifications", "Proof of Delivery"]}
            />
          </IndustrySection>

          {/* Education */}
          <IndustrySection
            icon={<AcademicCapIcon className="w-8 h-8 sm:w-10 sm:h-10" />}
            title="Education Technology"
            subtitle="Transform learning with innovative educational platforms"
            gradient="from-yellow-600 to-orange-600"
            delay={0.5}
          >
            <SolutionCard
              title="Learning Management Systems"
              description="Build comprehensive LMS platforms with course management, assessments, and analytics."
              features={["Course Management", "Student Portal", "Assessment Tools", "Progress Tracking"]}
            />
            <SolutionCard
              title="AI-Powered Tutoring"
              description="Develop adaptive learning systems that personalize education based on student performance."
              features={["Adaptive Learning", "AI Tutoring", "Performance Analytics", "Content Recommendations"]}
            />
            <SolutionCard
              title="Virtual Classrooms"
              description="Create interactive virtual classroom platforms with video, whiteboard, and collaboration tools."
              features={["Video Conferencing", "Interactive Whiteboard", "Screen Sharing", "Recording"]}
            />
            <SolutionCard
              title="Student Information Systems"
              description="Manage student data, enrollment, grades, and communication in one unified platform."
              features={["Student Records", "Grade Management", "Attendance Tracking", "Parent Portal"]}
            />
          </IndustrySection>

          {/* Enterprise */}
          <IndustrySection
            icon={<BuildingOffice2Icon className="w-8 h-8 sm:w-10 sm:h-10" />}
            title="Enterprise Solutions"
            subtitle="Scalable enterprise software for large organizations"
            gradient="from-gray-700 to-gray-900"
            delay={0.6}
          >
            <SolutionCard
              title="ERP Systems"
              description="Implement comprehensive enterprise resource planning systems to unify your business processes."
              features={["Financial Management", "HR Management", "Inventory Control", "Reporting Dashboard"]}
            />
            <SolutionCard
              title="CRM Platforms"
              description="Build custom customer relationship management systems to enhance sales and customer service."
              features={["Lead Management", "Sales Pipeline", "Customer Support", "Analytics"]}
            />
            <SolutionCard
              title="Business Intelligence"
              description="Transform data into insights with custom BI solutions and interactive dashboards."
              features={["Data Visualization", "Custom Reports", "Predictive Analytics", "KPI Tracking"]}
            />
            <SolutionCard
              title="Workflow Automation"
              description="Automate business processes with intelligent workflow systems and integration platforms."
              features={["Process Automation", "Integration Hub", "Approval Workflows", "Task Management"]}
            />
          </IndustrySection>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-16 sm:mt-20 md:mt-24"
          >
            <div className="relative flex flex-col items-center justify-center p-8 sm:p-10 md:p-12 overflow-hidden text-center text-white shadow-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl group">
              <div className="absolute inset-0 bg-black opacity-10"></div>
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none" />

              <div className="relative z-10">
                <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-bold">
                  Need a Custom Solution?
                </h2>
                <p className="max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base md:text-lg text-white/80">
                  Every business is unique. Let&apos;s discuss how we can create a tailored solution for your specific industry needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold text-blue-600 transition-all duration-300 transform bg-white shadow-lg rounded-lg sm:rounded-xl hover:scale-105 hover:shadow-2xl"
                >
                  Discuss Your Project
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </main>
  );
}

function IndustrySection({
  icon,
  title,
  subtitle,
  gradient,
  delay,
  children
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  gradient: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="mt-12 sm:mt-16 md:mt-20"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className={`p-3 sm:p-4 text-white rounded-xl sm:rounded-2xl bg-gradient-to-r ${gradient} w-fit`}>
          {icon}
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            {title}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
        {children}
      </div>
    </motion.div>
  );
}

function SolutionCard({
  title,
  description,
  features
}: {
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="group p-5 sm:p-6 transition-all duration-300 bg-white/5 border border-white/10 shadow-md rounded-xl sm:rounded-2xl hover:shadow-xl hover:bg-white/10 hover:border-white/20">
      <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="mb-4 sm:mb-5 text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
        {description}
      </p>
      <ul className="space-y-1.5 sm:space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300 text-xs sm:text-sm">
            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2 text-green-500 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";

import { Container } from "@/components/Container";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
import { Mail, Phone, Clock, Send, Linkedin, Github, MessageCircle, ArrowRight, CheckCircle2, AlertCircle, X, Calendar } from "lucide-react";
import { identifyUser, trackEvent } from "@/lib/clarity";

// Validation helpers
const validators = {
  // Name: 50 chars max, alphanumeric + spaces only
  name: (value: string) => {
    if (!value.trim()) return "Name is required";
    if (value.length > 50) return "Name must be 50 characters or less";
    if (!/^[a-zA-Z0-9\s]+$/.test(value)) return "Name can only contain letters, numbers, and spaces";
    return null;
  },

  // Email: Proper email format
  email: (value: string) => {
    if (!value.trim()) return "Email is required";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) return "Please enter a valid email address";
    return null;
  },

  // Company: 50 chars max, alphanumeric + spaces only (optional)
  company: (value: string) => {
    if (!value.trim()) return null; // Optional field
    if (value.length > 50) return "Company name must be 50 characters or less";
    if (!/^[a-zA-Z0-9\s]+$/.test(value)) return "Company name can only contain letters, numbers, and spaces";
    return null;
  },

  // Phone: Country code + proper length validation
  phone: (value: string, required = false) => {
    if (!value.trim()) return required ? "Phone is required" : null;

    // Remove spaces and dashes for validation
    const cleanPhone = value.replace(/[\s-]/g, "");

    // Must start with + followed by country code and number
    if (!/^\+\d+$/.test(cleanPhone)) {
      return "Phone must start with country code (e.g., +91)";
    }

    // Common country code validations
    const phonePatterns: Record<string, { code: string; length: number; name: string }> = {
      "+91": { code: "+91", length: 10, name: "India" },
      "+1": { code: "+1", length: 10, name: "USA/Canada" },
      "+44": { code: "+44", length: 10, name: "UK" },
      "+61": { code: "+61", length: 9, name: "Australia" },
      "+971": { code: "+971", length: 9, name: "UAE" },
      "+65": { code: "+65", length: 8, name: "Singapore" },
      "+49": { code: "+49", length: 10, name: "Germany" },
      "+33": { code: "+33", length: 9, name: "France" },
      "+81": { code: "+81", length: 10, name: "Japan" },
      "+86": { code: "+86", length: 11, name: "China" },
    };

    // Find matching country code
    for (const [prefix, info] of Object.entries(phonePatterns)) {
      if (cleanPhone.startsWith(prefix)) {
        const numberPart = cleanPhone.slice(prefix.length);
        if (numberPart.length !== info.length) {
          return `${info.name} numbers must have ${info.length} digits after ${prefix}`;
        }
        return null;
      }
    }

    // For other country codes, just ensure reasonable length (7-15 digits after code)
    const codeMatch = cleanPhone.match(/^\+(\d{1,4})/);
    if (codeMatch) {
      const numberPart = cleanPhone.slice(codeMatch[0].length);
      if (numberPart.length < 7 || numberPart.length > 15) {
        return "Phone number must be 7-15 digits after country code";
      }
    }

    return null;
  },

  // Service: Required
  service: (value: string) => {
    if (!value) return "Please select a service";
    return null;
  },

  // Message: 100-1200 characters
  message: (value: string) => {
    if (!value.trim()) return "Project details are required";
    if (value.length < 100) return `Please provide more details (minimum 100 characters, currently ${value.length})`;
    if (value.length > 1200) return `Message is too long (maximum 1200 characters, currently ${value.length})`;
    return null;
  },

  // Date validation
  date: (value: string) => {
    if (!value) return "Please select a date";
    const selected = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selected < today) return "Please select a future date";
    // Check if it's a weekend
    const day = selected.getDay();
    if (day === 0 || day === 6) return "Please select a weekday (Mon-Fri)";
    return null;
  },

  // Time validation
  time: (value: string) => {
    if (!value) return "Please select a time";
    const [hours] = value.split(":").map(Number);
    if (hours < 9 || hours >= 18) return "Please select time between 9 AM - 6 PM IST";
    return null;
  },

  // Topic validation
  topic: (value: string) => {
    if (!value.trim()) return "Topic is required";
    if (value.length < 10) return "Please provide a brief topic (minimum 10 characters)";
    if (value.length > 200) return "Topic is too long (maximum 200 characters)";
    return null;
  },
};

// Phone input handler helper
const handlePhoneInput = (value: string, currentValue: string): string | null => {
  // Don't allow more than 3 spaces total
  const spaceCount = (value.match(/ /g) || []).length;
  if (spaceCount > 3) {
    return null; // Block input
  }

  // Don't allow consecutive spaces
  if (/  /.test(value)) {
    return null; // Block consecutive spaces
  }

  const cleanPhone = value.replace(/[\s-]/g, "");

  // Country code to max phone length (including country code)
  const countryMaxLengths: Record<string, number> = {
    "+91": 13,
    "+1": 12,
    "+44": 13,
    "+61": 12,
    "+971": 13,
    "+65": 11,
    "+49": 14,
    "+33": 12,
    "+81": 13,
    "+86": 14,
  };

  // Find the matching country code and get max length
  let maxLength = 16;

  for (const [code, length] of Object.entries(countryMaxLengths)) {
    if (cleanPhone.startsWith(code)) {
      maxLength = length;
      break;
    }
  }

  // Allow the value but limit the clean phone length
  if (cleanPhone.length <= maxLength) {
    return value;
  }
  return null;
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  // Schedule Call Modal State
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [scheduleData, setScheduleData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    topic: "",
  });
  const [scheduleTouched, setScheduleTouched] = useState<Record<string, boolean>>({});
  const [isScheduleSubmitting, setIsScheduleSubmitting] = useState(false);
  const [scheduleStatus, setScheduleStatus] = useState<"idle" | "success" | "error">("idle");

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isScheduleModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isScheduleModalOpen]);

  // Compute validation errors
  const errors = useMemo(() => ({
    name: validators.name(formData.name),
    email: validators.email(formData.email),
    company: validators.company(formData.company),
    phone: validators.phone(formData.phone),
    service: validators.service(formData.service),
    message: validators.message(formData.message),
  }), [formData]);

  // Schedule form errors
  const scheduleErrors = useMemo(() => ({
    name: validators.name(scheduleData.name),
    email: validators.email(scheduleData.email),
    phone: validators.phone(scheduleData.phone, true),
    date: validators.date(scheduleData.date),
    time: validators.time(scheduleData.time),
    topic: validators.topic(scheduleData.topic),
  }), [scheduleData]);

  // Check if form is valid
  const isFormValid = !errors.name && !errors.email && !errors.company && !errors.phone && !errors.service && !errors.message;
  const isScheduleFormValid = !scheduleErrors.name && !scheduleErrors.email && !scheduleErrors.phone && !scheduleErrors.date && !scheduleErrors.time && !scheduleErrors.topic;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Apply input restrictions for name and company
    if (name === "name" || name === "company") {
      const sanitized = value.slice(0, 50);
      setFormData(prev => ({ ...prev, [name]: sanitized }));
    } else if (name === "message") {
      const sanitized = value.slice(0, 1200);
      setFormData(prev => ({ ...prev, [name]: sanitized }));
    } else if (name === "phone") {
      const result = handlePhoneInput(value, formData.phone);
      if (result !== null) {
        setFormData(prev => ({ ...prev, [name]: result }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTouched(prev => ({ ...prev, [e.target.name]: true }));
  };

  // Schedule form handlers
  const handleScheduleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === "name") {
      const sanitized = value.slice(0, 50);
      setScheduleData(prev => ({ ...prev, [name]: sanitized }));
    } else if (name === "topic") {
      const sanitized = value.slice(0, 200);
      setScheduleData(prev => ({ ...prev, [name]: sanitized }));
    } else if (name === "phone") {
      const result = handlePhoneInput(value, scheduleData.phone);
      if (result !== null) {
        setScheduleData(prev => ({ ...prev, [name]: result }));
      }
    } else {
      setScheduleData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleScheduleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setScheduleTouched(prev => ({ ...prev, [e.target.name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      company: true,
      phone: true,
      service: true,
      message: true,
    });

    // Don't submit if form is invalid
    if (!isFormValid) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "",
        });
        setTouched({});

        // Track successful submission in Clarity
        identifyUser(formData.email, undefined, undefined, formData.name);
        trackEvent("contact_form_submitted");

        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        console.error("Error:", data.error);
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScheduleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setScheduleTouched({
      name: true,
      email: true,
      phone: true,
      date: true,
      time: true,
      topic: true,
    });

    // Don't submit if form is invalid
    if (!isScheduleFormValid) {
      return;
    }

    setIsScheduleSubmitting(true);
    setScheduleStatus("idle");

    try {
      const response = await fetch("/api/schedule-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(scheduleData),
      });

      const data = await response.json();

      if (response.ok) {
        setScheduleStatus("success");
        setTimeout(() => {
          setIsScheduleModalOpen(false);
          setScheduleData({
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            topic: "",
          });
          setScheduleTouched({});
          setScheduleStatus("idle");
        }, 2000);
      } else {
        setScheduleStatus("error");
        console.error("Error:", data.error);
        setTimeout(() => setScheduleStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error scheduling call:", error);
      setScheduleStatus("error");
      setTimeout(() => setScheduleStatus("idle"), 5000);
    } finally {
      setIsScheduleSubmitting(false);
    }
  };

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  return (
    <main className="bg-black min-h-screen text-white overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-900/20 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-900/10 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16 px-4"
          >
            <div className="inline-flex items-center justify-center p-2.5 sm:p-3 mb-4 sm:mb-6 bg-blue-500/10 rounded-xl sm:rounded-2xl border border-blue-500/20">
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Let&apos;s Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Something Amazing</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? We&apos;d love to hear about it. Get in touch with our team and let&apos;s discuss how we can help bring your vision to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto px-4">

            {/* Contact Information & Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-white/10 rounded-2xl sm:rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-20"></div>
                {/* Hover Glow */}
                <div className="absolute -right-20 -top-20 w-48 sm:w-64 h-48 sm:h-64 bg-blue-500/20 blur-[60px] sm:blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/30 transition duration-500"></div>

                <div className="relative z-10">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Contact Information</h2>
                  <div className="space-y-4 sm:space-y-6">
                    <ContactItem icon={<Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />} label="Email" value="bonsoisystems@gmail.com" href="mailto:bonsoisystems@gmail.com" />
                    <ContactItem icon={<Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />} label="Phone" value="+91 9628525211" href="tel:+919628525211" />
                    <ContactItem icon={<Clock className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />} label="Working Hours" value="Mon-Fri, 9am - 6pm IST" />
                  </div>

                  <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10">
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">Follow Us</h3>
                    <div className="flex gap-3 sm:gap-4">
                      <SocialLink href="https://github.com/BONSOI-Systems" icon={<Github className="w-4 h-4 sm:w-5 sm:h-5" />} />
                      <SocialLink href="https://www.linkedin.com/company/bonsoi-systems/" icon={<Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />} />
                      <SocialLink href="https://chat.whatsapp.com/L11Rq3WgjrNLWmuYtpS7TV" icon={<MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Card */}
              <div
                onClick={() => setIsScheduleModalOpen(true)}
                className="p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl hover:bg-white/10 transition-colors duration-300 cursor-pointer group"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Schedule a Free Consultation</h3>
                <p className="text-gray-400 mb-4 sm:mb-6 text-xs sm:text-sm">Book a 30-minute call with our team to discuss your project requirements.</p>
                <button className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors group cursor-pointer text-sm sm:text-base">
                  Schedule Call <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Send Message</h2>

                {submitStatus === "success" && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-500/10 border border-green-500/20 rounded-lg sm:rounded-xl flex items-center text-green-400">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium">Message sent successfully! We&apos;ll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-500/10 border border-red-500/20 rounded-lg sm:rounded-xl flex items-center text-red-400">
                    <span className="text-xs sm:text-sm font-medium">Failed to send message. Please try again or email us directly at bonsoisystems@gmail.com</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <InputGroup
                      label="Full Name"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Name"
                      required
                      maxLength={50}
                      error={touched.name ? errors.name : null}
                      hint="Letters and numbers only"
                    />
                    <InputGroup
                      label="Email Address"
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="your@email.com"
                      required
                      error={touched.email ? errors.email : null}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <InputGroup
                      label="Company"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Your Company"
                      maxLength={50}
                      error={touched.company ? errors.company : null}
                      hint="Letters and numbers only"
                    />
                    <InputGroup
                      label="Phone"
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+91 9876543210"
                      error={touched.phone ? errors.phone : null}
                      hint="Include country code"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium text-gray-300 cursor-pointer">
                      Service Interested In <span className="text-blue-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-gray-900/50 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-white outline-none transition-all placeholder-gray-500 appearance-none cursor-pointer text-sm sm:text-base ${touched.service && errors.service ? "border-red-500/50" : "border-white/10"
                          }`}
                      >
                        <option value="" className="bg-gray-900 text-gray-400">Select a service</option>
                        <option value="ai-ml" className="bg-gray-900">AI & Machine Learning</option>
                        <option value="web3" className="bg-gray-900">Web3 & Blockchain</option>
                        <option value="full-stack" className="bg-gray-900">Full-Stack Development</option>
                        <option value="mobile" className="bg-gray-900">Mobile App Development</option>
                        <option value="cloud" className="bg-gray-900">Cloud & DevOps</option>
                        <option value="consulting" className="bg-gray-900">Technology Consulting</option>
                      </select>
                    </div>
                    {touched.service && errors.service && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium text-gray-300 cursor-pointer">
                      Project Details <span className="text-blue-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      rows={5}
                      maxLength={1200}
                      className={`w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-gray-900/50 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-white outline-none transition-all placeholder-gray-500 resize-none text-sm sm:text-base ${touched.message && errors.message ? "border-red-500/50" : "border-white/10"
                        }`}
                      placeholder="Tell us about your project in detail (minimum 100 characters)..."
                    />
                    <div className="flex justify-between items-center mt-1">
                      {touched.message && errors.message ? (
                        <p className="text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      ) : (
                        <p className="text-xs text-gray-500">Minimum 100 characters</p>
                      )}
                      <p className={`text-xs ${formData.message.length > 1200 ? "text-red-400" : formData.message.length > 1000 ? "text-yellow-400" : "text-gray-500"}`}>
                        {formData.message.length}/1200
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    className="w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>Send Message <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </Container>

      {/* Schedule Call Modal */}
      <AnimatePresence>
        {isScheduleModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsScheduleModalOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div
                className="bg-gray-900 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl relative w-full max-w-lg max-h-[85vh] overflow-y-auto scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button X*/}
                <button
                  onClick={() => setIsScheduleModalOpen(false)}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20">
                    <Calendar className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">Schedule a Call</h2>
                    <p className="text-xs sm:text-sm text-gray-400">Book a 30-minute consultation</p>
                  </div>
                </div>

                {scheduleStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center text-green-400">
                    <CheckCircle2 className="w-5 h-5 mr-3 shrink-0" />
                    <span className="text-sm font-medium">Call scheduled successfully! Check your email for confirmation.</span>
                  </div>
                )}

                {scheduleStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center text-red-400">
                    <AlertCircle className="w-5 h-5 mr-3 shrink-0" />
                    <span className="text-sm font-medium">Failed to schedule. Please try again.</span>
                  </div>
                )}

                <form onSubmit={handleScheduleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputGroup
                      label="Full Name"
                      id="schedule-name"
                      name="name"
                      value={scheduleData.name}
                      onChange={handleScheduleChange}
                      onBlur={handleScheduleBlur}
                      placeholder="Your Name"
                      required
                      maxLength={50}
                      error={scheduleTouched.name ? scheduleErrors.name : null}
                    />
                    <InputGroup
                      label="Email Address"
                      id="schedule-email"
                      name="email"
                      type="email"
                      value={scheduleData.email}
                      onChange={handleScheduleChange}
                      onBlur={handleScheduleBlur}
                      placeholder="your@email.com"
                      required
                      error={scheduleTouched.email ? scheduleErrors.email : null}
                    />
                  </div>

                  <InputGroup
                    label="Phone Number"
                    id="schedule-phone"
                    name="phone"
                    type="tel"
                    value={scheduleData.phone}
                    onChange={handleScheduleChange}
                    onBlur={handleScheduleBlur}
                    placeholder="+91 9876543210"
                    required
                    error={scheduleTouched.phone ? scheduleErrors.phone : null}
                    hint="Include country code"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="schedule-date" className="block mb-1.5 text-xs sm:text-sm font-medium text-gray-300">
                        Preferred Date <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="schedule-date"
                        name="date"
                        value={scheduleData.date}
                        onChange={handleScheduleChange}
                        onBlur={handleScheduleBlur}
                        min={getMinDate()}
                        required
                        className={`w-full px-3 sm:px-4 py-3 bg-gray-900/50 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-white outline-none transition-all text-sm sm:text-base ${scheduleTouched.date && scheduleErrors.date ? "border-red-500/50" : "border-white/10"
                          }`}
                      />
                      {scheduleTouched.date && scheduleErrors.date && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {scheduleErrors.date}
                        </p>
                      )}
                      <p className="mt-1 text-xs text-gray-500">Mon-Fri only</p>
                    </div>

                    <div>
                      <label htmlFor="schedule-time" className="block mb-1.5 text-xs sm:text-sm font-medium text-gray-300">
                        Preferred Time (IST) <span className="text-blue-500">*</span>
                      </label>
                      <input
                        type="time"
                        id="schedule-time"
                        name="time"
                        value={scheduleData.time}
                        onChange={handleScheduleChange}
                        onBlur={handleScheduleBlur}
                        min="09:00"
                        max="18:00"
                        required
                        className={`w-full px-3 sm:px-4 py-3 bg-gray-900/50 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-white outline-none transition-all text-sm sm:text-base ${scheduleTouched.time && scheduleErrors.time ? "border-red-500/50" : "border-white/10"
                          }`}
                      />
                      {scheduleTouched.time && scheduleErrors.time && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {scheduleErrors.time}
                        </p>
                      )}
                      <p className="mt-1 text-xs text-gray-500">9 AM - 6 PM IST</p>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="schedule-topic" className="block mb-1.5 text-xs sm:text-sm font-medium text-gray-300">
                      Discussion Topic <span className="text-blue-500">*</span>
                    </label>
                    <textarea
                      id="schedule-topic"
                      name="topic"
                      value={scheduleData.topic}
                      onChange={handleScheduleChange}
                      onBlur={handleScheduleBlur}
                      required
                      rows={3}
                      maxLength={200}
                      className={`w-full px-3 sm:px-4 py-3 bg-gray-900/50 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-white outline-none transition-all placeholder-gray-500 resize-none text-sm sm:text-base ${scheduleTouched.topic && scheduleErrors.topic ? "border-red-500/50" : "border-white/10"
                        }`}
                      placeholder="Briefly describe what you'd like to discuss..."
                    />
                    <div className="flex justify-between items-center mt-1">
                      {scheduleTouched.topic && scheduleErrors.topic ? (
                        <p className="text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {scheduleErrors.topic}
                        </p>
                      ) : (
                        <p className="text-xs text-gray-500">Min 10 characters</p>
                      )}
                      <p className="text-xs text-gray-500">{scheduleData.topic.length}/200</p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isScheduleSubmitting || !isScheduleFormValid}
                    className="w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {isScheduleSubmitting ? (
                      <>Scheduling...</>
                    ) : (
                      <>Schedule Call <Calendar className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href?: string }) {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="p-2 sm:p-2.5 bg-white/5 rounded-lg border border-white/5 shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs sm:text-sm text-gray-400 mb-0.5">{label}</div>
        {href ? (
          <a href={href} className="text-white font-medium hover:text-blue-400 transition-colors text-sm sm:text-base">
            {value}
          </a>
        ) : (
          <div className="text-white font-medium text-sm sm:text-base">{value}</div>
        )}
      </div>
    </div>
  )
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2.5 sm:p-3 bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
    >
      <div className="group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
    </a>
  )
}

interface InputGroupProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
  error?: string | null;
  hint?: string;
}

function InputGroup({ label, id, name, type = "text", value, onChange, onBlur, placeholder, required, maxLength, error, hint }: InputGroupProps) {
  return (
    <div>
      <label htmlFor={id} className="block mb-1.5 sm:mb-2 text-xs sm:text-sm font-medium text-gray-300">
        {label} {required && <span className="text-blue-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        maxLength={maxLength}
        className={`w-full px-3 sm:px-4 py-3 sm:py-3.5 bg-gray-900/50 border rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-white outline-none transition-all placeholder-gray-500 text-sm sm:text-base ${error ? "border-red-500/50" : "border-white/10"
          }`}
        placeholder={placeholder}
      />
      {error ? (
        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" /> {error}
        </p>
      ) : hint ? (
        <p className="mt-1 text-xs text-gray-500">{hint}</p>
      ) : null}
    </div>
  )
}

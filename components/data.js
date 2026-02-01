import {
  Bot,
  BarChart3,
  Headset,
  Lightbulb,
  Wallet,
  Zap,
} from "lucide-react";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Transformative Technology Solutions",
  desc: "Experience the power of innovation with our comprehensive suite of services. From AI-driven insights to cutting-edge development, we deliver excellence at every step of your digital journey.",
  image: benefitOneImg,
  bullets: [
    {
      title: "AI/ML Innovation",
      desc: "Harness the power of artificial intelligence and machine learning to automate processes, gain predictive insights, and create intelligent applications that adapt to your business needs.",
      icon: <Bot />,
    },
    {
      title: "Data-Driven Analytics",
      desc: "Transform raw data into actionable business intelligence with our advanced analytics solutions. Leverage deep learning models and visualization tools to make informed strategic decisions.",
      icon: <BarChart3 />,
    },
    {
      title: "24/7 Technical Support",
      desc: "Our dedicated support team is available around the clock to ensure your applications run smoothly. Get expert guidance for deployment, maintenance, and scaling your solutions.",
      icon: <Headset />,
    },
  ],
};

const benefitTwo = {
  title: "Exclusive Partnership Benefits",
  desc: "Partner with BONSOI Systems and unlock premium advantages designed to accelerate your digital transformation journey. We invest in your success with comprehensive support and flexible engagement models.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Complimentary Strategy Session",
      desc: "Begin your journey with a free in-depth consultation where we analyze your business challenges and architect a tailored technology roadmap aligned with your goals.",
      icon: <Lightbulb />,
    },
    {
      title: "Flexible Payment Options",
      desc: "Choose from milestone-based payments, subscription models, or custom payment plans designed to align with your budget and cash flow requirements.",
      icon: <Wallet />,
    },
    {
      title: "Priority Partnership Rates",
      desc: "Take advantage of exclusive discounts for early project commitments, long-term contracts, and referral partnerships. Save up to 20% on select services.",
      icon: <Zap />,
    },
  ],
};


export { benefitOne, benefitTwo };

import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import Link from "next/link";
import { 
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  CurrencyDollarIcon 
} from "@heroicons/react/24/solid";

export const metadata = {
  title: "Careers | BONSOI Systems - Join Our Team",
  description: "Build the future with BONSOI Systems. Explore exciting career opportunities in AI/ML, Web3, and full-stack development.",
};

export default function CareersPage() {
  return (
    <Container>
      <div className="animate-fade-in">
        <SectionTitle
          preTitle="Join Our Team"
          title="Build the Future With Us"
        >
          We're looking for passionate innovators, problem-solvers, and tech enthusiasts 
          who want to create cutting-edge solutions that transform businesses worldwide.
        </SectionTitle>

        {/* Company Culture */}
        <div className="grid gap-8 mt-16 md:grid-cols-3">
          <div className="p-6 text-center transition-all duration-300 bg-white border border-gray-200 shadow-md rounded-xl hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <div className="mb-4 text-4xl">🚀</div>
            <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
              Innovation First
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Work on cutting-edge projects using the latest technologies in AI, blockchain, and cloud computing.
            </p>
          </div>

          <div className="p-6 text-center transition-all duration-300 bg-white border border-gray-200 shadow-md rounded-xl hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <div className="mb-4 text-4xl">🌍</div>
            <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
              Remote-Friendly
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Work from anywhere with flexible hours. We believe in output over office hours.
            </p>
          </div>

          <div className="p-6 text-center transition-all duration-300 bg-white border border-gray-200 shadow-md rounded-xl hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
            <div className="mb-4 text-4xl">📚</div>
            <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Annual learning budget, conference tickets, and access to premium courses and certifications.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="p-8 mt-16 shadow-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl lg:p-12">
          <h2 className="mb-8 text-3xl font-bold text-center text-white">
            Why Join BONSOI Systems?
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Competitive salaries",
              "Health & dental insurance",
              "401(k) matching",
              "Unlimited PTO",
              "Home office stipend",
              "Latest tech equipment",
              "Stock options",
              "Parental leave",
              "Team retreats",
              "Gym membership",
              "Mental health support",
              "Professional development"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center text-white">
                <span className="mr-3 text-xl">✓</span>
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800 dark:text-white">
            Open Positions
          </h2>

          <div className="space-y-6">
            <JobCard
              title="Senior AI/ML Engineer"
              department="Engineering"
              location="Remote (US/EU)"
              type="Full-time"
              salary="$140k - $180k"
              description="Lead the development of machine learning models and AI solutions for enterprise clients. Experience with TensorFlow, PyTorch, and production ML systems required."
              requirements={[
                "5+ years in ML engineering",
                "Strong Python and ML frameworks",
                "Experience with cloud platforms",
                "MLOps knowledge"
              ]}
            />

            <JobCard
              title="Blockchain Developer"
              department="Engineering"
              location="Remote (Worldwide)"
              type="Full-time"
              salary="$120k - $160k"
              description="Build decentralized applications and smart contracts on multiple blockchain platforms. Deep understanding of Solidity, Web3, and DeFi protocols required."
              requirements={[
                "3+ years blockchain development",
                "Solidity and smart contract expertise",
                "Experience with Ethereum/Polygon",
                "Security audit experience"
              ]}
            />

            <JobCard
              title="Full-Stack Engineer (React/Node.js)"
              department="Engineering"
              location="Remote (US)"
              type="Full-time"
              salary="$110k - $150k"
              description="Develop scalable web applications using modern JavaScript frameworks. Work on both frontend and backend of complex SaaS products."
              requirements={[
                "4+ years full-stack development",
                "Expert in React and Node.js",
                "TypeScript proficiency",
                "AWS/Azure experience"
              ]}
            />

            <JobCard
              title="DevOps Engineer"
              department="Infrastructure"
              location="Remote (EU)"
              type="Full-time"
              salary="$100k - $140k"
              description="Manage cloud infrastructure, CI/CD pipelines, and ensure high availability of production systems. Kubernetes and Infrastructure as Code expertise required."
              requirements={[
                "3+ years DevOps experience",
                "Kubernetes and Docker expertise",
                "Terraform/CloudFormation",
                "AWS/GCP/Azure certification"
              ]}
            />

            <JobCard
              title="Product Designer (UI/UX)"
              department="Design"
              location="Remote (Worldwide)"
              type="Full-time"
              salary="$90k - $130k"
              description="Design beautiful, intuitive interfaces for web and mobile applications. Create design systems and collaborate closely with engineering teams."
              requirements={[
                "3+ years product design",
                "Figma expert",
                "Design systems experience",
                "Portfolio required"
              ]}
            />

            <JobCard
              title="Technical Project Manager"
              department="Operations"
              location="Remote (US)"
              type="Full-time"
              salary="$100k - $135k"
              description="Lead technical projects from conception to delivery. Coordinate between clients, developers, and stakeholders to ensure successful project outcomes."
              requirements={[
                "4+ years project management",
                "Technical background preferred",
                "Agile/Scrum certification",
                "Excellent communication skills"
              ]}
            />
          </div>
        </div>

        {/* Application CTA */}
        <div className="mt-16">
          <div className="p-8 text-center bg-white border border-gray-200 shadow-xl rounded-2xl dark:bg-gray-800 dark:border-gray-700">
            <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white">
              Don't See Your Role?
            </h2>
            <p className="max-w-2xl mx-auto mb-6 text-lg text-gray-600 dark:text-gray-300">
              We're always looking for talented individuals. Send us your resume and tell us how you can contribute to BONSOI Systems.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 font-bold text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 hover:shadow-2xl"
            >
              Send General Application
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

function JobCard({
  title,
  department,
  location,
  type,
  salary,
  description,
  requirements
}: {
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
}) {
  return (
    <div className="p-6 transition-all duration-300 bg-white border border-gray-200 shadow-md rounded-xl hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col justify-between gap-4 mb-4 lg:flex-row lg:items-center">
        <div>
          <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
            {title}
          </h3>
          <div className="inline-block px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
            {department}
          </div>
        </div>
        <Link
          href="/contact"
          className="px-6 py-3 font-semibold text-center text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105"
        >
          Apply Now
        </Link>
      </div>

      <div className="grid gap-4 mb-4 md:grid-cols-3">
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <MapPinIcon className="w-5 h-5 mr-2" />
          {location}
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <ClockIcon className="w-5 h-5 mr-2" />
          {type}
        </div>
        <div className="flex items-center text-gray-600 dark:text-gray-400">
          <CurrencyDollarIcon className="w-5 h-5 mr-2" />
          {salary}
        </div>
      </div>

      <p className="mb-4 text-gray-600 dark:text-gray-300">
        {description}
      </p>

      <div>
        <h4 className="mb-2 font-semibold text-gray-800 dark:text-white">Requirements:</h4>
        <ul className="space-y-1 text-gray-600 dark:text-gray-400">
          {requirements.map((req, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-blue-600">✓</span>
              {req}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

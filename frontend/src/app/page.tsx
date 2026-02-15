import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { About } from "@/components/home/About";
import { Portfolio } from "@/components/shared/Portfolio";
import { Testimonials } from "@/components/shared/Testimonials";
import { Team } from "@/components/shared/Team";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  // Portfolio projects data
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Modern online store with real-time inventory management, payment processing, and analytics dashboard.",
      category: "Web Development",
      image: "/images/portfolio/project-1.png",
      tags: ["Next.js", "Stripe", "MongoDB"],
    },
    {
      title: "AI Analytics Dashboard",
      description: "Machine learning powered business intelligence platform with predictive analytics and data visualization.",
      category: "AI & Machine Learning",
      image: "/images/portfolio/project-2.png",
      tags: ["Python", "TensorFlow", "React"],
    },
    {
      title: "Mobile Banking App",
      description: "Secure fintech application with biometric authentication, real-time transactions, and investment tracking.",
      category: "Mobile Development",
      image: "/images/portfolio/project-3.png",
      tags: ["React Native", "Node.js", "PostgreSQL"],
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc",
      content: "Aries Technologies transformed our vision into reality. Their expertise in AI and web development helped us launch our product 3 months ahead of schedule.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "DataFlow Solutions",
      content: "Outstanding work on our analytics platform. The team's attention to detail and technical expertise exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "InnovateCo",
      content: "Professional, responsive, and incredibly talented. They delivered a custom solution that perfectly fit our unique requirements.",
      rating: 5,
    },
  ];

  // Team members data
  const teamMembers = [
    {
      name: "David Thompson",
      role: "Lead Software Engineer",
      bio: "10+ years building scalable systems. Passionate about clean code and innovative solutions.",
      image: "/images/team/member-1.png",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Priya Patel",
      role: "AI/ML Specialist",
      bio: "Expert in machine learning and data science. Turning complex data into actionable insights.",
      image: "/images/team/member-2.png",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Alex Rivera",
      role: "UX/UI Designer",
      bio: "Creating beautiful, user-centric designs that drive engagement and conversions.",
      image: "/images/team/member-3.png",
      social: {
        linkedin: "#",
      },
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <Portfolio projects={projects} />
      <About />
      <Testimonials testimonials={testimonials} />
      <Team members={teamMembers} />
      <Contact />
    </div>
  );
}

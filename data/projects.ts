import type { Project } from "@/types/project";

/**
 * Add the exact repository/demo URLs when available. Keep missing links null;
 * the UI renders a clearly labeled unavailable state instead of a broken link.
 * To replace an interface concept, put an image in public/projects/ and set
 * image to "/projects/your-file.webp" with an accurate imageAlt.
 */
export const projects: Project[] = [
  {
    id: "sanad",
    name: "Sanad",
    category: "Humanitarian Support Platform",
    period: "July – August 2026",
    description:
      "A full-stack platform connecting refugees, NGOs, donors, shelters, volunteers, and administrators — bringing humanitarian support into one coordinated system.",
    featured: true,
    technologies: [
      "React", "Node.js", "Express", "MongoDB", "Mongoose", "Socket.io",
      "Cloudinary", "JWT", "REST API",
    ],
    highlights: [
      "Secure, role-based dashboards for every participant",
      "Aid requests, donation matching, and case coordination",
      "Real-time updates and automated case analysis",
    ],
    features: [
      "JWT authentication",
      "Role-based access control",
      "Secure RESTful APIs",
      "React dashboards",
      "Aid request management",
      "Donation matching",
      "Case assignment",
      "Volunteer scheduling",
      "Shelter management",
      "Real-time notifications with Socket.io",
      "Cloudinary document uploads",
      "Location-based shelter search using maps",
      "Automated case analysis agent for triage and assignment",
      "Seeding and demo scripts",
    ],
    githubUrl: null, // TODO: Add the actual Sanad repository URL.
    liveUrl: "https://sanad-lb.vercel.app/",
    image: null,
    imageAlt: "Screenshot of the Sanad humanitarian support platform",
    previewKind: "humanitarian",
  },
  {
    id: "airbnb",
    name: "Airbnb",
    category: "MERN Property Booking Platform",
    period: "June – July 2026",
    description:
      "A full-stack property booking application with a responsive interface for discovering stays, making reservations, and managing property listings.",
    featured: false,
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
    highlights: [
      "Property discovery with search and filtering",
      "Reservations, pricing, and availability management",
      "Separate permissions for users and property owners",
    ],
    features: [
      "JWT authentication",
      "Role-based functionality",
      "User and property owner permissions",
      "Property CRUD operations",
      "Search and filtering",
      "Reservations",
      "Pricing management",
      "Availability management",
      "REST APIs",
      "Image uploads",
      "MongoDB integration",
    ],
    githubUrl: null, // TODO: Add the actual Airbnb project repository URL.
    liveUrl: null, // TODO: Add the deployed project URL.
    image: null,
    imageAlt: "Screenshot of the MERN property booking application",
    previewKind: "booking",
  },
  {
    id: "ecommerce",
    name: "E-Commerce Platform",
    category: "MERN Online Store",
    period: "May – June 2026",
    description:
      "A full-stack shopping experience built with React, Node.js, Express, and MongoDB, with connected workflows for customers and administrators.",
    featured: false,
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST APIs"],
    highlights: [
      "Product browsing, shopping cart, and order processing",
      "Admin tools for inventory, orders, and users",
      "Protected operations with role-based authentication",
    ],
    features: [
      "JWT authentication",
      "Role-based access control",
      "Product management",
      "Shopping cart",
      "Order processing",
      "Secure CRUD operations",
      "Admin dashboard",
      "User management",
      "Inventory management",
      "Order management",
    ],
    githubUrl: null, // TODO: Add the actual e-commerce repository URL.
    liveUrl: null, // TODO: Add the deployed project URL.
    image: null,
    imageAlt: "Screenshot of the MERN e-commerce platform",
    previewKind: "commerce",
  },
];

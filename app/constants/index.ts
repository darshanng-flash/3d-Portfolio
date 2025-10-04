export const skillsData = [
"React",
"Java",
"Python",
"SQL",
"MongoDB",
"IoT",
"DevOps",
"Tableau",
"Power BI",
"C Programming"
];

export const navItems = [
{ title: "Home", target: "#hero" },
{ title: "About", target: "#about" },
{ title: "Projects", target: "#projects" },
{ title: "Skills", target: "#skills" },
{ title: "Experience", target: "#experience" },
{ title: "Contact", target: "#contact" }
];

export const gridItems = [
{ id: 1, icon: "/icons/react.svg", label: "React" },
{ id: 2, icon: "/icons/java.svg", label: "Java" },
{ id: 3, icon: "/icons/python.svg", label: "Python" },
{ id: 4, icon: "/icons/sql.svg", label: "SQL" },
{ id: 5, icon: "/icons/mongodb.svg", label: "MongoDB" },
{ id: 6, icon: "/icons/iot.svg", label: "IoT" },
{ id: 7, icon: "/icons/devops.svg", label: "DevOps" },
{ id: 8, icon: "/icons/tableau.svg", label: "Tableau" },
{ id: 9, icon: "/icons/powerbi.svg", label: "Power BI" },
{ id: 10, icon: "/icons/c.svg", label: "C Programming" }
];

export const projects = [
{
id: "ecommerce",
title: "E‑commerce Platform",
des: "Full‑stack storefront with product catalog, cart, checkout, and admin dashboard.",
tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "R3F"],
url: "https://your-ecommerce-demo.example.com",
highlights: [
"Optimized product listing with server‑side filtering and pagination",
"Secure checkout with Stripe and webhook fulfillment",
"3D product viewer using React Three Fiber"
]
},
{
id: "simulator",
title: "Attack & Defense Simulator",
des: "AI‑driven red/blue team sandbox to simulate adversarial behavior and defense strategies.",
tags: ["Next.js", "Python API", "Agents", "WebSockets", "R3F"],
url: "https://your-simulator-demo.example.com",
highlights: [
"Agent‑based attacks with adjustable tactics (recon, exploit, persistence)",
"Live defense telemetry and dashboards with WebSockets",
"Replay visualization using 3D scenes and timelines"
]
}
];

export const workExperience = [
{
id: 1,
role: "Software Engineering Student",
org: "IST Specialization",
period: "2024 — Present",
points: [
"Built a 3D interactive portfolio using Next.js, React Three Fiber, and Tailwind.",
"Developed an E‑commerce demo with product catalog, cart, and checkout.",
"Collaborated on an AI Attack & Defense Simulator with agent‑based scenarios."
],
tags: ["Next.js", "R3F", "Tailwind", "Agents", "WebSockets"]
},
{
id: 2,
role: "Projects & Labs",
org: "Academic / Personal",
period: "Ongoing",
points: [
"Data viz dashboards with Tableau and Power BI.",
"Backend APIs and databases using Node.js, SQL, and MongoDB.",
"IoT prototypes with sensor data ingestion and analytics."
],
tags: ["Tableau", "Power BI", "SQL", "MongoDB", "IoT"]
}
];
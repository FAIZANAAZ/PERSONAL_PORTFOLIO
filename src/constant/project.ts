import { IconType } from 'react-icons';
import { FaCss3, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssLine, RiNextjsFill } from "react-icons/ri";

 interface Project {
  id: number;
  name: string;
  deploymentLink: string;
  sourceLink: string;
  icon1?: IconType;
  icon2?: IconType;
  icon3?: IconType;
  icon4?: IconType;
  image: string;
}

export const dataProjects: Project[] = [
  {
    id: 1,
    name: "Resume Builder",
    deploymentLink: "https://resume-theta-hazel.vercel.app/",
    sourceLink: "https://github.com/FAIZANAAZ/RESUME_BUILDER",
    icon1: RiTailwindCssLine,
    icon2: SiTypescript,
    image: "/Images/p3.jpg",
  },
  {
    id: 2,
    name: "MULTI PAGE WEBSITE",
    deploymentLink: "https://multipage-web-seven.vercel.app/",
    sourceLink: "https://github.com/FAIZANAAZ/MULTIPAGE_WEB",
    icon1: RiTailwindCssLine,
    icon2: SiTypescript,
    icon3: RiNextjsFill,
    icon4: FaReact,
    image: "/Images/p5.jpg",
  },
  {
    id: 3,
    name: "Pana Cloude Website",
    deploymentLink: "https://panacloud-web-khaki.vercel.app/",
    sourceLink: "https://github.com/FAIZANAAZ/PANACLOUD_WEB",
    icon1: RiTailwindCssLine,
    image: "/Images/p1.jpg",
  },
  {
    id: 4,
    name: "Portfolio Website",
    deploymentLink: "https://portfolio-web-html-css.vercel.app/",
    sourceLink: "https://github.com/FAIZANAAZ/PORTFOLIO_WEB_HTML_CSS",
    icon1: FaCss3,
    icon2: SiTypescript,
    image: "/Images/p2.jpg",
  },
  {
    id: 5,
    name: "Todo List",
    deploymentLink: "https://todo-list-six-zeta-10.vercel.app/",
    sourceLink: "https://github.com/FAIZANAAZ/Todo-list",
    icon1: FaCss3,
    icon2: SiTypescript,
    image: "/Images/p4.jpg",
  },
  {
    id: 6,
    name: "FIGMA WEBSITE HACKATHON",
    deploymentLink: "https://figma-hackthon-with-functionality.vercel.app/",
    sourceLink: "https://github.com/FAIZANAAZ/FIGMA_HACKTHON_WITH_FUNCTIONALITY",
    icon1: FaCss3,
    icon2: SiTypescript,
    icon3: RiNextjsFill,
    image: "/projects/sanity.jpg",
  },
  {
    id: 7,
    name: "FIGMA PIXEL PERFECT WEBSITE ",
    deploymentLink: "https://figma-pixel-perfect-web.vercel.app/",
    sourceLink: "https://github.com/FAIZANAAZ/FIGMA_PIXEL_PERFECT_WEB",
    icon1: FaCss3,
    icon2: SiTypescript,
    icon3: RiNextjsFill,
    image: "/projects/ssct.jpg",
  },
   {
    id: 8,
    name: "PROFESSIONAL CLIENT COURSE DASHBOARD",
    deploymentLink: "https://bite-dashboard.vercel.app/",
    sourceLink: "https://github.com/FAIZANAAZ/Bite_Dashboard",
    icon1: FaCss3,
    icon2: SiTypescript,
    icon3: RiNextjsFill,
    image: "/projects/profeshional-dashbord.png",
  },
  {
    id: 9,
    name: "E-COMMERCE DASHBOARD",
    deploymentLink: "https://dashboard-full-e-commer-1-gekv.vercel.app/",
    sourceLink: "https://github.com/FAIZANAAZ/DASHBOARD_FULL_E-COMMER1",
    icon1: FaCss3,
    icon2: SiTypescript,
    icon3: RiNextjsFill,
    image: "/projects/e-commerce-dash.png",
  },
  {
    id: 10,
    name: "MY DESIGN Website",
    deploymentLink: "https://second-task-b6l3.vercel.app/",
    sourceLink: "https://github.com/FAIZANAAZ/SECOND_TASK",
    icon1: FaCss3,
    icon2: SiTypescript,
    icon3: RiNextjsFill,
    image: "/projects/my_design_web.png",
  },
    {
    id: 11,
    name: "Landing Page",
    deploymentLink: "https://second-landingpage-task-2.vercel.app/",
    sourceLink: "https://github.com/FAIZANAAZ/SECOND_LANDINGPAGE_TASK2",
    icon1: FaCss3,
    icon2: SiTypescript,
    icon3: RiNextjsFill,
    image: "/projects/landing-page.png",
  },
   {
    id: 12,
    name: "MY DESIGN DASHBOARD",
    deploymentLink: "https://dashboard-task-bcea.vercel.app/",
    sourceLink: "https://github.com/FAIZANAAZ/DASHBOARD_TASK",
    icon1: FaCss3,
    icon2: SiTypescript,
    icon3: RiNextjsFill,
    image: "/projects/my_design_dash.png",
  },
    {id: 13,
    name: "2ND LANDING PAGE ",
    deploymentLink: "https://first-task-flame.vercel.app/",
    sourceLink: "https://github.com/FAIZANAAZ/FIRST_TASK",
    icon1: FaCss3,
    icon2: SiTypescript,
    icon3: RiNextjsFill,
    image: "/projects/2nd-landing-page.png",
  },
   {id: 14,
    name: "BLOG WEBSITE",
    deploymentLink: "https://ai-blog-web-57rq.vercel.app/",
    sourceLink: "https://github.com/FAIZANAAZ/AI_BLOG_WEB",
    icon1: FaCss3,
    icon2: SiTypescript,
    icon3: RiNextjsFill,
    image: "/projects/ai-blog.png",
  },
  

];
export interface TimelineItem {
    id: number;
    title: string;
    subtitle?: string;
    date: string;
    description?: string;
    icon: 'work' | 'education';
  }
  
  export const timelineData: TimelineItem[] = [
    {
        id: 1,
        title: " Frontend Developer",
        date: "Jan 2023 - Present",
        description: " Typescript | Figma To Html & Pictures to Website | Html | CSS | TailwindCSS | Next.js | Api integration | Redux Toolkit | Git & GitHub (basic) ",
        icon: "work"
      },
      {
        id: 2,
        title: "Backend Developer",
        date: "Jan 2024 - Present",
        description: "Typescript | Next.js | Node.js | Express.js | MongoDB | Sanity-CMS | Python ",
        icon: "work"
      },
      
    {
      id: 3,
      title: "Education",
      description: "ICOM of Computer science & Information Technology",
      date: "2021 - 2023",
      icon: "education"
    }
  ];
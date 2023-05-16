import { TbBrandNextjs } from "react-icons/tb";
import { SiPostgresql, SiTypescript, SiSqlite, SiInsomnia } from "react-icons/si";
import { FaGit, FaPython } from "react-icons/fa";
import {
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";
import {DiDjango} from "react-icons/Di"

export const stackData = [
  {
    title: "HTML",
    img: FaHtml5,
  },
  {
    title: "CSS",
    img: FaCss3Alt,
  },
  {
    title: "JS",
    img: FaJs,
  },
  { title: "TypeScript", img: SiTypescript },
  { title: "Python", img: FaPython },
  { title: "Git", img: FaGit },
  {
    title: "React",
    img: FaReact,
  },
  { title: "Next.js", img: TbBrandNextjs },
  {
    title: "Node JS",
    img: FaNode,
  },
  { title: "django", img:DiDjango },
  { title: "Docker", img: FaDocker },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "SQlite", img: SiSqlite},
  { title: "insomnia", img: SiInsomnia},
];

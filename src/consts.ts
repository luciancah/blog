import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "바이너리 브라더",
  DESCRIPTION: "이진 형의 블로그",
  EMAIL: "hello@luciancah.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "홈",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "블로그",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "프로젝트",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/luka2843",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/luciancah",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/luciancah",
  },
  {
    NAME: "Strava",
    HREF: "https://www.strava.com/athletes/luciancah",
  },
];

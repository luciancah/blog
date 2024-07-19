import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "바이너리 브라더",
  DESCRIPTION: "이진 형의 블로그",
  EMAIL: "hello@luciancah.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "바이너리 브라더",
  DESCRIPTION: "이진형 블로그입니다.............",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "블로그",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "프로젝트",
};

export const TAGS: Metadata = {
  TITLE: "Tags",
  DESCRIPTION: "태그",
};

export const SOCIALS: Socials = [
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

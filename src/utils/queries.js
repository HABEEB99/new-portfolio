export const aboutQuery = ` *[_type == "about"]{
    _id,
    title,
    description,
    imgUrl
  }`;

export const projectQuery = `*[_type == "project"]{
    _id,
    title,
    description,
    projectUrl,
    codeLink,
    slug,
    imgUrl,
    tags
  }`;

export const skilQuery = `*[_type == "skill"]{
  _id,
  name,
  icon,
  shadowColor
}`;

export const experienceQuery = `*[_type=='workExperience']{
  _id,
  role,
  company,
  date,
  duties,
  techStacks
}`;

export const educationQuery = `*[_type=='education']{
  _id,
  course,
  institution,
  date,
  topics
}`;

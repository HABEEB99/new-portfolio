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

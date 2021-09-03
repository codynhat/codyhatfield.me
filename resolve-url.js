const slugify = require("slugify");
module.exports = (title) => {
  const segments = title.split("/");
  if (segments.length > 1) {
    const slugifiedTitle = slugify(segments.pop());
    return `${segments.join("/")}/${slugifiedTitle}`;
  } else {
    const slugifiedTitle = slugify(segments.pop(), { lower: true });
    return `/notes/${slugifiedTitle}`;
  }
};

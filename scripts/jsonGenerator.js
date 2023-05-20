const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const config = require("../src/config/config.json");
const { communities_folder } = config.settings;
const jsonDir = "./.json";

// get data from markdown
const getData = (folder) => {
  const getPath = fs.readdirSync(path.join(folder));
  const sanitizeData = getPath.filter((item) => item.includes(".md"));
  const filterData = sanitizeData.filter((item) => item.match(/^(?!_)/));
  const getData = filterData.map((filename) => {
    const file = fs.readFileSync(path.join(folder, filename), "utf-8");
    const { data } = matter(file);
    const content = matter(file).content;
    const slug = data.slug ? data.slug : filename.replace(".md", "");

    return {
      frontmatter: data,
      content: content,
      slug: slug,
    };
  });
  const publishedPages = getData.filter(
    (page) => !page.frontmatter?.draft && page
  );
  return publishedPages;
};

// get communities data
const communities = getData(`src/content/${communities_folder}`);

try {
  // creare folder if it doesn't exist
  if (!fs.existsSync(jsonDir)) {
    fs.mkdirSync(jsonDir);
  }

  // create communities.json file
  fs.writeFileSync(`${jsonDir}/communities.json`, JSON.stringify(communities));
} catch (err) {
  console.error(err);
}

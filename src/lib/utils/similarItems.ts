// similer products
const similerItems = (currentItem: any, allItems: any, slug: string) => {
  let projects: [] = [];
  let tags: [] = [];

  // set projects
  if (currentItem.data.projects.length > 0) {
    projects = currentItem.data.projects;
  }

  // set tags
  if (currentItem.data.tags.length > 0) {
    tags = currentItem.data.tags;
  }

  // filter by projects
  const filterByCategories = allItems.filter(
    (item: { data: { projects: string } }) =>
      projects.find((category) => item.data.projects.includes(category))
  );

  // filter by tags
  const filterByTags = allItems.filter((item: { data: { tags: string } }) =>
    tags.find((tag) => item.data.tags.includes(tag))
  );

  // merged after filter
  const mergedItems = [...new Set([...filterByCategories, ...filterByTags])];

  // filter by slug
  const filterBySlug = mergedItems.filter((product) => product.slug !== slug);

  return filterBySlug;
};

export default similerItems;

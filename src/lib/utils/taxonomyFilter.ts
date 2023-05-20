import { slugify } from "@/lib/utils/textConverter";

const taxonomyFilter = (communities: any[], name: string, key: any) =>
  communities.filter((community) =>
    community.data[name].map((name: string) => slugify(name)).includes(key)
  );

export default taxonomyFilter;

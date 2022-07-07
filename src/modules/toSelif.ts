import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeStringify from "rehype-stringify"
import { plugin, handlers } from "./yomiyasuin2"
import rehypeExternalLinks from "rehype-external-links"

export const toSelif = async (markdown: string, userData: any) => {
  const result = await unified()
    .use(remarkParse)
    .use(plugin, {
      userData,
    })
    .use(remarkRehype, {
      handlers,
    })
    .use(rehypeExternalLinks)
    .use(rehypeStringify)
    .process(markdown)
  return result.value as string
}

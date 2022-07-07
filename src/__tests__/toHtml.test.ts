import { toHtml } from "../modules/toHtml"
import { test } from "@jest/globals"
import { toSelif } from "../modules/toSelif"

test.skip("toHtml", async () => {
  const md = `
## hoge

ほげ：ふが
`

  const html = await toHtml(md, [])
  console.log(html)
})

test("list", async () => {
  const md = `
ほげ：ふが
     ほげほげ
     へへへへ
ぴよ：2つあります
    1. hoge
    2. fuga 
`

  const html = await toSelif(md, [])
  console.log(html)
})

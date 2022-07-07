export const combiineToLines = (partialMd: string) => {
  let cursor = -1
  const lines = partialMd.split("\n").reduce<string[]>((ret, line) => {
    if (/.+[：]/.test(line)) {
      cursor++
    }
    if (!ret[cursor]) {
      ret[cursor] = ""
    }
    ret[cursor] += `${ret[cursor] ? "\n" : ""}${line.trim()}`
    console.log(ret[cursor])
    return ret
  }, [])
  return lines
}

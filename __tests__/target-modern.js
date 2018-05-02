import buildPreset from "../src"
import { fixtures, titles, check } from "./core"

describe("Modern", () => {
  const options = buildPreset(null, {
    sourceMaps: false,
    target: "modern"
  })

  fixtures.forEach((fileName, index) => {
    test(titles[index], () => check(fileName, options))
  })
})
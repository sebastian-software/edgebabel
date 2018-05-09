import fastAsyncPlugin from "fast-async"

export default function register(presets, plugins, options) {
  // Directly ask babel-preset-env whether we want to use transform-async
  // based on currently configured targets. Only if that's the case we
  // transform our async/await code. Otherwise we assume it works without
  // any transpilation.
  const requiresAsync = isPluginRequired(
    getTargets(envTargets),
    envPlugins["transform-async-to-generator"]
  )

  if (!requiresAsync) {
    options.rewriteAsync = null
  }

  // Alternative to Babel Regenerator
  // Implements the ES7 keywords async and await using syntax transformation
  // to at Promises at compile-time, rather than using generators.
  // https://github.com/babel/babel/pull/7076 (NEW: bundled plugin with Babel)
  // https://www.npmjs.com/package/fast-async (OLD: separate Babel plugin)
  if (options.rewriteAsync === "promises") {
    plugins.push(fastAsyncPlugin)
  }

  if (options.debug) {
    console.log("- Async Transpilation:", options.rewriteAsync)
  }
}

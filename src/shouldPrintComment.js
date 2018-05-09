export default function shouldPrintComment (comment) {
  // Keep pure function markers which are generated by some plugins
  // See sideEffects option: https://github.com/mishoo/UglifyJS2
  if (/[#@]__PURE__/.exec(comment)) {
    return true
  }

  // Keep JSON5 magic comments used for Webpack hints
  if (/^\s?webpack[A-Z][A-Za-z]+\:/.exec(comment)) {
    return true
  }

  return false
}

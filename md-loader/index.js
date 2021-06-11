var MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

module.exports = function (source) {
  const content = md.render(source);
  const code = `module.exports = ${JSON.stringify(content)}`
  return code
}

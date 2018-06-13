/**
 *
 * @function mergeStrings
 *
 * @param {String} str1 - site.keywords
 * @param {String} str2 - post.frontmatter.keywords
 *
 * @description
 * Takes in two strings & merges them into one. Should
 * second string not be provided return first string.
 *
 * @example
 * const str = mergeString('hello, world, peanuts', 'Jayhawks, JavaScript, beer')
 * console.log(str) // 'hello, world, peanuts, Jayhawks, JavaScript, beer'
 *
 * @returns {String}
 *
 */
export const mergeStrings = (str1, str2) =>
  str2 ? [...str1.split(', '), ...str2.split(', ')].join(', ') : str1

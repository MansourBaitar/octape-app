/**
 * Replaces all underscores with a space
 * and transforms the string to titleCase
 * @param field the name of the field
 */
export function fieldToLabel(field: string) {
  const spaced = field.replace('_', ' ')
  return titleCase(spaced)
}

/**s
 * Capitalizes the first letter of every word in a string
 * @param s the string that needs to be transformed to title case
 */
export function titleCase(s: string) {
  var split = s.toLowerCase().split(' ')

  // capitalize first letter of every word
  for (let i = 0; i < split.length; i++) {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1)
  }

  return split.join(' ')
}

/**
 * Adds the ordinal suffix of a number
 * @param i the number
 */
export function ordinalSuffixOf(i: number) {
  var j = i % 10,
    k = i % 100
  if (j == 1 && k != 11) {
    return i + 'st'
  }
  if (j == 2 && k != 12) {
    return i + 'nd'
  }
  if (j == 3 && k != 13) {
    return i + 'rd'
  }
  return i + 'th'
}

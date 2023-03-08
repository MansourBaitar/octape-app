import moment, { Moment } from 'moment'

/**
 * Tries to parse a value to an actual date object
 * @param value the value object
 */
export function tryParseDate(value: any) {
  if (!value) return value
  if (typeof value !== 'string') return value
  return new Date(value)
}

/**
 * Calculates how many days where between a date for x amount of months
 * @param since the date form where we should begin counting
 * @param months the months that need to be added to the original date
 */
export function getDaysFrom(since: Date, months: number): number {
  const start = moment(since)
  const end = moment(since).add(months, 'months')

  return end.diff(start, 'days')
}

/**
 * Gets the days passed from today since a date
 * @param since the date from where we should begin counting
 */
export function getDaysPassed(since: Date): number {
  const today = moment()
  return today.diff(since, 'days')
}

/**
 * Extracts the last invoice date based on the following parameters.
 * @param start The start of the subscription
 * @param refreshOn the date of the month when the subscription gets refreshed
 * @param interval the interval of payment
 */
export function getLastInvoiceDate(
  start: Date,
  refreshOn: number,
  interval: number
): Date {
  const today = moment()

  // get months difference since today
  const totalDiffMonths = today.diff(start, 'months')
  const periodsCompleted = Math.floor(totalDiffMonths / interval)

  // calculate last invoice date
  const last = moment(start)
    .clone()
    .add(periodsCompleted * interval, 'months')
    .date(refreshOn)

  return last.toDate()
}

import {
  addDays,
  format,
  getDaysInMonth,
  isAfter,
  isBefore,
  isSameDay,
  isValid,
  isWeekend,
  parse,
  startOfDay,
  startOfMonth,
  startOfQuarter,
  startOfYear,
  subDays,
  subMonths,
} from 'date-fns'

type DateLimits = {
  minDate?: Date
  maxDate?: Date
}

export type DateRangeType = { from: Date; to: Date }

export const DATE_TEXT_LENGTH = 10

export const RANGE_SEPARATOR = ' - '
export const RANGE_TEXT_LENGTH = DATE_TEXT_LENGTH * 2 + RANGE_SEPARATOR.length

export function formatDate(
  date: Date | null | undefined,
  dateFormat: string,
): string {
  return date ? format(date, dateFormat) : ''
}

export function parseDate(text: string, dateFormat: string): Date | null {
  if (text.length !== dateFormat.length) return null

  const date = parse(text, dateFormat, new Date())

  return isValid(date) ? date : null
}

export function roundDate(text: string, dateFormat: string): Date | null {
  const dates = dateFormat.split('/')
  const values = text.split('/')
  const valueOf = (token: string) => Number(values[dates.indexOf(token)])

  const year = valueOf('yyyy')

  if (year < 1000) return null

  const month = Math.min(Math.max(valueOf('MM'), 1), 12)
  const lastDay = getDaysInMonth(new Date(year, month - 1))
  const day = Math.min(Math.max(valueOf('dd'), 1), lastDay)

  return new Date(year, month - 1, day)
}

// Com disablePastDates, o minDate efetivo passa a ser hoje (quando o minDate
// informado for anterior a hoje ou não existir).
export function getMinDate(
  minDate: Date | undefined,
  disablePastDates: boolean | undefined,
): Date | undefined {
  if (!disablePastDates) return minDate

  const today = startOfDay(new Date())

  return minDate && isAfter(minDate, today) ? minDate : today
}

export function isOutOfLimits(
  date: Date,
  { minDate, maxDate }: DateLimits,
): boolean {
  if (minDate && isBefore(date, startOfDay(minDate))) return true
  if (maxDate && isAfter(date, startOfDay(maxDate))) return true

  return false
}

export function formatRange(
  range: DateRangeType | null | undefined,
  dateFormat: string,
): string {
  if (!range) return ''

  return (
    formatDate(range.from, dateFormat) +
    RANGE_SEPARATOR +
    formatDate(range.to, dateFormat)
  )
}

export function parseRange(
  text: string,
  dateFormat: string,
): DateRangeType | null {
  const [fromText, toText] = text.split(RANGE_SEPARATOR)

  if (!fromText || !toText) return null

  const from =
    parseDate(fromText, dateFormat) ?? roundDate(fromText, dateFormat)
  const to = parseDate(toText, dateFormat) ?? roundDate(toText, dateFormat)

  if (!from || !to) return null

  return isAfter(from, to) ? { from: to, to: from } : { from, to }
}

export function isSameRange(
  date1: DateRangeType,
  date2: DateRangeType,
): boolean {
  return isSameDay(date1.from, date2.from) && isSameDay(date1.to, date2.to)
}

export type RangePresetKeyType =
  | 'today'
  | 'last7Days'
  | 'last30Days'
  | 'last6Months'
  | 'last12Months'
  | 'monthToDate'
  | 'quarterToDate'
  | 'yearToDate'

export type RangePresetType = {
  key: RangePresetKeyType
  getRange: (today: Date) => DateRangeType
}

export const RANGE_PRESETS: RangePresetType[] = [
  { key: 'today', getRange: (today) => ({ from: today, to: today }) },
  {
    key: 'last7Days',
    getRange: (today) => ({ from: subDays(today, 6), to: today }),
  },
  {
    key: 'last30Days',
    getRange: (today) => ({ from: subDays(today, 29), to: today }),
  },
  {
    key: 'last6Months',
    getRange: (today) => ({ from: addDays(subMonths(today, 6), 1), to: today }),
  },
  {
    key: 'last12Months',
    getRange: (today) => ({
      from: addDays(subMonths(today, 12), 1),
      to: today,
    }),
  },
  {
    key: 'monthToDate',
    getRange: (today) => ({ from: startOfMonth(today), to: today }),
  },
  {
    key: 'quarterToDate',
    getRange: (today) => ({ from: startOfQuarter(today), to: today }),
  },
  {
    key: 'yearToDate',
    getRange: (today) => ({ from: startOfYear(today), to: today }),
  },
]

export type BlockedDateType =
  | { date: Date; label?: string }
  | { from: Date; to: Date; label?: string }
  // data recorrente (ex.: feriado fixo), bloqueada em todos os anos.
  // month vai de 1 a 12.
  | { day: number; month: number; label?: string }

export type BlockOptionsType = {
  blockedDates?: BlockedDateType[]
  disableWeekends?: boolean
}

// Devolve o motivo do bloqueio
export function getBlockReason(
  date: Date,
  { blockedDates = [], disableWeekends }: BlockOptionsType,
): string | null {
  for (const blocked of blockedDates) {
    let isBlocked: boolean

    if ('date' in blocked) {
      isBlocked = isSameDay(date, blocked.date)
    } else if ('day' in blocked) {
      isBlocked =
        date.getDate() === blocked.day && date.getMonth() + 1 === blocked.month
    } else {
      isBlocked =
        !isBefore(date, startOfDay(blocked.from)) &&
        !isAfter(date, startOfDay(blocked.to))
    }

    if (isBlocked) return blocked.label ?? ''
  }

  if (disableWeekends && isWeekend(date)) return ''

  return null
}

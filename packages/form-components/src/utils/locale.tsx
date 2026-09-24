import { createContext, ReactNode, useContext } from 'react'

import type { Locale } from 'date-fns'
import { enUS, es, fr, pt, ptBR } from 'date-fns/locale'

import { RangePresetKeyType } from './date'

export type DateLocaleType = {
  dateFormat: string
  dateFnsLocale: Locale
  texts: {
    today: string
    presets: string
  }
  presetLabels: Record<RangePresetKeyType, string>
}

const PT_BR: DateLocaleType = {
  dateFormat: 'dd/MM/yyyy',
  dateFnsLocale: ptBR,
  texts: {
    today: 'Hoje',
    presets: 'Predefinições',
  },
  presetLabels: {
    today: 'Hoje',
    last7Days: 'Últimos 7 dias',
    last30Days: 'Últimos 30 dias',
    last6Months: 'Últimos 6 meses',
    last12Months: 'Últimos 12 meses',
    monthToDate: 'Mês até hoje',
    quarterToDate: 'Trimestre até hoje',
    yearToDate: 'Ano até hoje',
  },
}

const PT_PT: DateLocaleType = {
  ...PT_BR,
  dateFnsLocale: pt,
}
 
const EN_US: DateLocaleType = {
  dateFormat: 'dd/MM/yyyy',
  dateFnsLocale: enUS,
  texts: {
    today: 'Today',
    presets: 'Presets',
  },
  presetLabels: {
    today: 'Today',
    last7Days: 'Last 7 days',
    last30Days: 'Last 30 days',
    last6Months: 'Last 6 months',
    last12Months: 'Last 12 months',
    monthToDate: 'Month to date',
    quarterToDate: 'Quarter to date',
    yearToDate: 'Year to date',
  },
}

const ES: DateLocaleType = {
  dateFormat: 'dd/MM/yyyy',
  dateFnsLocale: es,
  texts: {
    today: 'Hoy',
    presets: 'Predefinidos',
  },
  presetLabels: {
    today: 'Hoy',
    last7Days: 'Últimos 7 días',
    last30Days: 'Últimos 30 días',
    last6Months: 'Últimos 6 meses',
    last12Months: 'Últimos 12 meses',
    monthToDate: 'Mes hasta hoy',
    quarterToDate: 'Trimestre hasta hoy',
    yearToDate: 'Año hasta hoy',
  },
}

const FR: DateLocaleType = {
  dateFormat: 'dd/MM/yyyy',
  dateFnsLocale: fr,
  texts: {
    today: 'Aujourd’hui',
    presets: 'Raccourcis',
  },
  presetLabels: {
    today: 'Aujourd’hui',
    last7Days: '7 derniers jours',
    last30Days: '30 derniers jours',
    last6Months: '6 derniers mois',
    last12Months: '12 derniers mois',
    monthToDate: 'Mois en cours',
    quarterToDate: 'Trimestre en cours',
    yearToDate: 'Année en cours',
  },
}

const DATE_LOCALES: Record<string, DateLocaleType | undefined> = {
  pt: PT_BR,
  'pt-pt': PT_PT,
  en: EN_US,
  es: ES,
  fr: FR,
}

export function resolveDateLocale(locale = 'pt-BR'): DateLocaleType {
  const code = locale.toLowerCase()
  const language = code.split('-')[0]

  return DATE_LOCALES[code] ?? DATE_LOCALES[language] ?? PT_BR
}

const LocaleContext = createContext<string | undefined>(undefined)

export type SiakitLocaleProviderProps = {
  locale: string
  children: ReactNode
}

export function SiakitLocaleProvider({
  locale,
  children,
}: SiakitLocaleProviderProps) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  )
}

export function useDateLocale(locale?: string): DateLocaleType {
  const contextLocale = useContext(LocaleContext)

  return resolveDateLocale(locale ?? contextLocale)
}

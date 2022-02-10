import { DateTransform } from '@/data/protocols/date/date-transform'
import { DateTime } from 'luxon'

export class LuxonDateTransform implements DateTransform {
  transform (dateOrigin: Date, format: string): string {
    const luxonDate = DateTime.fromJSDate(dateOrigin).toFormat(format)
    return luxonDate
  }
}

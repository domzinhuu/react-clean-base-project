import { DateTransform } from '@/data/protocols/date/date-transform'
import moment from 'moment'

export class MomentDateTransform implements DateTransform {
  transform (dateOrigin: Date, format: string): string {
    const momentDate = moment(dateOrigin).format(format)
    return momentDate
  }
}

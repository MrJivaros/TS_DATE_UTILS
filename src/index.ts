import './styles.css'
import { DateTime } from 'luxon'

function checkArchivingDateIs3DaysOld(arcivedDate: string) {
 const date = DateTime.fromISO(arcivedDate).toISODate()
 const today = DateTime.now().plus({ days: -3 }).toISODate()
 return new Date(date).getTime() === new Date(today).getTime()
}

console.log(checkArchivingDateIs3DaysOld('2022-06-12'))

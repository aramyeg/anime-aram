const MONTHS = ['January','February','March','April','May','June','July', 'August','September','October','November','December']
const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec']

type dateString = {
  long : string
  short : string
}

export const getDate = () : dateString => {
  const date = new Date()

  const day = date.getDate()
  const month = date.getMonth()

  let suffix = 'th'
  if(day === 1) suffix = 'st'
  else if(day === 2) suffix = 'nd'
  else if(day === 3) suffix = 'rd'

  return {
    long: `${day + suffix} of ${MONTHS[month]}`,
    short: `${MONTHS_SHORT[month]} ${day + suffix}`,
  }
}
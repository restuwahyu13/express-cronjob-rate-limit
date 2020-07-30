/**
 @description CRONJOB RATE LIMIT REQUEST API MIDDLEWARE
*/
const cron = require('node-schedule')
const axios = require('axios')

/**
 @description store ip address  user to array
*/
const IpAddress = []

/**
 @description fetch data from provider isp
*/
const IpGeolocation = async () => {
  const ip = {}
  const res = await axios.get('http://ipwhois.app/json/')
  Object.defineProperty(ip, 'ipv4', { value: res.data.ip, enumerable: true })
  return ip.ipv4
}

/**
 @description reset  ip address after 1 minute
*/
const ResetRateLimit = () => {
  const schedule = new cron.RecurrenceRule()
  schedule.second = 59
  schedule.tz = 'asia/jakarta'

  cron.scheduleJob('ResetRateLimit', schedule, () => {
    IpAddress.splice(0, IpAddress.length)
  })
}

module.exports = async (req, res, next) => {
  /**
 @description result current IP Location from provider isp
*/
  const myIp = await IpGeolocation()

  /**
   @description get any request method  from user after sending data or request data
  */
  switch (req.method) {
    case 'GET':
      if (IpAddress.length < 7) {
        IpAddress.push(myIp)
      }
      break
    case 'POST':
      if (IpAddress.length < 7) {
        IpAddress.push(myIp)
      }
      break
    default:
      return next()
  }

  /**
   @description get total requests from the same ip
  */
  const currentIp = IpAddress.filter((v, i) => v === myIp).length

  /**
   @description if the same ip requests more than 5 throw an error message
  */
  if (currentIp > 4) {
    return res.status(401).json({
      method: req.method,
      status: res.statusCode,
      error: 'Oopss..request method not allowed many to request'
    })
  }

  /**
   @description return to next function if  after reset ip address
  */
  ResetRateLimit()
  return next()
}

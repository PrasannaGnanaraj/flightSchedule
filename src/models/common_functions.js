import moment from 'moment';

const totalFlyingTime = flightList => {
  return flightList.reduce((totalTime, flight) => {
    const arrivalTime = moment(flight.readable_arrival, 'HH:mm');
    const departureTime = moment(flight.readable_departure, 'HH:mm');
    const travelTime = moment.duration(arrivalTime.diff(departureTime));
    totalTime=moment(totalTime).add(travelTime.hours(),'hours');
    totalTime=moment(totalTime).add(travelTime.minutes(),'minutes');
    return totalTime;
  }, moment({ hours: 0, minute: 0 })).format("HH:mm")
};

export default totalFlyingTime;

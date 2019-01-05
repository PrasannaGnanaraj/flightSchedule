export const totalFlyingTime = flightList => {
  return (
    flightList.reduce((totalTime, flight) => {
      const arrivalTime = flight.arrivaltime;
      const departureTime = flight.departuretime;
      const travelTime = arrivalTime - departureTime;
      totalTime += travelTime;
      return totalTime;
    }, 0) / 3600
  );
};

export const removeFromList = (array, element) => {
  return array.filter(el => el !== element);
};

export const FLIGHTS_ENDPOINT = "/flights";
export const AIRCRAFT_ENDPOINT = "/aircrafts";
export const getHeaders = rows => (rows.length > 0 ? Object.keys(rows[0]) : []);

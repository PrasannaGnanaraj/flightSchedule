export const totalFlyingTime = flightList => {
  return (
    flightList.reduce((totalTime, flight) => {
      const arrivalTime = flight.arrivalTime;
      const departureTime = flight.departureTime;
      const travelTime = arrivalTime - departureTime;
      totalTime += travelTime;
      return totalTime;
    }, 0) / 3600
  );
};

export const removeFromList = (array, element) => {
  return array.filter(el => el !== element);
};

export const getHeaders = rows => (rows.length > 0 ? Object.keys(rows[0]) : []);

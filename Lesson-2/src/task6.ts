document.write(
  ` <br>
    <div>Задача 6. Закінчити задачу, що ми почали на уроці. </div>
    <div>Дано масив маркерів на карті  [lat, long, city]. </div>
    <div>Визначити найближче місто до вказаних координат</div>
    <br>`
);

type Marker = [number, number, string];

function getMarkersList(markersNumber: number): Marker[] {
  const markersList: Marker[] = [];
  for (let i = 0; i < markersNumber; i++) {
    const data = prompt("Введіть координати і назву через пробіл")!.split(" ");
    markersList.push([Number(data[0]), Number(data[1]), data[2]]);
  }
  return markersList;
}

function findClosestCity(
  targetLat: number,
  targetLong: number,
  cities: Marker[]
): string {
  let nearestCity = cities[0][2];
  let shortestDistance = Infinity;

  for (const [lat, long, cityName] of cities) {
    const deltaLat = targetLat - lat;
    const deltaLon = targetLong - long;
    const distanceSquared = deltaLat * deltaLat + deltaLon * deltaLon;

    if (distanceSquared < shortestDistance) {
      shortestDistance = distanceSquared;
      nearestCity = cityName;
    }
  }

  return nearestCity;
}

document.write(findClosestCity(5, 5, getMarkersList(3)));

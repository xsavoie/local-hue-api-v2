// returns an array of light ids for a room
function lightsIdForRoom(room) {
  const services = room.services;
  const filtered = services
    .filter((service) => service.rtype === "light")
    .map((service) => service.rid);
  return filtered;
}

// returns array of light objects for array of light id's
function getAllLightsForGroup(lightIdArray, lights) {
  let arrayOfLights = [];
  lightIdArray.forEach((id) => {
    lights.map((light) => {
      if (light.id === id) {
        arrayOfLights.push(light);
      }
    });
  });
  return arrayOfLights;
}

export { lightsIdForRoom, getAllLightsForGroup };

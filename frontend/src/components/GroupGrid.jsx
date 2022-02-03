// import { useGroupState } from "../lib/groupState";
import GroupContainer from "./GroupGridItem";

export default function GroupGrid({ lights, setLights, rooms }) {
  // const { selected, setSelected } = useGroupState();

  function lightsIdForRoom(room) {
    const services = room.services;
    const filtered = services
      .filter((service) => service.rtype === "light")
      .map((service) => service.rid);
    return filtered;
  }
  
    // returns array of light objects for multiple light id's
    function parseGroupLights(lightIdArray, lights) {
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

  const groupGridItems = rooms.map((room) => (
    <GroupContainer
      key={room.id}
      id={room.id}
      name={room.metadata.name}
      groupedId={room.grouped_services[0].rid}
      lightsId={lightsIdForRoom(room)}
      lightsInGroup={parseGroupLights(lightsIdForRoom(room), lights)}
      lights={lights}
      setLights={setLights}
    />
  ));

  return <div className="group-grid">{groupGridItems}</div>;
}

// import { useGroupState } from "../lib/groupState";
import GroupContainer from "./GroupGridItem";

export default function GroupGrid({ groups, setGroups, scenes, rooms }) {
  // const { selected, setSelected } = useGroupState();

  function lightsForRoom(room) {
    const services = room.services;
    const filtered = services
      .filter((service) => service.rtype === "light")
      .map((service) => service.rid);
    return filtered;
  }

  const groupGridItems = rooms.map((room) => (
    <GroupContainer
      key={room.id}
      id={room.id}
      name={room.metadata.name}
      groupedId={room.grouped_services[0].rid}
      groupLights={lightsForRoom(room)}
    />
  ));

  return <div className="group-grid">{groupGridItems}</div>;
}

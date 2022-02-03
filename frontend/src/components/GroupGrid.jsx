// import { useGroupState } from "../lib/groupState";
import {
  lightsIdForRoom,
  getAllLightsForGroup,
} from "../lib/lightGroupHelpers";
import GroupContainer from "./GroupGridItem";

export default function GroupGrid({ lights, setLights, rooms }) {
  // const { selected, setSelected } = useGroupState();

  const groupGridItems = rooms.map((room) => (
    <GroupContainer
      key={room.id}
      id={room.id}
      name={room.metadata.name}
      groupedId={room.grouped_services[0].rid}
      lightsId={lightsIdForRoom(room)}
      lightsInGroup={getAllLightsForGroup(lightsIdForRoom(room), lights)}
      lights={lights}
      setLights={setLights}
    />
  ));

  return <div className="group-grid">{groupGridItems}</div>;
}

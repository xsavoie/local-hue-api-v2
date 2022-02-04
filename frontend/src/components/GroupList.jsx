import {
  getAllLightsForGroup,
  lightsIdForRoom,
} from "../lib/lightGroupHelpers";
import GroupListItem from "./GroupListItem";
import "../styles/Groups.css";
import { parseScenes } from "../lib/scenesHelper";

export default function GroupList({ lights, setLights, rooms, scenes }) {
  const groupListItems = rooms.map((room) => (
    <GroupListItem
      key={room.id}
      id={room.id}
      name={room.metadata.name}
      groupedId={room.grouped_services[0].rid}
      lightsId={lightsIdForRoom(room)}
      lightsInGroup={getAllLightsForGroup(lightsIdForRoom(room), lights)}
      lights={lights}
      setLights={setLights}
      groupScenes={parseScenes(room, scenes)}
    />
  ));

  return <div className="group-list">{groupListItems}</div>;
}

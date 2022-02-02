// import { useGroupState } from "../lib/groupState";
import GroupContainer from "./GroupGridItem";

export default function GroupGrid({ groups, setGroups, scenes, rooms }) {
  // const { selected, setSelected } = useGroupState();

  const groupGridItems = rooms.map((room) => (
    <GroupContainer
      key={room.id}
      id={room.id}
      name={room.metadata.name}
      groupedId={room.grouped_services[0].rid}
      children={room.children }
    />
  ));

  return <div className="group-grid">{groupGridItems}</div>;
}

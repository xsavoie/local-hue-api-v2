import { useGroupState } from "../lib/groupState";
import { getAllLightsForGroup, lightsIdForRoom } from "../lib/lightGroupHelpers";
import { parseScenes } from "../lib/scenesHelper";
import "../styles/GroupExpanded.css";

export default function GroupExpanded({ rooms, lights, setLights, scenes }) {
  const { selected, setSelected } = useGroupState();

  const selectedRoom = rooms.filter((room) => room.id === selected);
  const roomData = selectedRoom[0];
  
  const groupLightId = lightsIdForRoom(roomData)
  const groupLights = getAllLightsForGroup(groupLightId, lights)
  const groupScenes = parseScenes(roomData, scenes)

  console.log(groupScenes);

  return (
    <div className="group-expanded">
      <header className="expanded--header">
        <p>{roomData.metadata.name}</p>{" "}
        <button type="button" onClick={() => setSelected("")}>
          &times;
        </button>
      </header>
      <div className="expanded--control"></div>
    </div>
  );
}

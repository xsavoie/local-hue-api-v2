// import { useState } from "react";
import { useGroupState } from "../lib/groupState";
import GroupExpanded from "./GroupExpanded";
import GroupList from "./GroupList";
import SetView from "./SetView";
import GroupGrid from "./GroupGrid";
import "../styles/Groups.css";

export default function Groups({ lights, setLights, rooms, scenes }) {
  const { groupView, selected } = useGroupState();

  return (
    <div className="groups">
      <div className="groups--container">
        <SetView />
        {selected && (
          <GroupExpanded
            rooms={rooms}
            lights={lights}
            setLights={setLights}
            scenes={scenes}
          />
        )}
        {!selected && groupView === "GRID" && (
          <GroupGrid
            rooms={rooms}
            lights={lights}
            setLights={setLights}
            scenes={scenes}
          />
        )}
        {!selected && groupView === "LIST" && (
          <GroupList
            rooms={rooms}
            lights={lights}
            setLights={setLights}
            scenes={scenes}
          />
        )}
      </div>
    </div>
  );
}

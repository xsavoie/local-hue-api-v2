// import { useState } from "react";
import { useGroupState } from "../lib/groupState";
// import GroupExpanded from "./GroupExpanded";
import GroupList from "./GroupList";
import SetView from "./SetView";
import GroupGrid from "./GroupGrid";
import "../styles/Groups.css";

export default function Groups({ lights, setLights, rooms }) {
  const { groupView, selected } = useGroupState();

  return (
    <div className="groups">
      <div className="groups--container">
        <SetView />
        {groupView === "GRID" && (
          <GroupGrid rooms={rooms} lights={lights} setLights={setLights} />
        )}
        {groupView === "LIST" && (
          <GroupList rooms={rooms} lights={lights} setLights={setLights} />
        )}
      </div>
    </div>
  );
}

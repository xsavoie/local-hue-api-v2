// import { useState } from "react";
// import { useGroupState } from "../lib/groupState";
// import GroupExpanded from "./GroupExpanded";
// import GroupList from "./GroupList";
// import SetView from "./SetView";
import GroupGrid from "./GroupGrid";
import "../styles/Groups.css";

export default function Groups({ lights, setLights, rooms }) {
  // const { groupView, selected } = useGroupState();

  return (
    <div className="groups">
      <div className="groups--container">
        <GroupGrid rooms={rooms} lights={lights} setLights={setLights} />

        {/* <SetView /> */}
        {/* {selected && (
          <GroupExpanded
            groups={groups}
            setGroups={setGroups}
            scenes={scenes}
          />
        )} */}
        {/* {!selected && groupView === "GRID" && ( */}
        {/* // )} */}
        {/* {!selected && groupView === "LIST" && (
          <GroupList
            groups={groups}
            setGroups={setGroups}
            scenes={scenes}
          />
        )} */}
      </div>
    </div>
  );
}

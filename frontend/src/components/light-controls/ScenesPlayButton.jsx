import { useState } from "react";

export default function ScenesPlayButton({ selectedScene, handleSceneChange,  }) {
const [scenePlayback, setScenePlayback] = useState(false);

  const handlePlayScene = () => {
    const request = scenePlayback ? { recall: { action: "active" } } : { recall: { action: "dynamic_palette" } };
    setScenePlayback(!scenePlayback);
    handleSceneChange(selectedScene,request);
  }

  let buttonStatus = scenePlayback ? "❚❚" : "►";

  return <button type="button" onClick={handlePlayScene} disabled={!selectedScene}>{buttonStatus}</button>
}
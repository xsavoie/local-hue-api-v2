function parseScenes(room, scenes) {
  return scenes.filter((scene) => scene.group.rid === room.id);
}

export { parseScenes };

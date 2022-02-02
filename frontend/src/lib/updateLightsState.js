const updateLightsState = (request, state, id) => {
  const param = Object.keys(request)[0];
  let stateCopy = [...state];
  let lightToUpdate = stateCopy.find((data) => data.id === id);
  // add support for request with multiple params
  lightToUpdate = { ...lightToUpdate, [param]: request[param] };

  const updatedState = state.map((data) =>
    data.id === id ? lightToUpdate : data
  );

  return updatedState;
};

export { updateLightsState };

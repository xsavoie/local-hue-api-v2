import { fakeLightsState } from "../lib/testUtils.js";
import { updateLightsState } from "../lib/updateLightsState.js";

// const mockData = fakeGroupsState();
// console.log(mockData);
const id = "558fcd3a-06c7-4495-86fe-34060a970377";

describe("update state function", () => {
  it("changes the requested params", () => {
    const mockData = fakeLightsState();
    const request = { on: { on: true } };
    const parsedData = updateLightsState(request, mockData, id);
    const modifiedData = parsedData[0].on;
    expect(modifiedData.on).toBeTruthy();
  });
  it("changes the xy color values", () => {
    const mockData = fakeLightsState();
    const request = { color: { xy: { x: 0.1111, y: 0.2222 } } };
    const parsedData = updateLightsState(request, mockData, id);
    const modifiedData = parsedData[0].color.xy;
    expect(modifiedData.x).toEqual(0.1111);
    expect(modifiedData.y).toEqual(0.2222);
  });
  it("changes ONLY requested params", () => {
    const mockData = fakeLightsState();
    const mockState = mockData[0].dimming.brightness;
    const request = { on: { on: true } };
    const parsedData = updateLightsState(request, mockData, id);
    const modifiedData = parsedData[0];
    expect(modifiedData.on.on).toBeTruthy();
    expect(modifiedData.dimming.brightness).toEqual(mockState);
  });
  it("only mutates one group in the groups array", () => {
    const mockData = fakeLightsState();
    let lightTwo = mockData[1];
    expect(lightTwo.on.on).toBeTruthy();
    const request = { on: { on: true } };
    const parsedData = updateLightsState(request, mockData, id);
    const lightOne = parsedData[0];
    lightTwo = parsedData[1];
    expect(lightOne.on.on).toBeTruthy();
    expect(lightTwo.on.on).toBeTruthy();
  });
  it("doesn't mutate the original state", () => {
    const mockData = fakeLightsState();
    const mockState = mockData[0];
    const request = { on: { on: true } };
    const parsedData = updateLightsState(request, mockData, id);
    const modifiedData = parsedData[0];
    expect(modifiedData.on.on).toBeTruthy();
    expect(mockState.on.on).toBeFalsy();
  });
  // NOT SUPPORTED YET
  // it('changes multiple params with one request', () => {
  //   const request = { on: true, bri: 254, sat: 254 };
  //   const parsedData = updateLightsState(request, mockData, id);
  //   const stateData = parsedData[0].state;
  //   expect(stateData["on"]).toBeTruthy();
  //   expect(stateData["bri"]).toEqual(254);
  //   expect(stateData["sat"]).toEqual(254);
  // })
});

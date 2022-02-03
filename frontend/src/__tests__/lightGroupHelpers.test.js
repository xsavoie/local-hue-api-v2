import {
  lightsIdForRoom,
  getAllLightsForGroup,
} from "../lib/lightGroupHelpers";
import { fakeLightsState, fakeRoomState } from "../lib/testUtils";

const lights = fakeLightsState();
const fakeRooms = fakeRoomState();
const smallRoom = fakeRooms[0];
const smallRoomLightId = ["3942fa7d-9797-4f04-bb74-b013daca9b4c"];
const smallRoomGroupId = ["bd3607ac-62d8-4f0e-a937-805fd5ee9804"];
const bigRoom = fakeRooms[1];
const bigRoomLightId = [
  "34327da4-0d36-4f6c-9584-e7132a557f8b",
  "59f06033-c818-4057-8dae-7e68ae0ecc7e",
];

describe("lightsIdForRoom function", () => {
  it("returns the correct light id", () => {
    const data = lightsIdForRoom(smallRoom);
    expect(data).toEqual(smallRoomLightId);
  });
  it("doesnt return the grouped_id", () => {
    const data = lightsIdForRoom(smallRoom);
    expect(data).toEqual(expect.not.arrayContaining(smallRoomGroupId));
  });
  it("returns multiple light id's", () => {
    const data = lightsIdForRoom(bigRoom);
    expect(data.length).toEqual(bigRoomLightId.length);
    expect(data).toEqual(bigRoomLightId);
  });
  it("returns an array of strings", () => {
    const data = lightsIdForRoom(smallRoom);
    expect(Array.isArray(data)).toBeTruthy();
    expect(typeof data[0] === "string").toBeTruthy();
  });
});

describe("getAllLightsForGroup function", () => {
  it("finds the correct light", () => {
    const data = getAllLightsForGroup(smallRoomLightId, lights);
    expect(data[0].id).toEqual(smallRoomLightId[0]);
  });
  it("only finds one light when given 1 id", () => {
    const data = getAllLightsForGroup(smallRoomLightId, lights);
    expect(data.length).toEqual(1);
  });
  it("finds multiple lights", () => {
    const data = getAllLightsForGroup(bigRoomLightId, lights);
    expect(data[0].id).toEqual(bigRoomLightId[0]);
    expect(data[1].id).toEqual(bigRoomLightId[1]);
    expect(data.length).toEqual(2);
  });
  it("returns an array of lights object", () => {
    const data = getAllLightsForGroup(smallRoomLightId, lights);
    expect(Array.isArray(data)).toBeTruthy();
    expect(typeof data[0] === "object").toBeTruthy();
  });
});

import {
  lightsIdForRoom,
  getAllLightsForGroup,
} from "../lib/lightGroupHelpers";
import { fakeLightsState, fakeRoomState } from '../lib/testUtils';

const lights = fakeLightsState();
const fakeRooms = fakeRoomState();
const smallRoom = fakeRooms[0];
const bigRoom = fakeRooms[1];


describe("lightsIdForRoom function", () => {
  it("returns the right light id", () => {});
  it("doesnt return the grouped_id", () => {});
  it("returns an array", () => {});
});

describe("getAllLightsForGroup function", () => {
  it("finds the correct light", () => {});
  it("finds multiple lights", () => {})
  it("returns an array of lights object", () => {});
});

const ColorConverter = require("cie-rgb-color-converter");

export function xyColorCoverter (color) {
  let xy = ColorConverter.rgbToXy(color['r'], color['g'], color['b']);
  let parsedXY = {
    xy: {x: parseFloat((xy.x).toFixed(4)), y: parseFloat((xy.y).toFixed(4))}
  };
  return parsedXY;
};

export function rgbColorConverter (colorXY, bri) {

  const rgbColor = ColorConverter.xyBriToRgb(colorXY["x"], colorXY["y"], bri);
  return rgbColor;
};
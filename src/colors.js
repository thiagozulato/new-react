import Color from 'color';

export const fade = (color, ratio) => {
  return new Color(color).fade(ratio).string();
};

export const darken = (color, ratio) => {
  return new Color(color).darken(ratio).string();
};

export const lighten = (color, ratio) => {
  return new Color(color).lighten(ratio).string();
};
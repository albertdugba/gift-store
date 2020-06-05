export const theme = {
  primaryColorPink: "#7e0b6b",
  secondaryColor: "#91556a",
  textColor: "#fff",
  buttonColor: "#f7d9e4",
  backgroundColorPink: "#f4ebf4",
};

const device = {
  mobilelarge: "500px",
  mediumSize: "920px",
  smartSize: "600px",
  mobileSmall: "499px",
  mobileXtraSmall: "453px",
};

export const mediaQueries = {
  mobileLarge: `(min-width:${device.mobilelarge})`,
  mediumSize: `(max-width:${device.mediumSize})`,
  smartSize: `(max-width:${device.smartSize})`,
  mobileSmall: `(max-width:${device.mobilelarge})`,
  mobileXtraSmall: `(max-width:${device.mobileXtraSmall})`,
};

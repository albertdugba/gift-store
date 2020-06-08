export const theme = {
  primaryColorPink: "#7e0b6b",
  secondaryColor: "#91556a",
  textColor: "#fff",
  buttonColor: "#f7d9e4",
  backgroundColorPink: "#f4ebf4",
  bannerBackground: "#fffafc",
};

const device = {
  mobilelarge: "500px",
  mediumSize: "920px",
  mediumSize1: "940px",
  smartSize: "600px",
  mobileSmall: "499px",
  mobileXtraSmall: "453px",
};

export const mediaQueries = {
  mobileLarge: `(min-width:${device.mobilelarge})`,
  mediumSize: `(max-width:${device.mediumSize})`,
  mediumSize1: `(max-width:${device.mediumSize1})`,
  smartSize: `(max-width:${device.smartSize})`,
  mobileSmall: `(max-width:${device.mobilelarge})`,
  mobileXtraSmall: `(max-width:${device.mobileXtraSmall})`,
};

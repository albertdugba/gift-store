export const theme = {
  primaryColorPink: "#7e0b6b",
  secondaryColor: "#c58b0d",
  textColor: "#fff",
};

const device = {
  mobilelarge: "500px",
  mobileSmall: "499px",
  mobileXtraSmall: "437px",
};

export const mediaQueries = {
  mobileLarge: `(min-width:${device.mobilelarge})`,
  mobileSmall: `(max-width:${device.mobilelarge})`,
  mobileXtraSmall: `(max-width:${device.mobileXtraSmall})`,
};

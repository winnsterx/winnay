const SIZES = {
  mobile = 365,
  tablet = 769,
  desktop = 1024,
  navSearch = 1170,
  largeDesktop = 1280,
  largeDesktop2 = 1370,
  giantDesktop = 1600,
}
Object.freeze(SIZES)
const customMediaQuery = (minWidth) => `@media (min-width: ${minWidth}px)`;

export const media = {
  custom: customMediaQuery,
  mobile: customMediaQuery(SIZES.mobile),
  tablet: customMediaQuery(SIZES.tablet),
  desktop: customMediaQuery(SIZES.desktop),
  navSearch: customMediaQuery(SIZES.navSearch),
  largeDesktop: customMediaQuery(SIZES.largeDesktop),
  largeDesktop2: customMediaQuery(SIZES.largeDesktop2),
  giantDesktop: customMediaQuery(SIZES.giantDesktop),
};

import { matchRoutes } from 'react-router-config';

const getRouteProps = (routes, url) => {
  const matchedRoutes = matchRoutes(routes, url);

  if (matchedRoutes.length <= 0) {
    throw new Error(`No route was found for ${url}.`);
  }

  const { match } = matchedRoutes[0];
  const { amp, service } = match.params;
  const isAmp = amp ? true : false;

  return { isAmp, service };
};

export default getRouteProps;

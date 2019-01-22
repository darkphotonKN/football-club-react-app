import React from 'react';
import { Link } from 'react-router-dom';

import mcitylogo from '../../resources/images/logos/manchester_city_logo.png';

export const CityLogo = ({ width, height, link, linkTo }) => {
  const template = (
    <div
      className="img_cover"
      style={{
        width: width,
        height: height,
        background: `url(${mcitylogo}) no-repeat`
      }}
    />
  );

  if (link) {
    return (
      <Link to={linkTo} className="link_logo">
        {template}
      </Link>
    );
  }
  // if not a link we return the default template
  else {
    return template;
  }
};

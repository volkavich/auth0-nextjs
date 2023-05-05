import React from 'react';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <h1 className="mb-4" data-testid="hero-title">
      Sample Project with {``} <a href="www.nextjs.org">Nextjs</a> and  {``} <a href="www.auth0.com">Auth0</a> 
    </h1>

    <p className="lead" data-testid="hero-lead">
      Notthing Special, just checking Auth0
    </p>
  </div>
);

export default Hero;

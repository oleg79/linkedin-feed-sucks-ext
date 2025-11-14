document
    .querySelector('main[aria-label="Main Feed"]')
    ?.remove();

document
    .querySelector('aside[aria-label="Add to your feed"]')
    ?.classList
    .remove('scaffold-layout__aside');

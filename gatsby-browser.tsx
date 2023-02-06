import * as React from 'react';
import { WrapPageElementBrowserArgs } from 'gatsby';

import '~/assets/styles/index.css';
import '~/assets/styles/base.css';

const wrapPageElement = ({
  element,
}: WrapPageElementBrowserArgs): React.ReactNode => <>{element}</>;

export { wrapPageElement };

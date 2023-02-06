import * as React from 'react';
import { WrapPageElementNodeArgs } from 'gatsby';

import '~/assets/styles/index.css';

const wrapPageElement = ({
  element,
}: WrapPageElementNodeArgs): React.ReactNode => <>{element}</>;

export { wrapPageElement };

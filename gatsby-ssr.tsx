import * as React from 'react';
import { WrapPageElementBrowserArgs } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import {
  Avatar,
  Block,
  Language,
  TimelineOfContents,
  FacebookMessage,
  RadarChart,
  Level,
  Accordion,
  ShrugMessage,
  SlackMessage,
  ThatsAllFolks,
  VideoWrapper,
  Flute,
} from '~/components/common';

import '~/assets/styles/index.css';

const components = {
  Avatar,
  Accordion,
  Block,
  Language,
  Level,
  RadarChart,
  FacebookMessage,
  TimelineOfContents,
  ShrugMessage,
  SlackMessage,
  ThatsAllFolks,
  VideoWrapper,
  Flute,
};

const wrapPageElement = ({
  element,
}: WrapPageElementBrowserArgs): React.ReactNode => (
  <MDXProvider components={components}>{element}</MDXProvider>
);

export { wrapPageElement };

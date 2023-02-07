import { TimeLineProps } from '~/components/common/TimelineOfContents/TimelineOfContents';

const ua: TimeLineProps = {
  headerClass: 'tableMargined',
  headerTitle: 'Створи та захости власне резюме використовуючи GitHub',
  timeline: [
    {
      linkTo: '#setting-up-the-repository',
      title: 'Setting up the repository',
    },
    {
      linkTo: '#practicing-git',
      title: '<span>Practicing <code>git</code></span>',
    },
    {
      linkTo: '#project-management-and-planning',
      title: 'Project management and planning',
    },
    {
      linkTo: '#putting-the-website-together',
      title: 'Putting the website together',
    },
    {
      linkTo: '#add-resume-template',
      title: 'Add resume template',
    },
  ],
};

const en: TimeLineProps = {
  headerClass: 'tableMargined',
  headerTitle: 'Create and host your own resume using GitHub',
  timeline: [
    {
      linkTo: '#setting-up-the-repository',
      title: 'Setting up the repository',
    },
    {
      linkTo: '#practicing-git',
      title: '<span>Practicing <code>git</code></span>',
    },
    {
      linkTo: '#project-management-and-planning',
      title: 'Project management and planning',
    },
    {
      linkTo: '#putting-the-website-together',
      title: 'Putting the website together',
    },
    {
      linkTo: '#add-resume-template',
      title: 'Add resume template',
    },
  ],
};
const timeLine = {
  ua,
  en,
};

export { timeLine };

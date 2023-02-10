import { AuthorName } from '~/enums';

export type Author = (typeof AuthorName)[keyof typeof AuthorName];
export type LectureList = {
  title: string;
  description: string;
  duration: string;
  author: Author;
  avatar: string;
  link: string;
  hiddenFromMainPage: boolean;
  publishedAt: string;
};

export const lectureList: LectureList[] = [
  {
    title: 'How to work with Git',
    description:
      'Вікторія розповідає про основи Git та найбільш поширені команди. А також показує весь процес роботи з Git: від клонування репозиторію до створення пул-реквестів.',
    author: AuthorName.VIKTORIIA_VASYLENKO_EN,
    duration: '38 min',
    avatar: AuthorName.VIKTORIIA_VASYLENKO_EN,
    link: 'lectures/git/',
    publishedAt: '2021-11-18T10:00:00',
    hiddenFromMainPage: false,
  },
  {
    title: 'Javascript for everyone',
    description:
      'Олександр розповідає про основні концепції JavaScript, а потім пише фронтенд для простої інтерактивної веб-сторінки, використовуючи DOM API для створення елементів та найпопулярніші функції ES6+ для обробки даних, а також пояснює що таке модулі, транспайлери, та бандлери.',
    author: AuthorName.OLEKSANDR_DANYLCHENKO_UA,
    duration: '1 год 19 хв',
    avatar: AuthorName.OLEKSANDR_DANYLCHENKO_UA,
    link: 'lectures/javascript-for-everyone/',
    publishedAt: '2021-11-18T10:00:00',
    hiddenFromMainPage: false,
  },
];

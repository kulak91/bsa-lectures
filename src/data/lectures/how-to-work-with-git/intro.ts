import { IntroBlueBubbleProps } from '~/components/common/intro-blue-bubble/intro-blue-bubble';
import { AuthorName } from '~/enums';

type IntroBubble = {
  ua: IntroBlueBubbleProps;
  en: IntroBlueBubbleProps;
};

const introEN: IntroBlueBubbleProps = {
  author: AuthorName.VIKTORIIA_VASYLENKO_EN,
  about:
    'Viktoriia works at Binary Studio as a Full stack developer after finishing Binary Studio Academy in 2020.',
  title: 'Hi, student!',
  subtitle:
    "Welcome to the Git lecture. Here you'll find a short script to the lecture with Git commands and useful links. Let's go!",
};
const introUA: IntroBlueBubbleProps = {
  author: AuthorName.VIKTORIIA_VASYLENKO_UA,
  about:
    'Вікторія працює в Binary Studio як Full stack developer після закінчення Binary Studio Academy в 2020.',
  title: 'Привіт!',
  subtitle:
    'Вітаємо на лекції по Git. Тут ти знайдеш короткий конспект до лекції з основними Git командами та корисними посиланнями. Поїхали!',
};

const introBubble: IntroBubble = { ua: introUA, en: introEN };

export { introBubble };

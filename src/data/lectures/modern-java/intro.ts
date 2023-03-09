import { IntroBlueBubbleProps } from '~/components/common/intro-blue-bubble/intro-blue-bubble';
import { AuthorName, ContactIcon } from '~/enums';

type IntroBubble = {
  ua: IntroBlueBubbleProps;
  ru: IntroBlueBubbleProps;
};

const introRu: IntroBlueBubbleProps = {
  author: AuthorName.KYRYLO_LESOHORSKYI,
  about:
    'Кирилл работает FullStack разработчиком в <a href="https://binary-studio.com"><strong>Binary Studio</strong></a> после того, как закончил Академию по PHP в 2018 году. В работе использует JavaScript и TypeScript, но считает, что язык - лишь инструмент в руках программиста, и в свободное время пробует новые языки и парадигмы, такие как Scala, Haskell, F#, Go, Rust и <i>Java</i>. Любит функциональное программирование и компьютерные игры.',
  contacts: [
    {
      ref: 'https://github.com/klesogor',
      title: 'klesogor',
      iconName: ContactIcon.GITHUB,
    },
  ],
  title: 'Привет, академисты!',
  subtitle:
    'Встречайте первую профильную лекцию по Java «Modern Java»! Рассмотрим, что нового в Java 8-11 и что будущее готовит. Но вначале дисклеймер:',
  listItems: [
    'скорее всего, вы всё это знаете, и это хорошо😊;',
    'лекция обещает быть информативной <em>(за употребление слов-паразитов и терминов - простите)</em>;',
    'практическая часть в лекции довольно большая, если вы уверены в своих силах, то можете её пропустить.',
    'Как видите, я весьма формальный зануда, но оно само получается 😢',
  ],
  footer:
    'И не забудьте взять с собой нужный инструментарий: <a href="https://git-scm.com/"><strong>Git</strong></a>, <a href="https://www.jetbrains.com/ru-ru/idea/"><strong>Intellij IDEA или другая IDE на выбор</strong></a>, <a href="https://www.oracle.com/java/technologies/javase-downloads.html"><strong>JDK (куда же без неё)</strong></a>. Поехали?',
};

const introUA: IntroBlueBubbleProps = {
  author: AuthorName.KYRYLO_LESOHORSKYI,
  about:
    'Кирило працює FullStack розробником в <a href="https://binary-studio.com"><strong>Binary Studio</strong></a> після того, як закінчив Академію по PHP в 2018 році. В роботі використовує JavaScript і TypeScript, але вважає, що мова - лише інструмент в руках програміста, та у вільний час пробує нові мови та парадигми, такі як Scala, Haskell, F#, Go, Rust і <i>Java</i>. Любить функціональне програмування та комп\'ютерні ігри',
  contacts: [
    {
      ref: 'https://www.facebook.com/nempavel',
      title: '@klesogor',
      iconName: ContactIcon.FACEBOOK,
    },
    {
      ref: 'https://github.com/klesogor',
      title: 'klesogor',
      iconName: ContactIcon.GITHUB,
    },
  ],
  title: 'Привіт, академісти!',
  subtitle:
    'Зустрічайте першу профільну лекцію по Java «Modern Java»! Розглянемо, що нового в Java 8-11 та що готовить майбутнє. Але спочатку дисклеймер:',
  listItems: [
    'скоріш за все, ви це знаєте, і це добре😊;',
    'лекція обіцяє бути інформативною <em>(за використання слів-паразитів і термінів - вибачте)</em>;',
    'практичка частина лекції доволі велика, якщо ви впевнені в своїх силах, можете її пропустити.',
    'Як бачите, я вельми формальний зануда, але воно само так виходить😢',
  ],
  footer:
    'І не забудьте взяти з собою потрібний інструментарій: <a href="https://git-scm.com/"><strong>Git</strong></a>, <a href="https://www.jetbrains.com/ru-ru/idea/"><strong>Intellij IDEA або інша IDE на вибір</strong></a>, <a href="https://www.oracle.com/java/technologies/javase-downloads.html"><strong>JDK (куди ж без неї)</strong></a>. Поїхали?',
};

const introBubble: IntroBubble = { ua: introUA, ru: introRu };

export { introBubble };

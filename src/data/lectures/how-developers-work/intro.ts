import { IntroBlueBubbleProps } from '~/components/common/intro-blue-bubble/intro-blue-bubble';
import { AuthorName } from '~/enums';

type IntroBubble = {
  ua: IntroBlueBubbleProps;
  ru: IntroBlueBubbleProps;
};

const introRu: IntroBlueBubbleProps = {
  author: AuthorName.VOLODYMYR_KUSHNIR_RU,
  about:
    'Володя, фулл-стек разработчик с большим опытом, который строит точные, адаптивные, быстрые, удобные в использовании окружения, которые красиво выглядят и хорошо выполняют свои задания. Любимыми технологиями считает <a href="https://reactjs.org/"><strong>React</strong></a> и <a href="https://graphql.org/"><strong>GraphQL</strong></a>. По-русски говорит со смешным акцентом <em>(по-английски тоже)</em>.',
  title: 'Hey, hola, привет!',
  subtitle:
    'Уже спустя два абзаца начнется лекция. Но! Сначала пара коротеньких дисклеймеров:',
  listItems: [
    'некоторые термины и технологии не объясняются;',
    'линки на документацию и гайдлайны опциональны <em>(их можно полностью проигнорировать, имея сильную интуицию, багаж знаний или достаточно времени на эксперименты)</em>;',
    'лекция пытается быть суперфановой, хорошо структурированной и максимально полезной, но не всегда так будет получаться в итоге &#x1F937;&#x200D;&#x2642;&#xFE0F;;',
    'обидно, что в видео в некоторых моментах слышно, как бегает моя мышка 🐭 — нужно было взять коврик;',
    'за беканье-меканье и употребление иностранных слов извините, пожалуйста <em>(задания лекции в своем большинстве будут написаны на английском языке, чтоб сымитировать диалог между клиентом и разработчиком)</em>;',
  ],
  footer:
    ' Между прочим, it\'s dangerous to go alone! Take this: <a href="https://git-scm.com/"><strong>Git</strong></a>, <a href="https://desktop.github.com/"><strong>GitHub Desktop</strong></a>, <a href="https://code.visualstudio.com/"><strong>Visual Studio Code</strong></a>, <a href="https://nodejs.org/"><strong>Node.js</strong></a>. Го!',
};

const introUA: IntroBlueBubbleProps = {
  author: AuthorName.VOLODYMYR_KUSHNIR_UA,
  about:
    'Володя, фулл-стек розробник з неабияким досвідом, який будує точні, адаптивні, швидкі, зручні в користуванні середовища, які гарно виглядають та добре виконують свої завдання. Улюбленими технологіями вважає <a href="https://reactjs.org/"><strong>React</strong></a> та <a href="https://graphql.org/"><strong>GraphQL</strong></a>. Російською говорить із смішним акцентом <em>(англійською теж)</em>.',
  title: 'Hey, hola, привіт!',
  subtitle:
    'Вже за два абзаци розпочнеться лекція. Але! Спочатку пара коротеньких дісклеймерів:',
  listItems: [
    'деякі терміни та технології не пояснюються;',
    'лінки на документацію та ґайдлайни опціональні <em>(їх можна повністю проігнорувати, маючи сильну інтуїцію, багаж знань чи достатньо часу на експерименти)</em>;',
    'лекція намагається бути суперфановою, добре структурованою і максимально корисною, але не завжди так буде виходити в результаті &#x1F937;&#x200D;&#x2642;&#xFE0F;;',
    'прикро, що у відео в деяких моментах чути, як бігає моя мишка 🐭 — треба було взяти коврика;',
    'за бекання-мекання і вживання іншомовних слів пробачте, будь ласка <em>(завдання лекції в своїй більшості будуть написані англійською мовою, щоби зімітувати діалог між клієнтом та розробником)</em>;',
  ],
  footer:
    'Між іншим, it\'s dangerous to go alone! Take this: <a href="https://git-scm.com/"><strong>Git</strong></a>, <a href="https://desktop.github.com/"><strong>GitHub Desktop</strong></a>, <a href="https://code.visualstudio.com/"><strong>Visual Studio Code</strong></a>, <a href="https://nodejs.org/"><strong>Node.js</strong></a>. Ґо!',
};

const introBubble: IntroBubble = { ua: introUA, ru: introRu };

export { introBubble };

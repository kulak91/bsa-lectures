import React from 'react';
import { Avatar } from '~/components';
import { AuthorNames } from '~/enums';
import { intro } from '../data/intro';
const Test = () => {
  return (
    <div>
      <div className="author">
        <Avatar name={AuthorNames.VIKTORIIA_VASYLENKO_EN} />
        <div className="profile">
          <h3 className="name">{intro.name}</h3>
          <p className="about">{intro.about}</p>
        </div>
      </div>
      <div className="bubble" style={{ margin: '-0.5em 1em 1em' }}>
        <strong>Привіт!</strong> 👋
        <br />
        Тут ти знайдеш детальну інструкцію до домашки по Git - тож тобі потрібно
        лиш виконувати інструкції і готово ✅. Але спочатку, зверни увагу, що:
        <ol className="compact inverted">
          <li>
            це <strong>не</strong> є конспект до лекції - деякі пояснення можуть
            бути упущені
            <em> (ви ж щойно переглянути лекцію, правда?)</em>;
          </li>
          <li>
            я дійсно рекомендую вам ознайомитися з усіма завданнями, перш ніж
            почати виконувати домашнє завдання. Зверніть увагу, що{' '}
            <strong>у вас є лише 3 спроби </strong>
            для запуску автоматизованого тесту.
          </li>
          <li>
            посилання на документацію та інструкції необов`&apos;`язкові{' '}
            <em>
              (ви можете ігнорувати їх, якщо відчуваєте себе достатньо
              просунутими)
            </em>
            ;
          </li>
          <li>
            будь ласка, <strong>не пропускайте</strong> жодних кроків і нічого
            не перейменовуйте - ми запустимо автоматичні тести після того, як ви
            заллєте домашнє завдання на перевірку і назви репозиторію, гілок, та
            завдань можуть бути важливі!
          </li>
          <li>і якщо виникатимуть питання - не соромтеся писати у чат!</li>
        </ol>
        До речі, не забудьте взяти з собою:{' '}
        <a href="https://git-scm.com/">
          <strong>Git</strong>
        </a>
        ,
        <a href="https://code.visualstudio.com/">
          <strong>Visual Studio Code</strong>
        </a>
        . Тепер поїхали!
      </div>
    </div>
  );
};

export default Test;

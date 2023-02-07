import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowUp } from '@fortawesome/pro-regular-svg-icons';
import './Level.css';

type Labels = {
  level: string;
  difficulty: string;
  objectives: string;
  backToTop: string;
};

type LevelProps = {
  number: string;
  name: string;
  difficulty: string;
  objectives: string;
  labels?: Labels;
};

const Level = ({
  number = '',
  name = '',
  difficulty = '',
  objectives = '',
  labels,
  ...rest
}: LevelProps) => {
  const levelLabel = labels?.level || 'Level';
  const difficultyLabel = labels?.difficulty || 'Difficulty:';
  const objectivesLabel = labels?.objectives || 'Objectives:';
  const backToTopLabel = labels?.backToTop || 'back to top';

  return (
    <div className="level" {...rest}>
      <small className="level__info">
        <em className="level__number">
          {levelLabel} {number}
        </em>
        <a className="level__back-to-top" href="#table-of-contents">
          <FontAwesomeIcon icon={faLongArrowUp} /> {backToTopLabel}
        </a>
      </small>
      <h3 className="level__name">{name}</h3>
      <small className="level__meta">
        <strong>{difficultyLabel}</strong> {difficulty}{' '}
        <strong>{objectivesLabel}</strong> {objectives}
      </small>
    </div>
  );
};

// Level.propTypes = {
//   number: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   difficulty: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   objectives: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   labels: PropTypes.shape({
//     level: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//     backToTop: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//     difficulty: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//     objectives: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   }),
// };
export default Level;

import { Link } from 'gatsby';
import React from 'react';
import { isDateInThePast } from '~/utils';
import { Avatar } from '../common';
import { LectureList } from '~/data/homepage/lectures-list';
import { useGetLectures } from '~/hooks/use-get-lectures';

import './styles.css';

type LecturesProps = {
  lectures: LectureList[];
};
const LecturesGrid = ({ lectures }: LecturesProps) => {
  const edges = useGetLectures();
  console.log('edges', edges);
  return (
    <div className="lectures-wrapper">
      {edges.map(
        (
          {
            node: {
              fields: { slug },
              frontmatter: {
                author,
                description,
                duration,
                publishedAt,
                title,
              },
            },
          },
          index,
        ) => {
          const lectureTitle = (
            <h2 className="lecture-title">
              <span>
                <strong>{title}</strong>
              </span>
            </h2>
          );
          const isPublished = isDateInThePast(publishedAt);
          return (
            <div key={slug} className="lecture">
              <div className="lecture-header">
                {isPublished ? (
                  <Link to={slug} title={title} className="lectureLink">
                    {lectureTitle}
                  </Link>
                ) : (
                  lectureTitle
                )}
              </div>
              <div className="lecture-body">
                <span dangerouslySetInnerHTML={{ __html: description }} />
              </div>
              <div className="lecture-footer">
                <div className="lecture-meta">
                  <div className="lecture-author">
                    <Avatar name={author} className={'avatar-large'} />
                    <div className="lecture-author-name">{author}</div>
                  </div>
                  {duration && (
                    <span className="lecture-duration text-gray">
                      <small>{duration}</small>
                    </span>
                  )}
                </div>
                {
                  <span className="lecture-number text-gray">
                    <small>#{index + 1}</small>
                  </span>
                }
              </div>
            </div>
          );
        },
      )}
    </div>
  );
};

export default LecturesGrid;

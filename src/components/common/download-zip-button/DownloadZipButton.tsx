import React from 'react';
import { findFile } from './utils/find-file';
import { useGetZipFiles } from '~/hooks/use-get-zip-files';

const DownloadZipButton = ({
  fileName,
  title,
}: {
  fileName: string;
  title?: string;
}) => {
  const edges = useGetZipFiles();
  const file = findFile(fileName, [...edges]);
  return (
    <>
      {file && (
        <a href={file.node.publicURL} download>
          <strong>{title || 'Download Zip'}</strong>
        </a>
      )}
    </>
  );
};

export default DownloadZipButton;

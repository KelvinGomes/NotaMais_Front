import React from 'react';

import { Container, FileInfo, Preview } from './stlyles';
import { CircularProgressbar } from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

const FileList = ({ files }) => (
    <Container>
        {files.map(uploadedFiles => (
            <li key = {uploadedFiles.id}>
                <FileInfo>
                    <Preview src={uploadedFiles.preview} />
                    <div>
                        <strong>{uploadedFiles.name}</strong>
                        <span>
                            {uploadedFiles.readableSize}
                            { !!uploadedFiles.url && (
                                <button onClick={() => { }}>Excluir</button>
                            )}
                        </span>
                    </div>
                </FileInfo>
                <div>
                    {!uploadedFiles.uploaded && !uploadedFiles.error && (
                        <CircularProgressbar
                            styles={{
                                root: { width: 24 },
                                path: { stroke: '#7159c1' }
                            }}
                            strokeWidth={10}
                            value = {uploadedFiles.progress}
                        />
                    )}
                    {uploadedFiles.url && (
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
                        </a>
                    )}
                    {uploadedFiles.uploaded && <MdCheckCircle size={24} color="#78e5d5" /> }
                    {uploadedFiles.error &&  <MdError size={24} color="#e57878" /> }                  
                </div>

            </li>
        ))}
    </Container>
);

export default FileList;
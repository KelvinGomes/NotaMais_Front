import React, { Component } from "react";
import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage} from './styles';

export default class Upload extends React.Component{
renderDragMessage  = (isDragActive, isDragReject) => {
    if(!isDragActive){
        return <UploadMessage>Arraste seus arquivos aqui...</UploadMessage>
    }
    if(isDragReject){
        return <UploadMessage type = "error">Tipo de arquivo não suportado!</UploadMessage>
    }
    return <UploadMessage type = "success">Solte os arquivos aqui...</UploadMessage>
};

    render() {
        const { onUpload } = this.props;
        return (
            <Dropzone accept = "image/*,application/pdf,.doc,.docx" onDropAccepted={ onUpload }>
                {({ getRootProps, getInputProps, isDragActive, isDragReject })=>(
                    <DropContainer
                        {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <input {...getInputProps()} />
                        {this.renderDragMessage(isDragActive, isDragReject)}
                    </DropContainer>
                )}
            </Dropzone>
        );
    }
}
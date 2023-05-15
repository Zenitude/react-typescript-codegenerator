import React from 'react';

export type PropsCode = {
    code: CodeType
}

export type PropsForm = {
    code: CodeType,
    set: React.Dispatch<React.SetStateAction<CodeType>>
}

export type CodeType = {
    backgroundColor: string,
    foregroundColor: string,
    qrcode: {
        value: string,
        includeMargin: boolean,
        size: number,
        level: string,
        imageSettings: {
        src: string,
        x: undefined,
        y: undefined,
        height: number,
        width: number,
        excavate: boolean
        }
    }
  }

export type ImageSettings = {
    src: string,
    x: undefined,
    y: undefined,
    height: number,
    width: number,
    excavate: boolean
}

export type QrCodeType = {
    value: string,
    includeMargin: boolean,
    size: number,
    level: string,
    imageSettings: ImageSettings
}

export type NetworksType = {
    name: string,
    link: string,
    icon: string
}

export type NetworksProps = {
    networks: NetworksType[]
};
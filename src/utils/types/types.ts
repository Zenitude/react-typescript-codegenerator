export type OptionsBarCode = {
    value: string,
    width: number,
    height: number,
    format: string | undefined,
    displayValue: boolean,
    fontOptions: string,
    font: string,
    textAlign: string,
    textPosition: string,
    textMargin: number,
    fontSize: number,
    background: string,
    lineColor: string,
    margin: number | undefined,
    marginTop: number | undefined,
    marginBottom: number | undefined,
    marginLeft: number | undefined,
    marginRight: number | undefined
}

export type OptionsQrCode = {
    value: string,
    size: number,
    bgColor: string,
    fgColor: string,
    level: string,
    includeMargin: boolean,
    imageSettings: ImageSettingsQrCode
}

export type ImageSettingsQrCode = {
    src: string,
    height: number,
    width: number,
    excavate: boolean
}

export type PropsFormBar = {
    options: OptionsBarCode;
    setOptions: Function;
}

export type PropsFormQr = {
    options: OptionsQrCode;
    setOptions: Function;
}

export type navProps = {
    sizenav: number
}
import { atom } from 'nanostores'

const standardColors = {
    white: '#FFFFFF',
    green: '#CAC000',
    gray: '#645e52',
    pink: '#EA4886',
}
const accessColors = {
    black: '#1B1B1B',
    yellow: '#FFFF00',
}

export const whiteColorBackground = atom<string>(standardColors.white)
export const whiteColorText = atom<string>(standardColors.white)
export const greenColorBackground = atom<string>(standardColors.green)
export const greenColorText = atom<string>(standardColors.green)
export const pinkColorText = atom<string>(standardColors.pink)
export const blackColorText = atom<string>(accessColors.black)
export const grayColorBackground = atom<string>(standardColors.gray)
export const grayColorText = atom<string>(standardColors.gray)


export const normalizeColors = () => {
    whiteColorBackground.set(standardColors.white)
    whiteColorText.set(standardColors.white)
    greenColorBackground.set(standardColors.green)
    greenColorText.set(standardColors.green)
    pinkColorText.set(standardColors.pink)
    blackColorText.set(accessColors.black)
    grayColorBackground.set(standardColors.gray)
    grayColorText.set(standardColors.gray)
}

export const setBlackBackgroundWhiteText = () => {
    whiteColorBackground.set(accessColors.black)
    whiteColorText.set(standardColors.white)
    greenColorBackground.set(accessColors.black)
    greenColorText.set(standardColors.white)
    pinkColorText.set(standardColors.white)
    blackColorText.set(standardColors.white)
    grayColorBackground.set(accessColors.black)
    grayColorText.set(standardColors.white)
}
export const setBlackBackgroundYellowText = () => {
    whiteColorBackground.set(accessColors.black)
    whiteColorText.set(accessColors.yellow)
    greenColorBackground.set(accessColors.black)
    greenColorText.set(accessColors.yellow)
    pinkColorText.set(accessColors.yellow)
    blackColorText.set(accessColors.yellow)
    grayColorBackground.set(accessColors.black)
    grayColorText.set(accessColors.yellow)
}
export const setYellowBackgroundBlackText = () => {
    whiteColorBackground.set(accessColors.yellow)
    whiteColorText.set(accessColors.black)
    greenColorBackground.set(accessColors.yellow)
    greenColorText.set(accessColors.black)
    pinkColorText.set(accessColors.black)
    blackColorText.set(accessColors.black)
    grayColorBackground.set(accessColors.yellow)
    grayColorText.set(accessColors.black)
}
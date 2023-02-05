import { atom } from 'nanostores'

export const textFont = atom<number>(20)
export const headingFont = atom<number>(35)
export const smallerHeadingFont = atom<number>(25)
export const footerTextFont = atom<number>(18)

export const increaseFonts = (by: number) => {
    textFont.set(textFont.get() + by)
    smallerHeadingFont.set(smallerHeadingFont.get() + by)
    headingFont.set(headingFont.get() + by)
    footerTextFont.set(footerTextFont.get() + by)
}

export const decreaseFonts = (by: number) => {
    textFont.set(textFont.get() - by)
    smallerHeadingFont.set(smallerHeadingFont.get() - by)
    headingFont.set(headingFont.get() - by)
    footerTextFont.set(footerTextFont.get() - by)
}
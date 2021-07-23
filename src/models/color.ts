export enum GRAY {
    LIGHT = 'EBEBED',
    GRAY = '#95959E',
};

export enum BLACK {
    BLACK = '#000000',
    LIGHT = '#3C3C42'
};

export enum WHITE {
    WHITE = '#FFFFFF',
};

export enum RED {
    RED = '#EF5350'
};

export enum BLUE {
    SKY = '#C9D5F3',
    LIGHT = '#4E7BFA',
    BLUE = '#3369E8',
    NAVY = '#3A4961',
    STALE = '#768399'
};

export type ColorType = GRAY | BLACK | WHITE | RED  | BLUE;

export const ColorPalette = {
    Gray: GRAY,
    White: WHITE,
    Black: BLACK,
    Red: RED,
    Blue: BLUE,
};
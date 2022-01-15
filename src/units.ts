export const msfsUnits = {
    bool: "bool",
    knots: "knots",
    degrees: "degrees",
    feet: "feet"
}

type RangedNumber<T extends number> = number extends T ? number: _Range<T, []>;
type _Range<T extends number, R extends unknown[]> = R['length'] extends T ? R[number] : _Range<T, [R['length'], ...R]>;

export type Knots = number;
export type Bool = boolean;
export type Degrees = RangedNumber<360>;
export type Feet = number;
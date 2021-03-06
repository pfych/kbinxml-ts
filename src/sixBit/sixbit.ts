const CHAR_MAP = '0123456789:ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
const BYTE_MAP: {[key: string]: number} = CHAR_MAP.split("").reduce((acc, val) => {
  acc[val] = CHAR_MAP.split("").indexOf(val)
  return acc
}, {})

export const unpack = (compactBuffer: Buffer): string => {
  return "ABC"
}

export const pack = (string: string): any => {
  const chars: number[] = string.split("").map(char => BYTE_MAP[char])

  const stringPadding = 8 - ((string.length)*6 % 8)
  const padding = stringPadding === 8 ? 0 : stringPadding

  let bits = 0;

  chars.forEach(char => {
    bits <<= 6; // Shift bits left 6
    bits |= char // OR bitwise operator
  })

  bits <<= padding;

  const length = Math.floor((string.length*6 + padding) / 8);

  const buf = Buffer.alloc(length)
  buf.writeIntBE(bits, 0, length)

  return buf
}

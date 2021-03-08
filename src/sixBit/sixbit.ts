import { bigintToBuf } from 'bigint-conversion'

// TODO: Make this more readable, It functions but it could be confusing.
const CHAR_MAP = '0123456789:ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
const BYTE_MAP: {[key: string]: number} = CHAR_MAP.split("").reduce((acc, val) => {
  acc[val] = CHAR_MAP.split("").indexOf(val)
  return acc
}, {})

export const unpack = (compactBuffer: Buffer): string => {
  const length = compactBuffer.length
  const lengthInBits = length * 6
  const lengthInBytes = Math.floor((lengthInBits + 7) / 8)

  // Calculate padding and fallback to 0 if its equal to 8
  const calcPadding = 8 - (lengthInBits % 8)
  const padding = calcPadding === 8 ? 0 : calcPadding

  let bits = compactBuffer.readIntBE(0, lengthInBytes)
  bits <<= padding;
  let result = [];

  // Just a nice ES6 way to do something n times
  [...Array(length)].forEach(() => {
    result.push(bits & 0b111111)
    bits >>= 6
  })

  return result.map(x => CHAR_MAP[x]).join("")
}

export const pack = (string: string): any => {
  const chars: number[] = string.split("").map(char => BYTE_MAP[char])

  // Calculate padding and fallback to 0 if its equal to 8
  const calcPadding = 8 - ((string.length)*6 % 8)
  const padding = calcPadding === 8 ? 0 : calcPadding

  // Javascript represents all numbers as 64-bit double precision IEEE 754 floating point numbers
  // We need a 64 bit integer here!
  let bits = BigInt(0);

  chars.forEach(char => {
    const bigChar = BigInt(char)
    bits = bits <<= BigInt(6)
    bits = bits | bigChar // OR bitwise operator
  })

  bits <<= BigInt(padding);

  // TODO: I could not figure this out myself, Replace this library eventually!
  return bigintToBuf(bits)
}

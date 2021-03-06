const SIGNATURE = 0xA0;
const SIG_COMPRESSED = 0x42;
const SIG_UNCOMPRESSED = 0x45

export const parse = (kbin: Buffer): void => {
  if (kbin[0] !== SIGNATURE) {
    throw new Error('Unexpected file received')
  }

  if (kbin[1] === SIG_UNCOMPRESSED) {
    // Uncompressed data
  } else {
    // Data is compressed
  }
}

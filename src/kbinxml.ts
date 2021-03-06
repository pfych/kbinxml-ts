const SIGNATURE = 0xA0;
const SIG_COMPRESSED = 0x42;
const SIG_UNCOMPRESSED = 0x45

export const parse = (kbin: Buffer): void => {
  if (kbin[0] !== SIGNATURE) {
    throw new Error('Unexpected file received')
  }

  let uncompressedKbin: Buffer;
  if (kbin[1] === SIG_UNCOMPRESSED) {
    uncompressedKbin = kbin;
  } else {

  }
}

/*
* Kbin research!
* - Files always start with 0xA0
*   - Followed by 0x42 if compressed or 0x45 if uncompressed
* */

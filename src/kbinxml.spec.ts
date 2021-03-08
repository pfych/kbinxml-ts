import { expect } from 'chai';
import 'mocha';
import * as fs from 'fs';
import * as path from 'path';

describe('Parse .kbin', () => {
  const result: Buffer = fs.readFileSync(path.resolve('.', '.testData', 'testcases_out.kbin'))
  // We wanna make sure this file is valid first
  it('should read the test file', () => {
    expect(result[0] === 0xa0)
  })
  it('should contain compressed data', () => {
    expect(result[1] === 0x42)
  })
})

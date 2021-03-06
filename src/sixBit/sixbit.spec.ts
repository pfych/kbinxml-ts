import { assert } from 'chai';
import 'mocha';
import {pack, unpack} from "./sixbit";

describe('Six-bit pack/unpack', () => {
  it('should pack a simple string', () => {
    const result = pack('ABC')
    assert.deepEqual(result, Buffer.from('2cc340', 'hex'))
  })
  it('should unpack to a string', () => {
    const result = unpack(Buffer.from('2cc340', 'hex'))
    assert.deepEqual(result, 'ABC')
  })
})

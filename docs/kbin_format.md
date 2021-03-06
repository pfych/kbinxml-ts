# The KBIN Format
I find that writing things out as I learn about it helps, its this crazy thing called "studying".

## The Format
A kbinxml document can be parsed as Hexadecimal.

The document always starts with a signature of `0xA0` followed by either `0x42` or `0x45`.  
If compressed; `0x42` is used, Otherwise `0x45` is present.

### Compression
Sixbit compression is used to compress the data, which is a Hexadecimal representation of a UTF-8 string.

Currently, not exactly sure how it works. I've got packing working but unpacking is TODO.


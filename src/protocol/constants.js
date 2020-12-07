const FS = 0x02;
const FE = 0x17;
const ESC = 0x1B;
const XM = 0x0E;

const R = {
  'REQUEST': 0x00,
  'RESPONSE': 0x01,
};

const FRAME_TYPE = {
  'V': 0x56,
  'H': 0x48,
  'P': 0x50,
  'p': 0x70,
  'v': 0x76,
  'N': 0x4e,
  'n': 0x6e,
  'R': 0x52,
  'T': 0x54,
  'L': 0x4c,
  'C': 0x43,
  'c': 0x63,
  'D': 0x44,
};

const PAIRING_RESULT = {
  'ACK': 0x06,
  'NACK': 0x15,
};

module.exports = {
  FS,
  FE,
  ESC,
  XM,
  R,
  FRAME_TYPE,
  PAIRING_RESULT,
};
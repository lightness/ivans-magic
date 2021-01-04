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

const FRAME_TYPE_DESCRIPTION = {
  'V': '“hello”',
  'H': 'Serial Number Request',
  'P': 'Pairing',
  'p': 'Pair forget',
  'v': 'Connection',
  'N': 'Set time',
  'n': 'Set calibration date',
  'R': 'Read data from user memory',
  'T': 'Read data from temporary memory',
  'L': 'Read data from logger memory',
  'C': 'Read current measurement data',
  'c': 'Read current measurement data',
  'D': 'Clear all memory',
}

const RESULT = {
  'ACK': 0x06,
  'NACK': 0x15,
};

const DECI_PVM_TYPE_OF_RESULT = {
  'IRRADIANCE': 0x30,
  'AMBIENT_TEMPERATURE': 0x31,
  'PV_MODULE_TEMPERATURE': 0x32,
  'AZIMUTH': 0x33,
  'ALTITUDE_ANGLE': 0x34,
};

const DECI_PVM_MULTIPLIER = {
  'f': -15,
  'p': -12,
  'n': -9,
  'μ': -6,
  'm': -3,
  '': 0,
  'k': 3,
  'M': 6,
  'G': 9,
  'T': 12,
  'P': 15,
};

const DECI_PVM_FLAG = {
  '': 1,
  '>': 2,
  '<': 4,
};

const DECI_PVM_UNITS = {
  '': 0x00,
  'V': 0x01,
  'A': 0x02,
  'Ω': 0x03,
  'Hz': 0x04,
  'W': 0x05,
  'VA': 0x06,
  'Var': 0x07,
  'Wh': 0x08,
  'VAh': 0x09,
  'Varh': 0x0A,
  'J': 0x0B,
  'F': 0x0C,
  'H': 0x0D,
  '%': 0x0E,
  'g': 0x0F,
  's': 0x10,
  '°C': 0x11,
  '°F': 0x12,
  'K': 0x13,
  'Ωm': 0x14,
  'm': 0x15,
  '°': 0x16,
  'lx': 0x17,
  'lm': 0x18,
  'm/µs': 0x19,
  'Ah': 0x1A,
  'dB': 0x1B,
  'dBm': 0x1C,
  'dBi': 0x1D,
  'W/m^2': 0x1E,
  'BTU/(ft^2*h)': 0x1F,
};

module.exports = {
  FS,
  FE,
  ESC,
  XM,
  R,
  FRAME_TYPE,
  FRAME_TYPE_DESCRIPTION,
  RESULT,
  DECI_PVM_TYPE_OF_RESULT,
  DECI_PVM_MULTIPLIER,
  DECI_PVM_FLAG,
  DECI_PVM_UNITS,
};
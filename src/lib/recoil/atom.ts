import { atom } from 'recoil';

export const mbtiResultAtom = atom({
  key: 'mbtiResult',
  default: {
    EI: 0,
    SN: 0,
    TF: 0,
    JP: 0,
  },
});

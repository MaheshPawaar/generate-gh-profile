import axios from 'axios';
import { atom, selector } from 'recoil';

export const usernameAtom = atom({
  key: 'usernameAtom',
  default: '',
});

export const profileInfo = selector({
  key: 'profileInfo',
  get: async ({ get }) => {
    const res = await axios.get(
      ` https://api.github.com/users/${get(usernameAtom)}`
    );
    return res.data;
  },
});

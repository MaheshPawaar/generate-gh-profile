import { useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { usernameAtom } from '../store/atoms/github';
import "../index.css"

function Search() {
  const input = useRef();
  const setUsername = useSetRecoilState(usernameAtom);

  return (
      <div>
        <input ref={input} type="text" placeholder="Search Github Username" />
        <button onClick={() => setUsername(() => input.current.value)}>
          Generate
        </button>
    </div>
  );
}

export default Search;

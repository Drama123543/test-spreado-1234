import { useEffect, useState } from 'react';
import {useSpreadOut} from 'spreado';
import { ComponentB } from './ComponentB';

export const INDEX_OF_IS_SOMETHING_VISIBLE = 'INDEX_OF_IS_SOMETHING_VISIBLE';

export const ComponentA = () => {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(true)
  const isSomethingVisible = useSpreadOut(INDEX_OF_IS_SOMETHING_VISIBLE, flag);

  // useEffect(() => {
  //   setFlag(true)
  // }, [])

  return (
    <div>
      <button onClick={() => setCount(count+1)}>{count}</button>
      {isSomethingVisible && <div>Part A related to something</div>}
      <div>Everything else in component A</div>
      <ComponentB />
    </div>
  );
};

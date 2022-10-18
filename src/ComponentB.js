import {useSpreadIn} from 'spreado';
import {INDEX_OF_IS_SOMETHING_VISIBLE} from './ComponentA'

function useIsSomethingVisible() {
  return useSpreadIn(INDEX_OF_IS_SOMETHING_VISIBLE, false);
}

export const ComponentB = () => {
  const isSomethingVisible = useIsSomethingVisible();
  return (
    <div>
      {isSomethingVisible && <div>Part B related to something</div>}
      <div>Everything else in component B</div>
    </div>
  );
};

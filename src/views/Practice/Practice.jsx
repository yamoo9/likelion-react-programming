import './Practice.css';
import DefinitionList from './DefinitionList';
import Controller from './parts/Controller';

function Practice() {
  return (
    <div className="Practice">
      <h2>JSX 인 액션</h2>
      <hr />
      <DefinitionList />
      <Controller />
    </div>
  );
}

export default Practice;
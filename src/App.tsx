import React from 'react';
import { TodosContainer } from './TodosContainer';

const App: React.FC = () => {

  return (
    <div>
      <header>TODO-List Simple</header>
      <main>
        <TodosContainer />
      </main>
    </div>
  );
};

export default App;

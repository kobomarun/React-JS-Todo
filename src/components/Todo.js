import * as React from 'react';

const Todos = ({id, text}) => (
  <section className="todoList" >
    <div className="todoName">
      {text}
    </div>
    <div className="action">
      {id}
    </div>
  </section>
)
export default Todos;

import React from 'react';
import { withApollo } from '../lib/withApollo';
import TodoList from './components/TodoList';

const IndexPage = () => {
  return (
    <>
      <h3>Setting up Apollo GraphQL in Next.js with Server Side Rendering</h3>
      <div>
        <TodoList />
      </div>
    </>
  );
};

export default withApollo()(IndexPage);
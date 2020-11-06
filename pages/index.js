import React from 'react';
import { withApollo } from '../lib/withApollo';
import Test from './components/Test';
import TodoList from './components/TodoList';

const IndexPage = ({ todos }) => {
  return (
    <>
      <h3>Setting up Apollo GraphQL in Next.js with Server Side Rendering</h3>
      <div>
        <TodoList todos={todos} />
      </div>
      <div>
        <Test />
      </div>
    </>
  );
};

export async function getInitialProps(context) {
  console.log("getInitialProps");
  return {
    props: {
      todo: {
        id: 100,
        title: 20000
      }
    }, // will be passed to the page component as props
  }
}

export default withApollo()(IndexPage);
## Next.JS, Dgraph, GraphQL Subscriptions, ApolloClient

Let's start Dgraph locally.

```
docker pull dgraph/standalone:master
docker run -it -p 8080:8080 dgraph/standalone:master
```

Now let's submit the GraphQL schema.
```
curl -X POST localhost:8080/admin/schema --data-binary '@schema.graphql'
```

GraphQL
```
http://localhost:8080/graphql
```

Run the development server:


```bash
npm run dev
```

Adding a new item
```
mutation {
  addTodo(input: [{title: "Todo2", description: "subscription", completed: true}]) {
    numUids
  }
}
```

https://github.com/vercel/next.js/blob/canary/examples/with-apollo/pages/index.js
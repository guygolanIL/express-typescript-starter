import express, {Application, json} from 'express';
import { graphqlHTTP } from 'express-graphql';
import { resolvers } from './graphql/resolvers';
import { schema } from './graphql/schema';

const port = 4000;
const app: Application = express();

app.use(json());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: resolvers,
}));

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});

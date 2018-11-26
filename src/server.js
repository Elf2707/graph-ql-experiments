const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema/schema')

const app = express()
app.get('/', (req, res) => {
  res.write('Hello World!!!!')
  res.end()
})

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
)

app.listen(4000, () => console.log('Listening 4000 ...'))

import 'reflect-metadata'
import 'express-async-errors'
import express, { Application } from 'express'
import { loginRoute, usersRoute, categoriesRoute, estateRoute, schedulesRoute } from './routers'
import { handleErrors } from './errors/handleErrors'

const app: Application = express()
app.use(express.json())

app.use("/users", usersRoute)
app.use("/login", loginRoute)
app.use("/categories", categoriesRoute)
app.use("/realEstate", estateRoute)
app.use("/schedules", schedulesRoute)

app.use(handleErrors)

export default app;

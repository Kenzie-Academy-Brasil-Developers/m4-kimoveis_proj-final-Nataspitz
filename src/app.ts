import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import { loginRoute, usersRoute, categoriesRoute, estateRoute, schedulesRoute } from './routers'

const app = express()
app.use(express.json())

app.use("/users", usersRoute)
app.use("/login", loginRoute)
app.use("/categories", categoriesRoute)
app.use("/realEstate", estateRoute)
app.use("/schedules", schedulesRoute)

export default app;

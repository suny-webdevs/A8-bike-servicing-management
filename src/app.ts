import express, { Application, Request, Response } from "express"
import cors from "cors"
import globalErrorHandler from "./app/middleware/globalErrorHandler"
import notfound from "./app/middleware/notFound"
import { customerRoutes } from "./app/modules/customer/customer.route"

const app: Application = express()

app.use(express.json())
app.use(cors())

app.use("/api/customers", customerRoutes)

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Server is running on home route" })
})

app.use(globalErrorHandler)
app.use(notfound)

export default app

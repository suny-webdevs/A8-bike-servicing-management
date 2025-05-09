import { NextFunction, Request, Response } from "express"

import { Prisma } from "@prisma/client"
import AppError from "../utils/AppError"

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let success = false
  let statusCode = 500
  let message = err?.message || "Something went wrong!"
  let error = err

  if (err instanceof Prisma.PrismaClientValidationError) {
    message = "Validation Error"
    error = err?.message
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      message = "Duplicate Key error"
      error = err?.meta
    }
  } else if (err instanceof AppError) {
    statusCode = err?.statusCode
    message = err?.message
  }

  res.status(statusCode).json({
    success,
    message,
    error,
    stack: process.env.NODE_ENV === "development" ? err?.stack : null,
  })
}

export default globalErrorHandler

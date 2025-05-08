import { NextFunction, Request, Response } from "express"

import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library"

// import { Prisma } from "@prisma/client"

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500
  let success = false
  let message = err.message || "Something went wrong!"
  let error = err

  if (err instanceof PrismaClientValidationError) {
    message = "Validation Error"
    error = err.message
  } else if (err instanceof PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      message = "Duplicate Key error"
      error = err.meta
    }
  }

  res.status(statusCode).json({
    success,
    message,
    error,
  })
}

export default globalErrorHandler

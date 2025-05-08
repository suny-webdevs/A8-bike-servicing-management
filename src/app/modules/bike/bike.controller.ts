import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { bikeServices } from "./bike.service"
import httpStatus from "http-status"

const createBike = catchAsync(async (req, res) => {
  const result = await bikeServices.createBike(req.body)
  sendResponse(res, httpStatus.CREATED, "Bike added successfully", result)
})

const getAllBikes = catchAsync(async (req, res) => {
  const result = await bikeServices.getAllBikes()
  sendResponse(res, httpStatus.CREATED, "Bikes fetched successfully", result)
})

const getBikeById = catchAsync(async (req, res) => {
  const result = await bikeServices.getBikeById(req.params.id)
  sendResponse(res, httpStatus.CREATED, "Bike fetched successfully", result)
})

// const updateBikeById = catchAsync(async (req, res) => {
//   const result = await bikeServices.updateBikeById(req.params.id, req.body)
//   sendResponse(res, httpStatus.CREATED, "Bike updated successfully", result)
// })

// const deleteBikeById = catchAsync(async (req, res) => {
//   const result = await bikeServices.deleteBikeById(req.params.id)
//   sendResponse(res, httpStatus.CREATED, "Bike deleted successfully", result)
// })

export const bikeControllers = {
  createBike,
  getAllBikes,
  getBikeById,
  // updateBikeById,
  // deleteBikeById,
}

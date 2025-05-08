import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { serviceRecordServices } from "./service.service"
import httpStatus from "http-status"

const createService = catchAsync(async (req, res) => {
  const result = await serviceRecordServices.createService(req.body)
  sendResponse(
    res,
    httpStatus.CREATED,
    "Service record created successfully",
    result
  )
})

const getAllServices = catchAsync(async (req, res) => {
  const result = await serviceRecordServices.getAllServices()
  sendResponse(
    res,
    httpStatus.OK,
    "Service records fetched successfully",
    result
  )
})

const getServiceById = catchAsync(async (req, res) => {
  const result = await serviceRecordServices.getServiceById(req.params.id)
  sendResponse(
    res,
    httpStatus.OK,
    "Service record fetched successfully",
    result
  )
})

const updateServiceById = catchAsync(async (req, res) => {
  const result = await serviceRecordServices.updateServiceById(
    req.params.id,
    req.body
  )
  sendResponse(
    res,
    httpStatus.OK,
    "Service record updated successfully",
    result
  )
})

export const serviceControllers = {
  createService,
  getAllServices,
  getServiceById,
  updateServiceById,
}

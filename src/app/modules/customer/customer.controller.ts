import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import httpStatus from "http-status"
import { customerService } from "./customer.service"

const createCustomer = catchAsync(async (req, res) => {
  const data = await customerService.createCustomer(req.body)
  sendResponse(res, httpStatus.CREATED, "Customer created successfully", data)
})

const getAllCustomers = catchAsync(async (req, res) => {
  const data = await customerService.getAllCustomers()
  sendResponse(res, httpStatus.OK, "Customers fetched successfully", data)
})

const getACustomer = catchAsync(async (req, res) => {
  const data = await customerService.getCustomerById(req.params.id)
  sendResponse(res, httpStatus.OK, "Customer fetched successfully", data)
})

const updateACustomer = catchAsync(async (req, res) => {
  const data = await customerService.updateACustomer(req.params.id, req.body)
  sendResponse(res, httpStatus.OK, "Customer updated successfully", data)
})

const deleteACustomer = catchAsync(async (req, res) => {
  const data = await customerService.deleteACustomer(req.params.id)
  sendResponse(res, httpStatus.OK, "Customers deleted successfully", data)
})

export const customerController = {
  createCustomer,
  getACustomer,
  getAllCustomers,
  updateACustomer,
  deleteACustomer,
}

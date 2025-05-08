import { Customer } from "@prisma/client"
import prisma from "../../config"

const createCustomer = async (data: Customer) => {
  const result = await prisma.customer.create({ data })
  return result
}

const getAllCustomers = async () => {
  const result = await prisma.customer.findMany()
  return result
}

const getCustomerById = async (customerId: string) => {
  const result = await prisma.customer.findUnique({
    where: { customerId },
  })
  return result
}

const updateACustomer = async (customerId: string, data: Partial<Customer>) => {
  return await prisma.customer.update({
    where: { customerId },
    data,
  })
}

const deleteACustomer = async (customerId: string) => {
  return await prisma.customer.delete({ where: { customerId } })
}

export const customerService = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateACustomer,
  deleteACustomer,
}

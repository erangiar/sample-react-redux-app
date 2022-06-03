import { change } from "redux-form";
import { submitUserDetails } from "../api/orderApi.js";

export async function viewOrderDetails(order) {
  await submitUserDetails(3000, order);
  return 'success';
}


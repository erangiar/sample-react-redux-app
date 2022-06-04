import { setOrderDetails } from "../reducers/orderReducer";

//store order details in redux store
export function setOrder(dispatch, order) {
  let preferences = [];
  if (order.cars) preferences.push("Cars");
  if (order.books) preferences.push("Books");
  if (order.watches) preferences.push("Watches");
  if (order.laptops) preferences.push("Laptops");

  const orderDetails = {
    firstName: order.firstName,
    lastName: order.lastName,
    email: order.email,
    mobileNumber: order.mobileNumber,
    country: order.country,
    address1: order.address1,
    address2: order.address2,
    city: order.city,
    state: order.state,
    postalCode: order.postalCode,
    preferences: preferences,
  };
  dispatch(setOrderDetails(orderDetails));
}

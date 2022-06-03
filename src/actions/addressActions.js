import { change } from "redux-form";

export function setAddressDetails(dispatch, searchTerm) {
  dispatch(change("OrderForm", "address1", searchTerm.properties.address_line1));
  dispatch(change("OrderForm", "address2", searchTerm.properties.address_line2));
  dispatch(change("OrderForm", "city", searchTerm.properties.city));
  dispatch(change("OrderForm", "state", searchTerm.properties.state));
  dispatch(change("OrderForm", "postalCode", searchTerm.properties.postcode));
}

export function populateForm(dispatch,order) {
  dispatch(change("OrderForm", "firstName", order.firstName));
  dispatch(change("OrderForm", "lastName", order.lastName));
  dispatch(change("OrderForm", "mobileNumber", order.mobileNumber));
  dispatch(change("OrderForm", "email", order.email));
  dispatch(change("OrderForm", "address1", order.address1));
  dispatch(change("OrderForm", "address2", order.address2));
  dispatch(change("OrderForm", "city", order.city));
  dispatch(change("OrderForm", "state", order.state));
  dispatch(change("OrderForm", "postalCode", order.postcode));
}

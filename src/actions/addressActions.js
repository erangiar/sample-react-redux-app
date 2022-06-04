import { change } from "redux-form";

export function setAddressDetails(dispatch, searchTerm) {
  dispatch(change("OrderForm", "address1", searchTerm.properties.address_line1));
  dispatch(change("OrderForm", "address2", searchTerm.properties.address_line2));
  dispatch(change("OrderForm", "city", searchTerm.properties.city));
  dispatch(change("OrderForm", "state", searchTerm.properties.state));
  dispatch(change("OrderForm", "postalCode", searchTerm.properties.postcode));
}



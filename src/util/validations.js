import ErrorIcon from '@mui/icons-material/Error';

export default function validate(values,labels) {
    const errors = {};
    const requiredFields = [
      'firstName',
      'lastName',
      'email',
      'mobileNumber',
      'country',
      'address1',
      'address2',
      'city',
      'state',
      'postalCode'

    ];
    requiredFields.forEach(field => {
      if (!values[field]) {
        errors[field] = 'Required';
      }
    });
    if (
      values.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (
      values.mobileNumber &&
      !/^(0|[1-9][0-9]{9})$/i.test(values.mobileNumber)
    ) {
      errors.mobileNumber = 'Invalid mobile number';
    }
    return errors;
  }
  
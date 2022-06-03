

export async function submitUserDetails() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve({code:200, message:'User details added successfully'});

      }, 4000);
    } catch (error) {
      reject(Error(error));
    }
  });
}

export async function submitAddress() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve({code:200, message:'User address added successfully'});

      }, 3000);
    } catch (error) {
      reject(Error(error));
    }
  });
}

export async function submitPrefferences() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve({code:200, message:'User prefferences added successfully'});

      }, 3000);
    } catch (error) {
      reject(Error(error));
    }
  });
}
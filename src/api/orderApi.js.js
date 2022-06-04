//Mock api call to submit user details
export async function submitUserDetails(param) {
  return new Promise((resolve, reject) => {
    try {
      if (param === "success") {
        setTimeout(() => {
          resolve({ code: 200, message: "User details added successfully" });
        }, 3000);
      } else if (param === "fail") {
        setTimeout(() => {
          resolve({ code: 500, message: "Internal server error" });
        }, 3000);
      }
    } catch (error) {
      reject(Error(error));
    }
  });
}

//Mock api call to submit user address details
export async function submitAddress() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve({ code: 200, message: "User address added successfully" });
      }, 3000);
    } catch (error) {
      reject(Error(error));
    }
  });
}

//Mock api call to submit user preferences details
export async function submitPrefferences() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve({ code: 200, message: "User prefferences added successfully" });
      }, 3000);
    } catch (error) {
      reject(Error(error));
    }
  });
}

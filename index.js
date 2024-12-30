let names = [
  {
    name: 'Sardor',
    surname: 'mahmudov',
    age: 21,
    is_married: false
  },
  {
    name: "abdulloh",
    surname: "valiyev",
    age: 56,
    is_married: false
  },
  {
    name: "Gulchapchap",
    surname: "Sottiyeva",
    age: 33,
    is_married: false
  }
];


 
//FUNCTIONS

// this function returnes info about person whose age is less than 40 and not married
// const getPerson = (someArray) => {
//   const filteredArray = someArray.filter(element => element.age < 40)

//   const notMarried = filteredArray.filter(element => element.is_married === false)

//   notMarried.map(element => console.log(`Name: ${element.name} and age: ${element.age}`))
// }

// const getPersonOptimized = (someArray) => {
//   someArray.forEach(element => {
//     if(element.age < 40 && element.is_married === false) {
//       console.log(`Name: ${element.name} and age: ${element.age}`)
//     }
//    } )
// }

// getPersonOptimized(names)

// for is used for iterating over items in the array. continue is used for moving to next element
// break is used for stopping iterations 



// for (const item of names) {
//   console.log(item.name)
//   if(item.age > 40 ) {
//     break
//   }
//   console.log(item.is_married)
// }

// for(let i = 0; i < names.length; i++) {
//   console.log(names[i].name)
//   if(names[i].age > 40){
//     continue
//   }
//   console.log(names[i].is_married)
// }

//SORTING 

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  // Outer loop for passing through the array
  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    // Inner loop for comparing adjacent elements
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap if elements are in the wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        // Mark that a swap occurred
        swapped = true;
      }
    }

    // If no elements were swapped in the inner loop, the array is already sorted
    if (!swapped) {
      break;
    }
  }
  return arr;
}

let arr = [5, 3, 8, 4, 2];

arr.sort((a, b) => a - b)

//FACTORY FUNCTION
function personFunction(name, surname){
  return {
    name,
    surname,
    getName() {
      console.log(this.name + ' ' + this.surname)
    }
  }
}

const myFunction = (name, ...rest) => {
  console.log(name)
}

function fetchData(callback) {
  setTimeout(() => {
    callback("Data fetched!");
  }, 3000);
}

fetchData(
  (message) => {
    console.log(message); // Outputs: Data fetched! after 2 seconds
  }
);

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = age > 20; // Simulating success or failure
      if (success) {
        resolve("Data fetched!");
      } else {
        reject("Error fetching data");
      }
    }, 2000);
  });
}

fetchData()
  .then((message) => {
    console.log(message); // Outputs: Data fetched! after 2 seconds
  })
  .catch((error) => {
    console.log(error);
  });

async function fetchData() {
  try{
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = false; // Simulating success or failure
        if (success) {
          resolve("Data fetched!");
        } else {
          reject("Error fetching data");
        }
      }, 2000);
    });
  
    console.log(result); 
  } catch(error) {
    console.log(error)
  }

}

fetchData()

// Simulating an API call using async/await
// Async function to fetch user data from the API
async function fetchUserProfile(userId) {
  try {
    // Making an HTTP request to fetch user profile
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    // Check if the response is successful (status code 200)
    if (!response.ok) {
      throw new Error('User not found or API issue');
    }

    // Parse the JSON data from the response
    const user = await response.json();

  } catch (error) {
    // Catch any errors that occur during the fetch or parsing
    console.error('Error fetching user profile:', error.message);
  }
}

// Calling the function with a valid user ID
fetchUserProfile(1);  // This will fetch and display the user profile

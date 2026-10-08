// This is a placeholder file to show how you can "mock" fetch requests using
// the nock library.
// You can delete the contents of the file once you have understood how it
// works.

export function makeFetchRequest() {
  return fetch("https://example.com/test");
}

// URLs
let GET_USER = "https://www.codewars.com/api/v1/users/{user}";

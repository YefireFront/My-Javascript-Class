async function myAsyncFunction() {
    // Asynchronous code here
  }
  

  async function fetchData() {
    const response = await fetch('https://example.com/api/data');
    const data = await response.json();
    return data;
  }
  
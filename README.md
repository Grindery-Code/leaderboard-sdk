# Installation

You can install the leaderboard package via npm. In your project directory, run:

```bash
npm leaderboard-sdk
```

### Usage

Import the `Leaderboard` class from the package and create an instance by providing the API URL:

```typescript
import Leaderboard from 'leaderboard-sdk';

// Provide the API URL
const apiUrl = 'https://example.com/api/leaderboard';

// Create an instance of the Leaderboard class
const leaderboard = new Leaderboard(apiUrl);
```

### Fetching Leaderboard Data

Use the `fetchData` method to fetch leaderboard data from the specified API:

```typescript
async function fetchDataExample() {
  try {
    const data = await leaderboard.fetchData();
    console.log('Fetched leaderboard data:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

fetchDataExample();
```

### Error Handling

Make sure to handle errors when fetching data. The `fetchData` method returns a Promise, so you can use standard `try-catch` blocks for error handling.

### Example

Here's a complete example of using the leaderboard package in a TypeScript file:

```typescript
import Leaderboard from 'leaderboard-sdk';

async function example() {
  // Provide the API URL
  const apiUrl = 'https://example.com/api/leaderboard';

  // Create an instance of the Leaderboard class
  const leaderboard = new Leaderboard(apiUrl);

  try {
    // Fetch leaderboard data
    const data = await leaderboard.fetchData();
    console.log('Fetched leaderboard data:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

example();
```
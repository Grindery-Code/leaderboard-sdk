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


## Publishing to npm

To publish your React Leaderboard component to npm, you can follow these steps:

### 1. Prepare your package

Make sure your package is ready for publishing. Ensure that you have a `package.json` file in your project with the necessary information such as name, version, description, main file, and dependencies.

### 2. Create an npm account

If you don't have an npm account, you'll need to create one. You can do this by running the following command in your terminal and following the prompts:

```bash
npm adduser
```

### 3. Update version number

Before publishing, make sure to update the version number in your `package.json`. You can do this manually or use the `npm version` command. For example:

```bash
npm version patch
```

This command will automatically increment the patch version number. You can use `minor` or `major` instead of `patch` depending on the type of changes you've made.

### 4. Publish to npm

After updating the version, you can publish your package to npm using the following command:

```bash
npm publish
```

### 5. Verify the publication

Visit the npm website and search for your package to verify that it has been published successfully.

### Additional Tips

- **Scoped Packages**: If you want to publish your package under a scope (e.g., `@yourusername/leaderboard-ui-sdk`), you can add the `--access` flag when publishing:

  ```bash
  npm publish --access public
  ```

- **Private Packages**: If your package is intended to be private, you can use the `npm login` command to log in with your npm account and then follow the publishing steps.

  ```bash
  npm login
  npm publish --access restricted
  ```
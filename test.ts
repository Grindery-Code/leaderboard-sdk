import Leaderboard from "./index";

const leaderboard = new Leaderboard("https://example.com/api/leaderboard");

async function test() {
  try {
    const data = await leaderboard.fetchData();
    console.log("Fetched leaderboard data:", data);
  } catch (error: any) {
    console.error("Error:", { error });
  }
}

test();

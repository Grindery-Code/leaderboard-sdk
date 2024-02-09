import axios from "axios";

class Leaderboard {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  async fetchData(): Promise<any> {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data;
    } catch (error: any) {
      console.error("Error fetching leaderboard data:", { error });
      throw error;
    }
  }
}

export default Leaderboard;

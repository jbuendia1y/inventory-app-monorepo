import { connection } from "Infra/connection";

class DashboardService {
  async fetchReports() {
    console.log("aaaaaaaaaaaaaaa");
    const data = await connection.get("/reports").catch((err) => err.message);
    console.log(data, "gaaaaaaa");
    if (typeof data === "string") throw new Error(data);
    return data;
  }
}

export const dashboardService = new DashboardService();

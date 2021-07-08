import { connection } from "Infra/connection";

class DashboardService {
  async fetchReports() {
    const data = await connection.get("/reports");
    console.log(data);
    return data;
  }
}

export const dashboardService = new DashboardService();

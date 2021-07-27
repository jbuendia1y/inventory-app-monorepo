import { excute } from "infra/database";

const fetchYears = async (): Promise<number[]> => {
  const _response = await excute({
    query: "SELECT DISTINCT(year(date)) as years FROM reports;",
  });
  const years: number[] = [];
  for (const data of JSON.parse(JSON.stringify(_response))) {
    years.push(data.years);
  }

  return years;
};

export default async (): Promise<{ reports: any[]; years: number[] }> => {
  const years = await fetchYears();
  const reports: { purchases: number; sales: number }[] = [];
  for (const year of years) {
    const query =
      "SELECT SUM(purchases) as purchases,SUM(sales) as sales FROM reports WHERE year(date) = ?";
    const report = await excute({ query, values: [year] }, true);
    report.purchases = parseInt(report.purchases);
    report.sales = parseInt(report.sales);
    reports.push({ ...report, year });
  }
  return { reports, years };
};

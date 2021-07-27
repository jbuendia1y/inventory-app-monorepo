import { useReports } from "hooks/useReports";
import { LoadingComponent } from "modules/shared/components/loading";
import { useEffect, useRef } from "react";

import Chart from "react-apexcharts";
import { ReportModel } from "shared";

export const MainGraphic = () => {
  const { loading, reports } = useReports();
  const purchases = useRef([] as number[]);
  const sales = useRef([] as number[]);

  const appendData = (item: ReportModel) => {
    purchases.current.push(item.purchases);
    sales.current.push(item.sales);
  };

  useEffect(() => {
    if (!loading && reports) {
      if (reports.length === 0) return;
      for (const item of reports) {
        appendData(item);
      }
    }
  }, [loading, reports]);

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [2001],
    },
  };

  const series = [
    {
      name: "purchases",
      data: purchases.current,
    },
    {
      name: "sales",
      data: sales.current,
    },
  ];

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <Chart
          options={options}
          type="bar"
          series={series}
          id="reports"
        ></Chart>
      )}
    </>
  );
};

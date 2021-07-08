/* import { useTransactions } from "hooks/useTransactions";
 */
import Chart from "react-apexcharts";

export const PurchasesGraphic = () => {
  /* const { loading, purchases } = useTransactions(); */
  /* 
  const data: number[] = [];
  const categories: number[] = [];

  const dates = purchases.map((item) => item.date);
 */
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [2010, 2011, 2012, 2013, 2014, 2015],
    },
  };

  const series = [
    {
      name: "purchases",
      data: [10, 20, 30, 40, 50],
    },
    {
      name: "sales",
      data: [8, 15, 25, 15, 40],
    },
  ];

  return (
    <Chart options={options} type="bar" series={series} id="purchases"></Chart>
  );
};

import { useTransactions } from "hooks/useTransactions";
import ApexCharts, { ApexOptions } from "apexcharts";

export const Purchases = () => {
  const { loading, purchases } = useTransactions();
  const el: HTMLDivElement | null = document.querySelector("#purchases");

  const data: number[] = [];
  const categories: number[] = [];

  purchases.map((item) => {});

  const opts: ApexOptions = {
    chart: {
      type: "line",
    },
  };

  new ApexCharts(el, opts);
  return <div id="purchases"></div>;
};

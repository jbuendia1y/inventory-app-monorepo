import { useState, useEffect } from "react";
import { ReportModel } from "shared";
import { dashboardService } from "modules/dashboard/services/dashboard.service";

export const useReports = () => {
  const [loading, setLoading] = useState(false);
  const [reports, setReports] = useState<undefined | ReportModel[]>();

  useEffect(() => {
    setLoading(true);
    console.log(reports);
    if (typeof reports === "undefined") {
      dashboardService
        .fetchReports()
        .then((res) => {
          setReports(res);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(true);
          alert(err.message);
        });
    } else setLoading(false);
  }, [reports]);

  return { loading, reports };
};

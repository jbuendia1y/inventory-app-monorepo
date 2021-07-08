import { useState, useEffect } from "react";
import { dashboardService } from "modules/dashboard/services/dashboard.service";

export const useReports = () => {
  const [loading, setLoading] = useState(false);
  const [reports, setReports] = useState();

  useEffect(() => {
    setLoading(true);
    dashboardService.fetchReports().then((res) => {
      setReports(res);
      setLoading(false);
    });
  }, []);

  return { loading, reports };
};

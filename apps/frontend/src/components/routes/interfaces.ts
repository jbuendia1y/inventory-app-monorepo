import { RouteProps } from "react-router";

export interface protectedRoutesProps extends RouteProps {
  isAuth?: boolean;
}

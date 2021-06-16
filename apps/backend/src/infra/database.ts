import { createConnection } from "mysql2/promise";
import { envs } from "config";

export const excute = async (
  payload: {
    query: string;
    values?: any;
  },
  format?: boolean
): Promise<any> => {
  try {
    const connection = await createConnection(envs.mysql);

    let data: any;

    if (payload.query.startsWith("INSERT")) {
      const [rows] = await connection.query(payload.query, payload.values);
      data = rows;
    } else {
      const [rows] = await connection.execute(payload.query, payload.values);
      data = rows;
    }

    await connection.end();

    if (format) return JSON.parse(JSON.stringify(data))[0];

    return data;
  } catch (err: any) {
    console.log(err);
    return null;
  }
};

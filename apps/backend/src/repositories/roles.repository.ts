import { excute } from "infra/database";

class RolesRepository {
  public roles: string[] = [];

  public async find() {
    const data: any[] = await excute({
      query: "SELECT * FROM roles",
    });

    this.roles = data.map((item) => item.name);
  }
}

export const rolesRepository = new RolesRepository();

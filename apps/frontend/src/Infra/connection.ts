class Connection {
  public headers: any = {
    "Content-Type": "application/json",
  };

  public baseURL: string = "http://localhost:4000";

  constructor() {
    const token = localStorage.getItem("token");
    if (token) {
      this.headers = { ...this.headers, authorization: `Bearer ${token}` };
    }
  }

  public async post(path: string, data: any) {
    return await fetch(this.baseURL + path, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    });
  }

  public async get(path: string) {
    return await fetch(this.baseURL + path, {
      headers: this.headers,
    })
      .then((res) => res.json())
      .catch((err) => err);
  }
}

export const connection = new Connection();

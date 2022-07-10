export interface UserResponse {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  _id: string;
}

export interface ConfigContext {
  config: {
    headers: {
      Authorization: string;
    };
  };
}

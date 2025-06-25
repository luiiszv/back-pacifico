import { sign } from "jsonwebtoken";

// export const createAccessToken = (payload: object): Promise<string> => {
//   const secret = process.env.JWT_SECRET;
//   const expiresIn = "1d";
//   if (!secret) {
//     throw new Error("JWT secret is not defined in environment variables");
//   }
//   return new Promise((resolve, reject) => {
//     sign(payload, secret, { expiresIn }, (err, token) => {
//       if (err) return reject(err);


//       resolve(token!);
//     });
//   });
// };



export const createAccessToken = (
  payload: object
): Promise<{ token: string; expires_in: number }> => {
  const secret = process.env.JWT_SECRET;
  const expiresInSeconds = 60 * 60; 

  if (!secret) {
    throw new Error("JWT secret is not defined in environment variables");
  }

  return new Promise((resolve, reject) => {
    sign(payload, secret, { expiresIn: expiresInSeconds }, (err, token) => {
      if (err || !token) return reject(err);

      resolve({
        token,
        expires_in: expiresInSeconds ,
      });
    });
  });
};

import { Request, Response } from "express";
import {
  getUser,
  insertUser,
  findUsers,
  loginUser,
  getUserById
} from "../services/userService";
import { buildSuccess } from "../utils/baseResponse";
import { successResponse, errorResponse } from "../utils/apiResponse";

export const registerUsers = async ({ body }: Request, res: Response) => {
  try {
    const user = await insertUser(body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Something went wrong in registerUsers", error });
  }
};

export const getUserDetail = async ({ body }: Request, res: Response) => {
  try {
    const user = await getUser(body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ message: "Something went wrong in getUserDetail", error });
  }
};

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await findUsers();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Something went wrong in getAllUsers", error });
  }
};

export const login = async ({ body }: Request, res: Response): Promise<any> => {
  try {
    const response = await loginUser(
      body.email,
      body.password
    );
    // res.cookie("accessToken", token, {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: "strict",
    // });
    if (!response.success) {
      errorResponse(res, response.error);
    }

    successResponse(res, response.data, response.message)
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong in login", error });
  }
};


export const verify = async (req: Request, res: Response): Promise<any> => {
  try {
    const response = await getUserById(req.user?._id)

    if (!response.success) {
      return errorResponse(res, response.error);
    }

    return successResponse(res, response.data, response.message);

  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Something went wrong in login", error });
  }
};

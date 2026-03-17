import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { AuthServices } from "./auth.service";

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  //   const result = await AuthServices.loginUser();
  const { refreshToken, accessToken } = result;

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User is logged in successfully!",

    data: {
      accessToken,
      refreshToken,
    },
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;
  const result = await AuthServices.refreshToken(refreshToken);
  //   const result = await AuthServices.refreshToken();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Access token is retrieved successfully!",
    data: result,
  });
});

const registerUser = catchAsync(async (req, res) => {
    const result = await AuthServices.registerUser(req.body);
//   const result = await AuthServices.registerUser();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User registered successfully",
    data: result,
  });
});

export const AuthControllers = {
  loginUser,
  refreshToken,
  registerUser,
};

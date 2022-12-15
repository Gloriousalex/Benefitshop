import { lazy } from "react";

export const HomePage = lazy(
  () => import("pages/HomePage"),
);

export const NotFoundPage = lazy(
  () => import("pages/NotFoundPage"),
);

export const LoginPage = lazy(
  () => import("pages/LoginPage"),
);

export const BenefitsMap = lazy(
  () => import("pages/BenefitsMap"),
);

export const BenefitsGuide = lazy(
  () => import("pages/BenefitsGuide"),
);

export const UserInfo = lazy(
  () => import("pages/UserInfo"),
);

export const UserBasket = lazy(
  () => import("pages/UserBasket"),
);

export enum ROUTES {
  HOME = "/",
  BenGuide = "guide",
  BenMap = "benefitsmap",
  Login = "auth",
  UserBasket = "basket",
  NOT_FOUND = "*",
  UserInfo = "info",
}
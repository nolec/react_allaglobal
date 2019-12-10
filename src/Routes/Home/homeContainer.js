import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import HomePresenter from "./homePresenter";
import MhomePresenter from "../Mhome/MhomePresenter";
import { isMobile } from "react-device-detect";

export default () => {
  return isMobile ? (
    <MhomePresenter></MhomePresenter>
  ) : (
    <HomePresenter></HomePresenter>
  );
};

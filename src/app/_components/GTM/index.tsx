"use client";

import { FC, useEffect } from "react";
import TagManager from "react-gtm-module";

export const GTM: FC = () => {
  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.GTM_ID as string });
  }, []);

  return null;
};

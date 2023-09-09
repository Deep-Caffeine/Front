import { AllHTMLAttributes } from "react";
import { Theme } from "@emotion/react";
import { Interpolation } from "@emotion/serialize";

export interface BaseTypes extends AllHTMLAttributes<T> {
  css?: Interpolation<Theme>;
  onChange?: React.ChangeEventHandler<T>;
  children?: React.ReactNode;
}

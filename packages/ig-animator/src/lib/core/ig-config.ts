import { IgRenderer } from "../ig-animator";

export interface IgConfig {
  container?: HTMLElement;
  renderer?: IgRenderer;
  debug: boolean;
}

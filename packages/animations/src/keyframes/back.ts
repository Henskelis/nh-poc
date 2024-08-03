import type { Animation } from "../index.js";

/**
 * Options for a backing animation
 */
export type BackOptions = {
  /**
   * The direction to enter from (entrance animation) or exit to (exit animation)
   *
   * @defaultValue `top`
   */
  direction?: "top" | "bottom" | "left" | "right";
};

/**
 * Entrance animation with a backing motion
 *
 * @param options The back options - default direction is `top`
 * @returns The back entrance animation
 */
export const backEntrance = (options?: BackOptions): Animation => {
  if (!options) options = { direction: "top" };
  let { direction } = options;

  if (!direction) direction = "top";
  let startingTranslate: string;

  switch (direction) {
    case "top":
      startingTranslate = "translate3d(0px, -100%, 0px)";
      break;
    case "bottom":
      startingTranslate = "translate3d(0px, 100%, 0px)";
      break;
    case "left":
      startingTranslate = "translate3d(-100%, 0px, 0px)";
      break;
    case "right":
      startingTranslate = "translate3d(100%, 0px, 0px)";
      break;
    default:
      throw new Error(`Invalid direction "${direction}"`);
  }

  return [
    {
      offset: 0,
      transform: [startingTranslate, "scale3d(0.7, 0.7, 0.7)"].join(" "),
      opacity: "0",
    },
    {
      offset: 0.8,
      transform: "translate3d(0px, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
      opacity: "0.7",
    },
    {
      offset: 1,
      transform: "scale3d(1, 1, 1)",
      opacity: "1",
    },
  ];
};

/**
 * Exit animation with a backing motion
 *
 * @param options The back options - default direction is `top`
 * @returns The back exit animation
 */
export const backExit = (options?: BackOptions): Animation => {
  if (!options) options = { direction: "top" };
  let { direction } = options;

  if (!direction) direction = "top";
  let endingTranslate: string;

  switch (direction) {
    case "top":
      endingTranslate = "translate3d(0px, -100%, 0px)";
      break;
    case "bottom":
      endingTranslate = "translate3d(0px, 100%, 0px)";
      break;
    case "left":
      endingTranslate = "translate3d(-100%, 0px, 0px)";
      break;
    case "right":
      endingTranslate = "translate3d(100%, 0px, 0px)";
      break;
    default:
      throw new Error(`Invalid direction "${direction}"`);
  }

  return [
    {
      offset: 0,
      transform: "scale3d(1, 1, 1)",
      opacity: "1",
    },
    {
      offset: 0.2,
      transform: "translate3d(0px, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
      opacity: "0.7",
    },
    {
      offset: 1,
      transform: [endingTranslate, "scale3d(0.7, 0.7, 0.7)"].join(" "),
      opacity: "0",
    },
  ];
};

import { easeOutCubic } from "../easing-functions.js";
import type { Animation } from "../index.js";

/**
 * Options for a bouncing animation
 */
export type BounceOptions = {
  /**
   * The direction to enter from (entrance animation) or exit to (exit animation)
   *
   * @defaultValue `center`
   */
  direction?: "center" | "top" | "bottom" | "left" | "right";
};

/**
 * Entrance animation with a bouncing motion
 *
 * @param options The bounce options - default direction is `center`
 * @returns The bounce entrance animation
 */
export const bounceEntrance = (options?: BounceOptions): Animation => {
  if (!options) options = { direction: "center" };
  let { direction } = options;
  if (!direction) direction = "center";

  if (direction === "center") {
    return [
      {
        offset: 0,
        easing: easeOutCubic,
        transform: "scale3d(0.5, 0.5, 0.5)",
        opacity: "0",
      },
      {
        offset: 0.2,
        easing: easeOutCubic,
        transform: "scale3d(1.1, 1.1, 1.1)",
        opacity: "0.8",
      },
      {
        offset: 0.4,
        easing: easeOutCubic,
        transform: "scale3d(0.9, 0.9, 0.9)",
        opacity: "1",
      },
      {
        offset: 0.6,
        easing: easeOutCubic,
        transform: "scale3d(1.05, 1.05, 1.05)",
        opacity: "1",
      },
      {
        offset: 0.8,
        easing: easeOutCubic,
        transform: "scale3d(0.9, 0.9, 0.9)",
        opacity: "1",
      },
      {
        offset: 1,
        easing: easeOutCubic,
        transform: "scale3d(1, 1, 1)",
        opacity: "1",
      },
    ];
  }

  let translates: string[];
  let scales: string[];

  switch (direction) {
    case "top":
      translates = [
        "translate3d(0px, -100%, 0px)",
        "translate3d(0px, 10%, 0px)",
        "translate3d(0px, -5%, 0px)",
        "translate3d(0px, 2.5%, 0px)",
        "translate3d(0px, 0px, 0px)",
      ];

      break;
    case "bottom":
      translates = [
        "translate3d(0px, 100%, 0px)",
        "translate3d(0px, -10%, 0px)",
        "translate3d(0px, 5%, 0px)",
        "translate3d(0px, -2.5%, 0px)",
        "translate3d(0px, 0px, 0px)",
      ];

      break;
    case "left":
      translates = [
        "translate3d(-100%, 0px, 0px)",
        "translate3d(10%, 0px, 0px)",
        "translate3d(-5%, 0px, 0px)",
        "translate3d(2.5%, 0px, 0px)",
        "translate3d(0px, 0px, 0px)",
      ];

      break;
    case "right":
      translates = [
        "translate3d(100%, 0px, 0px)",
        "translate3d(-10%, 0px, 0px)",
        "translate3d(5%, 0px, 0px)",
        "translate3d(-2.5%, 0px, 0px)",
        "translate3d(0px, 0px, 0px)",
      ];

      break;
    default:
      throw new Error(`Invalid direction "${direction}"`);
  }

  if (["top", "bottom"].includes(direction)) {
    scales = [
      "scale3d(1, 1.5, 1)",
      "scale3d(1, 0.75, 1)",
      "scale3d(1, 0.9, 1)",
      "scale3d(1, 0.97, 1)",
      "scale3d(1, 1, 1)",
    ];
  } else {
    scales = [
      "scale3d(2, 1, 1)",
      "scale3d(0.75, 1, 1)",
      "scale3d(0.9, 1, 1)",
      "scale3d(0.97, 1, 1)",
      "scale3d(1, 1, 1)",
    ];
  }

  return [
    {
      offset: 0,
      easing: easeOutCubic,
      transform: [translates[0], scales[0]].join(" "),
      opacity: "0",
    },
    {
      offset: 0.6,
      easing: easeOutCubic,
      transform: [translates[1], scales[1]].join(" "),
      opacity: "0.8",
    },
    {
      offset: 0.75,
      easing: easeOutCubic,
      transform: [translates[2], scales[2]].join(" "),
      opacity: "1",
    },
    {
      offset: 0.9,
      easing: easeOutCubic,
      transform: [translates[3], scales[3]].join(" "),
      opacity: "1",
    },
    {
      offset: 1,
      easing: easeOutCubic,
      transform: [translates[4], scales[4]].join(" "),
      opacity: "1",
    },
  ];
};

/**
 * Exit animation with a bouncing motion
 *
 * @param options The bounce options - default direction is `center`
 * @returns The bounce exit animation
 */
export const bounceExit = (options?: BounceOptions): Animation => {
  if (!options) options = { direction: "center" };
  let { direction } = options;
  if (!direction) direction = "center";

  if (direction === "center") {
    return [
      {
        offset: 0,
        easing: easeOutCubic,
        transform: "scale3d(1, 1, 1)",
        opacity: "1",
      },
      {
        offset: 0.2,
        easing: easeOutCubic,
        transform: "scale3d(0.98, 0.98, 0.98)",
        opacity: "1",
      },
      {
        offset: 0.4,
        easing: easeOutCubic,
        transform: "scale3d(1.05, 1.05, 1.05)",
        opacity: "1",
      },
      {
        offset: 0.6,
        easing: easeOutCubic,
        transform: "scale3d(0.9, 0.9, 0.9)",
        opacity: "1",
      },
      {
        offset: 0.8,
        easing: easeOutCubic,
        transform: "scale3d(1.1, 1.1, 1.1)",
        opacity: "0.8",
      },
      {
        offset: 1,
        easing: easeOutCubic,
        transform: "scale3d(0.5, 0.5, 0.5)",
        opacity: "0",
      },
    ];
  }

  let translates: string[];
  let scales: string[];

  switch (direction) {
    case "top":
      translates = [
        "translate3d(0px, 0px, 0px)",
        "translate3d(0px, 2.5%, 0px)",
        "translate3d(0px, -5%, 0px)",
        "translate3d(0px, 10%, 0px)",
        "translate3d(0px, -100%, 0px)",
      ];

      break;
    case "bottom":
      translates = [
        "translate3d(0px, 0px, 0px)",
        "translate3d(0px, -2.5%, 0px)",
        "translate3d(0px, 5%, 0px)",
        "translate3d(0px, -10%, 0px)",
        "translate3d(0px, 100%, 0px)",
      ];

      break;
    case "left":
      translates = [
        "translate3d(0px, 0px, 0px)",
        "translate3d(2.5%, 0px, 0px)",
        "translate3d(-5%, 0px, 0px)",
        "translate3d(10%, 0px, 0px)",
        "translate3d(-100%, 0px, 0px)",
      ];

      break;
    case "right":
      translates = [
        "translate3d(0px, 0px, 0px)",
        "translate3d(-2.5%, 0px, 0px)",
        "translate3d(5%, 0px, 0px)",
        "translate3d(-10%, 0px, 0px)",
        "translate3d(100%, 0px, 0px)",
      ];

      break;
    default:
      throw new Error(`Invalid direction "${direction}"`);
  }

  if (["top", "bottom"].includes(direction)) {
    scales = [
      "scale3d(1, 1, 1)",
      "scale3d(1, 0.97, 1)",
      "scale3d(1, 0.9, 1)",
      "scale3d(1, 0.75, 1)",
      "scale3d(1, 1.5, 1)",
    ];
  } else {
    scales = [
      "scale3d(1, 1, 1)",
      "scale3d(0.97, 1, 1)",
      "scale3d(0.9, 1, 1)",
      "scale3d(0.75, 1, 1)",
      "scale3d(1.5, 1, 1)",
    ];
  }

  return [
    {
      offset: 0,
      easing: easeOutCubic,
      transform: [translates[0], scales[0]].join(" "),
      opacity: "1",
    },
    {
      offset: 0.1,
      easing: easeOutCubic,
      transform: [translates[1], scales[1]].join(" "),
      opacity: "1",
    },
    {
      offset: 0.25,
      easing: easeOutCubic,
      transform: [translates[2], scales[2]].join(" "),
      opacity: "1",
    },
    {
      offset: 0.4,
      easing: easeOutCubic,
      transform: [translates[3], scales[3]].join(" "),
      opacity: "0.5",
    },
    {
      offset: 1,
      easing: easeOutCubic,
      transform: [translates[4], scales[4]].join(" "),
      opacity: "0",
    },
  ];
};

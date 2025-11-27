declare const ym: any;

interface YMEventData {
  [key: string]: string | number;
}

export const reachGoal = (goalName: string, data?: YMEventData) => {
  if (typeof ym === "function") {
    ym(105547532, "reachGoal", goalName, data);
  }
};

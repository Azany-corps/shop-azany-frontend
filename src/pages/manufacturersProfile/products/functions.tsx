import states from "./States";

export const nigeriaStates = Object.values(states).map((state) => state.name);

export function CheckLGA(value: string) {
  if (!value || !nigeriaStates) {
    return;
  }
  let stat = Object.values(states)?.find(
    (state) => state.name.toLocaleLowerCase() == value.toLocaleLowerCase()
  );
  if (!stat) {
    return;
  }
  return stat.LGA;
}

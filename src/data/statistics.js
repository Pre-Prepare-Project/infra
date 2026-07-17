export const STATISTICS = [
  {
    id: "projects",
    value: "150",
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    id: "clients",
    value: "50",
    suffix: "+",
    label: "Happy Clients",
  },
  {
    id: "experience",
    value: "10",
    suffix: "+",
    label: "Years of Experience",
  },
  {
    id: "support",
    value: "24/7",
    label: "Support Available",
    animate: false,
  },
  {
    id: "satisfaction",
    value: "98",
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export const ABOUT_STATISTICS = [
  {
    id: "years",
    value: "10",
    suffix: "+",
    label: "Years of Experience",
  },
  {
    id: "projects",
    value: "150",
    suffix: "+",
    label: "Projects Completed",
  },
  {
    id: "team",
    value: "25",
    suffix: "+",
    label: "Team Members",
  },
  {
    id: "satisfaction",
    value: "98",
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export function getStatisticById(id) {
  return STATISTICS.find((stat) => stat.id === id);
}

import { FAQ_ITEMS } from "@/data/faq";

export function validateFaqItems(items) {
  return items.every(
    (item) =>
      item.question &&
      item.answer &&
      typeof item.question === "string" &&
      typeof item.answer === "string",
  );
}

export function validateStatistics(items) {
  return items.every(
    (item) => item.label && item.value !== undefined && item.value !== null,
  );
}

export function validateNavItems(items) {
  return items.every((item) => item.label && item.href);
}

export function mapFaqForComponent(items = FAQ_ITEMS) {
  return items.map(({ key, id, question, answer }) => ({
    key: key ?? id,
    question,
    answer,
  }));
}

export function mapStatisticsForComponent(items) {
  return items.map(({ value, label, suffix, prefix, animate }) => ({
    value,
    label,
    suffix: suffix ?? "",
    prefix: prefix ?? "",
    animate: animate !== false,
  }));
}

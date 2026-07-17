import { COMPANY } from "@/constants/theme";

export function getDefaultContactInfo() {
  return [
    {
      label: "Phone",
      value: COMPANY.phone,
      href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
    },
    {
      label: "Email",
      value: COMPANY.email,
      href: `mailto:${COMPANY.email}`,
    },
  ];
}

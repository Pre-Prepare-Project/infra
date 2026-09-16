import {
  ApiOutlined,
  CloudServerOutlined,
  CodeOutlined,
  CustomerServiceOutlined,
  DatabaseOutlined,
  MobileOutlined,
  RadarChartOutlined,
  TeamOutlined,
  BgColorsOutlined,
} from "@ant-design/icons";
import { SERVICE_ICON_KEYS } from "@/data/services";

export const SERVICE_ICONS = {
  [SERVICE_ICON_KEYS.code]: CodeOutlined,
  [SERVICE_ICON_KEYS.mobile]: MobileOutlined,
  [SERVICE_ICON_KEYS.database]: DatabaseOutlined,
  [SERVICE_ICON_KEYS.team]: TeamOutlined,
  [SERVICE_ICON_KEYS.design]: BgColorsOutlined,
  [SERVICE_ICON_KEYS.api]: ApiOutlined,
  [SERVICE_ICON_KEYS.search]: RadarChartOutlined,
  [SERVICE_ICON_KEYS.cloud]: CloudServerOutlined,
  [SERVICE_ICON_KEYS.support]: CustomerServiceOutlined,
};

export function getServiceIcon(iconKey) {
  return SERVICE_ICONS[iconKey] || CodeOutlined;
}

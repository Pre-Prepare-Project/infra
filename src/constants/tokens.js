import { BRAND_COLORS } from "./theme";

export const COLORS = {
  ...BRAND_COLORS,
  primaryLight: "#2A5F8F",
  primaryDark: "#163A5C",
  secondaryLight: "#4A7BA8",
  accentLight: "#F06B5A",
  accentDark: "#D43D2A",
  success: "#22C55E",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",
  surface: "#FFFFFF",
  surfaceMuted: "#F1F5F9",
  overlay: "rgba(15, 23, 42, 0.6)",
  gradientPrimary: "linear-gradient(135deg, #1F4A75 0%, #355F89 100%)",
  gradientAccent: "linear-gradient(135deg, #EC523F 0%, #F06B5A 100%)",
  gradientHero: "linear-gradient(180deg, rgba(31, 74, 117, 0.06) 0%, #F8FAFC 100%)",
};

export const TYPOGRAPHY = {
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif",
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSize: {
    displayXl: "4rem",
    displayLg: "3rem",
    h1: "2.5rem",
    h2: "2rem",
    h3: "1.5rem",
    h4: "1.25rem",
    h5: "1.125rem",
    h6: "1rem",
    bodyLg: "1.125rem",
    body: "1rem",
    bodySm: "0.875rem",
    caption: "0.75rem",
    overline: "0.6875rem",
  },
  lineHeight: {
    tight: 1.2,
    snug: 1.35,
    normal: 1.6,
    relaxed: 1.75,
  },
  letterSpacing: {
    tight: "-0.02em",
    normal: "0",
    wide: "0.04em",
    wider: "0.08em",
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 48,
  "3xl": 64,
  "4xl": 96,
  "5xl": 128,
};

export const RADIUS = {
  sm: 6,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const SHADOWS = {
  sm: "0 1px 2px rgba(15, 23, 42, 0.05)",
  md: "0 4px 12px rgba(15, 23, 42, 0.08)",
  lg: "0 8px 24px rgba(15, 23, 42, 0.12)",
  xl: "0 16px 48px rgba(15, 23, 42, 0.16)",
  card: "0 4px 20px rgba(31, 74, 117, 0.08)",
  cardHover: "0 12px 32px rgba(31, 74, 117, 0.14)",
  accent: "0 8px 24px rgba(236, 82, 63, 0.25)",
};

export const TRANSITIONS = {
  fast: "0.15s ease",
  base: "0.2s ease",
  slow: "0.4s ease",
  spring: "0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
};

export const Z_INDEX = {
  header: 1000,
  drawer: 1100,
  modal: 1200,
  tooltip: 1300,
};

export const DESIGN_TOKENS = {
  colors: COLORS,
  typography: TYPOGRAPHY,
  spacing: SPACING,
  radius: RADIUS,
  shadows: SHADOWS,
  transitions: TRANSITIONS,
  zIndex: Z_INDEX,
};

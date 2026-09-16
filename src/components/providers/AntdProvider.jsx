"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App, ConfigProvider } from "antd";
import { antdTheme } from "@/lib/antd-theme";

export default function AntdProvider({ children }) {
  return (
    <AntdRegistry>
      <ConfigProvider theme={antdTheme}>
        <App>{children}</App>
      </ConfigProvider>
    </AntdRegistry>
  );
}

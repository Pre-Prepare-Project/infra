"use client";

import { Form as AntForm } from "antd";
import { cn } from "@/utils/cn";
import styles from "./Form.module.scss";

function Form({ layout = "vertical", className, children, ...rest }) {
  return (
    <AntForm
      layout={layout}
      className={cn(styles.form, className)}
      requiredMark={false}
      scrollToFirstError
      {...rest}
    >
      {children}
    </AntForm>
  );
}

Form.Item = AntForm.Item;
Form.List = AntForm.List;
Form.useForm = AntForm.useForm;

export default Form;

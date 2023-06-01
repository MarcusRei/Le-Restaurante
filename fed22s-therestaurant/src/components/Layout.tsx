import { Outlet } from "react-router-dom";
import { Form } from "./Form";

export const Layout = () => {
  return (
    <>
      <Outlet></Outlet>
      <Form></Form>
    </>
  );
};

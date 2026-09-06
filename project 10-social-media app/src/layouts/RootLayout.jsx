import { Outlet } from "react-router";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <div className="w-full min-h-screen flex flex-col ">
      <Header></Header>
      <main className="flex flex-col flex-1 ">
        <Outlet />
      </main>
    </div>
  );
}

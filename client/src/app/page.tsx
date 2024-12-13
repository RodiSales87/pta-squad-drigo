import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <Topbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 bg-pink-200"></div>
      </div>
    </div>
  );
}

import Image from "next/image";
import CardApp from "./components/modules/CardApp";

export default function Home() {
  return (
    <>
      <div className="w-full h-[81vh]">
        <CardApp title={"شرایط کارکردی"} />
      </div>
    </>
  );
}

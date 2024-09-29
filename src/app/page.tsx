import Image from "next/image";
import Link from "next/link"
export default function page() {
  return (
    <div className="relative min-h-screen  bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/uskkkkt.jpeg')" }}>
       <div className="container mx-auto flex justify-between items-center">
       </div>
       <div className="flex justify-center items-center h-full">
        <h1 className="text-sky-950 text-4xl font-bold">Welcome to My Page</h1>
      </div>
</div>
  );
}

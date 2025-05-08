import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center min-h-screen p-8 pb-20  font-[family-name:var(--font-geist-sans)]">
      <h1>DB Prueba</h1>
      <main className="flex flex-row gap-4 sm:items-start">
        <Link href="./register" className="w-full">
          <Button className="w-full cursor-pointer">Register</Button>
        </Link>
        <Link href="./login" className="w-full">
          <Button className="w-full cursor-pointer">Login</Button>
        </Link>
        <Link href="./dashboard" className="w-full">
          <Button className="w-full cursor-pointer">Dashboard</Button>
        </Link>
      </main>
    </div>
  );
}

import { Feed } from "@/app/components/Feed";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="mb-8 text-5xl font-extrabold text-slate-900">
        Halarmärken
      </h1>
      <Feed />
    </main>
  );
}

import Counter from "@/components/Counter";
import ClientForm from "@/components/ClientForm";
import ServerForm from "@/app/ServerForm";


export default function Home() {
  return (
    <div className="p-4 flex flex-col gap-10">
      <Counter />
      <ClientForm />
      <ServerForm />
    </div>
  );
}

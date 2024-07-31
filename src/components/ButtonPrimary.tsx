import { Button } from "@headlessui/react";

export default function ButtonPrimary() {
  return (
    <Button className="inline-flex items-center gap-2 rounded-md bg-blue-900 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
      Hello
    </Button>
  );
}

import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col text-cyan-400 text-center w-full sm:w-1/2 my-26 px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-right">
          <h1 className="text-5xl font-medium text-cyan-400 sm:text-8xl">
            Hi, I`m Zak Farrow.
          </h1>
          <p className="mt-6 text-2xl leading-8 text-cyan-400">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10 flex items-center justify-end gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-cyan-500 px-3.5 py-2.5 text-sm text-slate-50 shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Projects
            </Link>
            <Link
              href="/resume"
              className="text-sm leading-6 hover:text-slate-50"
            >
              About me <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

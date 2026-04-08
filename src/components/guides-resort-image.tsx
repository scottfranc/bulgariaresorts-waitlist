import Image from "next/image";

const SRC =
  "https://images.unsplash.com/photo-1708551810959-f1cc431ec9f9?auto=format&fit=crop&w=3000&q=90";

const PHOTO_PAGE = "https://unsplash.com/photos/a-view-of-a-mountain-range-at-sunset-bVG-4bIzv-8";
const AUTHOR = "https://unsplash.com/@alanrost";

export function GuidesResortImage() {
  return (
    <figure className="mx-auto mt-10 w-full max-w-4xl">
      <div className="relative aspect-[21/10] w-full overflow-hidden rounded-2xl bg-neutral-200 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] sm:aspect-[2/1]">
        <Image
          src={SRC}
          alt="Sunset view over snowy mountain ranges in Bansko, Bulgaria"
          fill
          className="object-cover object-center"
          sizes="(max-width: 896px) 100vw, 896px"
        />
      </div>
      <figcaption className="mt-3 text-center text-[11px] leading-relaxed text-neutral-400">
        Bansko, Bulgaria —{" "}
        <a
          href={AUTHOR}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-neutral-300 underline-offset-2 transition hover:text-neutral-600"
        >
          Alan Rostovtev
        </a>{" "}
        on{" "}
        <a
          href={PHOTO_PAGE}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-neutral-300 underline-offset-2 transition hover:text-neutral-600"
        >
          Unsplash
        </a>
      </figcaption>
    </figure>
  );
}

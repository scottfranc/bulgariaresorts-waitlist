import Link from "next/link";
import {env} from "@/lib/env";

type Props = {
  label: string;
};

export function StickyBookingCta({label}: Props) {
  return (
    <div className="fixed inset-x-0 bottom-4 z-40 px-4">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-3 rounded-2xl border border-neutral-200 bg-white/95 px-4 py-3 shadow-[0_12px_32px_rgba(0,0,0,0.14)] backdrop-blur">
        <p className="text-sm font-medium text-neutral-800">{label}</p>
        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-neutral-900 px-3.5 py-2 text-xs font-medium text-white transition hover:bg-neutral-700"
          >
            Need help booking?
          </Link>
          <a
            href={`mailto:${env.contactEmail}`}
            className="inline-flex items-center rounded-full border border-neutral-300 px-3.5 py-2 text-xs font-medium text-neutral-700 transition hover:border-neutral-500"
          >
            Email us
          </a>
        </div>
      </div>
    </div>
  );
}

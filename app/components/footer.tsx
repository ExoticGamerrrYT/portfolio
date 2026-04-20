export function Footer({ rights }: { rights: string }) {
  return (
    <footer className="border-t border-zinc-200 px-6 py-8 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
        <p>
          &copy; {new Date().getFullYear()} Carlos. {rights}
        </p>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h4 className="text-zinc-300">
            © 2026 Afnan Cheranthodika
          </h4>

          <p className="text-zinc-500 text-sm">
            Built with Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
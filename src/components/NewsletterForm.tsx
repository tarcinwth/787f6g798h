import { useState } from "react";
import { ArrowRight } from "lucide-react";

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("Por favor, insira seu email");
      return;
    }

    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Por favor, insira um email válido");
      return;
    }

    try {
      setStatus("loading");

      // Simula uma chamada à API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Aqui você implementaria a chamada real à sua API
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email })
      // });

      setStatus("success");
      setMessage(
        "Obrigado por se inscrever! Em breve você receberá nossas novidades."
      );
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage("Ocorreu um erro ao cadastrar seu email. Tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Seu melhor email"
          className="w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 pr-36"
          disabled={status === "loading"}
          aria-label="Email para newsletter"
          aria-invalid={status === "error"}
          aria-describedby={message ? "newsletter-message" : undefined}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-[#7901FA] px-6 py-2 rounded-full font-semibold hover:bg-white/90 transition-colors flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <span className="animate-spin">⏳</span> Enviando...
            </>
          ) : (
            <>
              Cadastrar <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {message && (
        <p
          id="newsletter-message"
          className={`mt-2 text-sm ${
            status === "success" ? "text-green-300" : "text-red-300"
          }`}
          role="alert"
        >
          {message}
        </p>
      )}
    </form>
  );
}

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export function NewsletterForm() {
  const { ref, isInView } = useInView();
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
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#7901FA] dark:text-[#9B4DFF] mb-4">
            Receba nossas ofertas
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Inscreva-se para receber nossas promoções e novidades
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#7901FA] dark:focus:ring-[#9B4DFF] transition-all duration-300"
              disabled={status === "loading"}
              aria-label="Email para newsletter"
              aria-invalid={status === "error"}
              aria-describedby={message ? "newsletter-message" : undefined}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-[#7901FA] dark:bg-[#9B4DFF] text-white font-medium rounded-lg hover:bg-[#6001D1] dark:hover:bg-[#8B3DFF] transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              {status === "loading" ? (
                <>
                  <span className="animate-spin">⏳</span> Enviando...
                </>
              ) : (
                <>Inscrever-se</>
              )}
            </button>
          </form>

          {message && (
            <p
              id="newsletter-message"
              className={`mt-4 text-sm ${
                status === "success" ? "text-green-300" : "text-red-300"
              }`}
              role="alert"
            >
              {message}
            </p>
          )}

          <p className="text-gray-500 dark:text-gray-500 text-xs mt-4">
            Prometemos não enviar spam
          </p>
        </motion.div>
      </div>
    </section>
  );
}

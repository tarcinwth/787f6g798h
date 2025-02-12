import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { COLORS, ANIMATIONS } from "../config/theme";

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
      await new Promise((resolve) => setTimeout(resolve, 1500));
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
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          {...ANIMATIONS.slideUp}
          animate={isInView ? "animate" : "initial"}
          className="max-w-2xl mx-auto text-center"
        >
          <h2
            className={`text-2xl md:text-3xl font-bold text-[${COLORS.primary.light}] dark:text-[${COLORS.primary.dark}] mb-4`}
          >
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
              className={`flex-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[${COLORS.primary.light}] dark:focus:ring-[${COLORS.primary.dark}] transition-all duration-300`}
              disabled={status === "loading"}
              aria-label="Email para newsletter"
              aria-invalid={status === "error"}
              aria-describedby={message ? "newsletter-message" : undefined}
            />
            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-3 bg-[${COLORS.primary.light}] dark:bg-[${COLORS.primary.dark}] text-white font-medium rounded-lg hover:bg-[${COLORS.primary.light}]/90 dark:hover:bg-[${COLORS.primary.dark}]/90 transition-colors duration-300 shadow-lg hover:shadow-xl`}
            >
              {status === "loading" ? (
                <span className="animate-spin">⏳</span>
              ) : (
                "Inscrever-se"
              )}
            </motion.button>
          </form>

          {message && (
            <motion.p
              {...ANIMATIONS.fadeIn}
              animate={isInView ? "animate" : "initial"}
              id="newsletter-message"
              className={`mt-4 text-sm ${
                status === "success" ? "text-green-500" : "text-red-500"
              }`}
              role="alert"
            >
              {message}
            </motion.p>
          )}

          <p className="text-gray-500 dark:text-gray-500 text-xs mt-4">
            Prometemos não enviar spam
          </p>
        </motion.div>
      </div>
    </section>
  );
}

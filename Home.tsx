import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircleHeart, Lock, Sparkles, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { LoveCard } from "@/components/LoveCard";
import { FloatingParticles } from "@/components/FloatingParticles";
import { SecretModal } from "@/components/SecretModal";

export default function Home() {
  const [activeMessage, setActiveMessage] = useState<{ title: string; content: string } | null>(null);
  const [isSecretOpen, setIsSecretOpen] = useState(false);

  const cards = [
    {
      title: "💌 كلمة زوينة",
      content: "hdra men l9lb",
      icon: <MessageCircleHeart className="w-8 h-8" />,
      actionLabel: "شوف",
      dialogContent: "الله يسهل عليك و يخليك ليا ديما فرحانة 🤍",
      dialogTitle: "دعوة من القلب",
    },
    {
      title: "I L V U",
      content: "For you...",
      icon: <Heart className="w-8 h-8 fill-current" />,
      actionLabel: "فتح",
      dialogContent: "be mat9l9ich lina azwina rir dakhkin m3ak 9adina li maw9i3 3la 9do m3a krk rir bach mar9l9lish wa tiri b zekk ila ba9a m9l9a",
      dialogTitle: "My Wish For You",
    },
    {
      title: "🎁 مفاجأة",
      content: "Secret...",
      icon: <Gift className="w-8 h-8" />,
      actionLabel: "كشف",
      dialogContent: "المفاجأة فالصفحة السرية Wlknn 9lbi 3la code bohdk",
      dialogTitle: "Surprise!",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      <FloatingParticles />
      <main className="flex-1 container max-w-5xl mx-auto px-4 py-12 md:py-24 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-white drop-shadow-sm text-glow">
            Chaimae
          </h1>
          <p className="text-xl md:text-3xl text-white/80 font-script tracking-wide">
            nf7ouk chwiya 🌸
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full mb-24">
          {cards.map((card, idx) => (
            <LoveCard
              key={idx}
              title={card.title}
              icon={card.icon}
              delay={0.2 + idx * 0.1}
              action={
                <Button
                  onClick={() => setActiveMessage({ title: card.dialogTitle, content: card.dialogContent })}
                  className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 text-white"
                >
                  {card.actionLabel}
                </Button>
              }
            >
              {card.content}
            </LoveCard>
          ))}
        </div>

        <Button onClick={() => setIsSecretOpen(true)} size="lg" className="rounded-full bg-black border border-white/10">
          <Lock className="w-5 h-5 mr-2" />
          الصفحة السرية
        </Button>
      </main>

      <Dialog open={!!activeMessage} onOpenChange={(open) => !open && setActiveMessage(null)}>
        <DialogContent className="bg-black/80 backdrop-blur-xl border-white/10 text-white sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-display text-primary mb-2">
              {activeMessage?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="py-8 text-center text-xl">
            {activeMessage?.content}
          </div>
        </DialogContent>
      </Dialog>

      <SecretModal isOpen={isSecretOpen} onClose={() => setIsSecretOpen(false)} />
    </div>
  );
}

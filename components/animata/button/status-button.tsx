import { CheckCircle2, CircleDashed } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import NeumorphButton from "@/components/ui/neumorph-button";

interface StatusButtonProps extends Omit<React.ComponentProps<typeof NeumorphButton>, "children"> {
  status: "idle" | "loading" | "success";
  idleText?: string;
  loadingText?: string;
  successText?: string;
  children?: React.ReactNode;
}

export default function StatusButton({
  status = "idle",
  idleText = "등록하기",
  loadingText = "처리 중...",
  successText = "등록 완료!",
  className,
  disabled,
  ...props
}: StatusButtonProps) {
  const isEnabled = status === "idle" && !disabled;

  return (
    <NeumorphButton
      disabled={!isEnabled}
      className={cn("group/status relative overflow-hidden", className)}
      loading={false}
      {...props}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={status}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.075 }}
          className={cn("flex items-center justify-center gap-2")}
        >
          {status === "success" && (
            <motion.span
              className="h-fit w-fit"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.075, type: "spring" }}
            >
              <CheckCircle2 className="h-4 w-4" />
            </motion.span>
          )}

          {status === "loading" ? (
            <>
              <CircleDashed className="h-4 w-4 animate-spin" />
              {loadingText}
            </>
          ) : status === "success" ? (
            successText
          ) : (
            idleText
          )}
        </motion.span>
      </AnimatePresence>
    </NeumorphButton>
  );
}

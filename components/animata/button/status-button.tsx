import { CheckCircle2, CircleDashed } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@heroui/react";

interface StatusButtonProps extends Omit<React.ComponentProps<typeof Button>, "children"> {
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
  isDisabled,
  ...props
}: StatusButtonProps) {
  const isEnabled = status === "idle" && !isDisabled;

  return (
    <Button
      className={cn("group/status relative overflow-hidden", className)}
      isDisabled={!isEnabled}
      isPending={status === "loading"}
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
    </Button>
  );
}

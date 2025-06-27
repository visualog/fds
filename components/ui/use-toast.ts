import { toast as sonnerToast } from "sonner"

// Re-export Sonner's toast function for consistency with shadcn UI examples.
export const toast = sonnerToast

// Sonner already manages its own internal store, so we simply expose the same API.
export type Toast = Parameters<typeof sonnerToast>[0]

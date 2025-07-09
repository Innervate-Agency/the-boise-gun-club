import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, EyeOff, Check, X, Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-lg border transition-all duration-200 outline-none font-body",
  {
    variants: {
      variant: {
        default: "bg-card border-border/50 hover:border-border focus:border-lahoma-orange focus:ring-2 focus:ring-lahoma-orange/20",
        premium: "bg-gradient-to-r from-leonard-yellow/5 to-lahoma-orange/5 border-leonard-yellow/30 hover:border-leonard-yellow/50 focus:border-lahoma-orange focus:ring-2 focus:ring-lahoma-orange/30 focus:shadow-lg transition-all duration-300 relative overflow-hidden group",
        elite: "bg-gradient-to-r from-leonard-yellow/10 via-lahoma-orange/10 to-leonard-yellow/10 border-2 border-leonard-yellow/50 hover:border-leonard-yellow focus:border-lahoma-orange focus:ring-2 focus:ring-lahoma-orange/40 focus:shadow-xl transition-all duration-300 relative overflow-hidden group",
        glass: "bg-[var(--card)]/10 backdrop-blur-sm border-white/20 hover:border-white/30 focus:border-white/50 focus:ring-2 focus:ring-white/20",
        outline: "bg-transparent border-border hover:border-border/80 focus:border-lahoma-orange focus:ring-2 focus:ring-lahoma-orange/20",
        filled: "bg-muted border-transparent hover:bg-muted/80 focus:bg-card focus:border-lahoma-orange focus:ring-2 focus:ring-lahoma-orange/20",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        default: "h-10 px-4 text-sm",
        lg: "h-12 px-4 text-base",
      },
      state: {
        default: "",
        success: "border-brand-green focus:border-brand-green focus:ring-brand-green/20",
        error: "border-[var(--brand-red-action)] focus:border-[var(--brand-red-action)] focus:ring-red-500/20",
        loading: "border-brand-blue focus:border-brand-blue focus:ring-brand-blue/20",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      state: "default",
    },
  }
)

interface InputProps extends Omit<React.ComponentProps<"input">, "size">, VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  loading?: boolean
  success?: boolean
  error?: boolean
  helperText?: string
  label?: string
  floatingLabel?: boolean
  clearable?: boolean
  onClear?: () => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  className,
  type,
  variant = "default",
  size = "default",
  state = "default",
  leftIcon,
  rightIcon,
  loading,
  success,
  error,
  helperText,
  label,
  floatingLabel = false,
  clearable = false,
  onClear,
  value,
  placeholder,
  disabled,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)
  const [internalValue, setInternalValue] = React.useState(value || "")
  
  // Determine actual state based on props
  const actualState = error ? "error" : success ? "success" : loading ? "loading" : state
  
  // Handle password visibility toggle
  const isPassword = type === "password"
  const inputType = isPassword && showPassword ? "text" : type
  
  // Handle floating label
  const hasValue = internalValue !== "" || value !== ""
  const shouldFloatLabel = floatingLabel && (isFocused || hasValue)
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value)
    props.onChange?.(e)
  }
  
  const handleClear = () => {
    setInternalValue("")
    onClear?.()
  }

  const inputElement = (
    <div className="relative">
      {/* Floating label */}
      {floatingLabel && label && (
        <motion.label
          initial={false}
          animate={{
            scale: shouldFloatLabel ? 0.85 : 1,
            y: shouldFloatLabel ? -24 : 0,
            color: shouldFloatLabel ? "var(--lahoma-orange)" : "var(--muted-foreground)",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none font-medium origin-left z-10"
        >
          {label}
        </motion.label>
      )}
      
      {/* Input container */}
      <div className={cn(
        inputVariants({ variant, size, state: actualState }),
        "relative flex items-center gap-2 group",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}>
        {/* Premium input subtle glow */}
        {variant === 'premium' && isFocused && (
          <div className="absolute inset-0 bg-leonard-yellow/10 rounded-lg opacity-100 transition-opacity duration-300 pointer-events-none" />
        )}
        
        {/* Elite input enhanced glow */}
        {variant === 'elite' && isFocused && (
          <div className="absolute inset-0 bg-gradient-to-r from-leonard-yellow/15 to-lahoma-orange/15 rounded-lg opacity-100 transition-opacity duration-300 pointer-events-none" />
        )}
        
        {/* Premium shimmer effect */}
        {variant === 'premium' && isFocused && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shimmer pointer-events-none rounded-lg" />
        )}
        
        {/* Left icon */}
        {leftIcon && (
          <div className="flex-shrink-0 text-muted-foreground group-focus-within:text-lahoma-orange transition-colors">
            {leftIcon}
          </div>
        )}
        
        {/* Input field */}
        <input
          ref={ref}
          type={inputType}
          value={value}
          placeholder={floatingLabel && label ? undefined : placeholder}
          disabled={disabled}
          className={cn(
            "flex-1 bg-transparent border-0 outline-none placeholder:text-muted-foreground",
            "focus:outline-none focus:ring-0",
            leftIcon && "pl-0",
            (rightIcon || isPassword || clearable || loading || success || error) && "pr-0"
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleInputChange}
          {...props}
        />
        
        {/* Right side icons */}
        <div className="flex items-center gap-1 flex-shrink-0">
          {/* Clear button */}
          {clearable && hasValue && !disabled && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              <X className="h-3 w-3" />
            </button>
          )}
          
          {/* State icons */}
          {loading && (
            <Loader2 className="h-4 w-4 animate-spin text-brand-blue" />
          )}
          {success && (
            <Check className="h-4 w-4 text-brand-green" />
          )}
          {error && (
            <X className="h-4 w-4 text-[var(--brand-red-action)]" />
          )}
          
          {/* Password visibility toggle */}
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="p-1 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          )}
          
          {/* Custom right icon */}
          {rightIcon && (
            <div className="text-muted-foreground group-focus-within:text-lahoma-orange transition-colors">
              {rightIcon}
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-1">
      {/* Static label */}
      {!floatingLabel && label && (
        <label className="text-sm font-medium text-card-foreground">
          {label}
        </label>
      )}
      
      {inputElement}
      
      {/* Helper text */}
      <AnimatePresence mode="wait">
        {helperText && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "text-xs font-medium",
              error ? "text-[var(--brand-red-action)]" : success ? "text-brand-green" : "text-muted-foreground"
            )}
          >
            {helperText}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
})

Input.displayName = "Input"

// Preset Input Components for gun club scenarios
interface MemberInputProps extends Omit<InputProps, "leftIcon" | "type"> {
  memberType?: "individual" | "family" | "corporate"
}

function MemberIDInput({ memberType = "individual", ...props }: MemberInputProps) {
  return (
    <Input
      type="text"
      placeholder="Enter member ID"
      label="Member ID"
      variant="premium"
      leftIcon={<span className="text-xs font-mono px-1 py-0.5 bg-leonard-yellow/20 rounded text-leonard-yellow">{memberType.charAt(0).toUpperCase()}</span>}
      {...props}
    />
  )
}

function ScoreInput({ max = 25, ...props }: Omit<InputProps, "type" | "leftIcon"> & { max?: number }) {
  return (
    <Input
      type="number"
      placeholder={`0-${max}`}
      min="0"
      max={max}
      variant="success"
      leftIcon={<span className="text-xs font-medium text-brand-green">/{max}</span>}
      {...props}
    />
  )
}

function NSCANumberInput(props: Omit<InputProps, "type" | "placeholder" | "leftIcon">) {
  return (
    <Input
      type="text"
      placeholder="123456"
      label="NSCA Number"
      variant="premium"
      leftIcon={<span className="text-xs font-bold text-lahoma-orange">NSCA</span>}
      {...props}
    />
  )
}

export { 
  Input, 
  MemberIDInput,
  ScoreInput,
  NSCANumberInput,
  type InputProps,
  type MemberInputProps
}

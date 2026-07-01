import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Lock, 
  Mail, 
  ArrowLeft, 
  Eye, 
  EyeOff, 
  Users, 
  ShoppingCart, 
  TrendingUp, 
  HeartHandshake, 
  Briefcase, 
  Sparkles, 
  Layers 
} from 'lucide-react';
import logo from '../../assets/newlogo.png';
import { SITE_CONFIG } from '../../constants';

// ─────────────────────────────────────────────────────────────────────────────
// Connected Platform Architecture — High Contrast Executive Visualization
// ─────────────────────────────────────────────────────────────────────────────

const MODULE_NODES = [
  { id: 'crm',       label: 'CRM',       angle: -90,  radius: 160, icon: Users,          color: 'bg-indigo-600',    glow: 'shadow-indigo-500/40' },
  { id: 'inventory', label: 'Inventory', angle: -30,  radius: 160, icon: ShoppingCart,   color: 'bg-emerald-600',   glow: 'shadow-emerald-500/40' },
  { id: 'finance',   label: 'Finance',   angle:  30,  radius: 160, icon: TrendingUp,     color: 'bg-blue-600',      glow: 'shadow-blue-500/40' },
  { id: 'hr',        label: 'HR',        angle:  90,  radius: 160, icon: HeartHandshake, color: 'bg-violet-600',    glow: 'shadow-violet-500/40' },
  { id: 'projects',  label: 'Projects',  angle:  150, radius: 160, icon: Briefcase,      color: 'bg-amber-600',     glow: 'shadow-amber-500/40' },
  { id: 'marketing', label: 'Marketing', angle: -150, radius: 160, icon: Sparkles,       color: 'bg-rose-600',      glow: 'shadow-rose-500/40' },
];

function toXY(angle: number, radius: number, cx: number, cy: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
}

interface PacketProps {
  pathString: string;
  delay: number;
  duration: number;
}

function DataPacket({ pathString, delay, duration }: PacketProps) {
  return (
    <motion.circle
      r={3}
      fill="#38bdf8"
      opacity={0.9}
      initial={{ offsetDistance: '0%' }}
      animate={{ offsetDistance: ['0%', '100%'] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: duration * 2 + delay * 0.3,
        ease: 'easeInOut',
      }}
      style={{
        offsetPath: `path("${pathString}")`,
        offsetRotate: '0deg',
        filter: 'drop-shadow(0 0 6px rgba(56, 189, 248, 0.8))',
      } as React.CSSProperties}
    />
  );
}

function PlatformGraph() {
  const cx = 240;
  const cy = 240;

  const nodes = MODULE_NODES.map((n) => {
    const { x, y } = toXY(n.angle, n.radius, cx, cy);
    const midX = (cx + x) / 2;
    const midY = (cy + y) / 2;
    const perpAngle = n.angle - 25;
    const qRadius = n.radius * 0.2;
    const { x: qx, y: qy } = toXY(perpAngle, qRadius, midX, midY);
    
    return {
      ...n,
      x, y,
      path: `M ${cx} ${cy} Q ${qx} ${qy} ${x} ${y}`,
      returnPath: `M ${x} ${y} Q ${qx} ${qy} ${cx} ${cy}`,
    };
  });

  return (
    <div className="relative w-full h-full select-none">
      {/* Background SVG for glowing orbit rings, connection paths, and animated data packets */}
      <svg
        viewBox="0 0 480 480"
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="bgGradDark" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#0f111a" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Faint background glow */}
        <circle cx={cx} cy={cy} r={210} fill="url(#bgGradDark)" />

        {/* Outer Orbit dashed ring */}
        <motion.circle
          cx={cx} cy={cy} r={160}
          fill="none"
          stroke="#818cf8"
          strokeWidth={1}
          strokeDasharray="6 8"
          opacity={0.3}
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          style={{ originX: `${cx}px`, originY: `${cy}px` }}
        />

        {/* Inner subtle orbit ring */}
        <circle
          cx={cx} cy={cy} r={90}
          fill="none"
          stroke="#6366f1"
          strokeWidth={0.75}
          strokeDasharray="3 6"
          opacity={0.2}
        />

        {/* Connection lines from center to each module */}
        {nodes.map((n, idx) => (
          <g key={`line-${n.id}`}>
            <path
              d={n.path}
              stroke="#818cf8"
              fill="none"
              strokeWidth={1.5}
              strokeDasharray="4 6"
              opacity={0.35}
            />
            {/* Animated data packets — one per edge, staggered */}
            <DataPacket
              pathString={n.path}
              delay={idx * 1.2}
              duration={4}
            />
            {/* Return packet */}
            <DataPacket
              pathString={n.returnPath}
              delay={idx * 1.2 + 2}
              duration={4}
            />
          </g>
        ))}
      </svg>

      {/* DOM Elements overlay for pixel-perfect high contrast cards */}
      {/* Center node — Connected Platform */}
      <div
        style={{ left: '50%', top: '50%' }}
        className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
      >
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center justify-center h-32 w-32 rounded-full bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-950 text-white shadow-[0_0_50px_rgba(99,102,241,0.6)] border-2 border-indigo-400/40 text-center p-3 cursor-pointer group hover:scale-105 transition-transform"
        >
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white/10 mb-1 ring-1 ring-white/20 group-hover:bg-white/20 transition-colors">
            <Layers className="h-4 w-4 text-indigo-200" />
          </div>
          <span className="text-[10px] font-black tracking-widest uppercase leading-tight text-white">Connected</span>
          <span className="text-[10px] font-black tracking-widest uppercase leading-tight text-indigo-200">Platform</span>
          <span className="mt-1 inline-flex items-center gap-1 text-[8px] font-bold text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live System
          </span>
        </motion.div>
      </div>

      {/* Module Nodes */}
      {nodes.map((n) => {
        const Icon = n.icon;
        return (
          <div
            key={n.id}
            style={{ left: `${(n.x / 480) * 100}%`, top: `${(n.y / 480) * 100}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <motion.div
              animate={{ y: [0, n.angle < 0 ? -4 : 4, 0] }}
              transition={{ duration: 5 + (n.radius % 3), repeat: Infinity, ease: 'easeInOut' }}
              className="flex items-center gap-2.5 rounded-xl bg-stone-900/95 border border-stone-700/80 px-3.5 py-2 shadow-[0_10px_25px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all hover:scale-110 hover:border-indigo-400 hover:bg-stone-800 cursor-pointer group ring-1 ring-white/10"
            >
              <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${n.color} text-white shadow-md ${n.glow}`}>
                <Icon className="h-4 w-4" />
              </div>
              <span className="text-xs font-extrabold tracking-wide text-white group-hover:text-indigo-300 transition-colors">
                {n.label}
              </span>
              <span className="ml-1 h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Login Form
// ─────────────────────────────────────────────────────────────────────────────

const formVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export default function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string; form?: string }>({});
  
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Autofocus email input safely without breaking password managers
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    let hasErrors = false;
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email) {
      newErrors.email = "Business Email is required.";
      hasErrors = true;
    }
    
    if (!password) {
      newErrors.password = "Password is required.";
      hasErrors = true;
    }
    
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate auth rejection
    setTimeout(() => {
      setErrors({ form: "Invalid email or password. Please try again." });
      setIsSubmitting(false);
    }, 1600);
  };

  return (
    <div className="min-h-screen flex bg-[#f8f7f4]">

      {/* ── LEFT PANEL: Login Form ────────────────────────────── */}
      <div className="relative flex w-full flex-col lg:w-[42%] bg-white border-r border-stone-200/80 shadow-[1px_0_20px_rgba(0,0,0,0.04)]">

        {/* Back to Website — top-left */}
        <div className="absolute top-6 left-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-400 hover:text-stone-700 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Website
          </Link>
        </div>

        {/* Centered form container */}
        <div className="flex flex-1 items-center justify-center px-8 sm:px-14 xl:px-16 py-20">
          <div className="w-full max-w-[340px]">

            <motion.div
              variants={formVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Logo */}
              <motion.div variants={itemVariants} className="mb-10 flex items-center gap-2.5">
                <img
                  src={logo}
                  alt={SITE_CONFIG.name}
                  className="h-8 w-auto"
                />
                <span className="text-xl font-black tracking-tight text-stone-900">
                  {SITE_CONFIG.name}
                </span>
              </motion.div>

              {/* Heading */}
              <motion.div variants={itemVariants} className="mb-8">
                <h1 className="text-[1.6rem] font-extrabold tracking-tight text-stone-900 mb-1.5">
                  Welcome back
                </h1>
                <p className="text-sm text-stone-500 font-medium">
                  Sign in to your workspace to continue.
                </p>
              </motion.div>

              {/* Form */}
              <motion.form
                variants={formVariants}
                onSubmit={handleSubmit}
                className="space-y-4"
                noValidate
              >
                {/* Form Level Error */}
                {errors.form && (
                  <motion.div variants={itemVariants} className="rounded-md bg-red-50 p-3 mb-2 border border-red-100" role="alert">
                    <p className="text-xs font-bold text-red-600 text-center">
                      {errors.form}
                    </p>
                  </motion.div>
                )}

                {/* Email */}
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-stone-600 mb-1.5 uppercase tracking-wide"
                  >
                    Business Email
                  </label>
                  <div className="relative">
                    <Mail
                      className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none transition-colors ${errors.email || errors.form ? 'text-red-400' : 'text-stone-400'}`}
                      aria-hidden="true"
                    />
                    <input
                      ref={emailRef}
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      aria-invalid={!!errors.email || !!errors.form}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      placeholder="name@company.com"
                      className={`w-full rounded-md border bg-stone-50 py-2.5 pl-9 pr-3.5 text-sm text-stone-900 placeholder-stone-400 transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                        errors.email || errors.form 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500/15' 
                          : 'border-stone-200 focus:border-indigo-500 focus:ring-indigo-500/15 hover:border-stone-300'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p id="email-error" className="mt-1.5 text-xs font-semibold text-red-500" role="alert">
                      {errors.email}
                    </p>
                  )}
                </motion.div>

                {/* Password */}
                <motion.div variants={itemVariants}>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="password"
                      className="block text-xs font-bold text-stone-600 uppercase tracking-wide"
                    >
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => alert("Please contact your system administrator to reset your password.")}
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition-colors focus:outline-none focus:underline bg-transparent border-0 p-0 cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock
                      className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none transition-colors ${errors.password || errors.form ? 'text-red-400' : 'text-stone-400'}`}
                      aria-hidden="true"
                    />
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      aria-invalid={!!errors.password || !!errors.form}
                      aria-describedby={errors.password ? "password-error" : undefined}
                      placeholder="••••••••••"
                      className={`w-full rounded-md border bg-stone-50 py-2.5 pl-9 pr-10 text-sm text-stone-900 placeholder-stone-400 transition-all focus:bg-white focus:outline-none focus:ring-2 ${
                        errors.password || errors.form 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500/15' 
                          : 'border-stone-200 focus:border-indigo-500 focus:ring-indigo-500/15 hover:border-stone-300'
                      }`}
                    />
                    <button
                      type="button"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors focus:outline-none"
                    >
                      {showPassword
                        ? <EyeOff className="h-4 w-4" />
                        : <Eye className="h-4 w-4" />
                      }
                    </button>
                  </div>
                  {errors.password && (
                    <p id="password-error" className="mt-1.5 text-xs font-semibold text-red-500" role="alert">
                      {errors.password}
                    </p>
                  )}
                </motion.div>

                {/* Remember me */}
                <motion.div variants={itemVariants} className="flex items-center pt-0.5">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-3.5 w-3.5 rounded-sm border-stone-300 text-indigo-600 focus:ring-indigo-600 focus:ring-offset-0 cursor-pointer"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 text-sm font-medium text-stone-500 cursor-pointer select-none"
                  >
                    Keep me signed in
                  </label>
                </motion.div>

                {/* Submit */}
                <motion.div variants={itemVariants} className="pt-2">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ translateY: -1, boxShadow: '0 6px 20px rgba(99,102,241,0.25)' }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.15 }}
                    className="w-full flex justify-center items-center gap-2 rounded-md bg-indigo-600 py-2.5 px-4 text-sm font-bold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Authenticating…
                      </>
                    ) : (
                      'Sign In'
                    )}
                  </motion.button>
                </motion.div>
              </motion.form>

              {/* Support footer */}
              <motion.div
                variants={itemVariants}
                className="mt-8 pt-7 border-t border-stone-100 text-center"
              >
                <p className="text-xs text-stone-400 font-medium">
                  Need help?{' '}
                  <a
                    href="mailto:support@cakiweb.com"
                    className="text-stone-600 font-bold hover:text-indigo-600 transition-colors"
                  >
                    Contact Administrator
                  </a>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL: Connected Platform Architecture ──────── */}
      <div className="hidden lg:flex lg:flex-1 flex-col items-center justify-center bg-stone-900 text-white relative overflow-hidden">

        {/* Subtle dot-grid background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #818cf8 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Faint corner gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        {/* Graph */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className="relative z-10 w-[500px] h-[500px] xl:w-[580px] xl:h-[580px] 2xl:w-[640px] 2xl:h-[640px] max-w-[90%]"
        >
          <PlatformGraph />
        </motion.div>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="relative z-10 mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-stone-800/80 border border-stone-700 px-4 py-1.5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
            <p className="text-xs font-bold text-stone-300 tracking-wider uppercase">
              Every department. One unified platform.
            </p>
          </div>
        </motion.div>
      </div>

    </div>
  );
}

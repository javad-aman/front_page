import type { ReactElement } from 'react'

interface ThumbProps {
  gradientId: string
}

function GradientDef({ gradientId }: ThumbProps) {
  return (
    <defs>
      <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" style={{ stopColor: 'var(--color-accent)' }} />
        <stop offset="100%" style={{ stopColor: 'var(--color-accent-2)' }} />
      </linearGradient>
    </defs>
  )
}

/** Bar chart + heartbeat pulse — analytics over health data. */
function FitnessIcon({ gradientId }: ThumbProps) {
  const g = `url(#${gradientId})`
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <GradientDef gradientId={gradientId} />
      <rect x="8" y="34" width="8" height="18" rx="2" fill={g} opacity="0.35" />
      <rect x="20" y="26" width="8" height="26" rx="2" fill={g} opacity="0.5" />
      <rect x="32" y="14" width="8" height="38" rx="2" fill={g} opacity="0.7" />
      <rect x="44" y="22" width="8" height="30" rx="2" fill={g} opacity="0.5" />
      <path
        d="M6 17 H15 L19 9 L25 27 L29 5 L35 23 L39 13 L58 13"
        stroke={g}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Masthead + column rules — a newsletter layout. */
function NewsletterIcon({ gradientId }: ThumbProps) {
  const g = `url(#${gradientId})`
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <GradientDef gradientId={gradientId} />
      <rect x="10" y="10" width="44" height="44" rx="3" stroke={g} strokeWidth="2.5" />
      <rect x="16" y="17" width="32" height="7" rx="1.5" fill={g} opacity="0.85" />
      <line x1="16" y1="31" x2="48" y2="31" stroke={g} strokeWidth="2" strokeLinecap="round" opacity="0.55" />
      <line x1="16" y1="38" x2="48" y2="38" stroke={g} strokeWidth="2" strokeLinecap="round" opacity="0.55" />
      <line x1="16" y1="45" x2="36" y2="45" stroke={g} strokeWidth="2" strokeLinecap="round" opacity="0.55" />
    </svg>
  )
}

/** Checklist with two checks done, one in progress — tracked prep. */
function ChecklistIcon({ gradientId }: ThumbProps) {
  const g = `url(#${gradientId})`
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <GradientDef gradientId={gradientId} />
      <rect x="9" y="11" width="13" height="13" rx="3.5" stroke={g} strokeWidth="2.3" />
      <path d="M12.5 17.5 L15 20 L19 14.5" stroke={g} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="27" y1="17.5" x2="54" y2="17.5" stroke={g} strokeWidth="2.3" strokeLinecap="round" opacity="0.55" />

      <rect x="9" y="25.5" width="13" height="13" rx="3.5" stroke={g} strokeWidth="2.3" />
      <path d="M12.5 32 L15 34.5 L19 29" stroke={g} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="27" y1="32" x2="54" y2="32" stroke={g} strokeWidth="2.3" strokeLinecap="round" opacity="0.55" />

      <rect x="9" y="40" width="13" height="13" rx="3.5" stroke={g} strokeWidth="2.3" opacity="0.45" />
      <line x1="27" y1="46.5" x2="46" y2="46.5" stroke={g} strokeWidth="2.3" strokeLinecap="round" opacity="0.35" />
    </svg>
  )
}

/** Flask with rising bubbles — small, fast experiments. */
function FlaskIcon({ gradientId }: ThumbProps) {
  const g = `url(#${gradientId})`
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <GradientDef gradientId={gradientId} />
      <path d="M26 10 H38" stroke={g} strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M28 10 V24 L16 46 A6 6 0 0 0 21.5 55 H42.5 A6 6 0 0 0 48 46 L36 24 V10"
        stroke={g}
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M20.5 42 H43.5" stroke={g} strokeWidth="2.2" opacity="0.45" />
      <circle cx="30" cy="47" r="2" fill={g} opacity="0.8" />
      <circle cx="37" cy="49" r="1.5" fill={g} opacity="0.6" />
      <circle cx="33" cy="43" r="1.3" fill={g} opacity="0.5" />
    </svg>
  )
}

/** Fallback for any project without a dedicated illustration above. */
function GenericIcon({ gradientId }: ThumbProps) {
  const g = `url(#${gradientId})`
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <GradientDef gradientId={gradientId} />
      <rect x="10" y="18" width="24" height="24" rx="5" stroke={g} strokeWidth="2.3" opacity="0.9" />
      <rect x="30" y="26" width="24" height="24" rx="5" fill={g} opacity="0.25" />
      <rect x="30" y="26" width="24" height="24" rx="5" stroke={g} strokeWidth="2.3" />
    </svg>
  )
}

const illustrations: Record<string, (props: ThumbProps) => ReactElement> = {
  'fitness-dashboard': FitnessIcon,
  'roma-tribune': NewsletterIcon,
  'hire-ready': ChecklistIcon,
  'micro-saas-experiments': FlaskIcon,
}

export function ProjectIllustration({ projectId }: { projectId: string }) {
  const Icon = illustrations[projectId] ?? GenericIcon
  return <Icon gradientId={`thumb-gradient-${projectId}`} />
}

import undpLogo from './assets/Landing-imgs/UNDP-Logo-White-Large.png'

const socialLinks = [
  {
    className: 'twitter-x',
    label: 'X (formerly Twitter)',
    icon: 'x',
    href: 'https://x.com/UNDPArabStates?lang=en',
  },
  { className: 'linkedin', label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/undp/' },
  {
    className: 'facebook',
    label: 'Facebook',
    icon: 'facebook',
    href: 'https://www.facebook.com/UNDPar/?_rdc=2&_rdr#',
  },
  { className: 'threads', label: 'Threads', icon: 'threads', href: 'https://www.threads.com/@undp' },
  {
    className: 'instagram',
    label: 'Instagram',
    icon: 'instagram',
    href: 'https://www.instagram.com/undparabic/?hl=en',
  },
  { className: 'youtube', label: 'Youtube', icon: 'youtube', href: 'https://www.youtube.com/user/undparabstates' },
]

function TwitterXIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25h6.826l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
      />
    </svg>
  )
}

function ThreadsIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M17.26 10.09c-.08-.04-.16-.08-.24-.11-.14-2.77-1.66-4.35-4.23-4.37h-.04c-1.54 0-2.82.66-3.61 1.86l1.42.98c.59-.88 1.51-1.07 2.2-1.07h.03c1.72.01 2.72.96 2.94 2.78a12.16 12.16 0 0 0-2.81-.14c-2.33.13-3.83 1.49-3.73 3.38.05.96.53 1.78 1.34 2.31.69.45 1.57.67 2.48.62 1.2-.07 2.15-.52 2.8-1.35.49-.63.8-1.44.93-2.46.7.42 1.08 1 1.29 1.55.36.95.38 2.51-.84 3.73-1.07 1.07-2.35 1.53-4.29 1.54-2.15-.02-3.77-.71-4.84-2.06-1-1.26-1.52-3.09-1.54-5.43.02-2.34.54-4.17 1.54-5.43 1.07-1.35 2.69-2.04 4.84-2.06 2.17.02 3.82.71 4.9 2.08.53.67.93 1.51 1.2 2.5l1.69-.45c-.33-1.23-.85-2.28-1.56-3.17-1.48-1.8-3.59-2.72-6.28-2.74h-.01c-2.69.02-4.8.94-6.28 2.74-1.32 1.6-2 3.86-2.02 6.72v.01c.02 2.86.7 5.12 2.02 6.72 1.48 1.8 3.59 2.72 6.28 2.74h.01c2.39-.02 4.09-.65 5.51-2.06 1.86-1.86 1.8-4.19 1.19-5.8-.44-1.16-1.24-2.1-2.78-2.89Zm-4.36 4.49c-1.01.06-2.06-.4-2.11-1.3-.04-.67.47-1.42 2.22-1.52.2-.01.4-.02.6-.02.69 0 1.34.07 1.92.2-.18 2.24-1.23 2.57-2.63 2.64Z"
      />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M6.35 8.92H2.88v11.12h3.47V8.92ZM4.62 3.4a2.01 2.01 0 1 0 0 4.02 2.01 2.01 0 0 0 0-4.02Zm15.56 10.54c0-3.2-1.7-5.26-4.42-5.26-1.54 0-2.58.84-3.02 1.64h-.05v-1.4H9.36v11.12h3.47v-5.5c0-1.45.28-2.86 2.08-2.86 1.76 0 1.78 1.66 1.78 2.95v5.41h3.49v-6.1Z"
      />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
      <text
        x="12"
        y="21.25"
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="25"
        fontWeight="700"
        textAnchor="middle"
      >
        f
      </text>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm4.2 6.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm5.2-.1a1.35 1.35 0 1 0 0-2.7 1.35 1.35 0 0 0 0 2.7Z"
      />
      <circle cx="12" cy="12" r="2.05" fill="#0577b8" />
      <circle cx="12" cy="12" r="1.9" fill="#ffffff" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 28 20">
      <rect width="28" height="20" rx="4.8" fill="currentColor" />
      <path fill="#0577b8" d="M11.25 5.7 19 10l-7.75 4.3V5.7Z" />
    </svg>
  )
}

const socialIconComponents = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  threads: ThreadsIcon,
  x: TwitterXIcon,
  youtube: YoutubeIcon,
}

function FooterSocialIcons({ className = '' }) {
  return (
    <ul className={`footer-icons ${className}`.trim()}>
      {socialLinks.map((link) => {
        const Icon = link.icon ? socialIconComponents[link.icon] : null

        return (
          <li key={link.className}>
            <a
              href={link.href}
              className={link.className}
              aria-label={link.label}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Icon ? <Icon /> : link.text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-logo-lockup">
            <a className="footer-logo-link" href="https://www.undp.org" aria-label="UNDP home">
              <img alt="UNDP Logo" src={undpLogo} />
            </a>
            <h5 tabIndex="0">
              United Nations
              <br />
              Development Programme
            </h5>
          </div>

          <FooterSocialIcons className="footer-icons-desktop" />
        </div>

        <div className="footer-bottom">
          <p tabIndex="0">&copy; United Nations Development Programme</p>

          <div className="footer-bottom-actions">
            <ul className="footer-lists">
              <li>
                <a href="https://www.undp.org/copyright-terms-use">Terms of use</a>
              </li>
            </ul>
            <FooterSocialIcons className="footer-icons-mobile" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

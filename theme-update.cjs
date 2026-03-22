const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

const themeVariables = `
  /* Layout and Spacing Variables */
  --radius-lg: clamp(16px, 2vw, 28px);
  --radius-md: clamp(12px, 1.5vw, 20px);
  --section-pad: clamp(3.5rem, 8vw, 6.5rem);
  --grid-gap: clamp(1.5rem, 4vw, 3rem);
  --card-pad: clamp(1.5rem, 3vw, 2.5rem);

  --shadow-soft: 0 10px 40px rgba(0, 0, 0, 0.08);
  --shadow-hover: 0 20px 45px rgba(0, 0, 0, 0.15);
  --shadow-deep: 0 30px 70px rgba(0, 0, 0, 0.25);

  --bg-gradient-start: #f2f7f1;
  --bg-gradient-mid: #e5f0e3;
  --bg-gradient-end: #d6e6d7;
  --page-radial-1: rgba(255, 255, 255, 0.6);
  --page-radial-2: rgba(255, 255, 255, 0.35);
  --header-bg: rgba(15, 27, 19, 0.85);
  --surface-card-bg: rgba(255, 255, 255, 0.85);
  --border-subtle: rgba(32, 59, 42, 0.08);
  --border-light: rgba(255, 255, 255, 0.1);
  --safari-grad-1: rgba(213, 226, 212, 0.4);
  --safari-grad-2: rgba(255, 255, 255, 0.6);
  --featured-grad-1: rgba(32, 59, 42, 0.08);
  --featured-grad-2: rgba(90, 160, 106, 0.12);
  --contact-grad-1: rgba(255, 255, 255, 0.96);
  --contact-grad-2: rgba(255, 255, 255, 0.86);
  --icon-bg: rgba(90, 160, 106, 0.15);
  --rooms-bg: rgba(255, 255, 255, 0.6);
  --nav-toggle-bg: rgba(255, 255, 255, 0.08);
  --nav-toggle-hover: rgba(255, 255, 255, 0.15);
}

:root[data-theme="dark"] {
  color-scheme: dark;
  --forest-900: #e8f0e6;
  --forest-800: #d5e2d4;
  --forest-700: #b0c4b6;
  --forest-500: #5aa06a;
  --sand-50: #08120c;
  --sand-100: #0c1b12;
  --sand-200: #12281a;
  --brown-900: #e8f0e6;
  --brown-700: #d5e2d4;
  --brown-500: #8aa993;
  --accent: #6db67e;
  --ink-900: #f4f7f2;
  --ink-700: #b0c4b6;
  --ink-500: #8aa993;
  --white: #111a14;
  
  --shadow-soft: 0 10px 40px rgba(0, 0, 0, 0.4);
  --shadow-hover: 0 20px 45px rgba(0, 0, 0, 0.6);
  --shadow-deep: 0 30px 70px rgba(0, 0, 0, 0.8);

  --bg-gradient-start: #08120c;
  --bg-gradient-mid: #0c1b12;
  --bg-gradient-end: #12281a;
  --page-radial-1: rgba(0, 0, 0, 0.3);
  --page-radial-2: rgba(0, 0, 0, 0.1);
  --header-bg: rgba(8, 18, 12, 0.9);
  --surface-card-bg: rgba(22, 39, 27, 0.85);
  --border-subtle: rgba(255, 255, 255, 0.05);
  --border-light: rgba(255, 255, 255, 0.05);
  --safari-grad-1: rgba(12, 27, 18, 0.8);
  --safari-grad-2: rgba(22, 39, 27, 0.8);
  --featured-grad-1: rgba(12, 27, 18, 0.6);
  --featured-grad-2: rgba(22, 39, 27, 0.6);
  --contact-grad-1: rgba(22, 39, 27, 0.96);
  --contact-grad-2: rgba(12, 27, 18, 0.86);
  --icon-bg: rgba(90, 160, 106, 0.2);
  --rooms-bg: rgba(12, 27, 18, 0.6);
  --nav-toggle-bg: rgba(255, 255, 255, 0.1);
  --nav-toggle-hover: rgba(255, 255, 255, 0.2);
`;

css = css.replace(/  \/\* Layout and Spacing Variables \*\/[\s\S]*?--shadow-deep:[^;]+;/m, themeVariables);

// Replace hardcoded backgrounds
css = css.replace(/radial-gradient\(circle at top, #f2f7f1 0%, #e5f0e3 42%, #d6e6d7 100%\)/g, 'radial-gradient(circle at top, var(--bg-gradient-start) 0%, var(--bg-gradient-mid) 42%, var(--bg-gradient-end) 100%)');
css = css.replace(/radial-gradient\(circle at 15% 18%, rgba\(255, 255, 255, 0\.6\), transparent 55%\)/g, 'radial-gradient(circle at 15% 18%, var(--page-radial-1), transparent 55%)');
css = css.replace(/radial-gradient\(circle at 85% 8%, rgba\(255, 255, 255, 0\.35\), transparent 45%\)/g, 'radial-gradient(circle at 85% 8%, var(--page-radial-2), transparent 45%)');
css = css.replace(/background: rgba\(15, 27, 19, 0\.85\)/g, 'background: var(--header-bg)');
css = css.replace(/background: rgba\(255, 255, 255, 0\.85\)/g, 'background: var(--surface-card-bg)');
css = css.replace(/rgba\(32, 59, 42, 0\.08\)/g, 'var(--border-subtle)');
css = css.replace(/rgba\(255, 255, 255, 0\.1\)/g, 'var(--border-light)');
css = css.replace(/linear-gradient\(135deg, rgba\(213, 226, 212, 0\.4\), rgba\(255, 255, 255, 0\.6\)\)/g, 'linear-gradient(135deg, var(--safari-grad-1), var(--safari-grad-2))');
css = css.replace(/linear-gradient\(135deg, rgba\(32, 59, 42, 0\.08\), rgba\(90, 160, 106, 0\.12\)\)/g, 'linear-gradient(135deg, var(--featured-grad-1), var(--featured-grad-2))');
css = css.replace(/background: rgba\(255, 255, 255, 0\.6\)/g, 'background: var(--rooms-bg)');
css = css.replace(/rgba\(90, 160, 106, 0\.15\)/g, 'var(--icon-bg)');

// More subtle hardcodes
css = css.replace(/background: rgba\(255, 255, 255, 0\.08\)/g, 'background: var(--nav-toggle-bg)');
css = css.replace(/background: rgba\(255, 255, 255, 0\.15\)/g, 'background: var(--nav-toggle-hover)');
css = css.replace(/border: 1px solid rgba\(0, 0, 0, 0\.08\)/g, 'border: 1px solid var(--border-subtle)');
css = css.replace(/border-top: 1px solid rgba\(0, 0, 0, 0\.08\)/g, 'border-top: 1px solid var(--border-subtle)');

// Fix footer styling for Dark Mode
css += `
.nav-actions-desktop {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.theme-toggle {
  background: transparent;
  border: none;
  color: var(--sand-50);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background 0.2s ease, color 0.2s ease;
}
.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
}
.mobile-nav-actions {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.mobile-theme-toggle {
  width: 100%;
  background: var(--nav-toggle-bg);
  border: 1px solid var(--border-light);
  border-radius: 999px;
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--sand-50);
}
.mobile-theme-toggle:hover {
  background: var(--nav-toggle-hover);
}
`;

fs.writeFileSync('src/index.css', css, 'utf8');
console.log('CSS updated successfully');

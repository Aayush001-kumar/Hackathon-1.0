# Technical Report — DigiSuraksha (prototype)

## Executive Summary
(One paragraph summarizing scope, what was tested, and main findings.)

## Methodology
Tools used: local Node demo, browser DevTools, curl. (If used: Burp Suite, OWASP ZAP for advanced testing.)

## Findings (table)
| ID | Vulnerability | Component | Severity | Evidence | Remediation |
|----|---------------|-----------|----------|----------|------------|
| V1 | Cleartext HTTP login | govtvault-insecure/frontend | Critical | `docs/evidence/vuln_http_post.png` | Use HTTPS/TLS; HSTS; certificate pinning |
| V2 | Hardcoded API key in JS | govtvault-insecure/frontend | High | `docs/evidence/vuln_hardcoded_key.png` | Move secrets to server or environment, don't hardcode in client |
| V3 | Plain token in localStorage | govtvault-insecure/frontend | High | `docs/evidence/vuln_localstorage.png` | Use HttpOnly secure cookies or encrypted storage with proper key management |
| ... | ... | ... | ... | ... | ... |

## Exploit steps (safe, local)
Step-by-step instructions to reproduce V1 locally (example).

## Remediations implemented
Describe what the secure app changes (HTTPS, encrypted storage, FLAG_SECURE analogs for mobile, no hardcoded keys).

## Recommendations
Practical suggestions (secure CI/CD, periodic dependency scanning, SCA, code review, threat modeling).

## Appendix
- Screenshot placeholders and additional notes.

# Demo storyboard — 2 minute demo

00:00–00:08 — Intro slide (title + one-line goal)
00:09–00:25 — Show vulnerable app (open http://localhost:5000). Narration: "Here is the vulnerable app — note it's using HTTP."
00:26–00:45 — Click login with demo creds. Switch to HTTP server terminal showing plaintext POST. Narration: "Credentials appear in cleartext — this is a critical risk."
00:46–01:05 — Show localStorage in DevTools with plain token. Narration: "Token stored in localStorage as plaintext — a thief on the device can read it."
01:06–01:25 — Switch to secure app (http://localhost:5001) and explain fixes (HTTPS, no hardcoded keys, encrypted storage).
01:26–01:45 — Show HTTPS server terminal receiving POST; show localStorage with encrypted token. Narration: "Now traffic is encrypted and storage is protected."
01:46–02:00 — Wrap up with recommendations and where to find code + report in repo.

Notes: Keep narration short and use zoom/annotate to draw attention.

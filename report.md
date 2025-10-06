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

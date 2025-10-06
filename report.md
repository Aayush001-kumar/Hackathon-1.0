# Technical Report — DigiSuraksha (Prototype)
**Team:** Team Axiom  
**Hackathon Theme:** Unveiling Vulnerabilities in Google-Approved Apps  

---

## Executive Summary
In today’s digital-first era, government and citizen service apps such as DigiLocker, CoWIN, and UMANG handle vast amounts of sensitive user data, including Aadhaar, PAN, and health information. Despite being available on Google Play and often Google-verified, such apps are still prone to serious security flaws like data leaks, insecure communication, and poor key management.

**DigiSuraksha**, developed by **Team Axiom**, demonstrates how common vulnerabilities can exist in a “government-style” web application and how they can be systematically mitigated through a **Security-First Framework**. The project includes an intentionally insecure app (`govtvault-insecure`) and a secure refactored version (`govtvault-secure`), highlighting real-world exploitation and prevention.

---

## Objectives
- Identify and document common vulnerabilities in trusted Android/web apps.  
- Demonstrate each vulnerability safely in a local environment.  
- Implement and showcase a secure refactor using best practices.  
- Educate developers on how small design changes prevent large-scale data leaks.  

---

## Methodology
We followed a simplified **OWASP Testing Framework** combined with manual testing to identify flaws.

**Tools and Techniques Used:**  
- **Browser DevTools & cURL** – to inspect network requests and responses.  
- **OWASP ZAP** – to analyze HTTP communication and detect insecure endpoints.  
- **Node.js & Express (Local Server)** – for hosting insecure and secure prototypes.  
- **Static Code Review** – to locate hardcoded credentials and weak authentication logic.

**Testing Approach:**  
1. Simulated typical user interactions (login, data upload, API call).  
2. Monitored traffic, tokens, and storage mechanisms.  
3. Attempted safe exploitation of known vulnerability patterns.  
4. Applied security countermeasures and re-tested the secure version.

---

## Findings and Vulnerability Analysis

| ID | Vulnerability | Component | Severity | Evidence | Recommended Fix |
|----|----------------|------------|-----------|-----------|------------------|
| **V1** | Cleartext HTTP login | `govtvault-insecure/frontend` | **Critical** | Network tab shows plain POST to `http://localhost:3000/login` | Enforce HTTPS/TLS with HSTS and certificate pinning |
| **V2** | Hardcoded API key in JS | `govtvault-insecure/frontend/app.js` | **High** | Code snippet reveals API key directly in client file | Move secrets to server or `.env`; never expose in client |
| **V3** | Plain JWT token in localStorage | `govtvault-insecure/frontend` | **High** | Browser storage contains unencrypted token | Use HttpOnly secure cookies or encrypted storage |
| **V4** | Insecure third-party SDK inclusion | `govtvault-insecure/vendor` | **Medium** | Outdated SDK with known CVE vulnerability | Use vetted dependencies and SCA tools |
| **V5** | Missing input validation | `govtvault-insecure/server.js` | **Medium** | Possible XSS when name field not sanitized | Use server-side validation and sanitization libraries |

*(Refer to `docs/evidence/` for screenshots and payload samples.)*

---

## Exploit Demonstration (Local, Safe)
1. Run `govtvault-insecure/` on localhost.  
2. Use browser DevTools → Network → observe login request over **HTTP**.  
3. Intercept and view credentials in plaintext.  
4. Then, run `govtvault-secure/`. The same request is encrypted using **HTTPS**.  
5. Verify that credentials and tokens are now protected in transit and storage.

*(See Figure 1: Insecure vs Secure Network Trace)*

---

## Implemented Security Measures
| Area | Insecure Behavior | Secure Implementation |
|------|--------------------|-----------------------|
| **Communication** | HTTP endpoints | HTTPS + TLS enforced |
| **Secrets** | Hardcoded in client | Server-side environment variables |
| **Storage** | LocalStorage JWTs | HttpOnly Secure Cookies |
| **Dependencies** | Outdated SDKs | Updated packages, integrity checks |
| **Data Validation** | None | Server-side sanitization + regex checks |

**Additional Measures:**  
- Added Content Security Policy (CSP).  
- Enabled `X-Frame-Options` and `X-Content-Type-Options`.  
- Configured secure headers via Helmet.js.

---

## Recommendations for Real-World Apps
- Implement **Static and Dynamic Analysis (SAST/DAST)** before deployment.  
- Integrate security checks in **CI/CD pipelines**.  
- Enforce **least privilege permissions** in mobile apps.  
- Conduct regular **dependency vulnerability scans**.  
- Adopt **threat modeling** early in design.

---

## Conclusion
DigiSuraksha demonstrates how even Google-approved or government-style apps can suffer from critical security flaws if security is treated as an afterthought. By introducing security controls at every development stage, the prototype proves that prevention is not complex — it’s about awareness and discipline.

**Team Axiom** aims to continue evolving this prototype into a lightweight scanning framework that could be integrated into developer workflows to preemptively detect insecure design patterns in citizen service applications.

---

## Appendix
<<<<<<< HEAD
- **Figure 1:** Insecure vs Secure Network Capture.  
- **Figure 2:** Evidence – Hardcoded Key in Frontend.  
- **Figure 3:** JWT Exposure in LocalStorage.  
- **Figure 4:** Secure Refactor Diagram.  
- **References:**  
  - OWASP Top 10 (2023)  
  - Trend Micro App Security Report (2022)  
  - Google Play Protect Transparency Report (2023)  

---
=======
- Screenshot placeholders and additional notes.
>>>>>>> 8ec10be7dd91cf48c5a552612d8ad025c1cef926

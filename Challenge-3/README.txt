CHALLENGE - 3

Anonity — Anonymous Confession Page
1. Overview, Purpose, Problem & Solution

Anonity is an anonymous confession platform that enables individuals to share sensitive incidents, personal experiences, or hidden truths without revealing their identity. It is designed for people who fear judgment, backlash, or social consequences. Unlike a chatroom, Anonity functions as a confession page focused on disclosure rather than interaction. By eliminating login systems and personal data collection, the platform lowers the barrier to expression and allows important stories to surface responsibly.

2. Key Features

Anonymous confession posting

Alias-based identity for minimal continuity

Real-time updates

Timestamped confessions

Basic profanity filtering

Minimal, distraction-free interface

3. Platform Intent & Use Case

Anonity is not a social media platform or discussion forum. Its purpose is to allow anonymous disclosures such as personal experiences, institutional issues, or sensitive incidents. For example, a student who discovers the real reason behind a reduction in funds can inform others without fear of identification. The platform encourages awareness and expression while discouraging judgment, debates, or popularity-based interactions.

4. Tech Stack

Frontend: HTML, CSS, JavaScript
Backend & Cloud Services: Supabase

Supabase is used for database management and real-time data handling, leveraging cloud infrastructure to ensure availability and performance. No authentication, Google sign-in, or personal data collection is implemented.

5. Alias, Profanity Filter & Timestamps

Users select an alias on first use, which is stored locally using browser localStorage and reused on the same device. A basic profanity filter blocks restricted terms to reduce harmful content. Each confession includes an automatically generated timestamp, providing chronological context while preserving anonymity.

6. Data Flow

User submits a confession →
Input is validated via JavaScript →
Data is stored in Supabase →
Confessions are retrieved and displayed in real time

7. Privacy, Ethical Concerns & Limitations

Anonity does not collect emails, logins, or personal identifiers. However, anonymity introduces risks such as impersonation, unverifiable claims, and potential misuse. Aliases are device-specific and resettable by clearing browser storage. Confessions are not verified and should not be treated as factual or legal evidence. Readers are encouraged to engage thoughtfully and responsibly.

8. Cloud & Infrastructure Note

Supabase serves as the primary backend and cloud service provider, offering secure database storage and real-time updates through managed infrastructure. While Supabase operates on cloud services, Anonity does not directly integrate user-facing Google tools or collect Google account data, ensuring the platform remains privacy-focused.

9. Future Improvements

Future enhancements may include content reporting, moderation tools, clearer ethical guidelines, and improved filtering systems. Optional categorization of confessions and post-level disclaimers could further reduce misuse while maintaining anonymity. These improvements aim to strengthen trust, safety, and responsible expression.

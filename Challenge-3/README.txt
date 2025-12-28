CHALLENGE - 3

Anonity — Anonymous Confession Chatroom

1. Overview, Purpose, Problem & Solution
Anonity is a minimal anonymous chatroom web application designed to allow users to post confessions or messages without revealing their real identity. 
The purpose of this project is to create a safe space for expression, particularly for students who may hesitate to share thoughts due to fear of judgment or exposure.
Many individuals avoid open communication in public platforms because of identity concerns.
Anonity addresses this problem by allowing users to participate anonymously using a simple alias system, without requiring login credentials, emails, or personal data.

2. Key Features:-
• Anonymous message posting
• Alias locking using browser localStorage
• Real-time message updates
• Timestamped confessions
• Basic profanity filtering
• Minimal terminal-style UI


3. Tech Stack
Frontend: HTML, CSS, JavaScript
Backend: Supabase (PostgreSQL)


4. Frontend Details
HTML handles the structure and layout of the page.
CSS is used to create a matte, minimal, terminal-inspired design.
JavaScript manages user interaction and backend communication.


5. Backend Details
Supabase is used as a cloud-hosted PostgreSQL database.
Confessions are stored and retrieved in real time.
No authentication or user accounts are implemented.


6. Alias, Profanity Filter & Timestamps
Users enter an alias during first use, which is stored in the browser’s localStorage and locked for future interactions.  
A basic word-based profanity filter blocks restricted terms, ensuring minimal moderation of content.
Each confession also displays the date and time based on the database-generated timestamp, allowing users to view messages in chronological context.


7. Data Flow
User submits confession →
JavaScript validates input →
Data is sent to Supabase →
Messages are fetched and displayed.


8. Running the Project
Clone the repository.
Open index.html in a browser.
An internet connection is required.


9. Privacy, Limitations & Future Improvements
The application does not use a login system and does not collect personal data, with aliases stored locally in the user’s browser.
Current limitations include basic moderation, inability to change aliases without clearing storage, and lack of reply or threading features.
Possible future improvements include adding user reporting, an admin moderation panel, reactions or emojis, and a more advanced profanity filtering system.

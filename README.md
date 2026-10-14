# NexHealth
URL: https://nex-health-two.vercel.app/

## AI-Powered Health Companion for Medical Document Understanding and Personalized Wellness Guidance

NexHealth is an open-source web application designed to simplify healthcare interactions by leveraging AI vision models to interpret medical documents, provide multilingual health education, and generate personalized wellness plans—all while prioritizing user privacy and data security.

## Overview / Problem Statement

Navigating healthcare systems can be overwhelming, especially when dealing with complex medical reports, prescription details, and maintaining consistent wellness routines. Patients often struggle to:
- Understand technical jargon in lab results, discharge summaries, and imaging reports
- Access reliable health information in their preferred language
- Translate medical findings into actionable lifestyle changes
- Maintain continuity of care across different providers and visits

NexHealth addresses these challenges by combining state-of-the-art vision-language models with secure data storage to create a private, intelligent health assistant that works directly with your medical documents.

## Features

- **Medical Document Analysis**: Upload PDFs or images of medical reports to get plain-language explanations of diagnoses, medications, lab values, and next steps—all powered by vision AI that understands document context
- **Multilingual Voice Input**: Speak naturally in English, Telugu, or Hindi to interact with the application, breaking language barriers in healthcare access
- **AI Health Mentor**: Ask general health questions and receive educational responses that encourage professional medical consultation
- **Personalized Wellness Plans**: Generate customized daily routines for movement, nutrition, sleep, and habits based on your profile and preferences
- **Secure Workspace Persistence**: Save your medical records, appointments, tasks, and analyses in your own Supabase account with end-to-end encryption
- **Privacy-First Design**: Your data never leaves your control—medical documents are processed locally when possible, and AI APIs only receive anonymized extracts
- **Cross-Platform Accessibility**: Responsive web interface works on desktop and mobile devices, deployable to Vercel or any Node.js-compatible host
- **Open Source & Extensible**: MIT-licensed codebase welcoming contributions from developers and healthcare professionals

## Why a Vision Model rather than OCR?

Traditional Optical Character Recognition (OCR) extracts text from documents but fails to understand medical context, often misreading handwritten notes, struggling with multi-column layouts, and ignoring visual cues like tables and icons. NexHealth employs vision-language models (VLMs) that:

1. **Interpret Documents Holistically**: VLMs analyze the entire document layout, understanding relationships between text, tables, and figures—critical for interpreting lab reports with reference ranges or medication schedules with timing instructions
2. **Handle Real-World Variations**: Unlike brittle OCR pipelines, VLMs robustly process diverse document formats, including scanned handwritten notes, faxed documents, and photos taken in varying lighting conditions
3. **Provide Contextual Explanations**: Rather than outputting raw text, the AI explains *what the document means*—flagging abnormal values cautiously, clarifying ambiguous abbreviations, and distinguishing between factual findings and physician notes
4. **Reduce Error Propagation**: By skipping the intermediate text extraction step, VLMs eliminate OCR-induced errors like misrecognized medication names or garbled dosage instructions that could lead to dangerous misunderstandings
5. **Support Multilingual Documents**: VLMs can process documents containing multiple languages or region-specific medical terminology without requiring separate language models

This approach transforms document analysis from a transcription task into a genuine medical comprehension aid, prioritizing patient understanding over character-perfect reproduction.

## Tech Stack

### Frontend
- HTML5, CSS3, Vanilla JavaScript (ES6+)
- Responsive design for mobile and tablet compatibility
- Audio API integration for voice input capabilities

### Backend
- Python 3.9+ with Flask web framework
- OpenRouter API for accessing vision and language models (Google Gemini 2.5 Flash)
- Supabase for authenticated user data storage and Row Level Security (RLS)
- Python-dotenv for environment variable management

### AI Services
- Vision-Language Model: Google Gemini 2.5 Flash via OpenRouter (for medical document analysis)
- Large Language Model: Configurable via OpenRouter (default: Google Gemini 2.5 Flash) for mentor chat and wellness planning

### Utilities
- PyMuPDF for PDF text extraction (fallback for non-scanned documents)
- Pillow and pytesseract for optional OCR preprocessing
- Werkzeug for secure file handling and upload validation

### Deployment
- Vercel (primary deployment target)
- Docker-ready for self-hosting
- Compatible with any Node.js/Python hosting platform

## Installation / Setup

### Prerequisites
- Git
- Python 3.9 or higher
- Node.js 16+ (for Vercel deployment, optional for local development)
- Supabase account (for authentication and data persistence)
- OpenRouter API key (for AI capabilities)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/madhan-x/NexHealth.git
   cd NexHealth
   ```

2. **Set up Python virtual environment**
   ```bash
   python -m venv .venv
   # Windows
   .\.venv\Scripts\activate
   # macOS/Linux
   source .venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` to add your:
   - `OPENROUTER_API_KEY` (required for AI features)
   - `SUPABASE_URL` and `SUPABASE_ANON_KEY` (for authentication and data storage)
   - Optional: `OPENROUTER_MODEL` to specify a different AI model

5. **Initialize Supabase**
   - Create a new Supabase project
   - Apply the database schema: `supabase/migrations/20261014000000_workspace_state.sql`
   - Enable email/password authentication in Supabase Auth settings

6. **Run the application**
   ```bash
   python app.py
   ```
   Visit `http://127.0.0.1:5000` in your browser

### Deployment to Vercel

1. Fork this repository to your GitHub account
2. Import the project in Vercel (ensure Root Directory is set to `.`)
3. Add environment variables in Vercel Project Settings:
   - `OPENROUTER_API_KEY`
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - Optional: `OPENROUTER_MODEL`
4. Vercel will automatically detect the Flask app and deploy using `requirements.txt`

## Usage

### Medical Document Analysis
1. Click "Upload Medical Report" or drag-and-drop a PDF/image file
2. Select your preferred language for the explanation (English, Telugu, Hindi)
3. Receive a structured plain-language summary with:
   - Document type and date identification
   - Key values requiring review (with reference ranges when available)
   - Suggested questions for your healthcare provider
   - Limitations and next steps disclaimer

### AI Health Mentor
1. Type or speak your health question in the chat interface
2. Select your preferred language
3. Receive educational information with clear disclaimers about consulting professionals

### Personalized Wellness Plan
1. Navigate to the "Wellness Plan" section
2. Fill in your profile details (age, gender, height, weight)
3. Set preferences (diet style, goals, activity levels)
4. Review suggested meals, movement activities, sleep guidance, and daily habits
5. Adjust and save your plan to your secure workspace

### Voice Input
1. Click the microphone icon in any input field
2. Grant microphone permissions when prompted
3. Speak naturally in your selected language
4. View transcribed text and submit or continue speaking

## API Endpoints

All API endpoints require authentication unless otherwise noted. Base URL: `http://localhost:5000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/health` | Health check service status |
| `GET` | `/api/auth/session` | Check authentication status |
| `POST` | `/api/auth/login` | Authenticate with email/password |
| `POST` | `/api/auth/signup` | Create new account |
| `POST` | `/api/auth/logout` | End user session |
| `POST` | `/api/medical-records` | Upload medical document (PDF/image) |
| `POST` | `/api/analyze-report` | Analyze uploaded medical document |
| `POST` | `/api/mentor` | Ask general health question |
| `POST` | `/api/personalized-plan` | Generate wellness routine |
| `GET` | `/api/workspace` | Retrieve user workspace data |
| `PUT` | `/api/workspace` | Save user workspace data |

### Example: Analyze a Medical Report
```bash
curl -X POST http://localhost:5000/api/analyze-report \
  -H "Authorization: Bearer <access_token>" \
  -F "file=@path/to/report.pdf" \
  -F "language=en"
```

## Demo / Screenshots

![NexHealth Dashboard](<img width="1365" height="630" alt="Screenshot 2026-10-14 183246" src="https://github.com/user-attachments/assets/f2ae102d-5f13-47d3-bd22-abc4070a034b" />
)

*Main dashboard showing recent analyses and wellness plan*

![Document Analysis Result](<img width="1365" height="631" alt="Screenshot 2026-10-14 183407" src="https://github.com/user-attachments/assets/ddd78c2d-9158-4671-96e9-25fca8a899d7" />)
*Plain-language explanation of an uploaded lab report*

![AI Mentor & Multilingual Interface](<img width="1364" height="632" alt="Screenshot 2026-10-14 183338" src="https://github.com/user-attachments/assets/4613ee2a-5566-49c2-9b3e-808e164db503" />
)
*Health mentor conversation in Telugu*

*Note: Screenshots directory to be added in future releases*

## Contributing

We welcome contributions from developers, healthcare professionals, and designers! Please follow these guidelines:

1. **Fork the repository** and create your branch from `main`
2. **Create a feature branch** for your changes: `git checkout -b feature/amazing-feature`
3. **Make your changes** ensuring they align with our code style
4. **Add tests** for any new functionality
5. **Ensure all tests pass** before submitting
6. **Submit a Pull Request** with a clear description of your changes

### Development Guidelines
- Follow PEP 8 for Python code
- Use descriptive commit messages
- Keep UI changes minimal and accessible
- Ensure new AI prompts include appropriate medical disclaimers
- Respect user privacy—never log or store sensitive health data unnecessarily

### Reporting Issues
Please use the [GitHub Issues](https://github.com/madhan-x/NexHealth/issues) tracker to report bugs or request features. Include:
- Detailed steps to reproduce the issue
- Expected vs. actual behavior
- Screenshots or error logs when applicable
- Browser and device information

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact / Support

- **Primary Contact**: Madhan (repository owner)
- **Issue Tracker**: [GitHub Issues](https://github.com/madhan-x/NexHealth/issues)
- **Discussions**: [GitHub Discussions](https://github.com/madhan-x/NexHealth/discussions)
- **Email**: opensource@nexhealth.example.com (placeholder)

## Acknowledgements

- **OpenRouter** for providing access to state-of-the-art AI models
- **Supabase** for the open-source backend-as-a-service platform
- **The Flask Team** for the lightweight web framework
- **Contributors** to PyMuPDF, Pillow, and pytesseract for document processing capabilities
- **Healthcare Professionals** who provided guidance on medical document interpretation and patient safety considerations
- **Open Source Community** for the countless tools and libraries that make projects like NexHealth possible

---

*Built with the goal of making healthcare information more accessible, understandable, and actionable for everyone.*

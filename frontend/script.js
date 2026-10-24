
"use strict";


const translations = {
    en: {
        language: "Language",
        overview: "Overview",
        medicalRecords: "Medical records",
        aiAnalyzer: "AI analyzer",
        dietTasks: "Diet & tasks",
        appointments: "Appointments",
        healthServices: "Health services",
        aiMentor: "AI mentor",
        privacyConsent: "Privacy & consent",
        settings: "Settings",
        workspace: "WORKSPACE",
        personalWorkspace: "Personal workspace",
        healthDashboard: "Health dashboard"
    },

    te: {
        language: "భాష",
        overview: "అవలోకనం",
        medicalRecords: "వైద్య రికార్డులు",
        aiAnalyzer: "AI విశ్లేషణ",
        dietTasks: "ఆహారం & పనులు",
        appointments: "అపాయింట్‌మెంట్లు",
        healthServices: "ఆరోగ్య సేవలు",
        aiMentor: "AI ఆరోగ్య సహాయకుడు",
        privacyConsent: "గోప్యత & సమ్మతి",
        settings: "సెట్టింగులు",
        workspace: "కార్యస్థలం",
        personalWorkspace: "వ్యక్తిగత కార్యస్థలం",
        healthDashboard: "ఆరోగ్య డాష్‌బోర్డ్"
    },

    hi: {
        language: "भाषा",
        overview: "अवलोकन",
        medicalRecords: "मेडिकल रिकॉर्ड",
        aiAnalyzer: "AI विश्लेषक",
        dietTasks: "आहार और कार्य",
        appointments: "अपॉइंटमेंट",
        healthServices: "स्वास्थ्य सेवाएँ",
        aiMentor: "AI स्वास्थ्य सहायक",
        privacyConsent: "गोपनीयता और सहमति",
        settings: "सेटिंग्स",
        workspace: "कार्यक्षेत्र",
        personalWorkspace: "व्यक्तिगत कार्यक्षेत्र",
        healthDashboard: "स्वास्थ्य डैशबोर्ड"
    }
};

// Shared interface copy, keyed by its original English text. Keeping the
// source text as the key lets the same page switch between languages safely.
const uiTextTranslations = {
    te: {
        "Welcome back": "తిరిగి స్వాగతం", "Sign in to open your personal health workspace.": "మీ వ్యక్తిగత ఆరోగ్య కార్యస్థలాన్ని తెరవడానికి సైన్ ఇన్ చేయండి.", "Email": "ఇమెయిల్", "Password": "పాస్‌వర్డ్", "Sign in": "సైన్ ఇన్", "Create an account": "ఖాతా సృష్టించండి", "Create your account": "మీ ఖాతాను సృష్టించండి", "Create an account to open your personal health workspace.": "మీ వ్యక్తిగత ఆరోగ్య కార్యస్థలాన్ని తెరవడానికి ఖాతా సృష్టించండి.", "Create account": "ఖాతా సృష్టించండి", "I already have an account": "నాకు ఇప్పటికే ఖాతా ఉంది",
        "YOUR HEALTHSPACE": "మీ ఆరోగ్య కార్యస్థలం", "HEALTH NETWORK": "ఆరోగ్య నెట్‌వర్క్", "Your health, simplified.": "మీ ఆరోగ్యం, మరింత సులభంగా.", "Understand your reports and organize your health journey.": "మీ నివేదికలను అర్థం చేసుకుని ఆరోగ్య ప్రయాణాన్ని క్రమబద్ధీకరించండి.", "Explore AI analyzer": "AI విశ్లేషణను చూడండి", "Your health. Your control.": "మీ ఆరోగ్యం. మీ నియంత్రణ.", "Privacy-first by design": "గోప్యతకు ప్రాధాన్యమిచ్చే రూపకల్పన", "Workspace": "కార్యస్థలం", "Your profile": "మీ ప్రొఫైల్", "Personal account": "వ్యక్తిగత ఖాతా", "Open navigation": "నావిగేషన్ తెరవండి", "Language": "భాష", "Search your workspace...": "మీ కార్యస్థలంలో వెతకండి...", "Search workspace": "కార్యస్థలంలో వెతకండి", "Notifications": "నోటిఫికేషన్‌లు", "Open profile menu": "ప్రొఫైల్ మెనూ తెరవండి", "Sign out": "సైన్ అవుట్", "Main navigation": "ప్రధాన నావిగేషన్", "Open the personal workspace dashboard": "వ్యక్తిగత కార్యస్థల డాష్‌బోర్డ్ తెరవండి",
        "YOUR PERSONAL HEALTHSPACE": "మీ వ్యక్తిగత ఆరోగ్య కార్యస్థలం", "Your health,": "మీ ఆరోగ్యం,", "in focus.": "మీ దృష్టిలో.", "A clearer picture of your health starts here.": "మీ ఆరోగ్యాన్ని స్పష్టంగా అర్థం చేసుకోవడం ఇక్కడ ప్రారంభమవుతుంది.", "Today": "ఈరోజు", "Analyze a report": "నివేదికను విశ్లేషించండి", "YOUR DAILY CHECK-IN": "మీ రోజువారీ స్థితి", "Small steps. Better health.": "చిన్న అడుగులు. మెరుగైన ఆరోగ్యం.", "Keep your records organized, stay on top of your routine, and make informed decisions with the right support.": "మీ రికార్డులను క్రమంగా ఉంచండి, రోజువారీ అలవాట్లను కొనసాగించండి, సరైన సహాయంతో సమాచారపూర్వక నిర్ణయాలు తీసుకోండి.", "View today's plan": "ఈరోజు ప్రణాళికను చూడండి", "Your health at a glance": "మీ ఆరోగ్యం ఒక చూపులో", "Quick access to your personal health information.": "మీ వ్యక్తిగత ఆరోగ్య సమాచారాన్ని త్వరగా చూడండి.", "View all records": "అన్ని రికార్డులను చూడండి", "YOUR LIBRARY": "మీ లైబ్రరీ", "Reports and prescriptions": "నివేదికలు మరియు ప్రిస్క్రిప్షన్‌లు", "YOUR SCHEDULE": "మీ షెడ్యూల్", "Upcoming appointments": "రాబోయే అపాయింట్‌మెంట్‌లు", "Based on your saved bookings": "మీరు సేవ్ చేసిన బుకింగ్‌ల ఆధారంగా", "YOUR ROUTINE": "మీ దినచర్య", "Tasks remaining": "మిగిలిన పనులు", "From your personal checklist": "మీ వ్యక్తిగత చెక్‌లిస్ట్ నుండి", "YOUR INSIGHTS": "మీ సమాచారం", "Reports analyzed": "విశ్లేషించిన నివేదికలు", "Your saved AI analyses": "మీరు సేవ్ చేసిన AI విశ్లేషణలు", "Today's priorities": "ఈరోజు ప్రాధాన్యతలు", "A manageable plan for your day.": "మీ రోజుకు అనువైన ప్రణాళిక.", "Daily progress": "రోజువారీ పురోగతి", "0 of 0 completed": "0లో 0 పూర్తయ్యాయి", "Your task list starts here": "మీ పనుల జాబితా ఇక్కడ ప్రారంభమవుతుంది", "Add reminders and daily health tasks to keep your routine organized.": "మీ దినచర్యను క్రమంగా ఉంచడానికి రిమైండర్‌లు మరియు రోజువారీ ఆరోగ్య పనులను జోడించండి.", "Create a task": "పని సృష్టించండి", "Open tasks": "పనులు తెరవండి", "Open diet & tasks": "ఆహారం మరియు పనులు తెరవండి", "Your next healthcare visits.": "మీ తదుపరి ఆరోగ్య సేవా సందర్శనలు.", "No appointments yet": "ఇంకా అపాయింట్‌మెంట్‌లు లేవు", "Your saved appointments will appear here.": "మీరు సేవ్ చేసిన అపాయింట్‌మెంట్‌లు ఇక్కడ కనిపిస్తాయి.", "View appointments": "అపాయింట్‌మెంట్‌లను చూడండి", "Explore appointments": "అపాయింట్‌మెంట్‌లను చూడండి", "Your health toolkit": "మీ ఆరోగ్య సాధనాలు", "Jump directly to what you need.": "మీకు కావలసినదానికి నేరుగా వెళ్లండి.", "Organize your reports": "మీ నివేదికలను క్రమబద్ధీకరించండి", "AI report analyzer": "AI నివేదిక విశ్లేషణ", "Understand your results": "మీ ఫలితాలను అర్థం చేసుకోండి", "Diet & routine": "ఆహారం మరియు దినచర్య", "Plan your daily habits": "మీ రోజువారీ అలవాట్లను ప్రణాళిక చేయండి", "Get general health guidance": "సాధారణ ఆరోగ్య మార్గదర్శకత్వం పొందండి", "NexHealth supports health organization and education. It does not replace a qualified healthcare professional.": "NexHealth ఆరోగ్య సమాచారాన్ని క్రమబద్ధీకరించడంలో మరియు అవగాహనలో సహాయపడుతుంది. ఇది అర్హత కలిగిన ఆరోగ్య నిపుణుడికి ప్రత్యామ్నాయం కాదు.",
        "DIGITAL HEALTH IDENTITY": "డిజిటల్ ఆరోగ్య గుర్తింపు", "ABDM / ABHA Readiness": "ABDM / ABHA సిద్ధత", "Explore digital health identity, records, consent, and healthcare connectivity.": "డిజిటల్ ఆరోగ్య గుర్తింపు, రికార్డులు, సమ్మతి మరియు ఆరోగ్య సేవల అనుసంధానాన్ని చూడండి.", "DEMO MODE": "డెమో మోడ్", "HEALTH IDENTITY": "ఆరోగ్య గుర్తింపు", "Mock ABHA": "డెమో ABHA", "ABHA number and address": "ABHA నంబర్ మరియు చిరునామా", "No real ABHA account is connected": "నిజమైన ABHA ఖాతా అనుసంధానించబడలేదు", "RECORDS": "రికార్డులు", "Structured health records": "క్రమబద్ధమైన ఆరోగ్య రికార్డులు", "Mapping concept, not a live exchange": "మ్యాపింగ్ నమూనా మాత్రమే; ప్రత్యక్ష మార్పిడి కాదు", "CONSENT": "సమ్మతి", "Not granted": "మంజూరు కాలేదు", "Record-sharing permission": "రికార్డు భాగస్వామ్య అనుమతి", "Demo consent only": "డెమో సమ్మతి మాత్రమే", "CONNECTIVITY": "అనుసంధానం", "Not connected": "అనుసంధానించబడలేదు", "Healthcare network": "ఆరోగ్య సేవల నెట్‌వర్క్", "Live ABDM services are not integrated": "ప్రత్యక్ష ABDM సేవలు అనుసంధానించబడలేదు", "ABHA identity": "ABHA గుర్తింపు", "Use fictional information for this demonstration.": "ఈ ప్రదర్శన కోసం కల్పిత సమాచారాన్ని ఉపయోగించండి.", "Mock ABHA number": "డెమో ABHA నంబర్", "Mock ABHA address": "డెమో ABHA చిరునామా", "Save demo identity": "డెమో గుర్తింపును సేవ్ చేయండి", "No demo identity saved.": "డెమో గుర్తింపు సేవ్ కాలేదు.", "Digital health records": "డిజిటల్ ఆరోగ్య రికార్డులు", "Lab reports": "ల్యాబ్ నివేదికలు", "Diagnostic reports and observations": "నిర్ధారణ నివేదికలు మరియు పరిశీలనలు", "Prescriptions": "ప్రిస్క్రిప్షన్‌లు", "Medication and dosage information": "మందులు మరియు మోతాదు సమాచారం", "Discharge summaries": "డిశ్చార్జ్ సారాంశాలు", "Encounter and discharge information": "సందర్శన మరియు డిశ్చార్జ్ సమాచారం", "Consent-based sharing": "సమ్మతి ఆధారిత భాగస్వామ్యం", "Grant demo consent": "డెమో సమ్మతిని మంజూరు చేయండి", "Revoke demo consent": "డెమో సమ్మతిని రద్దు చేయండి", "Connected healthcare services": "అనుసంధానిత ఆరోగ్య సేవలు", "Hospital connectivity": "ఆసుపత్రి అనుసంధానం", "Laboratory connectivity": "ప్రయోగశాల అనుసంధానం", "ABDM sandbox integration": "ABDM శాండ్‌బాక్స్ అనుసంధానం", "Pending": "పెండింగ్‌లో ఉంది",
        "YOUR HEALTH LIBRARY": "మీ ఆరోగ్య లైబ్రరీ", "One organized place for reports, prescriptions, and health history.": "నివేదికలు, ప్రిస్క్రిప్షన్‌లు మరియు ఆరోగ్య చరిత్ర కోసం ఒక క్రమబద్ధమైన స్థలం.", "Add a record": "రికార్డు జోడించండి", "Total documents": "మొత్తం పత్రాలు", "All records": "అన్ని రికార్డులు", "Imaging": "ఇమేజింగ్", "Other": "ఇతర", "Your medical library is ready": "మీ వైద్య లైబ్రరీ సిద్ధంగా ఉంది", "Add a report or prescription to begin organizing your health documents.": "మీ ఆరోగ్య పత్రాలను క్రమబద్ధీకరించడం ప్రారంభించడానికి నివేదిక లేదా ప్రిస్క్రిప్షన్ జోడించండి.", "Add your first record": "మీ మొదటి రికార్డును జోడించండి", "Private by design.": "గోప్యతతో రూపొందించబడింది.", "AI-POWERED HEALTH EDUCATION": "AI ఆధారిత ఆరోగ్య అవగాహన", "Understand your reports.": "మీ నివేదికలను అర్థం చేసుకోండి.", "Analyze a medical report": "వైద్య నివేదికను విశ్లేషించండి", "Upload a document for text extraction and educational explanation.": "వచనాన్ని వెలికితీసి అవగాహన కోసం వివరించడానికి పత్రాన్ని అప్‌లోడ్ చేయండి.", "Drop your report here": "మీ నివేదికను ఇక్కడ వదలండి", "browse files": "ఫైళ్లను ఎంచుకోండి", "Ready for review": "పరిశీలనకు సిద్ధం", "What would you like to understand?": "మీరు దేని గురించి తెలుసుకోవాలనుకుంటున్నారు?", "Plain-language report summary": "సరళమైన భాషలో నివేదిక సారాంశం", "Explain laboratory results": "ప్రయోగశాల ఫలితాలను వివరించండి", "Read prescription text": "ప్రిస్క్రిప్షన్ వచనాన్ని చదవండి", "Questions to ask my doctor": "వైద్యుడిని అడగాల్సిన ప్రశ్నలు", "Additional context": "అదనపు వివరాలు", "Optional": "ఐచ్ఛికం", "Analyze report": "నివేదికను విశ్లేషించండి", "Analysis results": "విశ్లేషణ ఫలితాలు", "Awaiting analysis": "విశ్లేషణ కోసం వేచి ఉంది", "Lab result history": "ల్యాబ్ ఫలితాల చరిత్ర", "Historical data": "చారిత్రక సమాచారం", "Your trends will appear here": "మీ ధోరణులు ఇక్కడ కనిపిస్తాయి", "What you'll get": "మీకు లభించేవి", "Important values to review": "పరిశీలించాల్సిన ముఖ్యమైన విలువలు", "Questions for your doctor": "మీ వైద్యుడి కోసం ప్రశ్నలు", "Uncertain text flagged for review": "అనిశ్చిత వచనం పరిశీలన కోసం గుర్తించబడింది", "Your health comes first": "మీ ఆరోగ్యమే ముఖ్యం", "Need help preparing?": "సిద్ధం కావడానికి సహాయం కావాలా?", "Open AI health mentor": "AI ఆరోగ్య సహాయకుడిని తెరవండి",
        "YOUR DAILY WELLNESS": "మీ రోజువారీ ఆరోగ్యం", "Build your daily rhythm.": "మీ రోజువారీ క్రమాన్ని రూపొందించండి.", "YOUR PERSONAL ROUTINE": "మీ వ్యక్తిగత దినచర్య", "Consistency over perfection.": "పరిపూర్ణత కంటే స్థిరత్వం ముఖ్యం.", "Your daily checklist": "మీ రోజువారీ చెక్‌లిస్ట్", "Track the tasks you choose to complete.": "మీరు పూర్తి చేయాలని ఎంచుకున్న పనులను ట్రాక్ చేయండి.", "Add a task": "పని జోడించండి", "Completed": "పూర్తయింది", "To do": "చేయాల్సినవి", "Create your first health task": "మీ మొదటి ఆరోగ్య పనిని సృష్టించండి", "Meal planner": "భోజన ప్రణాళిక", "No meal added": "భోజనం జోడించలేదు", "Add meal": "భోజనం జోడించండి", "Breakfast": "అల్పాహారం", "Lunch": "మధ్యాహ్న భోజనం", "Dinner": "రాత్రి భోజనం", "Personalize your plan": "మీ ప్రణాళికను వ్యక్తిగతీకరించండి", "Diet preference": "ఆహార అభిరుచి", "Choose preference": "అభిరుచిని ఎంచుకోండి", "Vegetarian": "శాకాహారం", "Vegan": "వీగన్", "Eggetarian": "గుడ్లు తినే శాకాహారం", "Non-vegetarian": "మాంసాహారం", "Food allergies or restrictions": "ఆహార అలర్జీలు లేదా పరిమితులు", "Primary wellness goal": "ప్రధాన ఆరోగ్య లక్ష్యం", "Choose a goal": "లక్ష్యాన్ని ఎంచుకోండి", "Balanced eating": "సమతుల్య ఆహారం", "Support daily energy": "రోజువారీ శక్తికి తోడ్పాటు", "Support fitness routine": "ఫిట్‌నెస్ దినచర్యకు తోడ్పాటు", "Weight management": "బరువు నిర్వహణ", "A note on nutrition": "పోషణపై గమనిక",
        "YOUR HEALTH, ON SCHEDULE": "మీ ఆరోగ్య షెడ్యూల్", "New appointment": "కొత్త అపాయింట్‌మెంట్", "Your care, organized.": "మీ ఆరోగ్య సంరక్షణ క్రమబద్ధంగా.", "Upcoming": "రాబోయేవి", "Cancelled": "రద్దు చేసినవి", "All appointments": "అన్ని అపాయింట్‌మెంట్‌లు", "0 appointments": "0 అపాయింట్‌మెంట్‌లు", "No saved appointments": "సేవ్ చేసిన అపాయింట్‌మెంట్‌లు లేవు", "Add an appointment to keep its details organized.": "వివరాలను క్రమంగా ఉంచడానికి అపాయింట్‌మెంట్ జోడించండి.", "Create appointment": "అపాయింట్‌మెంట్ సృష్టించండి", "YOUR HEALTHCARE DIRECTORY": "మీ ఆరోగ్య సేవల డైరెక్టరీ", "CARE THAT FITS YOUR NEEDS": "మీ అవసరాలకు తగిన సంరక్షణ", "Explore care options": "సంరక్షణ ఎంపికలను చూడండి", "Choose a service category to learn more.": "మరింత తెలుసుకోవడానికి సేవా వర్గాన్ని ఎంచుకోండి.", "CONSULTATIONS": "సంప్రదింపులు", "Doctor consultations": "వైద్యుల సంప్రదింపులు", "DIAGNOSTICS": "నిర్ధారణ సేవలు", "Lab tests": "ల్యాబ్ పరీక్షలు", "PHARMACY": "ఫార్మసీ", "Medicine delivery": "మందుల డెలివరీ", "AT-HOME CARE": "ఇంటి వద్ద సంరక్షణ", "Home healthcare": "గృహ ఆరోగ్య సేవలు", "Healthcare directory": "ఆరోగ్య సేవల డైరెక్టరీ", "Directory": "డైరెక్టరీ", "No provider directory connected": "సేవాదారుల డైరెక్టరీ అనుసంధానించబడలేదు", "Need emergency help?": "అత్యవసర సహాయం కావాలా?",
        "YOUR HEALTH EDUCATION COMPANION": "మీ ఆరోగ్య అవగాహన సహాయకుడు", "Meet your AI health mentor.": "మీ AI ఆరోగ్య సహాయకుడిని కలవండి.", "AI assistant": "AI సహాయకుడు", "Health education assistant": "ఆరోగ్య అవగాహన సహాయకుడు", "Explain a blood report": "రక్త పరీక్ష నివేదికను వివరించండి", "Prepare for my appointment": "నా అపాయింట్‌మెంట్‌కు సిద్ధం చేయండి", "Understand reference ranges": "రిఫరెన్స్ పరిధులను అర్థం చేసుకోండి", "Your health question": "మీ ఆరోగ్య ప్రశ్న", "Avoid sharing identifying information.": "మిమ్మల్ని గుర్తించే సమాచారాన్ని పంచుకోకండి.", "Send": "పంపండి", "How I can help": "నేను ఎలా సహాయపడగలను", "Explain health terminology": "ఆరోగ్య పదాలను వివరించండి", "Summarize general information": "సాధారణ సమాచారాన్ని సారాంశం చేయండి", "Prepare questions for your doctor": "వైద్యుడి కోసం ప్రశ్నలను సిద్ధం చేయండి", "Explain common wellness concepts": "సాధారణ ఆరోగ్య భావనలను వివరించండి", "Language preferences": "భాషా ప్రాధాన్యతలు", "Preferred language": "ప్రాధాన్య భాష", "Save language": "భాషను సేవ్ చేయండి", "When to seek care": "వైద్య సహాయం ఎప్పుడు పొందాలి",
        "YOUR DATA, YOUR DECISIONS": "మీ సమాచారం, మీ నిర్ణయాలు", "Privacy center": "గోప్యతా కేంద్రం", "Your health information deserves care.": "మీ ఆరోగ్య సమాచారానికి రక్షణ అవసరం.", "Consent preferences": "సమ్మతి ప్రాధాన్యతలు", "AI processing": "AI ప్రాసెసింగ్", "Healthcare data sharing": "ఆరోగ్య సమాచారం భాగస్వామ్యం", "Optional analytics": "ఐచ్ఛిక విశ్లేషణలు", "Your data rights": "మీ డేటా హక్కులు", "Access or export your information": "మీ సమాచారాన్ని చూడండి లేదా ఎగుమతి చేయండి", "Request export": "ఎగుమతిని అభ్యర్థించండి", "Correct your information": "మీ సమాచారాన్ని సరిచేయండి", "Review profile": "ప్రొఫైల్‌ను పరిశీలించండి", "Request account or data deletion": "ఖాతా లేదా డేటా తొలగింపును అభ్యర్థించండి", "View options": "ఎంపికలను చూడండి", "Consent history": "సమ్మతి చరిత్ర", "No consent history available": "సమ్మతి చరిత్ర అందుబాటులో లేదు", "Privacy principles": "గోప్యతా సూత్రాలు", "Purpose limitation": "ప్రయోజన పరిమితి", "Least privilege": "కనీస అనుమతులు", "Clear consent": "స్పష్టమైన సమ్మతి", "Accountability": "జవాబుదారీతనం", "Need privacy help?": "గోప్యతపై సహాయం కావాలా?", "Privacy support": "గోప్యతా సహాయం", "Save preferences": "ప్రాధాన్యతలను సేవ్ చేయండి", "Add information": "సమాచారాన్ని జోడించండి", "Enter the details below.": "క్రింది వివరాలను నమోదు చేయండి.", "Please wait...": "దయచేసి వేచి ఉండండి...", "Your personal health workspace": "మీ వ్యక్తిగత ఆరోగ్య కార్యస్థలం",
        "Search your workspace...": "మీ కార్యస్థలంలో వెతకండి...", "Find a record...": "రికార్డును కనుగొనండి...", "Search medical records": "వైద్య రికార్డులను వెతకండి", "Share relevant context or tell us which part is confusing. Avoid unnecessary personal identifiers.": "సంబంధిత వివరాలు లేదా మీకు అర్థం కాని భాగాన్ని తెలియజేయండి. అవసరం లేని వ్యక్తిగత గుర్తింపు సమాచారాన్ని ఇవ్వకండి.", "e.g. peanuts, lactose": "ఉదా: వేరుశెనగలు, లాక్టోస్", "Ask a general health question...": "సాధారణ ఆరోగ్య ప్రశ్న అడగండి...", "Close dialog": "డైలాగ్ మూసివేయండి", "Remove selected file": "ఎంచుకున్న ఫైల్‌ను తొలగించండి", "Filter medical records": "వైద్య రికార్డులను ఫిల్టర్ చేయండి", "Appointment status": "అపాయింట్‌మెంట్ స్థితి"
    },
    hi: {
        "Welcome back": "वापस स्वागत है", "Sign in to open your personal health workspace.": "अपना व्यक्तिगत स्वास्थ्य कार्यक्षेत्र खोलने के लिए साइन इन करें।", "Email": "ईमेल", "Password": "पासवर्ड", "Sign in": "साइन इन करें", "Create an account": "खाता बनाएँ", "Create your account": "अपना खाता बनाएँ", "Create an account to open your personal health workspace.": "अपना व्यक्तिगत स्वास्थ्य कार्यक्षेत्र खोलने के लिए खाता बनाएँ।", "Create account": "खाता बनाएँ", "I already have an account": "मेरा पहले से खाता है",
        "YOUR HEALTHSPACE": "आपका स्वास्थ्य कार्यक्षेत्र", "HEALTH NETWORK": "स्वास्थ्य नेटवर्क", "Your health, simplified.": "आपका स्वास्थ्य, अब आसान।", "Understand your reports and organize your health journey.": "अपनी रिपोर्ट समझें और स्वास्थ्य यात्रा को व्यवस्थित करें।", "Explore AI analyzer": "AI विश्लेषक देखें", "Your health. Your control.": "आपका स्वास्थ्य। आपका नियंत्रण।", "Privacy-first by design": "डिज़ाइन में गोपनीयता को प्राथमिकता", "Workspace": "कार्यक्षेत्र", "Your profile": "आपकी प्रोफ़ाइल", "Personal account": "व्यक्तिगत खाता", "Open navigation": "नेविगेशन खोलें", "Language": "भाषा", "Search your workspace...": "अपने कार्यक्षेत्र में खोजें...", "Search workspace": "कार्यक्षेत्र खोजें", "Notifications": "सूचनाएँ", "Open profile menu": "प्रोफ़ाइल मेनू खोलें", "Sign out": "साइन आउट करें", "Main navigation": "मुख्य नेविगेशन", "Open the personal workspace dashboard": "व्यक्तिगत कार्यक्षेत्र डैशबोर्ड खोलें",
        "YOUR PERSONAL HEALTHSPACE": "आपका व्यक्तिगत स्वास्थ्य कार्यक्षेत्र", "Your health,": "आपका स्वास्थ्य,", "in focus.": "अब आपकी नज़र में।", "A clearer picture of your health starts here.": "अपने स्वास्थ्य की स्पष्ट तस्वीर यहाँ से शुरू करें।", "Today": "आज", "Analyze a report": "रिपोर्ट का विश्लेषण करें", "YOUR DAILY CHECK-IN": "आपकी दैनिक जाँच", "Small steps. Better health.": "छोटे कदम। बेहतर स्वास्थ्य।", "Keep your records organized, stay on top of your routine, and make informed decisions with the right support.": "अपने रिकॉर्ड व्यवस्थित रखें, दिनचर्या पर ध्यान दें और सही सहायता से सोच-समझकर निर्णय लें।", "View today's plan": "आज की योजना देखें", "Your health at a glance": "एक नज़र में आपका स्वास्थ्य", "Quick access to your personal health information.": "अपनी व्यक्तिगत स्वास्थ्य जानकारी तुरंत देखें।", "View all records": "सभी रिकॉर्ड देखें", "YOUR LIBRARY": "आपकी लाइब्रेरी", "Reports and prescriptions": "रिपोर्ट और प्रिस्क्रिप्शन", "YOUR SCHEDULE": "आपका समय-सारणी", "Upcoming appointments": "आगामी अपॉइंटमेंट", "Based on your saved bookings": "आपकी सहेजी गई बुकिंग के आधार पर", "YOUR ROUTINE": "आपकी दिनचर्या", "Tasks remaining": "बाकी काम", "From your personal checklist": "आपकी व्यक्तिगत चेकलिस्ट से", "YOUR INSIGHTS": "आपकी जानकारी", "Reports analyzed": "विश्लेषित रिपोर्ट", "Your saved AI analyses": "आपके सहेजे गए AI विश्लेषण", "Today's priorities": "आज की प्राथमिकताएँ", "A manageable plan for your day.": "आपके दिन के लिए एक आसान योजना।", "Daily progress": "दैनिक प्रगति", "0 of 0 completed": "0 में से 0 पूरे", "Your task list starts here": "आपकी कामों की सूची यहाँ शुरू होती है", "Add reminders and daily health tasks to keep your routine organized.": "अपनी दिनचर्या व्यवस्थित रखने के लिए रिमाइंडर और दैनिक स्वास्थ्य कार्य जोड़ें।", "Create a task": "काम बनाएँ", "Open tasks": "काम खोलें", "Open diet & tasks": "आहार और काम खोलें", "Your next healthcare visits.": "आपकी अगली स्वास्थ्य सेवाएँ।", "No appointments yet": "अभी कोई अपॉइंटमेंट नहीं", "Your saved appointments will appear here.": "आपके सहेजे गए अपॉइंटमेंट यहाँ दिखेंगे।", "View appointments": "अपॉइंटमेंट देखें", "Explore appointments": "अपॉइंटमेंट देखें", "Your health toolkit": "आपके स्वास्थ्य साधन", "Jump directly to what you need.": "अपनी ज़रूरत की सुविधा पर सीधे जाएँ।", "Organize your reports": "अपनी रिपोर्ट व्यवस्थित करें", "AI report analyzer": "AI रिपोर्ट विश्लेषक", "Understand your results": "अपने नतीजे समझें", "Diet & routine": "आहार और दिनचर्या", "Plan your daily habits": "अपनी दैनिक आदतों की योजना बनाएँ", "Get general health guidance": "सामान्य स्वास्थ्य मार्गदर्शन पाएँ", "NexHealth supports health organization and education. It does not replace a qualified healthcare professional.": "NexHealth स्वास्थ्य जानकारी को व्यवस्थित करने और समझने में मदद करता है। यह योग्य स्वास्थ्य विशेषज्ञ का विकल्प नहीं है।",
        "DIGITAL HEALTH IDENTITY": "डिजिटल स्वास्थ्य पहचान", "ABDM / ABHA Readiness": "ABDM / ABHA तैयारी", "Explore digital health identity, records, consent, and healthcare connectivity.": "डिजिटल स्वास्थ्य पहचान, रिकॉर्ड, सहमति और स्वास्थ्य सेवा कनेक्टिविटी देखें।", "DEMO MODE": "डेमो मोड", "HEALTH IDENTITY": "स्वास्थ्य पहचान", "Mock ABHA": "डेमो ABHA", "ABHA number and address": "ABHA नंबर और पता", "No real ABHA account is connected": "कोई वास्तविक ABHA खाता कनेक्ट नहीं है", "RECORDS": "रिकॉर्ड", "Structured health records": "व्यवस्थित स्वास्थ्य रिकॉर्ड", "Mapping concept, not a live exchange": "मैपिंग का नमूना, वास्तविक आदान-प्रदान नहीं", "CONSENT": "सहमति", "Not granted": "अनुमति नहीं दी गई", "Record-sharing permission": "रिकॉर्ड साझा करने की अनुमति", "Demo consent only": "केवल डेमो सहमति", "Not connected": "कनेक्ट नहीं है", "Healthcare network": "स्वास्थ्य सेवा नेटवर्क", "Live ABDM services are not integrated": "लाइव ABDM सेवाएँ एकीकृत नहीं हैं", "ABHA identity": "ABHA पहचान", "Use fictional information for this demonstration.": "इस प्रदर्शन के लिए काल्पनिक जानकारी का उपयोग करें।", "Mock ABHA number": "डेमो ABHA नंबर", "Mock ABHA address": "डेमो ABHA पता", "Save demo identity": "डेमो पहचान सहेजें", "No demo identity saved.": "कोई डेमो पहचान सहेजी नहीं गई।", "Digital health records": "डिजिटल स्वास्थ्य रिकॉर्ड", "Lab reports": "लैब रिपोर्ट", "Diagnostic reports and observations": "जाँच रिपोर्ट और अवलोकन", "Prescriptions": "प्रिस्क्रिप्शन", "Medication and dosage information": "दवा और खुराक की जानकारी", "Discharge summaries": "डिस्चार्ज सारांश", "Encounter and discharge information": "जाँच और डिस्चार्ज की जानकारी", "Consent-based sharing": "सहमति पर आधारित साझा करना", "Grant demo consent": "डेमो सहमति दें", "Revoke demo consent": "डेमो सहमति वापस लें", "Connected healthcare services": "कनेक्टेड स्वास्थ्य सेवाएँ", "Hospital connectivity": "अस्पताल कनेक्टिविटी", "Laboratory connectivity": "प्रयोगशाला कनेक्टिविटी", "ABDM sandbox integration": "ABDM सैंडबॉक्स एकीकरण", "Pending": "बाकी",
        "YOUR HEALTH LIBRARY": "आपकी स्वास्थ्य लाइब्रेरी", "One organized place for reports, prescriptions, and health history.": "रिपोर्ट, प्रिस्क्रिप्शन और स्वास्थ्य इतिहास के लिए एक व्यवस्थित जगह।", "Add a record": "रिकॉर्ड जोड़ें", "Total documents": "कुल दस्तावेज़", "All records": "सभी रिकॉर्ड", "Imaging": "इमेजिंग", "Other": "अन्य", "Your medical library is ready": "आपकी मेडिकल लाइब्रेरी तैयार है", "Add a report or prescription to begin organizing your health documents.": "अपने स्वास्थ्य दस्तावेज़ व्यवस्थित करने के लिए रिपोर्ट या प्रिस्क्रिप्शन जोड़ें।", "Add your first record": "अपना पहला रिकॉर्ड जोड़ें", "Private by design.": "गोपनीयता को ध्यान में रखकर बनाया गया।", "AI-POWERED HEALTH EDUCATION": "AI आधारित स्वास्थ्य जानकारी", "Understand your reports.": "अपनी रिपोर्ट समझें।", "Analyze a medical report": "मेडिकल रिपोर्ट का विश्लेषण करें", "Upload a document for text extraction and educational explanation.": "टेक्स्ट निकालने और जानकारी पाने के लिए दस्तावेज़ अपलोड करें।", "Drop your report here": "अपनी रिपोर्ट यहाँ छोड़ें", "browse files": "फ़ाइलें चुनें", "Ready for review": "समीक्षा के लिए तैयार", "What would you like to understand?": "आप क्या समझना चाहेंगे?", "Plain-language report summary": "सरल भाषा में रिपोर्ट सारांश", "Explain laboratory results": "लैब के नतीजे समझाएँ", "Read prescription text": "प्रिस्क्रिप्शन का टेक्स्ट पढ़ें", "Questions to ask my doctor": "डॉक्टर से पूछने के सवाल", "Additional context": "अतिरिक्त जानकारी", "Optional": "वैकल्पिक", "Analyze report": "रिपोर्ट का विश्लेषण करें", "Analysis results": "विश्लेषण के नतीजे", "Awaiting analysis": "विश्लेषण की प्रतीक्षा", "Lab result history": "लैब नतीजों का इतिहास", "Historical data": "पिछला डेटा", "Your trends will appear here": "आपके रुझान यहाँ दिखेंगे", "What you'll get": "आपको क्या मिलेगा", "Important values to review": "समीक्षा के लिए महत्वपूर्ण मान", "Questions for your doctor": "डॉक्टर के लिए सवाल", "Uncertain text flagged for review": "अनिश्चित टेक्स्ट समीक्षा के लिए चिह्नित", "Your health comes first": "आपका स्वास्थ्य सबसे पहले", "Need help preparing?": "तैयारी में मदद चाहिए?", "Open AI health mentor": "AI स्वास्थ्य सलाहकार खोलें",
        "YOUR DAILY WELLNESS": "आपका दैनिक स्वास्थ्य", "Build your daily rhythm.": "अपनी दैनिक दिनचर्या बनाएँ।", "YOUR PERSONAL ROUTINE": "आपकी व्यक्तिगत दिनचर्या", "Consistency over perfection.": "पूर्णता से बेहतर निरंतरता।", "Your daily checklist": "आपकी दैनिक चेकलिस्ट", "Track the tasks you choose to complete.": "अपने चुने हुए कामों को ट्रैक करें।", "Add a task": "काम जोड़ें", "Completed": "पूरा हुआ", "To do": "करना है", "Create your first health task": "अपना पहला स्वास्थ्य कार्य बनाएँ", "Meal planner": "भोजन योजना", "No meal added": "कोई भोजन नहीं जोड़ा", "Add meal": "भोजन जोड़ें", "Breakfast": "नाश्ता", "Lunch": "दोपहर का भोजन", "Dinner": "रात का खाना", "Personalize your plan": "अपनी योजना को व्यक्तिगत बनाएँ", "Diet preference": "आहार पसंद", "Choose preference": "पसंद चुनें", "Vegetarian": "शाकाहारी", "Vegan": "वीगन", "Eggetarian": "अंडा खाने वाले शाकाहारी", "Non-vegetarian": "मांसाहारी", "Food allergies or restrictions": "खाने की एलर्जी या पाबंदियाँ", "Primary wellness goal": "मुख्य स्वास्थ्य लक्ष्य", "Choose a goal": "लक्ष्य चुनें", "Balanced eating": "संतुलित आहार", "Support daily energy": "दैनिक ऊर्जा में मदद", "Support fitness routine": "फिटनेस दिनचर्या में मदद", "Weight management": "वज़न प्रबंधन", "A note on nutrition": "पोषण पर ध्यान दें",
        "YOUR HEALTH, ON SCHEDULE": "आपका स्वास्थ्य, समय पर", "New appointment": "नया अपॉइंटमेंट", "Your care, organized.": "आपकी देखभाल, व्यवस्थित।", "Upcoming": "आगामी", "Cancelled": "रद्द", "All appointments": "सभी अपॉइंटमेंट", "0 appointments": "0 अपॉइंटमेंट", "No saved appointments": "कोई अपॉइंटमेंट सहेजा नहीं", "Add an appointment to keep its details organized.": "जानकारी व्यवस्थित रखने के लिए अपॉइंटमेंट जोड़ें।", "Create appointment": "अपॉइंटमेंट बनाएँ", "YOUR HEALTHCARE DIRECTORY": "आपकी स्वास्थ्य सेवा निर्देशिका", "CARE THAT FITS YOUR NEEDS": "आपकी ज़रूरत के अनुसार देखभाल", "Explore care options": "देखभाल के विकल्प देखें", "Choose a service category to learn more.": "और जानने के लिए सेवा श्रेणी चुनें।", "CONSULTATIONS": "परामर्श", "Doctor consultations": "डॉक्टर से परामर्श", "DIAGNOSTICS": "जाँच सेवाएँ", "Lab tests": "लैब जाँच", "PHARMACY": "फ़ार्मेसी", "Medicine delivery": "दवा डिलीवरी", "AT-HOME CARE": "घर पर देखभाल", "Home healthcare": "घरेलू स्वास्थ्य सेवा", "Healthcare directory": "स्वास्थ्य सेवा निर्देशिका", "Directory": "निर्देशिका", "No provider directory connected": "सेवा प्रदाता निर्देशिका कनेक्ट नहीं है", "Need emergency help?": "आपातकालीन मदद चाहिए?",
        "YOUR HEALTH EDUCATION COMPANION": "आपका स्वास्थ्य जानकारी साथी", "Meet your AI health mentor.": "अपने AI स्वास्थ्य सलाहकार से मिलें।", "AI assistant": "AI सहायक", "Health education assistant": "स्वास्थ्य जानकारी सहायक", "Explain a blood report": "ब्लड रिपोर्ट समझाएँ", "Prepare for my appointment": "मेरे अपॉइंटमेंट की तैयारी करें", "Understand reference ranges": "रेफ़रेंस रेंज समझें", "Your health question": "आपका स्वास्थ्य सवाल", "Avoid sharing identifying information.": "आपकी पहचान बताने वाली जानकारी साझा न करें।", "Send": "भेजें", "How I can help": "मैं कैसे मदद कर सकता हूँ", "Explain health terminology": "स्वास्थ्य शब्द समझाएँ", "Summarize general information": "सामान्य जानकारी का सार दें", "Prepare questions for your doctor": "डॉक्टर के लिए सवाल तैयार करें", "Explain common wellness concepts": "आम स्वास्थ्य अवधारणाएँ समझाएँ", "Language preferences": "भाषा की प्राथमिकताएँ", "Preferred language": "पसंदीदा भाषा", "Save language": "भाषा सहेजें", "When to seek care": "चिकित्सकीय मदद कब लें",
        "YOUR DATA, YOUR DECISIONS": "आपका डेटा, आपके निर्णय", "Privacy center": "गोपनीयता केंद्र", "Your health information deserves care.": "आपकी स्वास्थ्य जानकारी की सुरक्षा ज़रूरी है।", "Consent preferences": "सहमति प्राथमिकताएँ", "AI processing": "AI प्रोसेसिंग", "Healthcare data sharing": "स्वास्थ्य डेटा साझा करना", "Optional analytics": "वैकल्पिक विश्लेषण", "Your data rights": "आपके डेटा अधिकार", "Access or export your information": "अपनी जानकारी देखें या निर्यात करें", "Request export": "निर्यात का अनुरोध करें", "Correct your information": "अपनी जानकारी सुधारें", "Review profile": "प्रोफ़ाइल देखें", "Request account or data deletion": "खाता या डेटा हटाने का अनुरोध करें", "View options": "विकल्प देखें", "Consent history": "सहमति इतिहास", "No consent history available": "सहमति इतिहास उपलब्ध नहीं", "Privacy principles": "गोपनीयता के सिद्धांत", "Purpose limitation": "उद्देश्य की सीमा", "Least privilege": "न्यूनतम अनुमति", "Clear consent": "स्पष्ट सहमति", "Accountability": "जवाबदेही", "Need privacy help?": "गोपनीयता में मदद चाहिए?", "Privacy support": "गोपनीयता सहायता", "Save preferences": "प्राथमिकताएँ सहेजें", "Add information": "जानकारी जोड़ें", "Enter the details below.": "नीचे विवरण दर्ज करें।", "Please wait...": "कृपया प्रतीक्षा करें...", "Your personal health workspace": "आपका व्यक्तिगत स्वास्थ्य कार्यक्षेत्र",
        "Find a record...": "रिकॉर्ड खोजें...", "Search medical records": "मेडिकल रिकॉर्ड खोजें", "Share relevant context or tell us which part is confusing. Avoid unnecessary personal identifiers.": "संबंधित जानकारी दें या बताएँ कि कौन-सा भाग समझ नहीं आ रहा। अनावश्यक व्यक्तिगत पहचान जानकारी न दें।", "e.g. peanuts, lactose": "जैसे: मूँगफली, लैक्टोज़", "Ask a general health question...": "सामान्य स्वास्थ्य सवाल पूछें...", "Close dialog": "डायलॉग बंद करें", "Remove selected file": "चुनी हुई फ़ाइल हटाएँ", "Filter medical records": "मेडिकल रिकॉर्ड फ़िल्टर करें", "Appointment status": "अपॉइंटमेंट स्थिति"
    }
};

Object.assign(uiTextTranslations.te, {
    "Personalized plan": "వ్యక్తిగత ప్రణాళిక", "Analyzing your profile and routine…": "మీ ప్రొఫైల్ మరియు దినచర్యను విశ్లేషిస్తోంది…", "Your daily plan": "మీ రోజువారీ ప్రణాళిక", "Try again": "మళ్లీ ప్రయత్నించండి", "Your saved profile and routine details are sent to the AI service only when you request a plan.": "మీరు ప్రణాళికను కోరినప్పుడు మాత్రమే మీ సేవ్ చేసిన ప్రొఫైల్ మరియు దినచర్య వివరాలు AI సేవకు పంపబడతాయి.", "Average daily steps (optional)": "రోజువారీ సగటు అడుగులు (ఐచ్ఛికం)", "Usual sleep per night (hours, optional)": "సాధారణంగా రాత్రి నిద్ర (గంటలు, ఐచ్ఛికం)", "Could not create your plan.": "మీ ప్రణాళికను రూపొందించలేకపోయాం."
});

Object.assign(uiTextTranslations.hi, {
    "Personalized plan": "व्यक्तिगत योजना", "Analyzing your profile and routine…": "आपकी प्रोफ़ाइल और दिनचर्या का विश्लेषण हो रहा है…", "Your daily plan": "आपकी दैनिक योजना", "Try again": "फिर कोशिश करें", "Your saved profile and routine details are sent to the AI service only when you request a plan.": "आपकी योजना का अनुरोध करने पर ही आपकी सहेजी गई प्रोफ़ाइल और दिनचर्या की जानकारी AI सेवा को भेजी जाती है।", "Average daily steps (optional)": "औसत दैनिक कदम (वैकल्पिक)", "Usual sleep per night (hours, optional)": "आमतौर पर हर रात नींद (घंटे, वैकल्पिक)", "Could not create your plan.": "आपकी योजना नहीं बन सकी।"
});

Object.assign(uiTextTranslations.te, {
    "Settings": "సెట్టింగులు", "Manage your account and app preferences.": "మీ ఖాతా మరియు యాప్ ప్రాధాన్యతలను నిర్వహించండి.", "Account": "ఖాతా", "Update the health details used across your workspace.": "మీ కార్యస్థలం అంతటా ఉపయోగించే ఆరోగ్య వివరాలను నవీకరించండి.", "Edit health profile": "ఆరోగ్య ప్రొఫైల్‌ను మార్చండి", "Review age, health profile, and personal details.": "వయస్సు, ఆరోగ్య ప్రొఫైల్ మరియు వ్యక్తిగత వివరాలను పరిశీలించండి.", "Choose the language used throughout NexHealth.": "NexHealth అంతటా ఉపయోగించే భాషను ఎంచుకోండి.", "Privacy & consent": "గోప్యత & సమ్మతి", "Review privacy and consent options.": "గోప్యత మరియు సమ్మతి ఎంపికలను పరిశీలించండి.", "Open privacy settings": "గోప్యత సెట్టింగ్‌లను తెరవండి", "Review consent and data rights.": "సమ్మతి మరియు డేటా హక్కులను పరిశీలించండి.", "Your data": "మీ సమాచారం", "Export a backup or remove data saved in this browser.": "బ్యాకప్ ఎగుమతి చేయండి లేదా ఈ బ్రౌజర్‌లో సేవ్ చేసిన డేటాను తొలగించండి.", "Export your data": "మీ సమాచారాన్ని ఎగుమతి చేయండి", "Delete data from this browser": "ఈ బ్రౌజర్‌లోని సమాచారాన్ని తొలగించండి", "Help & FAQ suggestions": "సహాయం మరియు FAQ సూచనలు", "Choose a question to ask the AI health mentor.": "AI ఆరోగ్య సహాయకుడిని అడగడానికి ప్రశ్నను ఎంచుకోండి.", "How do I analyze a medical report?": "వైద్య నివేదికను ఎలా విశ్లేషించాలి?", "How does my personalized plan work?": "నా వ్యక్తిగత ప్రణాళిక ఎలా పనిచేస్తుంది?", "Are my records shared with ABDM?": "నా రికార్డులు ABDMతో పంచుకుంటారా?", "How do I prepare for an appointment?": "అపాయింట్‌మెంట్‌కు ఎలా సిద్ధం కావాలి?", "Sign out of NexHealth": "NexHealth నుండి సైన్ అవుట్", "Sign out": "సైన్ అవుట్", "End your current session on this device.": "ఈ పరికరంలో మీ ప్రస్తుత సెషన్‌ను ముగించండి."
});

Object.assign(uiTextTranslations.hi, {
    "Settings": "सेटिंग्स", "Manage your account and app preferences.": "अपना खाता और ऐप प्राथमिकताएँ प्रबंधित करें।", "Account": "खाता", "Update the health details used across your workspace.": "अपने कार्यक्षेत्र में उपयोग होने वाले स्वास्थ्य विवरण अपडेट करें।", "Edit health profile": "स्वास्थ्य प्रोफ़ाइल बदलें", "Review age, health profile, and personal details.": "आयु, स्वास्थ्य प्रोफ़ाइल और व्यक्तिगत विवरण देखें।", "Choose the language used throughout NexHealth.": "NexHealth में इस्तेमाल होने वाली भाषा चुनें।", "Privacy & consent": "गोपनीयता और सहमति", "Review privacy and consent options.": "गोपनीयता और सहमति विकल्प देखें।", "Open privacy settings": "गोपनीयता सेटिंग्स खोलें", "Review consent and data rights.": "सहमति और डेटा अधिकार देखें।", "Your data": "आपका डेटा", "Export a backup or remove data saved in this browser.": "बैकअप निर्यात करें या इस ब्राउज़र में सहेजा डेटा हटाएँ।", "Export your data": "अपना डेटा निर्यात करें", "Delete data from this browser": "इस ब्राउज़र से डेटा हटाएँ", "Help & FAQ suggestions": "सहायता और FAQ सुझाव", "Choose a question to ask the AI health mentor.": "AI स्वास्थ्य सलाहकार से पूछने के लिए सवाल चुनें।", "How do I analyze a medical report?": "मेडिकल रिपोर्ट का विश्लेषण कैसे करूँ?", "How does my personalized plan work?": "मेरी व्यक्तिगत योजना कैसे काम करती है?", "Are my records shared with ABDM?": "क्या मेरे रिकॉर्ड ABDM के साथ साझा होते हैं?", "How do I prepare for an appointment?": "अपॉइंटमेंट की तैयारी कैसे करूँ?", "Sign out of NexHealth": "NexHealth से साइन आउट करें", "Sign out": "साइन आउट", "End your current session on this device.": "इस डिवाइस पर अपना वर्तमान सत्र समाप्त करें।"
});

Object.assign(uiTextTranslations.te, {
    "There's no information. Please fill your complete information for the personalized plan.": "సమాచారం లేదు. వ్యక్తిగత ప్రణాళిక కోసం మీ పూర్తి వివరాలను నమోదు చేయండి.", "Average daily steps": "రోజువారీ సగటు అడుగులు", "Usual sleep per night (hours)": "సాధారణంగా రాత్రి నిద్ర (గంటలు)", "Movement": "కదలిక", "Meals": "భోజనాలు", "Sleep": "నిద్ర", "Daily habits": "రోజువారీ అలవాట్లు", "Daily step target": "రోజువారీ అడుగుల లక్ష్యం", "Sleep target": "నిద్ర లక్ష్యం", "Bedtime routine": "నిద్రకు ముందు దినచర్య", "Could not create a structured plan. Please try again.": "క్రమబద్ధమైన ప్రణాళికను రూపొందించలేకపోయాం. మళ్లీ ప్రయత్నించండి."
});

Object.assign(uiTextTranslations.hi, {
    "There's no information. Please fill your complete information for the personalized plan.": "जानकारी उपलब्ध नहीं है। व्यक्तिगत योजना के लिए अपनी पूरी जानकारी भरें।", "Average daily steps": "औसत दैनिक कदम", "Usual sleep per night (hours)": "आमतौर पर हर रात नींद (घंटे)", "Movement": "गतिविधि", "Meals": "भोजन", "Sleep": "नींद", "Daily habits": "दैनिक आदतें", "Daily step target": "दैनिक कदम लक्ष्य", "Sleep target": "नींद का लक्ष्य", "Bedtime routine": "सोने से पहले की दिनचर्या", "Could not create a structured plan. Please try again.": "व्यवस्थित योजना नहीं बन सकी। फिर कोशिश करें।"
});

Object.assign(uiTextTranslations.te, {
    "Record categories that can be represented in a FHIR-style model.": "FHIR నమూనాలో చూపగల రికార్డు వర్గాలు.",
    "These are record categories for the demo. No records are being transmitted to an ABDM network.": "ఇవి డెమో కోసం రికార్డు వర్గాలు మాత్రమే. ABDM నెట్‌వర్క్‌కు ఎలాంటి రికార్డులు పంపబడవు.",
    "Demonstrate how a patient might control record-sharing permission.": "రోగి రికార్డు భాగస్వామ్య అనుమతిని ఎలా నియంత్రించవచ్చో చూపిస్తుంది.",
    "Demo sharing is currently disabled.": "డెమో భాగస్వామ్యం ప్రస్తుతం నిలిపివేయబడింది.",
    "These controls change only the local demo state. They do not grant or revoke real ABDM consent.": "ఈ నియంత్రణలు స్థానిక డెమో స్థితిని మాత్రమే మారుస్తాయి. ఇవి నిజమైన ABDM సమ్మతిని మంజూరు చేయవు లేదా రద్దు చేయవు.",
    "Readiness checklist for future integration.": "భవిష్యత్ అనుసంధానం కోసం సిద్ధత జాబితా.", "Not integrated": "అనుసంధానం కాలేదు", "FHIR resource mapping": "FHIR వనరుల మ్యాపింగ్", "Design stage": "రూపకల్పన దశ",
    "Document access must be protected by authenticated ownership policies and private storage.": "పత్రాల ప్రాప్యతను ధృవీకరించిన యాజమాన్య విధానాలు మరియు ప్రైవేట్ నిల్వతో రక్షించాలి.", "Turn medical documents into clearer information you can discuss with your doctor.": "వైద్య పత్రాలను మీ వైద్యుడితో చర్చించగల స్పష్టమైన సమాచారంగా మార్చండి.", "AI workspace": "AI కార్యస్థలం", "STEP 01": "దశ 01", "PDF or image · Maximum 10 MB": "PDF లేదా చిత్రం · గరిష్ఠం 10 MB",
    "Text extraction and AI analysis require a configured, secure backend. Uploaded medical documents are sensitive personal information.": "వచన వెలికితీత మరియు AI విశ్లేషణకు సురక్షిత బ్యాకెండ్ అవసరం. అప్‌లోడ్ చేసిన వైద్య పత్రాలు సున్నితమైన వ్యక్తిగత సమాచారం.", "Educational information for discussion with a healthcare professional.": "ఆరోగ్య నిపుణుడితో చర్చించడానికి అవగాహన సమాచారం.", "Review extracted biomarkers over time when results are available.": "ఫలితాలు అందుబాటులో ఉన్నప్పుడు వెలికితీసిన బయోమార్కర్లను కాలక్రమంలో పరిశీలించండి.", "Save verified lab values with dates and units to compare results over time.": "ఫలితాలను పోల్చడానికి ధృవీకరించిన ల్యాబ్ విలువలను తేదీ మరియు యూనిట్‌తో సేవ్ చేయండి.", "Plain-language explanations": "సరళమైన భాషలో వివరణలు", "AI may misread medical terms, units, and values. Verify extracted information against the original document.": "AI వైద్య పదాలు, యూనిట్లు మరియు విలువలను తప్పుగా చదవవచ్చు. వెలికితీసిన సమాచారాన్ని అసలు పత్రంతో సరిపోల్చండి.", "Do not use AI output as a diagnosis or as the sole basis for treatment decisions.": "AI ఫలితాన్ని నిర్ధారణగా లేదా చికిత్స నిర్ణయానికి ఏకైక ఆధారంగా ఉపయోగించవద్దు.", "Build a list of questions to discuss with your healthcare professional.": "మీ ఆరోగ్య నిపుణుడితో చర్చించడానికి ప్రశ్నల జాబితాను రూపొందించండి.",
    "Keep your meals, habits, and health reminders in one manageable plan.": "మీ భోజనం, అలవాట్లు మరియు ఆరోగ్య రిమైండర్‌లను ఒక సులభమైన ప్రణాళికలో ఉంచండి.", "Build a routine around your preferences, schedule, and goals.": "మీ అభిరుచులు, షెడ్యూల్ మరియు లక్ష్యాలకు తగిన దినచర్యను రూపొందించండి.", "0 tasks": "0 పనులు", "All": "అన్నీ", "Add a reminder for a habit, meal, activity, or appointment preparation.": "అలవాటు, భోజనం, కార్యకలాపం లేదా అపాయింట్‌మెంట్ సిద్ధత కోసం రిమైండర్ జోడించండి.", "Organize meals around your food preferences.": "మీ ఆహార అభిరుచులకు అనుగుణంగా భోజనాన్ని క్రమబద్ధీకరించండి.", "Help tailor your routine.": "మీ దినచర్యను అనుకూలీకరించడంలో సహాయం పొందండి.", "Nutrition suggestions are general education. Medical conditions, allergies, pregnancy, and prescribed diets may require advice from a qualified professional.": "పోషకాహార సూచనలు సాధారణ అవగాహన కోసం మాత్రమే. వైద్య పరిస్థితులు, అలర్జీలు, గర్భధారణ లేదా సూచించిన ఆహార నియమాల కోసం అర్హత కలిగిన నిపుణుడి సలహా అవసరం కావచ్చు.",
    "Organize your consultations, lab visits, and healthcare follow-ups.": "మీ సంప్రదింపులు, ల్యాబ్ సందర్శనలు మరియు తదుపరి ఆరోగ్య తనిఖీలను క్రమబద్ధీకరించండి.", "Keep appointment details in one place so important visits are easier to manage.": "ముఖ్యమైన సందర్శనలను సులభంగా నిర్వహించడానికి అపాయింట్‌మెంట్ వివరాలను ఒకేచోట ఉంచండి.", "Your saved consultation and lab visit details.": "మీరు సేవ్ చేసిన సంప్రదింపు మరియు ల్యాబ్ సందర్శన వివరాలు.", "Creating an entry here does not contact a clinic or guarantee a booking. Live availability and confirmation require a connected booking service.": "ఇక్కడ నమోదు చేయడం వల్ల క్లినిక్‌ను సంప్రదించదు లేదా బుకింగ్‌ను నిర్ధారించదు. ప్రత్యక్ష లభ్యత మరియు నిర్ధారణకు అనుసంధానిత బుకింగ్ సేవ అవసరం.",
    "Explore the types of care and support you may want to access.": "మీరు పొందాలనుకునే సంరక్షణ మరియు సహాయ రకాలను చూడండి.", "The right support starts with knowing your options.": "మీ ఎంపికలను తెలుసుకోవడంతో సరైన సహాయం ప్రారంభమవుతుంది.", "Discover care categories and organize the next step in your healthcare journey.": "సంరక్షణ వర్గాలను తెలుసుకుని మీ ఆరోగ్య ప్రయాణంలోని తదుపరి అడుగును క్రమబద్ధీకరించండి.", "Explore options": "ఎంపికలను చూడండి", "Learn about laboratory testing and sample collection services.": "ల్యాబ్ పరీక్షలు మరియు నమూనా సేకరణ సేవల గురించి తెలుసుకోండి.", "Review the steps involved in using a verified pharmacy service.": "ధృవీకరించిన ఫార్మసీ సేవను ఉపయోగించే దశలను తెలుసుకోండి.", "Explore home sample collection and other at-home care options.": "ఇంటి వద్ద నమూనా సేకరణ మరియు ఇతర గృహ సంరక్షణ ఎంపికలను చూడండి.", "Verified providers will appear when a directory source is connected.": "డైరెక్టరీ మూలం అనుసంధానించినప్పుడు ధృవీకరించిన సేవాదారులు కనిపిస్తారు.", "Live providers, prices, service areas, and availability must be verified through a real service provider integration.": "ప్రత్యక్ష సేవాదారులు, ధరలు, సేవా ప్రాంతాలు మరియు లభ్యతను నిజమైన సేవా అనుసంధానం ద్వారా ధృవీకరించాలి.", "For a medical emergency, contact your local emergency services immediately. Do not wait for an online booking or AI response.": "వైద్య అత్యవసర పరిస్థితిలో వెంటనే స్థానిక అత్యవసర సేవలను సంప్రదించండి. ఆన్‌లైన్ బుకింగ్ లేదా AI సమాధానం కోసం వేచి ఉండకండి.",
    "Ask general health questions, understand common terms, and prepare for conversations with a professional.": "సాధారణ ఆరోగ్య ప్రశ్నలు అడగండి, సాధారణ పదాలను అర్థం చేసుకోండి మరియు నిపుణుడితో చర్చకు సిద్ధం అవండి.", "NexHealth Mentor": "NexHealth ఆరోగ్య సహాయకుడు", "Welcome! I can help explain general health information, clarify medical terminology, or help you prepare questions for a healthcare professional.": "స్వాగతం! సాధారణ ఆరోగ్య సమాచారాన్ని వివరించడంలో, వైద్య పదాలను అర్థం చేసుకోవడంలో లేదా ఆరోగ్య నిపుణుడి కోసం ప్రశ్నలను సిద్ధం చేయడంలో నేను సహాయపడగలను.", "I cannot diagnose conditions, prescribe medication, or replace professional medical advice.": "నేను వ్యాధులను నిర్ధారించలేను, మందులు సూచించలేను లేదా వైద్య నిపుణుడి సలహాకు ప్రత్యామ్నాయం కాలేను.", "AI-generated information can be inaccurate. Seek qualified medical care for personal medical concerns and urgent symptoms.": "AI రూపొందించిన సమాచారం తప్పుగా ఉండవచ్చు. వ్యక్తిగత ఆరోగ్య సమస్యలు లేదా అత్యవసర లక్షణాల కోసం అర్హత కలిగిన వైద్య సహాయం పొందండి.", "Choose the language you prefer for future conversations.": "తదుపరి సంభాషణల కోసం మీకు నచ్చిన భాషను ఎంచుకోండి.", "Severe or rapidly worsening symptoms require timely professional assessment. For emergencies, contact local emergency services.": "తీవ్రమైన లేదా వేగంగా అధ్వాన్నమవుతున్న లక్షణాలకు వెంటనే నిపుణుడి అంచనా అవసరం. అత్యవసర పరిస్థితిలో స్థానిక అత్యవసర సేవలను సంప్రదించండి.",
    "Understand your data choices and manage how your health information may be used.": "మీ డేటా ఎంపికలను అర్థం చేసుకుని మీ ఆరోగ్య సమాచారం ఎలా ఉపయోగించబడాలో నిర్వహించండి.", "Review your preferences, understand data sharing, and know how to request access to or deletion of your information.": "మీ ప్రాధాన్యతలను పరిశీలించండి, డేటా భాగస్వామ్యాన్ని అర్థం చేసుకోండి మరియు మీ సమాచారాన్ని చూడటానికి లేదా తొలగించడానికి ఎలా అభ్యర్థించాలో తెలుసుకోండి.", "Review the choices available in this application.": "ఈ అప్లికేషన్‌లో అందుబాటులో ఉన్న ఎంపికలను పరిశీలించండి.", "Allow eligible health information to be processed by the AI features you choose to use.": "మీరు ఎంచుకున్న AI లక్షణాల ద్వారా అనుమతించిన ఆరోగ్య సమాచారాన్ని ప్రాసెస్ చేయడానికి అనుమతించండి.", "Requires a clear explanation of which data is sent to which AI provider.": "ఏ డేటా ఏ AI సేవాదారునికి పంపబడుతుందో స్పష్టంగా వివరించాలి.", "Allow AI processing": "AI ప్రాసెసింగ్‌ను అనుమతించండి", "Manage whether information may be shared with an explicitly selected healthcare recipient.": "ఎంచుకున్న ఆరోగ్య సేవా గ్రహీతతో సమాచారాన్ని పంచుకోవాలా అని నిర్వహించండి.", "Sharing must be limited to the recipient, purpose, and data you authorize.": "భాగస్వామ్యం మీరు అనుమతించిన గ్రహీత, ప్రయోజనం మరియు డేటాకు మాత్రమే పరిమితం కావాలి.", "Allow healthcare data sharing": "ఆరోగ్య డేటా భాగస్వామ్యాన్ని అనుమతించండి", "Choose whether to allow optional analytics intended to improve the application.": "అప్లికేషన్‌ను మెరుగుపరచడానికి ఉద్దేశించిన ఐచ్ఛిక విశ్లేషణలను అనుమతించాలా ఎంచుకోండి.", "Analytics must not be treated as essential to core health functions.": "విశ్లేషణలను ప్రధాన ఆరోగ్య కార్యాచరణకు తప్పనిసరిగా పరిగణించకూడదు.", "Allow optional analytics": "ఐచ్ఛిక విశ్లేషణలను అనుమతించండి", "Understand the actions you can request.": "మీరు అభ్యర్థించగల చర్యలను అర్థం చేసుకోండి.", "Request a copy of your saved profile, records, and other eligible information.": "మీరు సేవ్ చేసిన ప్రొఫైల్, రికార్డులు మరియు ఇతర అర్హమైన సమాచార ప్రతిని అభ్యర్థించండి.", "Review your profile and request corrections to inaccurate details.": "మీ ప్రొఫైల్‌ను పరిశీలించి తప్పు వివరాల సవరణను అభ్యర్థించండి.", "Understand the consequences and request deletion through the supported process.": "పరిణామాలను అర్థం చేసుకుని అందుబాటులో ఉన్న ప్రక్రియ ద్వారా తొలగింపును అభ్యర్థించండి.", "Review recorded changes to your consent preferences.": "మీ సమ్మతి ప్రాధాన్యతల్లో నమోదైన మార్పులను పరిశీలించండి.", "Recorded changes will appear here after consent history is connected.": "సమ్మతి చరిత్ర అనుసంధానించిన తర్వాత నమోదైన మార్పులు ఇక్కడ కనిపిస్తాయి.", "Use information only for clearly explained purposes.": "స్పష్టంగా వివరించిన ప్రయోజనాల కోసమే సమాచారాన్ని ఉపయోగించండి.", "Restrict access to the minimum required information.": "అవసరమైన కనీస సమాచారానికే ప్రాప్యతను పరిమితం చేయండి.", "Make choices understandable and meaningful.": "ఎంపికలను అర్థవంతంగా, స్పష్టంగా చేయండి.", "Record relevant consent and access changes.": "సంబంధిత సమ్మతి మరియు ప్రాప్యత మార్పులను నమోదు చేయండి.", "Use the application's supported support channel to ask about data handling, access requests, or consent.": "డేటా నిర్వహణ, ప్రాప్యత అభ్యర్థనలు లేదా సమ్మతి గురించి అడగడానికి అప్లికేషన్ మద్దతు మార్గాన్ని ఉపయోగించండి.", "The controls on this screen must be connected to verified backend behavior before they can be relied on to enforce consent or data deletion.": "సమ్మతి లేదా డేటా తొలగింపును అమలు చేయడానికి ఈ స్క్రీన్ నియంత్రణలను ధృవీకరించిన బ్యాకెండ్‌తో అనుసంధానించాలి.", "NexHealth requires JavaScript for screen navigation and interactive features.": "స్క్రీన్ నావిగేషన్ మరియు ఇంటరాక్టివ్ లక్షణాల కోసం NexHealthకు JavaScript అవసరం.", "English": "ఇంగ్లీష్"
});

Object.assign(uiTextTranslations.hi, {
    "Record categories that can be represented in a FHIR-style model.": "FHIR मॉडल में दर्शाई जा सकने वाली रिकॉर्ड श्रेणियाँ।",
    "These are record categories for the demo. No records are being transmitted to an ABDM network.": "ये केवल डेमो की रिकॉर्ड श्रेणियाँ हैं। ABDM नेटवर्क पर कोई रिकॉर्ड नहीं भेजा जा रहा है।",
    "Demonstrate how a patient might control record-sharing permission.": "दिखाएँ कि मरीज़ रिकॉर्ड साझा करने की अनुमति को कैसे नियंत्रित कर सकता है।",
    "Demo sharing is currently disabled.": "डेमो में साझा करना अभी बंद है।",
    "These controls change only the local demo state. They do not grant or revoke real ABDM consent.": "ये नियंत्रण केवल स्थानीय डेमो स्थिति बदलते हैं। ये वास्तविक ABDM सहमति नहीं देते या वापस नहीं लेते।",
    "Readiness checklist for future integration.": "भविष्य के एकीकरण की तैयारी सूची।", "Not integrated": "एकीकृत नहीं", "FHIR resource mapping": "FHIR संसाधन मैपिंग", "Design stage": "डिज़ाइन चरण",
    "Document access must be protected by authenticated ownership policies and private storage.": "दस्तावेज़ों की पहुँच को प्रमाणित स्वामित्व नीतियों और निजी संग्रहण से सुरक्षित रखना चाहिए।", "Turn medical documents into clearer information you can discuss with your doctor.": "मेडिकल दस्तावेज़ों को ऐसी स्पष्ट जानकारी में बदलें जिस पर आप डॉक्टर से चर्चा कर सकें।", "AI workspace": "AI कार्यक्षेत्र", "STEP 01": "चरण 01", "PDF or image · Maximum 10 MB": "PDF या चित्र · अधिकतम 10 MB",
    "Text extraction and AI analysis require a configured, secure backend. Uploaded medical documents are sensitive personal information.": "टेक्स्ट निकालने और AI विश्लेषण के लिए सुरक्षित बैकएंड चाहिए। अपलोड किए गए मेडिकल दस्तावेज़ संवेदनशील व्यक्तिगत जानकारी हैं।", "Educational information for discussion with a healthcare professional.": "स्वास्थ्य विशेषज्ञ से चर्चा के लिए शैक्षिक जानकारी।", "Review extracted biomarkers over time when results are available.": "नतीजे उपलब्ध होने पर निकाले गए बायोमार्कर की समय के साथ समीक्षा करें।", "Save verified lab values with dates and units to compare results over time.": "नतीजों की तुलना के लिए सत्यापित लैब मानों को तारीख़ और इकाई सहित सहेजें।", "Plain-language explanations": "सरल भाषा में समझाइश", "AI may misread medical terms, units, and values. Verify extracted information against the original document.": "AI मेडिकल शब्द, इकाइयाँ और मान गलत पढ़ सकता है। निकाली गई जानकारी को मूल दस्तावेज़ से जाँचें।", "Do not use AI output as a diagnosis or as the sole basis for treatment decisions.": "AI के जवाब को निदान या इलाज के निर्णय का एकमात्र आधार न बनाएँ।", "Build a list of questions to discuss with your healthcare professional.": "स्वास्थ्य विशेषज्ञ से चर्चा के लिए सवालों की सूची बनाएँ।",
    "Keep your meals, habits, and health reminders in one manageable plan.": "अपने भोजन, आदतों और स्वास्थ्य रिमाइंडर को एक आसान योजना में रखें।", "Build a routine around your preferences, schedule, and goals.": "अपनी पसंद, समय-सारणी और लक्ष्यों के अनुसार दिनचर्या बनाएँ।", "0 tasks": "0 काम", "All": "सभी", "Add a reminder for a habit, meal, activity, or appointment preparation.": "आदत, भोजन, गतिविधि या अपॉइंटमेंट की तैयारी के लिए रिमाइंडर जोड़ें।", "Organize meals around your food preferences.": "अपनी पसंद के अनुसार भोजन व्यवस्थित करें।", "Help tailor your routine.": "अपनी दिनचर्या को अनुकूल बनाने में मदद पाएँ।", "Nutrition suggestions are general education. Medical conditions, allergies, pregnancy, and prescribed diets may require advice from a qualified professional.": "पोषण सुझाव सामान्य जानकारी हैं। स्वास्थ्य समस्या, एलर्जी, गर्भावस्था या निर्धारित आहार के लिए योग्य विशेषज्ञ की सलाह लें।",
    "Organize your consultations, lab visits, and healthcare follow-ups.": "अपने परामर्श, लैब विज़िट और स्वास्थ्य फॉलो-अप व्यवस्थित करें।", "Keep appointment details in one place so important visits are easier to manage.": "महत्वपूर्ण मुलाक़ातें आसानी से सँभालने के लिए अपॉइंटमेंट विवरण एक जगह रखें।", "Your saved consultation and lab visit details.": "आपके सहेजे गए परामर्श और लैब विज़िट विवरण।", "Creating an entry here does not contact a clinic or guarantee a booking. Live availability and confirmation require a connected booking service.": "यहाँ एंट्री करने से क्लिनिक से संपर्क या बुकिंग की पुष्टि नहीं होती। वास्तविक उपलब्धता और पुष्टि के लिए कनेक्टेड बुकिंग सेवा चाहिए।",
    "Explore the types of care and support you may want to access.": "देखें कि आप किस प्रकार की देखभाल और सहायता लेना चाहते हैं।", "The right support starts with knowing your options.": "सही सहायता की शुरुआत अपने विकल्प जानने से होती है।", "Discover care categories and organize the next step in your healthcare journey.": "देखभाल की श्रेणियाँ जानें और स्वास्थ्य यात्रा का अगला कदम व्यवस्थित करें।", "Explore options": "विकल्प देखें", "Learn about laboratory testing and sample collection services.": "लैब जाँच और नमूना संग्रह सेवाओं के बारे में जानें।", "Review the steps involved in using a verified pharmacy service.": "सत्यापित फ़ार्मेसी सेवा इस्तेमाल करने के चरण देखें।", "Explore home sample collection and other at-home care options.": "घर पर नमूना संग्रह और अन्य घरेलू देखभाल विकल्प देखें।", "Verified providers will appear when a directory source is connected.": "डायरेक्टरी स्रोत कनेक्ट होने पर सत्यापित सेवा प्रदाता दिखेंगे।", "Live providers, prices, service areas, and availability must be verified through a real service provider integration.": "वास्तविक सेवा प्रदाता एकीकरण से उपलब्ध प्रदाताओं, कीमतों, सेवा क्षेत्रों और उपलब्धता की पुष्टि करें।", "For a medical emergency, contact your local emergency services immediately. Do not wait for an online booking or AI response.": "मेडिकल आपातकाल में तुरंत स्थानीय आपातकालीन सेवाओं से संपर्क करें। ऑनलाइन बुकिंग या AI जवाब का इंतज़ार न करें।",
    "Ask general health questions, understand common terms, and prepare for conversations with a professional.": "सामान्य स्वास्थ्य सवाल पूछें, आम शब्द समझें और विशेषज्ञ से बातचीत की तैयारी करें।", "NexHealth Mentor": "NexHealth स्वास्थ्य सलाहकार", "Welcome! I can help explain general health information, clarify medical terminology, or help you prepare questions for a healthcare professional.": "स्वागत है! मैं सामान्य स्वास्थ्य जानकारी समझाने, मेडिकल शब्द स्पष्ट करने या स्वास्थ्य विशेषज्ञ के लिए सवाल तैयार करने में मदद कर सकता हूँ।", "I cannot diagnose conditions, prescribe medication, or replace professional medical advice.": "मैं बीमारी का निदान या दवा नहीं बता सकता और न ही चिकित्सा विशेषज्ञ की सलाह का विकल्प हूँ।", "AI-generated information can be inaccurate. Seek qualified medical care for personal medical concerns and urgent symptoms.": "AI की जानकारी गलत हो सकती है। व्यक्तिगत स्वास्थ्य समस्याओं और गंभीर लक्षणों पर योग्य चिकित्सा सहायता लें।", "Choose the language you prefer for future conversations.": "आगे की बातचीत के लिए अपनी पसंदीदा भाषा चुनें।", "Severe or rapidly worsening symptoms require timely professional assessment. For emergencies, contact local emergency services.": "गंभीर या तेज़ी से बिगड़ते लक्षणों के लिए तुरंत विशेषज्ञ से जाँच कराएँ। आपातकाल में स्थानीय आपातकालीन सेवाओं से संपर्क करें।",
    "Understand your data choices and manage how your health information may be used.": "अपने डेटा विकल्प समझें और स्वास्थ्य जानकारी के उपयोग को नियंत्रित करें।", "Review your preferences, understand data sharing, and know how to request access to or deletion of your information.": "अपनी प्राथमिकताएँ देखें, डेटा साझा करना समझें और जानकारी देखने या हटाने का अनुरोध करना जानें।", "Review the choices available in this application.": "इस ऐप में उपलब्ध विकल्प देखें।", "Allow eligible health information to be processed by the AI features you choose to use.": "आपके चुने AI फ़ीचर को पात्र स्वास्थ्य जानकारी प्रोसेस करने दें।", "Requires a clear explanation of which data is sent to which AI provider.": "कौन-सा डेटा किस AI प्रदाता को भेजा जाता है, यह स्पष्ट होना चाहिए।", "Allow AI processing": "AI प्रोसेसिंग की अनुमति दें", "Manage whether information may be shared with an explicitly selected healthcare recipient.": "चुने गए स्वास्थ्य सेवा प्राप्तकर्ता के साथ जानकारी साझा करने की अनुमति नियंत्रित करें।", "Sharing must be limited to the recipient, purpose, and data you authorize.": "साझाकरण केवल आपके द्वारा अधिकृत प्राप्तकर्ता, उद्देश्य और डेटा तक सीमित होना चाहिए।", "Allow healthcare data sharing": "स्वास्थ्य डेटा साझा करने की अनुमति दें", "Choose whether to allow optional analytics intended to improve the application.": "ऐप को बेहतर बनाने वाले वैकल्पिक विश्लेषण की अनुमति चुनें।", "Analytics must not be treated as essential to core health functions.": "विश्लेषण को मुख्य स्वास्थ्य सुविधाओं के लिए अनिवार्य नहीं माना जाना चाहिए।", "Allow optional analytics": "वैकल्पिक विश्लेषण की अनुमति दें", "Understand the actions you can request.": "जानें कि आप कौन-सी कार्रवाइयाँ अनुरोध कर सकते हैं।", "Request a copy of your saved profile, records, and other eligible information.": "अपने सहेजे गए प्रोफ़ाइल, रिकॉर्ड और अन्य पात्र जानकारी की प्रति माँगें।", "Review your profile and request corrections to inaccurate details.": "अपनी प्रोफ़ाइल देखें और गलत विवरण सुधारने का अनुरोध करें।", "Understand the consequences and request deletion through the supported process.": "परिणाम समझें और उपलब्ध प्रक्रिया से हटाने का अनुरोध करें।", "Review recorded changes to your consent preferences.": "अपनी सहमति प्राथमिकताओं में दर्ज बदलाव देखें।", "Recorded changes will appear here after consent history is connected.": "सहमति इतिहास कनेक्ट होने के बाद दर्ज बदलाव यहाँ दिखेंगे।", "Use information only for clearly explained purposes.": "जानकारी का उपयोग केवल स्पष्ट रूप से बताए गए उद्देश्यों के लिए करें।", "Restrict access to the minimum required information.": "पहुँच को आवश्यक न्यूनतम जानकारी तक सीमित रखें।", "Make choices understandable and meaningful.": "विकल्पों को स्पष्ट और अर्थपूर्ण बनाएँ।", "Record relevant consent and access changes.": "सहमति और पहुँच में हुए बदलाव दर्ज करें।", "Use the application's supported support channel to ask about data handling, access requests, or consent.": "डेटा उपयोग, पहुँच अनुरोध या सहमति के बारे में पूछने के लिए ऐप के सहायता माध्यम का उपयोग करें।", "The controls on this screen must be connected to verified backend behavior before they can be relied on to enforce consent or data deletion.": "सहमति या डेटा हटाने को लागू करने से पहले इस स्क्रीन के नियंत्रणों को सत्यापित बैकएंड से जोड़ना होगा।", "NexHealth requires JavaScript for screen navigation and interactive features.": "स्क्रीन नेविगेशन और इंटरैक्टिव सुविधाओं के लिए NexHealth को JavaScript चाहिए।", "English": "अंग्रेज़ी"
});


Object.assign(uiTextTranslations.te, {
    "AI health mentor": "AI ఆరోగ్య సహాయకుడు", "My profile": "నా ప్రొఫైల్", "FHIR-style": "FHIR నమూనా", "or": "లేదా", "Not integrated": "అనుసంధానం కాలేదు",
    "Explore options": "ఎంపికలను చూడండి", "NexHealth | Your Health, Connected": "NexHealth | మీ ఆరోగ్యం, అనుసంధానంలో", "NexHealth": "NexHealth", "NEXHEALTH": "NEXHEALTH", "NexHealth Mentor": "NexHealth ఆరోగ్య సహాయకుడు", "English": "ఇంగ్లీష్", "NexHealth requires JavaScript for screen navigation and interactive features.": "స్క్రీన్ నావిగేషన్ మరియు ఇంటరాక్టివ్ లక్షణాల కోసం NexHealthకు JavaScript అవసరం.",
    "Demo sharing is currently disabled.": "డెమో భాగస్వామ్యం ప్రస్తుతం నిలిపివేయబడింది.", "These are record categories for the demo. No records are being transmitted to an ABDM network.": "ఇవి డెమో కోసం రికార్డు వర్గాలు మాత్రమే. ABDM నెట్‌వర్క్‌కు ఎలాంటి రికార్డులు పంపబడవు.", "These controls change only the local demo state. They do not grant or revoke real ABDM consent.": "ఈ నియంత్రణలు స్థానిక డెమో స్థితిని మాత్రమే మారుస్తాయి. ఇవి నిజమైన ABDM సమ్మతిని మంజూరు చేయవు లేదా రద్దు చేయవు.", "Live ABDM services are not integrated": "ప్రత్యక్ష ABDM సేవలు అనుసంధానించబడలేదు", "Healthcare network": "ఆరోగ్య సేవల నెట్‌వర్క్"
});

Object.assign(uiTextTranslations.hi, {
    "AI health mentor": "AI स्वास्थ्य सलाहकार", "My profile": "मेरी प्रोफ़ाइल", "FHIR-style": "FHIR मॉडल", "or": "या", "Not integrated": "एकीकृत नहीं",
    "Explore options": "विकल्प देखें", "NexHealth | Your Health, Connected": "NexHealth | आपका स्वास्थ्य, कनेक्टेड", "NexHealth": "NexHealth", "NEXHEALTH": "NEXHEALTH", "NexHealth Mentor": "NexHealth स्वास्थ्य सलाहकार", "English": "अंग्रेज़ी", "NexHealth requires JavaScript for screen navigation and interactive features.": "स्क्रीन नेविगेशन और इंटरैक्टिव सुविधाओं के लिए NexHealth को JavaScript चाहिए।",
    "Demo sharing is currently disabled.": "डेमो में साझा करना अभी बंद है।", "These are record categories for the demo. No records are being transmitted to an ABDM network.": "ये केवल डेमो की रिकॉर्ड श्रेणियाँ हैं। ABDM नेटवर्क पर कोई रिकॉर्ड नहीं भेजा जा रहा है।", "These controls change only the local demo state. They do not grant or revoke real ABDM consent.": "ये नियंत्रण केवल स्थानीय डेमो स्थिति बदलते हैं। ये वास्तविक ABDM सहमति नहीं देते या वापस नहीं लेते।", "Live ABDM services are not integrated": "लाइव ABDM सेवाएँ एकीकृत नहीं हैं", "Healthcare network": "स्वास्थ्य सेवा नेटवर्क"
});

Object.assign(uiTextTranslations.te, {
    "Title": "శీర్షిక", "Category": "వర్గం", "Due date": "గడువు తేదీ", "Notes": "గమనికలు", "e.g. Drink water": "ఉదా: నీరు తాగండి", "Optional details": "ఐచ్ఛిక వివరాలు", "e.g. Dentist visit": "ఉదా: దంతవైద్యుడి సందర్శన", "Location": "ప్రదేశం", "Clinic or hospital": "క్లినిక్ లేదా ఆసుపత్రి", "e.g. Vegetable rice": "ఉదా: కూరగాయల అన్నం", "e.g. Blood test report": "ఉదా: రక్త పరీక్ష నివేదిక", "Optional. Only enter information you want stored in this browser.": "ఐచ్ఛికం. ఈ బ్రౌజర్‌లో సేవ్ చేయాలనుకునే సమాచారాన్ని మాత్రమే నమోదు చేయండి.", "Unable to save browser data. Check available storage.": "బ్రౌజర్ డేటాను సేవ్ చేయలేకపోయాం. అందుబాటులో ఉన్న నిల్వను తనిఖీ చేయండి.", "Task added.": "పని జోడించబడింది.", "Appointment saved in this browser.": "అపాయింట్‌మెంట్ ఈ బ్రౌజర్‌లో సేవ్ చేయబడింది.", "Meal added.": "భోజనం జోడించబడింది.", "Profile saved in this browser.": "ప్రొఫైల్ ఈ బ్రౌజర్‌లో సేవ్ చేయబడింది.", "Choose a PDF or image first.": "ముందుగా PDF లేదా చిత్రాన్ని ఎంచుకోండి.", "The maximum file size is 10 MB.": "గరిష్ఠ ఫైల్ పరిమాణం 10 MB.", "Analyzing report...": "నివేదికను విశ్లేషిస్తోంది...", "Processing": "ప్రాసెస్ అవుతోంది", "Reading your document and requesting an explanation...": "మీ పత్రాన్ని చదివి వివరణను సిద్ధం చేస్తోంది...", "Complete": "పూర్తయింది", "Could not analyze": "విశ్లేషించలేకపోయింది", "Report analysis completed.": "నివేదిక విశ్లేషణ పూర్తయింది.", "Enter a question first.": "ముందుగా ప్రశ్నను నమోదు చేయండి.", "Keep your message under 4,000 characters.": "మీ సందేశాన్ని 4,000 అక్షరాల లోపు ఉంచండి.", "Conversation cleared.": "సంభాషణ తొలగించబడింది.", "Export prepared.": "ఎగుమతి సిద్ధమైంది.", "Browser data deleted.": "బ్రౌజర్ డేటా తొలగించబడింది.", "Demo granted": "డెమో అనుమతి మంజూరైంది", "Demo consent granted locally.": "డెమో సమ్మతి స్థానికంగా మంజూరైంది.", "Demo consent revoked locally.": "డెమో సమ్మతి స్థానికంగా రద్దు చేయబడింది.", "Meal removed.": "భోజనం తొలగించబడింది.", "Preference saved in this browser.": "ప్రాధాన్యత ఈ బ్రౌజర్‌లో సేవ్ చేయబడింది.", "Demo identity saved.": "డెమో గుర్తింపు సేవ్ చేయబడింది.", "Enter a fictional 14-digit demo number.": "కల్పిత 14 అంకెల డెమో నంబర్‌ను నమోదు చేయండి.", "Enter a valid demo address.": "చెల్లుబాటు అయ్యే డెమో చిరునామాను నమోదు చేయండి."
});

Object.assign(uiTextTranslations.hi, {
    "Title": "शीर्षक", "Category": "श्रेणी", "Due date": "अंतिम तिथि", "Notes": "नोट्स", "e.g. Drink water": "जैसे: पानी पिएँ", "Optional details": "वैकल्पिक विवरण", "e.g. Dentist visit": "जैसे: दंत चिकित्सक से मिलना", "Location": "जगह", "Clinic or hospital": "क्लिनिक या अस्पताल", "e.g. Vegetable rice": "जैसे: सब्ज़ियों वाला चावल", "e.g. Blood test report": "जैसे: ब्लड टेस्ट रिपोर्ट", "Optional. Only enter information you want stored in this browser.": "वैकल्पिक। केवल वही जानकारी दर्ज करें जिसे आप इस ब्राउज़र में सहेजना चाहते हैं।", "Unable to save browser data. Check available storage.": "ब्राउज़र डेटा सहेजा नहीं जा सका। उपलब्ध स्टोरेज जाँचें।", "Task added.": "काम जोड़ दिया गया।", "Appointment saved in this browser.": "अपॉइंटमेंट इस ब्राउज़र में सहेजा गया।", "Meal added.": "भोजन जोड़ दिया गया।", "Profile saved in this browser.": "प्रोफ़ाइल इस ब्राउज़र में सहेजी गई।", "Choose a PDF or image first.": "पहले PDF या चित्र चुनें।", "The maximum file size is 10 MB.": "फ़ाइल का अधिकतम आकार 10 MB है।", "Analyzing report...": "रिपोर्ट का विश्लेषण हो रहा है...", "Processing": "प्रोसेस हो रहा है", "Reading your document and requesting an explanation...": "आपका दस्तावेज़ पढ़कर व्याख्या तैयार की जा रही है...", "Complete": "पूरा हुआ", "Could not analyze": "विश्लेषण नहीं हो सका", "Report analysis completed.": "रिपोर्ट विश्लेषण पूरा हुआ।", "Enter a question first.": "पहले सवाल लिखें।", "Keep your message under 4,000 characters.": "संदेश 4,000 अक्षरों से कम रखें।", "Conversation cleared.": "बातचीत साफ़ की गई।", "Export prepared.": "निर्यात तैयार है।", "Browser data deleted.": "ब्राउज़र डेटा हटा दिया गया।", "Demo granted": "डेमो अनुमति दी गई", "Demo consent granted locally.": "डेमो सहमति स्थानीय रूप से दी गई।", "Demo consent revoked locally.": "डेमो सहमति स्थानीय रूप से वापस ली गई।", "Meal removed.": "भोजन हटा दिया गया।", "Preference saved in this browser.": "प्राथमिकता इस ब्राउज़र में सहेजी गई।", "Demo identity saved.": "डेमो पहचान सहेजी गई।", "Enter a fictional 14-digit demo number.": "काल्पनिक 14 अंकों का डेमो नंबर दर्ज करें।", "Enter a valid demo address.": "मान्य डेमो पता दर्ज करें।"
});

Object.assign(uiTextTranslations.te, {
    "తెలుగు (Telugu)": "తెలుగు",
    "हिन्दी (Hindi)": "హిందీ",
    "Explore primary care and specialist consultation options.": "సాధారణ వైద్యం మరియు నిపుణుల సంప్రదింపు ఎంపికలను చూడండి.",
    "NexHealth home": "NexHealth హోమ్",
    "Delete meal": "భోజనాన్ని తొలగించండి"
});

Object.assign(uiTextTranslations.hi, {
    "తెలుగు (Telugu)": "तेलुगु",
    "हिन्दी (Hindi)": "हिन्दी",
    "Explore primary care and specialist consultation options.": "प्राथमिक देखभाल और विशेषज्ञ परामर्श के विकल्प देखें।",
    "CONNECTIVITY": "कनेक्टिविटी",
    "NexHealth home": "NexHealth होम",
    "Delete meal": "भोजन हटाएँ"
});

Object.assign(uiTextTranslations.te, {
    "No tasks in this filter": "ఈ ఫిల్టర్‌లో పనులు లేవు", "Add reminders for your daily routine.": "మీ రోజువారీ దినచర్య కోసం రిమైండర్‌లను జోడించండి.", "Delete task": "పనిని తొలగించండి", "Due": "గడువు", "All caught up!": "అన్నీ పూర్తయ్యాయి!", "You have completed all your tasks.": "మీ పనులన్నీ పూర్తయ్యాయి.", "Add a task to organize your day.": "మీ రోజును క్రమబద్ధీకరించడానికి పని జోడించండి.", "Delete appointment": "అపాయింట్‌మెంట్‌ను తొలగించండి", "No appointments here": "ఇక్కడ అపాయింట్‌మెంట్‌లు లేవు", "Create an appointment to keep your healthcare schedule organized.": "మీ ఆరోగ్య షెడ్యూల్‌ను క్రమంగా ఉంచడానికి అపాయింట్‌మెంట్ సృష్టించండి.", "No upcoming appointments": "రాబోయే అపాయింట్‌మెంట్‌లు లేవు", "Add appointment": "అపాయింట్‌మెంట్ జోడించండి", "Date not set": "తేదీ సెట్ చేయలేదు", "Not provided": "అందించలేదు", "Upload record": "రికార్డును అప్‌లోడ్ చేయండి", "Task deleted.": "పని తొలగించబడింది.", "Appointment removed.": "అపాయింట్‌మెంట్ తొలగించబడింది.", "Record uploaded to the server.": "రికార్డు సర్వర్‌కు అప్‌లోడ్ చేయబడింది.", "No analysis was returned.": "విశ్లేషణ ఫలితం రాలేదు.", "The service did not return a response.": "సేవ నుండి సమాధానం రాలేదు.", "Save changes": "మార్పులను సేవ్ చేయండి", "Upload document": "పత్రాన్ని అప్‌లోడ్ చేయండి"
});

Object.assign(uiTextTranslations.hi, {
    "No tasks in this filter": "इस फ़िल्टर में कोई काम नहीं", "Add reminders for your daily routine.": "अपनी दैनिक दिनचर्या के लिए रिमाइंडर जोड़ें।", "Delete task": "काम हटाएँ", "Due": "अंतिम तिथि", "All caught up!": "सब काम पूरे!", "You have completed all your tasks.": "आपने अपने सभी काम पूरे कर लिए हैं।", "Add a task to organize your day.": "अपना दिन व्यवस्थित करने के लिए काम जोड़ें।", "Delete appointment": "अपॉइंटमेंट हटाएँ", "No appointments here": "यहाँ कोई अपॉइंटमेंट नहीं", "Create an appointment to keep your healthcare schedule organized.": "अपनी स्वास्थ्य समय-सारणी व्यवस्थित रखने के लिए अपॉइंटमेंट बनाएँ।", "No upcoming appointments": "कोई आगामी अपॉइंटमेंट नहीं", "Add appointment": "अपॉइंटमेंट जोड़ें", "Date not set": "तारीख़ तय नहीं", "Not provided": "नहीं दिया गया", "Upload record": "रिकॉर्ड अपलोड करें", "Task deleted.": "काम हटा दिया गया।", "Appointment removed.": "अपॉइंटमेंट हटाया गया।", "Record uploaded to the server.": "रिकॉर्ड सर्वर पर अपलोड किया गया।", "No analysis was returned.": "विश्लेषण का जवाब नहीं मिला।", "The service did not return a response.": "सेवा से कोई जवाब नहीं मिला।", "Save changes": "बदलाव सहेजें", "Upload document": "दस्तावेज़ अपलोड करें"
});

Object.assign(uiTextTranslations.te, {
    "· Due": "· గడువు", "No matching records": "సరిపోలే రికార్డులు లేవు", "Try another search or filter.": "మరొక శోధన లేదా ఫిల్టర్ ప్రయత్నించండి.", "Upload a report or prescription to begin.": "ప్రారంభించడానికి నివేదిక లేదా ప్రిస్క్రిప్షన్ అప్‌లోడ్ చేయండి.", "No meals planned for today": "ఈరోజు భోజన ప్రణాళిక లేదు", "Add meals to keep your routine organized.": "మీ దినచర్యను క్రమంగా ఉంచడానికి భోజనాలను జోడించండి.", "Delete meal": "భోజనాన్ని తొలగించండి", "Demo identity loaded from this browser.": "ఈ బ్రౌజర్ నుండి డెమో గుర్తింపు లోడ్ చేయబడింది.", "Demo identity saved.": "డెమో గుర్తింపు సేవ్ చేయబడింది.", "Could not save demo identity.": "డెమో గుర్తింపును సేవ్ చేయలేకపోయాం.", "No provider directory connected": "సేవాదారుల డైరెక్టరీ అనుసంధానించబడలేదు", "Date not set": "తేదీ సెట్ చేయలేదు"
});

Object.assign(uiTextTranslations.hi, {
    "· Due": "· अंतिम तिथि", "No matching records": "कोई मेल खाता रिकॉर्ड नहीं", "Try another search or filter.": "दूसरी खोज या फ़िल्टर आज़माएँ।", "Upload a report or prescription to begin.": "शुरू करने के लिए रिपोर्ट या प्रिस्क्रिप्शन अपलोड करें।", "No meals planned for today": "आज के लिए भोजन की योजना नहीं", "Add meals to keep your routine organized.": "अपनी दिनचर्या व्यवस्थित रखने के लिए भोजन जोड़ें।", "Delete meal": "भोजन हटाएँ", "Demo identity loaded from this browser.": "इस ब्राउज़र से डेमो पहचान लोड की गई।", "Demo identity saved.": "डेमो पहचान सहेजी गई।", "Could not save demo identity.": "डेमो पहचान सहेजी नहीं जा सकी।", "No provider directory connected": "सेवा प्रदाता निर्देशिका कनेक्ट नहीं है", "Date not set": "तारीख़ तय नहीं"
});

Object.assign(uiTextTranslations.te, {
    "Voice input uses your browser’s speech service and follows the selected site language.": "వాయిస్ ఇన్‌పుట్ మీ బ్రౌజర్ స్పీచ్ సేవను ఉపయోగిస్తుంది; ఎంచుకున్న సైట్ భాషలో పనిచేస్తుంది.",
    "Start voice input": "వాయిస్ ఇన్‌పుట్ ప్రారంభించండి",
    "Start voice input. Speech is processed by your browser's speech service.": "వాయిస్ ఇన్‌పుట్ ప్రారంభించండి. మాటలను మీ బ్రౌజర్ స్పీచ్ సేవ ప్రాసెస్ చేస్తుంది."
});

Object.assign(uiTextTranslations.hi, {
    "Voice input uses your browser’s speech service and follows the selected site language.": "वॉइस इनपुट आपके ब्राउज़र की स्पीच सेवा का उपयोग करता है और चुनी गई साइट भाषा के अनुसार काम करता है।",
    "Start voice input": "वॉइस इनपुट शुरू करें",
    "Start voice input. Speech is processed by your browser's speech service.": "वॉइस इनपुट शुरू करें। बोली गई आवाज़ आपके ब्राउज़र की स्पीच सेवा द्वारा संसाधित होती है।"
});

Object.assign(uiTextTranslations.te, {
    "Upload a medical record": "వైద్య రికార్డును అప్‌లోడ్ చేయండి",
    "View": "చూడండి",
    "Download": "డౌన్‌లోడ్ చేయండి",
    "Discharge summary": "డిశ్చార్జ్ సారాంశం",
    "Discharge summaries": "డిశ్చార్జ్ సారాంశాలు",
    "Open lab reports in medical records": "వైద్య రికార్డుల్లో ల్యాబ్ నివేదికలను తెరవండి",
    "Open discharge summaries in medical records": "వైద్య రికార్డుల్లో డిశ్చార్జ్ సారాంశాలను తెరవండి",
    "Open prescriptions in medical records": "వైద్య రికార్డుల్లో ప్రిస్క్రిప్షన్‌లను తెరవండి"
});

Object.assign(uiTextTranslations.hi, {
    "Upload a medical record": "मेडिकल रिकॉर्ड अपलोड करें",
    "View": "देखें",
    "Download": "डाउनलोड करें",
    "Discharge summary": "डिस्चार्ज सारांश",
    "Discharge summaries": "डिस्चार्ज सारांश",
    "Open lab reports in medical records": "मेडिकल रिकॉर्ड में लैब रिपोर्ट खोलें",
    "Open discharge summaries in medical records": "मेडिकल रिकॉर्ड में डिस्चार्ज सारांश खोलें",
    "Open prescriptions in medical records": "मेडिकल रिकॉर्ड में प्रिस्क्रिप्शन खोलें"
});

Object.assign(uiTextTranslations.te, {
    "Take a photo": "ఫోటో తీయండి",
    "Use your camera to capture a report image": "నివేదిక చిత్రాన్ని తీయడానికి కెమెరాను ఉపయోగించండి"
});

Object.assign(uiTextTranslations.hi, {
    "Take a photo": "फ़ोटो लें",
    "Use your camera to capture a report image": "रिपोर्ट की तस्वीर लेने के लिए कैमरे का उपयोग करें"
});

Object.assign(uiTextTranslations.te, {
    "Save your workspace": "మీ కార్యస్థలాన్ని సేవ్ చేయండి",
    "Sign in or create an account to sync your data and access it on other devices.": "మీ డేటాను సమకాలీకరించి ఇతర పరికరాల్లో చూడటానికి సైన్ ఇన్ చేయండి లేదా ఖాతా సృష్టించండి.",
    "Sign in or create account": "సైన్ ఇన్ చేయండి లేదా ఖాతా సృష్టించండి",
    "Cancel": "రద్దు చేయండి"
});

Object.assign(uiTextTranslations.hi, {
    "Save your workspace": "अपना कार्यक्षेत्र सहेजें",
    "Sign in or create an account to sync your data and access it on other devices.": "अपने डेटा को सिंक करने और दूसरे डिवाइस पर देखने के लिए साइन इन करें या खाता बनाएँ।",
    "Sign in or create account": "साइन इन करें या खाता बनाएँ",
    "Cancel": "रद्द करें"
});

Object.assign(uiTextTranslations.te, {
    "Your prompts, relevant saved report excerpts, health notes, profile details, medication reminders, and relevant details you shared in other Mentor chats may be sent to OpenRouter and its selected model provider for AI responses.": "AI సమాధానాల కోసం మీ ప్రశ్నలు, సేవ్ చేసిన నివేదికల సంబంధిత భాగాలు, ఆరోగ్య నోట్లు, ప్రొఫైల్ వివరాలు, మందుల రిమైండర్లు మరియు ఇతర ఆరోగ్య సహాయక చాట్‌లలో మీరు పంచుకున్న సంబంధిత వివరాలు OpenRouter మరియు ఎంపిక చేసిన మోడల్ సేవాదారునికి పంపబడవచ్చు.",
    "Your prompts, relevant saved report excerpts, uploaded reports, and profile or routine details may be sent to OpenRouter and its selected model provider for AI responses.": "AI సమాధానాల కోసం మీ ప్రశ్నలు, సేవ్ చేసిన నివేదికల సంబంధిత భాగాలు, అప్‌లోడ్ చేసిన నివేదికలు, ప్రొఫైల్ లేదా దినచర్య వివరాలు OpenRouter మరియు అది ఎంచుకున్న మోడల్ సేవాదారునికి పంపబడవచ్చు.",
    "For questions about your saved reports, I’ll cite the source and date when available. If I can’t find the answer in your saved records, I’ll say so.": "మీ సేవ్ చేసిన నివేదికల గురించి అడిగితే, అందుబాటులో ఉన్నప్పుడు మూలం మరియు తేదీని చెబుతాను. మీ రికార్డుల్లో సమాధానం లేకపోతే, అది లేదని స్పష్టంగా చెబుతాను."
});

Object.assign(uiTextTranslations.hi, {
    "Your prompts, relevant saved report excerpts, health notes, profile details, medication reminders, and relevant details you shared in other Mentor chats may be sent to OpenRouter and its selected model provider for AI responses.": "AI जवाबों के लिए आपके सवाल, सेव की गई रिपोर्टों के ज़रूरी अंश, स्वास्थ्य नोट, प्रोफ़ाइल विवरण, दवा रिमाइंडर और दूसरे स्वास्थ्य सहायक चैट में साझा की गई संबंधित जानकारी OpenRouter और चुने गए मॉडल प्रदाता को भेजी जा सकती है।",
    "Your prompts, relevant saved report excerpts, uploaded reports, and profile or routine details may be sent to OpenRouter and its selected model provider for AI responses.": "AI जवाबों के लिए आपके सवाल, सेव की गई रिपोर्टों के ज़रूरी अंश, अपलोड की गई रिपोर्टें और प्रोफ़ाइल या दिनचर्या की जानकारी OpenRouter और उसके चुने हुए मॉडल प्रदाता को भेजी जा सकती है।",
    "For questions about your saved reports, I’ll cite the source and date when available. If I can’t find the answer in your saved records, I’ll say so.": "आपकी सेव की गई रिपोर्टों के बारे में पूछने पर, उपलब्ध होने पर मैं स्रोत और तारीख बताऊँगा। अगर जवाब आपके सेव किए रिकॉर्ड में नहीं मिला, तो मैं यह साफ़ कहूँगा।"
});

Object.assign(uiTextTranslations.te, {
    "New chat": "కొత్త చాట్",
    "Your mentor chats": "మీ ఆరోగ్య సహాయక చాట్‌లు",
    "Open chat history": "చాట్ చరిత్రను తెరవండి",
    "Chat history": "చాట్ చరిత్ర",
    "No conversations yet": "ఇంకా సంభాషణలు లేవు",
    "Continue conversation in AI Health Mentor": "AI ఆరోగ్య సహాయకుడితో సంభాషణ కొనసాగించండి",
    "AI Health Mentor": "AI ఆరోగ్య సహాయకుడు",
    "AI Analyzer": "AI విశ్లేషణ",
    "Add your first record": "మీ మొదటి రికార్డును జోడించండి",
    "Add an appointment": "అపాయింట్‌మెంట్‌ను జోడించండి",
    "Create your first task": "మీ మొదటి పనిని సృష్టించండి",
    "Analyze your first report": "మీ మొదటి నివేదికను విశ్లేషించండి",
    "Reset today's checklist": "ఈరోజు చెక్‌లిస్ట్‌ను రీసెట్ చేయండి",
    "Today's plan checklist has been reset.": "ఈరోజు ప్రణాళిక చెక్‌లిస్ట్ రీసెట్ చేయబడింది.",
    "Edit": "సవరించండి",
    "Update and regenerate": "నవీకరించి మళ్లీ రూపొందించండి",
    "Delete chat": "చాట్‌ను తొలగించండి"
});

Object.assign(uiTextTranslations.hi, {
    "New chat": "नई चैट",
    "Your mentor chats": "आपकी स्वास्थ्य सहायक चैट",
    "Open chat history": "चैट इतिहास खोलें",
    "Chat history": "चैट इतिहास",
    "No conversations yet": "अभी कोई बातचीत नहीं",
    "Continue conversation in AI Health Mentor": "AI स्वास्थ्य सहायक से बातचीत जारी रखें",
    "AI Health Mentor": "AI स्वास्थ्य सहायक",
    "AI Analyzer": "AI विश्लेषक",
    "Add your first record": "अपना पहला रिकॉर्ड जोड़ें",
    "Add an appointment": "अपॉइंटमेंट जोड़ें",
    "Create your first task": "अपना पहला काम बनाएँ",
    "Analyze your first report": "अपनी पहली रिपोर्ट का विश्लेषण करें",
    "Reset today's checklist": "आज की चेकलिस्ट रीसेट करें",
    "Today's plan checklist has been reset.": "आज की योजना चेकलिस्ट रीसेट कर दी गई है।",
    "Edit": "संपादित करें",
    "Update and regenerate": "अपडेट करें और नया जवाब बनाएँ",
    "Delete chat": "चैट हटाएँ"
});

Object.assign(uiTextTranslations.te, {
    "Use recent analyzed reports for this plan (optional)": "ఈ ప్రణాళిక కోసం ఇటీవలి విశ్లేషించిన నివేదికలను ఉపయోగించండి (ఐచ్ఛికం)",
    "Report information is included only when you select this option.": "మీరు ఈ ఎంపికను ఎంచుకున్నప్పుడే నివేదిక సమాచారం చేర్చబడుతుంది.",
    "Up to 3 recent analyzed reports will be sent only for this plan request. Check the original report for accuracy.": "ఈ ప్రణాళిక అభ్యర్థనకే ఇటీవలి 3 విశ్లేషించిన నివేదికల వరకు పంపబడతాయి. ఖచ్చితత్వం కోసం అసలు నివేదికను తనిఖీ చేయండి.",
    "No analyzed reports are saved yet. You can still create a plan from your profile and routine.": "ఇంకా విశ్లేషించిన నివేదికలు సేవ్ కాలేదు. మీ ప్రొఫైల్ మరియు దినచర్యతో ప్రణాళికను రూపొందించవచ్చు.",
    "Health conditions (optional)": "ఆరోగ్య పరిస్థితులు (ఐచ్ఛికం)",
    "Why this may fit": "ఇది ఎందుకు సరిపోవచ్చు",
    "Medication & appointment reminders": "మందులు & అపాయింట్‌మెంట్ రిమైండర్లు",
    "Manage medicine schedules and follow-up alerts in one place.": "మందుల షెడ్యూల్‌లు మరియు ఫాలో-అప్ అలర్ట్‌లను ఒకే చోట నిర్వహించండి.",
    "Add medicine reminder": "మందుల రిమైండర్ జోడించండి",
    "No reminders yet": "ఇంకా రిమైండర్లు లేవు",
    "Add a medicine schedule or set a reminder when you create an appointment.": "మందుల షెడ్యూల్ జోడించండి లేదా అపాయింట్‌మెంట్ సృష్టించేటప్పుడు రిమైండర్ సెట్ చేయండి.",
    "In-app alerts appear while NexHealth is open. Reminder details stay in your workspace; verify all medicine instructions against the original prescription.": "NexHealth తెరిచి ఉన్నప్పుడు యాప్‌లో అలర్ట్‌లు కనిపిస్తాయి. రిమైండర్ వివరాలు మీ కార్యస్థలంలో ఉంటాయి; మందుల సూచనలను అసలు ప్రిస్క్రిప్షన్‌తో జాగ్రత్తగా తనిఖీ చేయండి.",
    "Due today": "ఈరోజు చేయాల్సినది",
    "Course ended": "మందుల కోర్సు ముగిసింది",
    "Stopped": "ఆపివేశారు",
    "Not scheduled today": "ఈరోజుకు షెడ్యూల్ లేదు",
    "Taken": "తీసుకున్నాను",
    "Snooze 10 min": "10 నిమిషాలు వాయిదా",
    "Confirm": "నిర్ధారించండి",
    "Stop": "ఆపండి"
});
Object.assign(uiTextTranslations.hi, {
    "Use recent analyzed reports for this plan (optional)": "इस योजना के लिए हाल की विश्लेषित रिपोर्टें उपयोग करें (वैकल्पिक)",
    "Report information is included only when you select this option.": "रिपोर्ट की जानकारी तभी शामिल होगी जब आप यह विकल्प चुनेंगे।",
    "Up to 3 recent analyzed reports will be sent only for this plan request. Check the original report for accuracy.": "इस योजना अनुरोध के लिए केवल 3 तक हाल की विश्लेषित रिपोर्टें भेजी जाएँगी। सटीकता के लिए मूल रिपोर्ट जाँचें।",
    "No analyzed reports are saved yet. You can still create a plan from your profile and routine.": "अभी कोई विश्लेषित रिपोर्ट सहेजी नहीं है। आप प्रोफ़ाइल और दिनचर्या से योजना बना सकते हैं।",
    "Health conditions (optional)": "स्वास्थ्य स्थितियाँ (वैकल्पिक)",
    "Why this may fit": "यह क्यों उपयुक्त हो सकता है",
    "Medication & appointment reminders": "दवा और अपॉइंटमेंट रिमाइंडर",
    "Manage medicine schedules and follow-up alerts in one place.": "दवा का शेड्यूल और फॉलो-अप अलर्ट एक जगह प्रबंधित करें।",
    "Add medicine reminder": "दवा रिमाइंडर जोड़ें",
    "No reminders yet": "अभी कोई रिमाइंडर नहीं",
    "Add a medicine schedule or set a reminder when you create an appointment.": "दवा का शेड्यूल जोड़ें या अपॉइंटमेंट बनाते समय रिमाइंडर सेट करें।",
    "In-app alerts appear while NexHealth is open. Reminder details stay in your workspace; verify all medicine instructions against the original prescription.": "NexHealth खुला होने पर ऐप में अलर्ट दिखेंगे। रिमाइंडर आपके कार्यक्षेत्र में सहेजे जाएँगे; दवा के निर्देश मूल पर्चे से जाँचें।",
    "Due today": "आज देय",
    "Course ended": "दवा का कोर्स पूरा",
    "Stopped": "रोक दिया गया",
    "Not scheduled today": "आज निर्धारित नहीं",
    "Taken": "ले लिया",
    "Snooze 10 min": "10 मिनट बाद याद दिलाएँ",
    "Confirm": "पुष्टि करें",
    "Stop": "रोकें"
});

const privacyUiTranslations = {
    te: {
        "Healthcare sharing and analytics are preferences only; neither integration currently sends data to an external service.": "ఆరోగ్య సమాచారం భాగస్వామ్యం మరియు విశ్లేషణలు ప్రస్తుతం ప్రాధాన్యతలుగా మాత్రమే ఉన్నాయి; ఇవి బాహ్య సేవకు డేటాను పంపవు.",
        "Delete synced health data": "సింక్ చేసిన ఆరోగ్య డేటాను తొలగించండి",
        "Deletes the synced workspace and uploaded files. Your account stays active; browser copies on other devices clear when they next sync.": "సింక్ చేసిన కార్యస్థలం మరియు అప్‌లోడ్ చేసిన ఫైళ్లను తొలగిస్తుంది. మీ ఖాతా కొనసాగుతుంది; ఇతర పరికరాల్లోని బ్రౌజర్ కాపీలు తదుపరి సింక్ సమయంలో తొలగుతాయి.",
        "Delete synced data": "సింక్ చేసిన డేటాను తొలగించండి",
        "Permanently delete your synced health workspace and uploaded medical files from this account? This cannot be undone. Your NexHealth login account will remain active.": "ఈ ఖాతాలోని సింక్ చేసిన ఆరోగ్య కార్యస్థలం మరియు అప్‌లోడ్ చేసిన వైద్య ఫైళ్లను శాశ్వతంగా తొలగించాలా? దీన్ని తిరిగి మార్చలేరు. మీ NexHealth లాగిన్ ఖాతా యథాతథంగా ఉంటుంది.",
        "Synced health data and uploaded files were deleted.": "సింక్ చేసిన ఆరోగ్య డేటా మరియు అప్‌లోడ్ చేసిన ఫైళ్లు తొలగించబడ్డాయి.",
        "Could not fully delete synced data. Please try again or contact support.": "సింక్ చేసిన డేటాను పూర్తిగా తొలగించలేకపోయాం. మళ్లీ ప్రయత్నించండి లేదా సహాయ కేంద్రాన్ని సంప్రదించండి.",
        "Deleting synced data…": "సింక్ చేసిన డేటాను తొలగిస్తోంది…",
        "ABHA account": "ABHA ఖాతా",
        "Open portal": "పోర్టల్ తెరవండి",
        "Open the official ABHA portal": "అధికారిక ABHA పోర్టల్ తెరవండి",
        "Create or manage your health ID through the official ABHA portal.": "అధికారిక ABHA పోర్టల్ ద్వారా మీ ఆరోగ్య గుర్తింపును సృష్టించండి లేదా నిర్వహించండి.",
        "Open ABHA portal": "ABHA పోర్టల్ తెరవండి",
        "ABDM record-sharing consent": "ABDM రికార్డు భాగస్వామ్య సమ్మతి",
        "Manage through official ABHA services": "అధికారిక ABHA సేవల్లో నిర్వహించండి",
        "NexHealth is not connected to ABDM": "NexHealth ABDMకు అనుసంధానించబడలేదు",
        "Open a record category in your NexHealth medical library.": "మీ NexHealth వైద్య లైబ్రరీలో రికార్డు వర్గాన్ని తెరవండి.",
        "Your records stay in NexHealth. This page does not share them with ABDM.": "మీ రికార్డులు NexHealthలోనే ఉంటాయి. ఈ పేజీ వాటిని ABDMతో పంచుకోదు.",
        "Manage consent for linked health records through official ABHA services.": "అనుసంధానించిన ఆరోగ్య రికార్డుల సమ్మతిని అధికారిక ABHA సేవల్లో నిర్వహించండి.",
        "NexHealth is not connected to ABDM, so it cannot view or change your ABDM sharing consent.": "NexHealth ABDMకు అనుసంధానించబడలేదు కాబట్టి మీ ABDM భాగస్వామ్య సమ్మతిని చూడలేను లేదా మార్చలేను.",
        "Open official ABHA services": "అధికారిక ABHA సేవలను తెరవండి",
        "Analysis method": "విశ్లేషణ విధానం",
        "OCR + AI": "OCR + AI",
        "OCR + AI with vision cross-check": "OCR + AI, విజన్ క్రాస్-చెక్‌తో",
        "Vision model used because OCR was unavailable": "OCR అందుబాటులో లేక విజన్ మోడల్ ఉపయోగించబడింది",
        "OCR text confidence": "OCR టెక్స్ట్ నమ్మక స్థాయి",
        "OCR text confidence measures text recognition only, not medical accuracy.": "OCR టెక్స్ట్ నమ్మక స్థాయి టెక్స్ట్ గుర్తింపును మాత్రమే సూచిస్తుంది; వైద్య ఖచ్చితత్వాన్ని కాదు.",
        "Additional verification recommended": "అదనపు ధృవీకరణ అవసరం",
        "Vision cross-check unavailable": "విజన్ క్రాస్-చెక్ అందుబాటులో లేదు",
        "PDF text + AI": "PDF టెక్స్ట్ + AI",
        "PDF text + AI with vision cross-check": "PDF టెక్స్ట్ + AI, విజన్ క్రాస్-చెక్‌తో",
        "AI readings can be wrong. Verify medicines and doses with the original document and a pharmacist.": "AI పఠనాలు తప్పుగా ఉండవచ్చు. మందులు మరియు మోతాదులను అసలు పత్రం, ఫార్మసిస్ట్‌తో ధృవీకరించండి."
    },
    hi: {
        "Healthcare sharing and analytics are preferences only; neither integration currently sends data to an external service.": "स्वास्थ्य जानकारी साझा करना और एनालिटिक्स अभी केवल प्राथमिकताएँ हैं; इनमें से कोई भी सेवा बाहरी सेवा को डेटा नहीं भेजती।",
        "Delete synced health data": "सिंक किया गया स्वास्थ्य डेटा हटाएँ",
        "Deletes the synced workspace and uploaded files. Your account stays active; browser copies on other devices clear when they next sync.": "सिंक किया गया कार्यक्षेत्र और अपलोड की गई फ़ाइलें हटाता है। आपका खाता सक्रिय रहेगा; अन्य डिवाइस की ब्राउज़र कॉपी अगली बार सिंक होने पर हटेगी।",
        "Delete synced data": "सिंक किया डेटा हटाएँ",
        "Permanently delete your synced health workspace and uploaded medical files from this account? This cannot be undone. Your NexHealth login account will remain active.": "क्या आप इस खाते से सिंक किया गया स्वास्थ्य कार्यक्षेत्र और अपलोड की गई चिकित्सा फ़ाइलें स्थायी रूप से हटाना चाहते हैं? इसे वापस नहीं किया जा सकता। आपका NexHealth लॉगिन खाता सक्रिय रहेगा।",
        "Synced health data and uploaded files were deleted.": "सिंक किया गया स्वास्थ्य डेटा और अपलोड की गई फ़ाइलें हटा दी गईं।",
        "Could not fully delete synced data. Please try again or contact support.": "सिंक किया गया डेटा पूरी तरह नहीं हट सका। फिर से कोशिश करें या सहायता से संपर्क करें।",
        "Deleting synced data…": "सिंक किया गया डेटा हटाया जा रहा है…",
        "ABHA account": "ABHA खाता",
        "Open portal": "पोर्टल खोलें",
        "Open the official ABHA portal": "आधिकारिक ABHA पोर्टल खोलें",
        "Create or manage your health ID through the official ABHA portal.": "आधिकारिक ABHA पोर्टल से अपना स्वास्थ्य पहचान-पत्र बनाएँ या प्रबंधित करें।",
        "Open ABHA portal": "ABHA पोर्टल खोलें",
        "ABDM record-sharing consent": "ABDM रिकॉर्ड साझा करने की सहमति",
        "Manage through official ABHA services": "आधिकारिक ABHA सेवाओं में प्रबंधित करें",
        "NexHealth is not connected to ABDM": "NexHealth, ABDM से कनेक्ट नहीं है",
        "Open a record category in your NexHealth medical library.": "अपनी NexHealth मेडिकल लाइब्रेरी में रिकॉर्ड श्रेणी खोलें।",
        "Your records stay in NexHealth. This page does not share them with ABDM.": "आपके रिकॉर्ड NexHealth में ही रहते हैं। यह पेज उन्हें ABDM के साथ साझा नहीं करता।",
        "Manage consent for linked health records through official ABHA services.": "लिंक किए गए स्वास्थ्य रिकॉर्ड की सहमति आधिकारिक ABHA सेवाओं में प्रबंधित करें।",
        "NexHealth is not connected to ABDM, so it cannot view or change your ABDM sharing consent.": "NexHealth, ABDM से कनेक्ट नहीं है, इसलिए यह आपकी ABDM साझा करने की सहमति देख या बदल नहीं सकता।",
        "Open official ABHA services": "आधिकारिक ABHA सेवाएँ खोलें",
        "Analysis method": "विश्लेषण का तरीका",
        "OCR + AI": "OCR + AI",
        "OCR + AI with vision cross-check": "विज़न की दोबारा जाँच के साथ OCR + AI",
        "Vision model used because OCR was unavailable": "OCR उपलब्ध न होने के कारण विज़न मॉडल इस्तेमाल हुआ",
        "OCR text confidence": "OCR टेक्स्ट विश्वसनीयता",
        "OCR text confidence measures text recognition only, not medical accuracy.": "OCR टेक्स्ट विश्वसनीयता केवल टेक्स्ट पहचान बताती है, चिकित्सा की सटीकता नहीं।",
        "Additional verification recommended": "अतिरिक्त जाँच की सलाह",
        "Vision cross-check unavailable": "विज़न की दोबारा जाँच उपलब्ध नहीं",
        "PDF text + AI": "PDF टेक्स्ट + AI",
        "PDF text + AI with vision cross-check": "विज़न की दोबारा जाँच के साथ PDF टेक्स्ट + AI",
        "AI readings can be wrong. Verify medicines and doses with the original document and a pharmacist.": "AI की रीडिंग गलत हो सकती है। दवाओं और खुराक को मूल दस्तावेज़ और फ़ार्मासिस्ट से जाँचें।"
    }
};

Object.assign(uiTextTranslations.te, {
    "Listen": "వినండి",
    "Use Listen on an assistant reply to hear it in the selected language. Available voices depend on your browser and device.": "సహాయకుడి సమాధానాన్ని ఎంచుకున్న భాషలో వినడానికి Listen నొక్కండి. అందుబాటులోని వాయిస్‌లు మీ బ్రౌజర్ మరియు పరికరంపై ఆధారపడి ఉంటాయి.",
    "Family health profiles": "కుటుంబ ఆరోగ్య ప్రొఫైల్‌లు",
    "Keep each family member’s records, reminders, wellness plans, and AI chats in a separate workspace.": "ప్రతి కుటుంబ సభ్యుడి రికార్డులు, రిమైండర్లు, ఆరోగ్య ప్రణాళికలు, AI చాట్‌లను వేర్వేరు కార్యస్థలాల్లో ఉంచండి.",
    "Add family profile": "కుటుంబ ప్రొఫైల్ జోడించండి",
    "Profiles share the signed-in account and its storage; they are separate workspace views, not separate logins. Review the active profile before adding records or asking the AI.": "ప్రొఫైల్‌లు సైన్ ఇన్ చేసిన ఖాతా మరియు నిల్వను పంచుకుంటాయి; ఇవి వేర్వేరు కార్యస్థల వీక్షణలు మాత్రమే, వేర్వేరు లాగిన్‌లు కావు. రికార్డులు జోడించే లేదా AIని అడిగే ముందు సక్రియ ప్రొఫైల్‌ను తనిఖీ చేయండి.",
    "This prototype stores family profiles under the signed-in account. Review the active profile before adding records or asking the AI.": "ఈ నమూనాలో కుటుంబ ప్రొఫైల్‌లు సైన్ ఇన్ చేసిన ఖాతాలో నిల్వ అవుతాయి. రికార్డులు జోడించే ముందు లేదా AIని అడిగే ముందు సక్రియ ప్రొఫైల్‌ను తనిఖీ చేయండి.",
    "Reviewable care suggestions": "పరిశీలించగల సంరక్షణ సూచనలు",
    "Nothing is scheduled until you review, edit, verify against the original, and confirm it.": "మీరు పరిశీలించి, సవరించి, అసలుతో ధృవీకరించి, నిర్ధారించే వరకు ఏదీ షెడ్యూల్ కాదు.",
    "Review & edit": "పరిశీలించి సవరించండి",
    "Reject": "తిరస్కరించండి",
    "Questions to review with your clinician": "వైద్యునితో పరిశీలించాల్సిన ప్రశ్నలు",
    "Edit these in AI Health Mentor": "AI ఆరోగ్య సహాయకుడిలో సవరించండి",
    "AI suggestions awaiting your review": "మీ పరిశీలన కోసం AI సూచనలు",
    "These suggestions are saved with the profile’s reports. They are not scheduled until you verify and confirm them.": "ఈ సూచనలు ప్రొఫైల్ నివేదికలతో సేవ్ అవుతాయి. మీరు ధృవీకరించి నిర్ధారించే వరకు షెడ్యూల్ కావు.",
    "Dismiss questions": "ప్రశ్నలను తీసివేయండి",
    "Create a separate profile for each family member. Their reports, reminders, plans, and AI chats stay in that profile.": "ప్రతి కుటుంబ సభ్యునికి వేరు ప్రొఫైల్ సృష్టించండి. వారి నివేదికలు, రిమైండర్లు, ప్రణాళికలు, AI చాట్‌లు ఆ ప్రొఫైల్‌లోనే ఉంటాయి.",
    "A date printed in this report has passed. Check with your healthcare professional whether the follow-up or repeat test is still due; this prototype does not schedule it automatically.": "ఈ నివేదికలో ముద్రించిన తేదీ గడిచిపోయింది. ఫాలో-అప్ లేదా మళ్లీ పరీక్ష ఇంకా అవసరమా అని వైద్యునితో నిర్ధారించండి; ఈ నమూనా స్వయంగా షెడ్యూల్ చేయదు.",
    "Medicine reminder": "మందుల రిమైండర్",
    "Appointment reminder": "అపాయింట్‌మెంట్ రిమైండర్",
    "Parent": "తల్లిదండ్రులు",
    "Child": "పిల్లలు",
    "Spouse": "జీవిత భాగస్వామి",
    "Caregiver": "సంరక్షకుడు",
    "Other": "ఇతర"
});
Object.assign(uiTextTranslations.hi, {
    "Listen": "सुनें",
    "Use Listen on an assistant reply to hear it in the selected language. Available voices depend on your browser and device.": "सहायक का जवाब चुनी हुई भाषा में सुनने के लिए Listen दबाएँ। उपलब्ध आवाज़ें आपके ब्राउज़र और डिवाइस पर निर्भर करती हैं।",
    "Family health profiles": "परिवार के स्वास्थ्य प्रोफ़ाइल",
    "Keep each family member’s records, reminders, wellness plans, and AI chats in a separate workspace.": "हर परिवार सदस्य के रिकॉर्ड, रिमाइंडर, स्वास्थ्य योजनाएँ और AI चैट अलग कार्यक्षेत्र में रखें।",
    "Add family profile": "परिवार प्रोफ़ाइल जोड़ें",
    "Profiles share the signed-in account and its storage; they are separate workspace views, not separate logins. Review the active profile before adding records or asking the AI.": "प्रोफ़ाइल साइन-इन खाते और उसके स्टोरेज को साझा करती हैं; वे अलग कार्यक्षेत्र दृश्य हैं, अलग लॉगिन नहीं। रिकॉर्ड जोड़ने या AI से पूछने से पहले सक्रिय प्रोफ़ाइल जाँचें।",
    "This prototype stores family profiles under the signed-in account. Review the active profile before adding records or asking the AI.": "यह प्रोटोटाइप परिवार प्रोफ़ाइल को साइन-इन खाते में सहेजता है। रिकॉर्ड जोड़ने या AI से पूछने से पहले सक्रिय प्रोफ़ाइल जाँचें।",
    "Reviewable care suggestions": "जाँचने योग्य देखभाल सुझाव",
    "Nothing is scheduled until you review, edit, verify against the original, and confirm it.": "जब तक आप जाँचकर, संपादित करके, मूल पर्चे से मिलाकर पुष्टि नहीं करते, कुछ भी शेड्यूल नहीं होगा।",
    "Review & edit": "जाँचें और संपादित करें",
    "Reject": "अस्वीकार करें",
    "Questions to review with your clinician": "डॉक्टर से पूछने के लिए प्रश्न",
    "Edit these in AI Health Mentor": "AI स्वास्थ्य सहायक में संपादित करें",
    "AI suggestions awaiting your review": "आपकी समीक्षा के लिए AI सुझाव",
    "These suggestions are saved with the profile’s reports. They are not scheduled until you verify and confirm them.": "ये सुझाव प्रोफ़ाइल रिपोर्टों के साथ सहेजे जाते हैं। आपके सत्यापित और पुष्टि करने तक इन्हें शेड्यूल नहीं किया जाएगा।",
    "Dismiss questions": "प्रश्न हटाएँ",
    "Create a separate profile for each family member. Their reports, reminders, plans, and AI chats stay in that profile.": "हर परिवार सदस्य के लिए अलग प्रोफ़ाइल बनाएँ। उनकी रिपोर्ट, रिमाइंडर, योजनाएँ और AI चैट उसी प्रोफ़ाइल में रहेंगी।",
    "A date printed in this report has passed. Check with your healthcare professional whether the follow-up or repeat test is still due; this prototype does not schedule it automatically.": "रिपोर्ट में दी गई तारीख बीत चुकी है। डॉक्टर से पूछें कि फॉलो-अप या दोबारा जाँच अभी भी आवश्यक है या नहीं; यह प्रोटोटाइप इसे अपने आप शेड्यूल नहीं करता।",
    "Medicine reminder": "दवा रिमाइंडर",
    "Appointment reminder": "अपॉइंटमेंट रिमाइंडर",
    "Parent": "माता-पिता",
    "Child": "बच्चा",
    "Spouse": "जीवनसाथी",
    "Caregiver": "देखभालकर्ता",
    "Other": "अन्य"
});

Object.assign(uiTextTranslations.te, {
    "Analyzed documents are added to Medical records. Signed-in users can view them across devices; guest records stay in this browser. Medical documents are private and are never shared by an ID alone.": "విశ్లేషించిన పత్రాలు Medical records‌లో చేరతాయి. సైన్ ఇన్ చేసినవారు వాటిని పలు పరికరాల్లో చూడవచ్చు; అతిథి రికార్డులు ఈ బ్రౌజర్‌లోనే ఉంటాయి. వైద్య పత్రాలు ప్రైవేట్‌గా ఉంటాయి; ID ఒక్కటితో పంచుకోబడవు.",
    "View saved analysis": "సేవ్ చేసిన విశ్లేషణను చూడండి"
});
Object.assign(uiTextTranslations.hi, {
    "Analyzed documents are added to Medical records. Signed-in users can view them across devices; guest records stay in this browser. Medical documents are private and are never shared by an ID alone.": "विश्लेषित दस्तावेज़ मेडिकल रिकॉर्ड में जोड़े जाते हैं। साइन-इन उपयोगकर्ता उन्हें कई डिवाइस पर देख सकते हैं; अतिथि रिकॉर्ड इसी ब्राउज़र में रहते हैं। मेडिकल दस्तावेज़ निजी हैं और केवल ID से साझा नहीं होते।",
    "View saved analysis": "सहेजा गया विश्लेषण देखें"
});

const NexHealth = (() => {
    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

    const STORAGE_BASE = {
        records: "nexhealth_records",
        tasks: "nexhealth_tasks",
        appointments: "nexhealth_appointments",
        medicationReminders: "nexhealth_medication_reminders",
        meals: "nexhealth_meals",
        analyses: "nexhealth_analyses",
        messages: "nexhealth_messages",
        mentorConversations: "nexhealth_mentor_conversations",
        activeMentorConversationId: "nexhealth_active_mentor_conversation",
        analyzerConversations: "nexhealth_analyzer_conversations",
        activeAnalyzerConversationId: "nexhealth_active_analyzer_conversation",
        activeConversationType: "nexhealth_active_conversation_type",
        profile: "nexhealth_profile",
        dietPreferences: "nexhealth_diet_preferences",
        consent: "nexhealth_consent",
        consentHistory: "nexhealth_consent_history",
        personalizedPlan: "nexhealth_personalized_plan",
        familyProfiles: "nexhealth_family_profiles",
        activeFamilyProfileId: "nexhealth_active_family_profile"
    };
    let STORAGE = { ...STORAGE_BASE };
    let activeUserId = "";
    let authMode = "login";
    let appEventsBound = false;
    let workspaceHydrated = false;
    let workspaceSaveTimer = null;
    let workspaceSaveInFlight = false;
    let workspaceSaveQueued = false;
    let accountCacheFallback = false;
    let clearGuestCacheAfterCloudSave = false;
    let welcomeGreetingIndex = 0;
    let preserveNextMentorNavigation = false;
    let medicationReminderTimer = null;
    let recordSharing = { active: false, requests: [], shares: [], code: "" };

    const userStorageKey = key => `${key}_${activeUserId}`;

    const read = (key, fallback) => {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : fallback;
        } catch {
            return fallback;
        }
    };

    const state = {
        screen: "overview",
        language: localStorage.getItem("nexhealth_language") || "en",
        records: read(STORAGE.records, []),
        tasks: read(STORAGE.tasks, []),
        appointments: read(STORAGE.appointments, []),
        medicationReminders: read(STORAGE.medicationReminders, []),
        meals: read(STORAGE.meals, []),
        analyses: read(STORAGE.analyses, []),
        messages: read(STORAGE.messages, []),
        mentorConversations: read(STORAGE.mentorConversations, []),
        activeMentorConversationId: read(STORAGE.activeMentorConversationId, ""),
        analyzerConversations: read(STORAGE.analyzerConversations, []),
        activeAnalyzerConversationId: read(STORAGE.activeAnalyzerConversationId, ""),
        activeConversationType: read(STORAGE.activeConversationType, "mentor"),
        profile: read(STORAGE.profile, {}),
        dietPreferences: read(STORAGE.dietPreferences, {}),
        consent: read(STORAGE.consent, {
            necessary: true,
            analytics: false,
            aiProcessing: false,
            healthcareSharing: false
        }),
        consentHistory: read(STORAGE.consentHistory, []),
        personalizedPlan: read(STORAGE.personalizedPlan, null),
        familyProfiles: read(STORAGE.familyProfiles, []),
        activeFamilyProfileId: read(STORAGE.activeFamilyProfileId, ""),
        recordFilter: "all",
        taskFilter: "all",
        appointmentFilter: "upcoming",
        selectedFile: null,
        busy: false
    };

    const activateUser = user => {
        activeUserId = user.id;
        accountCacheFallback = !user.demo_mode;
        STORAGE = Object.fromEntries(
            Object.entries(STORAGE_BASE).map(([name, key]) => [name, userStorageKey(key)])
        );
        state.records = read(STORAGE.records, []);
        state.tasks = read(STORAGE.tasks, []);
        state.appointments = read(STORAGE.appointments, []);
        state.medicationReminders = read(STORAGE.medicationReminders, []);
        state.meals = read(STORAGE.meals, []);
        state.analyses = read(STORAGE.analyses, []);
        state.messages = read(STORAGE.messages, []);
        state.mentorConversations = read(STORAGE.mentorConversations, []);
        state.activeMentorConversationId = read(STORAGE.activeMentorConversationId, "");
        state.analyzerConversations = read(STORAGE.analyzerConversations, []);
        state.activeAnalyzerConversationId = read(STORAGE.activeAnalyzerConversationId, "");
        state.activeConversationType = read(STORAGE.activeConversationType, "mentor") === "analyzer" ? "analyzer" : "mentor";
        state.profile = read(STORAGE.profile, {});
        state.dietPreferences = read(STORAGE.dietPreferences, {});
        state.consent = read(STORAGE.consent, {
            necessary: true,
            analytics: false,
            aiProcessing: false,
            healthcareSharing: false
        });
        state.consentHistory = read(STORAGE.consentHistory, []);
        state.personalizedPlan = read(STORAGE.personalizedPlan, null);
        state.familyProfiles = read(STORAGE.familyProfiles, []);
        state.activeFamilyProfileId = read(STORAGE.activeFamilyProfileId, "");
    };

    const clearAccountLocalCache = () => {
        Object.values(STORAGE).forEach(key => localStorage.removeItem(key));
        localStorage.removeItem(userStorageKey("nexhealth_mock_abha"));
        localStorage.removeItem(userStorageKey("nexhealth_mock_abha_consent"));
    };

    const clearGuestLocalCache = () => {
        Object.values(STORAGE_BASE).forEach(key => localStorage.removeItem(key));
        localStorage.removeItem("nexhealth_mock_abha");
        localStorage.removeItem("nexhealth_mock_abha_consent");
    };

    const save = (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch {
            toast("Unable to save browser data. Check available storage.", "error");
            return false;
        }
    };


    const t = (key) => {
        const language = translations[state.language] || translations.en;
        return language[key] || privacyUiTranslations[state.language]?.[key] || uiTextTranslations[state.language]?.[key] || translations.en[key] || key;
    };


const translatedTextNodes = new Map();
const translatedAttributes = new Map();
const translatedAttributeNames = ["placeholder", "aria-label", "aria-description", "title", "alt"];

const applyTranslations = (root = document.body) => {
    if (!root) return;

    const nodes = [];
    if (root.nodeType === Node.TEXT_NODE) nodes.push(root);
    else if (root.nodeType === Node.ELEMENT_NODE) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                return node.parentElement?.closest("script, style, noscript, textarea, [contenteditable='true']")
                    ? NodeFilter.FILTER_REJECT
                    : NodeFilter.FILTER_ACCEPT;
            }
        });
        while (walker.nextNode()) nodes.push(walker.currentNode);
    }

    const legacyLabels = {
        Overview: "overview",
        "Medical records": "medicalRecords",
        "AI analyzer": "aiAnalyzer",
        "Diet & tasks": "dietTasks",
        Appointments: "appointments",
        "Health services": "healthServices",
        "AI mentor": "aiMentor",
        "Privacy & consent": "privacyConsent",
        Settings: "settings",
        WORKSPACE: "workspace",
        "Personal workspace": "personalWorkspace",
        "Health dashboard": "healthDashboard"
    };
    const dictionary = Object.fromEntries(
        Object.entries(legacyLabels).map(([text, key]) => [text, translations[state.language]?.[key] || text])
    );
    Object.assign(dictionary, uiTextTranslations[state.language] || {});
    Object.assign(dictionary, privacyUiTranslations[state.language] || {});
    const originalTitle = "NexHealth | Your Health, Connected";
    document.title = dictionary[originalTitle] || originalTitle;
    nodes.forEach((node) => {
        if (!translatedTextNodes.has(node)) {
            const original = node.nodeValue || "";
            if (original.trim()) translatedTextNodes.set(node, original);
        }
        const original = translatedTextNodes.get(node);
        if (!original) return;
        const translated = dictionary[original.trim()];
        if (!translated) {
            node.nodeValue = original;
            return;
        }
        const leading = original.match(/^\s*/)?.[0] || "";
        const trailing = original.match(/\s*$/)?.[0] || "";
        node.nodeValue = `${leading}${translated}${trailing}`;
    });

    const elements = root.nodeType === Node.ELEMENT_NODE
        ? [root, ...root.querySelectorAll("*")]
        : [];
    elements.forEach((element) => {
        let originals = translatedAttributes.get(element);
        if (!originals) {
            originals = {};
            translatedAttributes.set(element, originals);
        }
        translatedAttributeNames.forEach((name) => {
            if (element.hasAttribute(name) && !(name in originals)) {
                originals[name] = element.getAttribute(name);
            }
            const original = originals[name];
            const translated = original && dictionary[original];
            if (original) element.setAttribute(name, translated || original);
        });
    });

    document.documentElement.lang = state.language;
    ["siteLanguage", "mentorLanguage", "settingsLanguage"].forEach((id) => {
        const select = document.getElementById(id);
        if (select) select.value = state.language;
    });
    observeTranslatedContent();
};

const observeTranslatedContent = () => {
    if (document.body.dataset.translationObserverBound) return;
    document.body.dataset.translationObserverBound = "true";
    new MutationObserver((mutations) => {
        mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
                applyTranslations(node);
            }
        }));
    }).observe(document.body, { childList: true, subtree: true });
};



    const workspaceSnapshot = () => {
        syncActiveConversation();
        saveActiveFamilySnapshot();
        return {
            records: state.records,
            tasks: state.tasks,
            appointments: state.appointments,
            medicationReminders: state.medicationReminders,
            meals: state.meals,
            analyses: state.analyses,
            messages: state.messages,
            mentorConversations: state.mentorConversations,
            activeMentorConversationId: state.activeMentorConversationId,
            analyzerConversations: state.analyzerConversations,
            activeAnalyzerConversationId: state.activeAnalyzerConversationId,
            activeConversationType: state.activeConversationType,
            profile: state.profile,
            dietPreferences: state.dietPreferences,
            consent: state.consent,
            consentHistory: state.consentHistory,
            personalizedPlan: state.personalizedPlan,
            familyProfiles: state.familyProfiles,
            activeFamilyProfileId: state.activeFamilyProfileId
        };
    };

    const familyScopedKeys = [
        "records", "tasks", "appointments", "medicationReminders", "meals", "analyses",
        "messages", "mentorConversations", "activeMentorConversationId", "analyzerConversations",
        "activeAnalyzerConversationId", "activeConversationType", "profile", "dietPreferences", "personalizedPlan"
    ];
    const saveActiveFamilySnapshot = () => {
        if (!state.activeFamilyProfileId || !Array.isArray(state.familyProfiles)) return;
        const member = state.familyProfiles.find(profile => profile.id === state.activeFamilyProfileId);
        if (!member) return;
        member.workspace = Object.fromEntries(familyScopedKeys.map(key => [
            key,
            JSON.parse(JSON.stringify(state[key] ?? null))
        ]));
        member.name = String(state.profile?.name || member.name || "Family profile").slice(0, 80);
    };

    const applyWorkspaceSnapshot = workspace => {
        if (!workspace || typeof workspace !== "object" || Array.isArray(workspace)) return false;
        const arrayKeys = ["records", "tasks", "appointments", "medicationReminders", "meals", "analyses", "messages"];
        arrayKeys.forEach(key => {
            if (Array.isArray(workspace[key])) state[key] = workspace[key];
        });
        if (Array.isArray(workspace.mentorConversations)) {
            state.mentorConversations = workspace.mentorConversations;
        } else if (state.mentorConversations.length && state.messages.length) {
            const legacyMessages = JSON.stringify(state.messages);
            const alreadyStored = state.mentorConversations.some(conversation =>
                JSON.stringify(conversation.messages) === legacyMessages);
            if (!alreadyStored) state.mentorConversations.push(createMentorConversation(state.messages));
        }
        if (typeof workspace.activeMentorConversationId === "string") {
            state.activeMentorConversationId = workspace.activeMentorConversationId;
        }
        if (Array.isArray(workspace.analyzerConversations)) {
            state.analyzerConversations = workspace.analyzerConversations;
        }
        if (typeof workspace.activeAnalyzerConversationId === "string") {
            state.activeAnalyzerConversationId = workspace.activeAnalyzerConversationId;
        }
        if (workspace.activeConversationType === "mentor" || workspace.activeConversationType === "analyzer") {
            state.activeConversationType = workspace.activeConversationType;
        }
        ensureActiveConversation();
        ["profile", "dietPreferences", "consent"].forEach(key => {
            if (workspace[key] && typeof workspace[key] === "object" && !Array.isArray(workspace[key])) {
                state[key] = workspace[key];
            }
        });
        if (Array.isArray(workspace.consentHistory)) state.consentHistory = workspace.consentHistory;
        if (workspace.personalizedPlan && typeof workspace.personalizedPlan === "object") {
            state.personalizedPlan = workspace.personalizedPlan;
        } else {
            state.personalizedPlan = null;
        }
        state.familyProfiles = Array.isArray(workspace.familyProfiles) ? workspace.familyProfiles : [];
        state.activeFamilyProfileId = typeof workspace.activeFamilyProfileId === "string" ? workspace.activeFamilyProfileId : "";
        return true;
    };

    const flushWorkspaceSave = async () => {
        if (workspaceSaveInFlight) {
            workspaceSaveQueued = true;
            return false;
        }
        workspaceSaveInFlight = true;
        workspaceSaveQueued = false;
        try {
            await apiRequest("/api/workspace", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ workspace: workspaceSnapshot() })
            });
            accountCacheFallback = false;
            clearAccountLocalCache();
            if (clearGuestCacheAfterCloudSave) {
                clearGuestLocalCache();
                clearGuestCacheAfterCloudSave = false;
            }
            return true;
        } catch (error) {
            const message = accountCacheFallback
                ? `Database sync failed: ${error.message}. This change is saved only in this browser.`
                : `Database sync failed: ${error.message}. Keep this tab open and retry before leaving.`;
            toast(message, "error");
            return false;
        } finally {
            workspaceSaveInFlight = false;
            if (workspaceSaveQueued) scheduleWorkspaceSave();
        }
    };

    const scheduleWorkspaceSave = () => {
        if (workspaceSaveTimer) clearTimeout(workspaceSaveTimer);
        workspaceSaveTimer = setTimeout(() => {
            workspaceSaveTimer = null;
            flushWorkspaceSave();
        }, 500);
    };

    const persist = () => {
        syncActiveConversation();
        saveActiveFamilySnapshot();
        const signedIn = Boolean(activeUserId) && !document.body.classList.contains("local-demo-mode");
        if (!signedIn || accountCacheFallback) {
            save(STORAGE.records, state.records);
            save(STORAGE.tasks, state.tasks);
            save(STORAGE.appointments, state.appointments);
            save(STORAGE.medicationReminders, state.medicationReminders);
            save(STORAGE.meals, state.meals);
            save(STORAGE.analyses, state.analyses);
            save(STORAGE.messages, state.messages);
            save(STORAGE.mentorConversations, state.mentorConversations);
            save(STORAGE.activeMentorConversationId, state.activeMentorConversationId);
            save(STORAGE.analyzerConversations, state.analyzerConversations);
            save(STORAGE.activeAnalyzerConversationId, state.activeAnalyzerConversationId);
            save(STORAGE.activeConversationType, state.activeConversationType);
            save(STORAGE.profile, state.profile);
            save(STORAGE.dietPreferences, state.dietPreferences);
            save(STORAGE.consent, state.consent);
            save(STORAGE.consentHistory, state.consentHistory);
            save(STORAGE.personalizedPlan, state.personalizedPlan);
            save(STORAGE.familyProfiles, state.familyProfiles);
            save(STORAGE.activeFamilyProfileId, state.activeFamilyProfileId);
        }
        if (workspaceHydrated && activeUserId && !document.body.classList.contains("local-demo-mode")) {
            scheduleWorkspaceSave();
        }
    };

    const hasWorkspaceData = workspace => {
        if (!workspace) return false;
        return ["records", "tasks", "appointments", "medicationReminders", "meals", "analyses", "messages", "mentorConversations", "analyzerConversations", "consentHistory"]
            .some(key => Array.isArray(workspace[key]) && workspace[key].length > 0)
            || ["profile", "dietPreferences"].some(key =>
                workspace[key] && Object.keys(workspace[key]).length > 0
            )
            || Boolean(workspace.personalizedPlan)
            || (Array.isArray(workspace.familyProfiles) && workspace.familyProfiles.length > 0);
    };

    const mergeGuestWorkspace = guestWorkspace => {
        ensureMentorConversations();
        ["records", "tasks", "appointments", "medicationReminders", "meals", "analyses", "consentHistory"]
            .forEach(key => {
                const accountItems = Array.isArray(state[key]) ? state[key] : [];
                const guestItems = Array.isArray(guestWorkspace[key]) ? guestWorkspace[key] : [];
                const seenIds = new Set(accountItems.map(item => item?.id).filter(Boolean));
                state[key] = [
                    ...accountItems,
                    ...guestItems.filter(item => !item?.id || !seenIds.has(item.id))
                ];
            });
        const guestConversations = Array.isArray(guestWorkspace.mentorConversations)
            ? guestWorkspace.mentorConversations
            : (Array.isArray(guestWorkspace.messages) && guestWorkspace.messages.length
                ? [createMentorConversation(guestWorkspace.messages)]
                : []);
        const existingConversationIds = new Set(state.mentorConversations.map(conversation => conversation.id));
        state.mentorConversations.push(...guestConversations.filter(conversation =>
            conversation?.id && !existingConversationIds.has(conversation.id)));
        const guestAnalyzerConversations = Array.isArray(guestWorkspace.analyzerConversations)
            ? guestWorkspace.analyzerConversations
            : [];
        const existingAnalyzerIds = new Set(state.analyzerConversations.map(conversation => conversation.id));
        state.analyzerConversations.push(...guestAnalyzerConversations.filter(conversation =>
            conversation?.id && !existingAnalyzerIds.has(conversation.id)));
        if (guestWorkspace.activeConversationType === "analyzer" && guestWorkspace.activeAnalyzerConversationId && guestAnalyzerConversations.some(conversation =>
            conversation.id === guestWorkspace.activeAnalyzerConversationId)) {
            state.activeAnalyzerConversationId = guestWorkspace.activeAnalyzerConversationId;
            state.activeConversationType = "analyzer";
        } else if (guestWorkspace.activeMentorConversationId && guestConversations.some(conversation =>
            conversation.id === guestWorkspace.activeMentorConversationId)) {
            state.activeMentorConversationId = guestWorkspace.activeMentorConversationId;
            state.activeConversationType = "mentor";
        }
        ensureActiveConversation();
        state.profile = { ...(guestWorkspace.profile || {}), ...(state.profile || {}) };
        state.dietPreferences = { ...(guestWorkspace.dietPreferences || {}), ...(state.dietPreferences || {}) };
        state.consent = { ...(guestWorkspace.consent || {}), ...(state.consent || {}) };
        if (!state.personalizedPlan && guestWorkspace.personalizedPlan) {
            state.personalizedPlan = guestWorkspace.personalizedPlan;
        }
        if (!state.familyProfiles.length && Array.isArray(guestWorkspace.familyProfiles)) {
            state.familyProfiles = guestWorkspace.familyProfiles;
            state.activeFamilyProfileId = guestWorkspace.activeFamilyProfileId || "";
        }
        clearGuestCacheAfterCloudSave = true;
        persist();
    };

    const updateSettingsAccountPanels = () => {
        const signedIn = document.body.classList.contains("account-authenticated");
        const loginPanel = $("#settingsLoginPanel");
        const signoutPanel = $("#settingsSignoutPanel");
        const cloudDataDeletionRow = $("#cloudDataDeletionRow");
        if (loginPanel) loginPanel.hidden = signedIn;
        if (signoutPanel) signoutPanel.hidden = !signedIn;
        if (cloudDataDeletionRow) cloudDataDeletionRow.style.display = signedIn ? "flex" : "none";
    };

    const id = () =>
        crypto.randomUUID?.() ||
        `${Date.now()}-${Math.random().toString(36).slice(2)}`;

    const mentorConversationTitle = messages => {
        const firstQuestion = (messages || []).find(message => message?.role === "user" && message.content)?.content;
        if (!firstQuestion) return "New chat";
        const title = String(firstQuestion).replace(/\s+/g, " ").trim();
        return title.length > 42 ? `${title.slice(0, 39).trimEnd()}…` : title;
    };

    const createMentorConversation = (messages = []) => {
        const now = new Date().toISOString();
        return {
            id: id(),
            title: mentorConversationTitle(messages),
            createdAt: now,
            updatedAt: now,
            messages: Array.isArray(messages) ? messages : []
        };
    };

    const conversationGroup = type => type === "analyzer"
        ? state.analyzerConversations
        : state.mentorConversations;

    const activeConversationId = type => type === "analyzer"
        ? state.activeAnalyzerConversationId
        : state.activeMentorConversationId;

    const setActiveConversationId = (type, conversationId) => {
        if (type === "analyzer") state.activeAnalyzerConversationId = conversationId;
        else state.activeMentorConversationId = conversationId;
    };

    const ensureConversationGroup = (type, activate = false, createIfEmpty = true) => {
        const list = conversationGroup(type);
        const valid = Array.isArray(list)
            ? list.filter(conversation => conversation && typeof conversation.id === "string" && Array.isArray(conversation.messages))
            : [];
        if (type === "analyzer") state.analyzerConversations = valid;
        else state.mentorConversations = valid;

        if (!valid.length && createIfEmpty) {
            const legacy = type === "mentor" && state.activeConversationType === "mentor" && Array.isArray(state.messages)
                ? state.messages
                : [];
            valid.push(createMentorConversation(legacy));
            if (type === "analyzer") state.analyzerConversations = valid;
            else state.mentorConversations = valid;
        }
        if (!valid.length) return null;

        let active = valid.find(conversation => conversation.id === activeConversationId(type));
        if (!active) {
            active = [...valid].sort((left, right) =>
                String(right.updatedAt || "").localeCompare(String(left.updatedAt || "")))[0];
            setActiveConversationId(type, active.id);
        }
        if (activate) {
            state.activeConversationType = type;
            state.messages = active.messages;
        }
        return active;
    };

    const ensureMentorConversations = () => ensureConversationGroup(
        "mentor", state.activeConversationType === "mentor", true
    );

    const ensureActiveConversation = () => {
        if (state.activeConversationType === "analyzer" &&
            (!Array.isArray(state.analyzerConversations) || !state.analyzerConversations.length)) {
            state.activeConversationType = "mentor";
        }
        return ensureConversationGroup(
            state.activeConversationType === "analyzer" ? "analyzer" : "mentor", true, true
        );
    };

    const syncActiveConversation = (touch = false) => {
        const conversation = ensureActiveConversation();
        const type = state.activeConversationType;
        if (!conversation) return null;
        conversation.messages = state.messages;
        if (type === "mentor") conversation.title = mentorConversationTitle(conversation.messages);
        else conversation.title ||= "Report conversation";
        if (touch) conversation.updatedAt = new Date().toISOString();
        return conversation;
    };

    const escapeHTML = value =>
        String(value ?? "").replace(/[&<>"']/g, char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[char]);

    const formatMentorContent = value => {
        const text = String(value ?? "")
            .replace(/\\\r?\n/g, "\n")
            .replace(/\r\n?/g, "\n")
            .replace(/^\s*\\\s*$/gm, "")
            .replace(/\\([\\`*_{}#+.!>|~-])/g, "$1")
            .replace(/\\([\[\]()])/g, "$1")
            .replace(/^\s*(?:\*\*|__)?\s*NexHealth Mentor\s*(?:\*\*|__)?\s*\n+/i, "");
        const inline = value => escapeHTML(value)
            .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
            .replace(/__(.+?)__/g, "<strong>$1</strong>")
            .replace(/`([^`]+)`/g, "<code>$1</code>");
        const blocks = [];
        let paragraph = [];
        let listType = "";
        let listItems = [];

        const flushParagraph = () => {
            if (!paragraph.length) return;
            blocks.push(`<p>${inline(paragraph.join(" "))}</p>`);
            paragraph = [];
        };

        const flushList = () => {
            if (!listItems.length) return;
            blocks.push(`<${listType}>${listItems.map(item => `<li>${inline(item)}</li>`).join("")}</${listType}>`);
            listItems = [];
            listType = "";
        };

        text.split("\n").forEach(rawLine => {
            const line = rawLine.trim();
            if (!line) {
                flushParagraph();
                flushList();
                return;
            }

            const heading = line.match(/^#{1,6}\s+(.+?)\s*#*$/);
            if (heading) {
                flushParagraph();
                flushList();
                blocks.push(`<h4>${inline(heading[1])}</h4>`);
                return;
            }

            const unordered = line.match(/^[-*+]\s+(.+)$/);
            const ordered = line.match(/^\d+\.\s+(.+)$/);
            const item = unordered || ordered;
            if (item) {
                flushParagraph();
                const nextListType = unordered ? "ul" : "ol";
                if (listType && listType !== nextListType) flushList();
                listType = nextListType;
                listItems.push(item[1]);
                return;
            }

            flushList();
            paragraph.push(line);
        });

        flushParagraph();
        flushList();
        return blocks.join("");
    };

    const formatAnalysisContent = value => {
        const text = String(value ?? "")
            .replace(/\\\r?\n/g, "\n")
            .replace(/\r\n?/g, "\n")
            .replace(/^\s*\\\s*$/gm, "")
            .replace(/\\([\\`*_{}#+.!>|~-])/g, "$1")
            .replace(/\\([\[\]()])/g, "$1");
        const inline = value => escapeHTML(value)
            .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
            .replace(/__(.+?)__/g, "<strong>$1</strong>")
            .replace(/\*([^*]+)\*/g, "<em>$1</em>");
        const blocks = [];
        let paragraph = [];
        let listType = "";
        let listItems = [];

        const flushParagraph = () => {
            if (!paragraph.length) return;
            blocks.push(`<p>${inline(paragraph.join(" "))}</p>`);
            paragraph = [];
        };
        const flushList = () => {
            if (!listItems.length) return;
            blocks.push(`<${listType}>${listItems.map(item => `<li>${inline(item)}</li>`).join("")}</${listType}>`);
            listItems = [];
            listType = "";
        };

        text.split("\n").forEach(rawLine => {
            const line = rawLine.trim();
            if (!line) {
                flushParagraph();
                flushList();
                return;
            }

            const heading = line.match(/^#{1,6}\s+(.+?)\s*#*$/) || line.match(/^\*\*(.+?)\*\*$/);
            if (heading) {
                flushParagraph();
                flushList();
                blocks.push(`<h4>${inline(heading[1])}</h4>`);
                return;
            }

            const unordered = line.match(/^[-*+]\s+(.+)$/);
            const ordered = line.match(/^\d+\.\s+(.+)$/);
            const item = unordered || ordered;
            if (item) {
                flushParagraph();
                const nextListType = unordered ? "ul" : "ol";
                if (listType && listType !== nextListType) flushList();
                listType = nextListType;
                listItems.push(item[1]);
                return;
            }

            flushList();
            paragraph.push(line);
        });

        flushParagraph();
        flushList();
        return blocks.join("");
    };

    const today = () => {
        const date = new Date();
        const offset = date.getTimezoneOffset();
        return new Date(date.getTime() - offset * 60000)
            .toISOString().slice(0, 10);
    };

    const uiLocale = () => ({ en: "en", te: "te-IN", hi: "hi-IN" }[state.language] || "en");

    const formatDate = value => {
        if (!value) return "Date not set";
        const date = new Date(`${value}`.length === 10 ? `${value}T12:00:00` : value);
        if (Number.isNaN(date.getTime())) return value;
        return new Intl.DateTimeFormat(uiLocale(), {
            day: "numeric",
            month: "short",
            year: "numeric"
        }).format(date);
    };

    const formatSize = bytes => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    };

    const isSupportedMedicalDocument = file =>
        /\.(pdf|jpe?g|png|webp|docx)$/i.test(String(file?.name || ""));

    const toast = (message, type = "success") => {
        let region = $("#toast-region") || $(".toast-region");

        if (!region) {
            region = document.createElement("div");
            region.className = "toast-region";
            region.id = "toast-region";
            document.body.appendChild(region);
        }

        const item = document.createElement("div");
        item.className = `toast ${type}`;
        item.setAttribute("role", "status");
        item.textContent = message;
        region.appendChild(item);

        window.setTimeout(() => item.remove(), 3500);
    };

    const refreshIcons = () => {
        if (window.lucide?.createIcons) {
            window.lucide.createIcons();
        }
    };

    const activeVoiceInputs = new Map();
    let speakingMessageIndex = null;
    const startVoiceInput = button => {
        const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const target = document.getElementById(button.dataset.voiceTarget);
        if (!target) return;
        if (!Recognition) {
            toast("Voice input is not supported by this browser. You can still type here.", "warning");
            return;
        }

        const active = activeVoiceInputs.get(button);
        if (active) {
            active.stop();
            return;
        }

        activeVoiceInputs.forEach(recognition => recognition.stop());
        const recognition = new Recognition();
        const languageCodes = { en: "en-US", te: "te-IN", hi: "hi-IN" };
        recognition.lang = languageCodes[state.language] || "en-US";
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        activeVoiceInputs.set(button, recognition);

        recognition.onstart = () => {
            button.classList.add("is-listening");
            button.setAttribute("aria-pressed", "true");
            button.setAttribute("aria-label", `Listening in ${state.language.toUpperCase()}. Stop voice input`);
            button.title = "Listening… click to stop";
            button.innerHTML = '<i data-lucide="mic-off"></i>';
            refreshIcons();
        };
        recognition.onresult = event => {
            const transcript = event.results?.[0]?.[0]?.transcript?.trim();
            if (!transcript) return;
            const existing = target.value.trim();
            const combined = `${existing}${existing ? " " : ""}${transcript}`;
            target.value = target.maxLength > 0 ? combined.slice(0, target.maxLength) : combined;
            target.dispatchEvent(new Event("input", { bubbles: true }));
            target.focus();
        };
        recognition.onerror = event => {
            if (event.error === "not-allowed" || event.error === "service-not-allowed") {
                toast("Microphone access was blocked. Allow it in your browser settings to use voice input.", "error");
            } else if (event.error !== "no-speech" && event.error !== "aborted") {
                toast(`Voice input failed (${event.error}). You can still type here.`, "error");
            }
        };
        recognition.onend = () => {
            activeVoiceInputs.delete(button);
            button.classList.remove("is-listening");
            button.setAttribute("aria-pressed", "false");
            button.setAttribute("aria-label", "Start voice input");
            button.title = "Start voice input. Speech is processed by your browser's speech service.";
            button.innerHTML = '<i data-lucide="mic"></i>';
            refreshIcons();
        };

        try {
            recognition.start();
        } catch (error) {
            activeVoiceInputs.delete(button);
            toast("Could not start voice input. Check microphone access and try again.", "error");
        }
    };

    const screenAliases = {
        "overview": "overview",
        "medical-records": "medical-records",
        "records": "medical-records",
        "ai-analyzer": "ai-analyzer",
        "analyzer": "ai-analyzer",
        "diet-tasks": "diet-tasks",
        "diet": "diet-tasks",
        "tasks": "diet-tasks",
        "appointments": "appointments",
        "health-services": "health-services",
        "services": "health-services",
        "ai-mentor": "ai-mentor",
        "mentor": "ai-mentor",
        "privacy-consent": "privacy-consent",
        "privacy": "privacy-consent",
        "settings": "settings"
    };

    const navigate = requested => {
        const target = screenAliases[requested] || requested;
        const panel = $(`[data-screen-panel="${target}"]`);

        if (!panel) {
            toast(`Screen "${target}" was not found.`, "error");
            return;
        }

        if (target === "ai-mentor" && state.screen !== target) {
            if (preserveNextMentorNavigation) {
                preserveNextMentorNavigation = false;
            } else {
                startMentorConversation();
            }
        }

        state.screen = target;
        if (target === "abdm-readiness") loadRecordSharing();

        $$("[data-screen-panel]").forEach(item => {
            const active = item === panel;
            item.hidden = !active;
            item.classList.toggle("active", active);
        });

        $$("[data-screen]").forEach(item => {
            const active = (screenAliases[item.dataset.screen] || item.dataset.screen) === target;
            item.classList.toggle("active", active);

            if (active && item.classList.contains("nav-item")) {
                item.setAttribute("aria-current", "page");
            } else {
                item.removeAttribute("aria-current");
            }
        });

        const heading = panel.querySelector("h1");
        const breadcrumb = $("#breadcrumbCurrent");

        if (breadcrumb) {
            breadcrumb.textContent = heading?.textContent.trim() || target;
        }

        document.title = `${heading?.textContent.trim() || "NexHealth"} | NexHealth`;

        document.body.classList.remove("sidebar-open");

        if ($("#mobileMenuButton")) {
            $("#mobileMenuButton").setAttribute("aria-expanded", "false");
        }

        window.scrollTo({ top: 0, behavior: "auto" });

        renderAll();
        refreshIcons();
    };

    const openModal = (title, content, onSubmit, submitText = "Save") => {
        let backdrop = $("#nexhealthModal");

        if (!backdrop) {
            backdrop = document.createElement("div");
            backdrop.id = "nexhealthModal";
            backdrop.className = "modal-backdrop";
            backdrop.hidden = true;
            document.body.appendChild(backdrop);
        }

        backdrop.innerHTML = `
            <section class="modal" role="dialog" aria-modal="true"
                aria-labelledby="nexhealthModalTitle">
                <header class="modal-header">
                    <div>
                        <h2 id="nexhealthModalTitle">${escapeHTML(title)}</h2>
                    </div>
                    <button type="button" class="icon-button" data-close-modal
                        aria-label="Close dialog">×</button>
                </header>
                <form id="nexhealthModalForm">
                    <div class="modal-body">${content}</div>
                    <footer class="modal-footer">
                        <button type="button" class="button button-secondary"
                            data-close-modal>Cancel</button>
                        <button type="submit" class="button button-primary">
                            ${escapeHTML(submitText)}
                        </button>
                    </footer>
                </form>
            </section>
        `;

        backdrop.hidden = false;
        refreshIcons();

        const form = $("#nexhealthModalForm", backdrop);
        $("input, select, textarea", form)?.focus();

        form.addEventListener("submit", async event => {
            event.preventDefault();

            const button = $('button[type="submit"]', form);
            button.disabled = true;

            try {
                await onSubmit(new FormData(form));
                backdrop.hidden = true;
                backdrop.innerHTML = "";
            } catch (error) {
                toast(error.message || "Unable to save changes.", "error");
            } finally {
                button.disabled = false;
            }
        });
    };

    const requestAIConsent = action => {
        const copy = {
            en: {
                title: "Before you use AI",
                explanation: "Your question and relevant saved reports, health notes, profile details, medication reminders, and details you shared in other Mentor chats may be sent to OpenRouter and its selected model provider to prepare a response.",
                privacy: "Only continue if you agree. You can change this choice anytime in Privacy & consent.",
                accept: "Allow and continue"
            },
            te: {
                title: "AIని ఉపయోగించే ముందు",
                explanation: "సమాధానం కోసం మీ ప్రశ్న, సంబంధిత నివేదికలు, ఆరోగ్య నోట్లు, ప్రొఫైల్ వివరాలు, మందుల రిమైండర్లు మరియు ఇతర ఆరోగ్య సహాయక చాట్‌లలో పంచుకున్న వివరాలు OpenRouter మరియు ఎంపిక చేసిన మోడల్ సేవాదారునికి పంపబడవచ్చు.",
                privacy: "మీకు అంగీకారమైతేనే కొనసాగించండి. ఈ ఎంపికను గోప్యత & సమ్మతిలో ఎప్పుడైనా మార్చవచ్చు.",
                accept: "అనుమతించి కొనసాగించండి"
            },
            hi: {
                title: "AI इस्तेमाल करने से पहले",
                explanation: "जवाब के लिए आपका सवाल, संबंधित रिपोर्टें, स्वास्थ्य नोट, प्रोफ़ाइल विवरण, दवा रिमाइंडर और दूसरे स्वास्थ्य सहायक चैट में साझा की गई जानकारी OpenRouter और चुने गए मॉडल प्रदाता को भेजी जा सकती है।",
                privacy: "सहमत होने पर ही आगे बढ़ें। आप यह विकल्प गोपनीयता और सहमति में कभी भी बदल सकते हैं।",
                accept: "अनुमति दें और आगे बढ़ें"
            }
        }[state.language] || {
            title: "Before you use AI",
            explanation: "Your question and relevant saved reports, health notes, profile details, medication reminders, and details you shared in other Mentor chats may be sent to OpenRouter and its selected model provider to prepare a response.",
            privacy: "Only continue if you agree. You can change this choice anytime in Privacy & consent.",
            accept: "Allow and continue"
        };

        openModal(
            copy.title,
            `<p>${escapeHTML(copy.explanation)}</p><p>${escapeHTML(copy.privacy)}</p>`,
            async () => {
                await apiRequest("/api/consent/ai", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ enabled: true })
                });
                state.consent = { ...state.consent, aiProcessing: true };
                persist();
                renderConsent();
                closeModal();
                await action();
            },
            copy.accept
        );
    };

    const closeModal = () => {
        const modal = $("#nexhealthModal");
        if (modal) modal.hidden = true;
    };

    const field = (label, name, type = "text", options = {}) => {
        const required = options.required ? "required" : "";
        const value = options.value ?? "";
        const placeholder = options.placeholder || "";

        if (type === "select") {
            const choices = (options.choices || []).map(choice => {
                const optionValue = typeof choice === "string" ? choice : choice.value;
                const optionLabel = typeof choice === "string" ? choice : choice.label;

                return `<option value="${escapeHTML(optionValue)}" ${String(optionValue) === String(value) ? "selected" : ""}>
                    ${escapeHTML(optionLabel)}
                </option>`;
            }).join("");

            return `
                <div class="form-field">
                    <label for="field-${escapeHTML(name)}">${escapeHTML(label)}</label>
                    <select id="field-${escapeHTML(name)}" name="${escapeHTML(name)}" ${required}>
                        ${choices}
                    </select>
                </div>`;
        }

        if (type === "textarea") {
            return `
                <div class="form-field">
                    <label for="field-${escapeHTML(name)}">${escapeHTML(label)}</label>
                    <textarea id="field-${escapeHTML(name)}" name="${escapeHTML(name)}"
                        placeholder="${escapeHTML(placeholder)}" ${required}>${escapeHTML(value)}</textarea>
                </div>`;
        }

        return `
            <div class="form-field">
                <label for="field-${escapeHTML(name)}">${escapeHTML(label)}</label>
                <input id="field-${escapeHTML(name)}" name="${escapeHTML(name)}"
                    type="${escapeHTML(type)}" value="${escapeHTML(value)}"
                    placeholder="${escapeHTML(placeholder)}"
                    ${options.min !== undefined ? `min="${options.min}"` : ""}
                    ${options.max !== undefined ? `max="${options.max}"` : ""}
                    ${options.step !== undefined ? `step="${options.step}"` : ""}
                    ${required}>
            </div>`;
    };

    const openTaskModal = (suggestion = {}, sourceReport = "") => {
        const suggestedNotes = [suggestion.notes, suggestion.evidence ? `Source note: ${suggestion.evidence}` : "", sourceReport ? `Source: ${sourceReport}` : ""]
            .filter(Boolean).join("\n");
        openModal(
            "Add a health task",
            field("Task name", "title", "text", {
                required: true,
                value: suggestion.title || "",
                placeholder: "e.g. Drink water"
            }) +
            field("Category", "category", "select", {
                required: true,
                value: suggestion.category || "Other",
                choices: ["Medication", "Nutrition", "Activity", "Appointment", "Other"]
            }) +
            field("Due date", "due_date", "date", {
                required: true,
                value: suggestion.due_date || today()
            }) +
            field("Notes", "notes", "textarea", {
                value: suggestedNotes,
                placeholder: "Optional details"
            }),
            form => {
                const task = {
                    id: id(),
                    title: form.get("title").trim(),
                    category: form.get("category"),
                    due_date: form.get("due_date"),
                    notes: form.get("notes").trim(),
                    completed: false,
                    created_at: new Date().toISOString()
                };

                if (!task.title) throw new Error("Enter a task name.");

                state.tasks.unshift(task);
                if (suggestion._analysisId && Number.isInteger(suggestion._draftIndex)) {
                    const analysis = state.analyses.find(item => item.id === suggestion._analysisId);
                    analysis?.care_action_draft?.follow_up_tasks?.splice(suggestion._draftIndex, 1);
                }
                if (suggestion._healthInsightCardId) {
                    document.querySelector(`[data-health-insight-card="${suggestion._healthInsightCardId}"]`)?.remove();
                }
                persist();
                renderAll();
                toast("Task added.");
            }
        );
    };

    const openAppointmentModal = (existing = null) => {
        const appointment = existing || {};
        openModal(
            existing ? "Edit appointment" : "New appointment",
            field("Appointment title", "title", "text", {
                required: true,
                value: appointment.title,
                placeholder: "e.g. Dentist visit"
            }) +
            field("Doctor or clinic", "provider", "text", {
                value: appointment.provider,
                placeholder: "Optional"
            }) +
            field("Appointment type", "category", "select", {
                required: true,
                value: appointment.category || "General consultation",
                choices: ["General consultation", "Dental", "Laboratory", "Specialist", "Follow-up", "Other"]
            }) +
            field("Date", "date", "date", {
                required: true,
                value: appointment.date || today()
            }) +
            field("Time", "time", "time", { required: true, value: appointment.time }) +
            field("Reminder", "reminder_lead_minutes", "select", {
                value: String(appointment.reminder_lead_minutes ?? 60),
                choices: [
                    { value: "-1", label: "No reminder" },
                    { value: "0", label: "At appointment time" },
                    { value: "15", label: "15 minutes before" },
                    { value: "60", label: "1 hour before" },
                    { value: "1440", label: "1 day before" }
                ]
            }) +
            field("Location", "location", "text", { value: appointment.location, placeholder: "Clinic or hospital" }) +
            field("Notes", "notes", "textarea", { value: appointment.notes, placeholder: "Optional details" }),
            form => {
                const updatedAppointment = {
                    ...appointment,
                    id: appointment.id || id(),
                    title: form.get("title").trim(),
                    provider: form.get("provider").trim(),
                    category: form.get("category"),
                    date: form.get("date"),
                    time: form.get("time"),
                    reminder_lead_minutes: Number(form.get("reminder_lead_minutes")),
                    reminder_status: "pending",
                    reminder_snoozed_until: "",
                    reminder_last_alerted: false,
                    location: form.get("location").trim(),
                    notes: form.get("notes").trim(),
                    created_at: appointment.created_at || new Date().toISOString()
                };

                if (!updatedAppointment.title || !updatedAppointment.date || !updatedAppointment.time) {
                    throw new Error("Complete the required appointment fields.");
                }

                if (appointment.id) {
                    state.appointments = state.appointments.map(item => item.id === appointment.id ? updatedAppointment : item);
                } else state.appointments.push(updatedAppointment);
                state.appointments.sort((a, b) =>
                    `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`)
                );

                persist();
                renderAll();
                renderCareReminders();
                toast(appointment.id ? "Appointment updated." : "Appointment saved in this browser.");
            }
        );
    };

    const openMedicationReminderModal = (existing = null, source = null, isSuggested = false) => {
        const reminder = existing || {};
        const sourceReport = source || reminder.source_file || "";
        openModal(
            isSuggested ? "Review suggested medicine reminder" : existing ? "Edit medicine reminder" : "Add medicine reminder",
            `<p class="reminder-form-note">${isSuggested ? "This is an AI-generated draft, not a verified schedule. Check every field against the original prescription and edit anything that is unclear." : "Enter the instructions exactly as written on the prescription. NexHealth does not interpret or verify doses."} ${reminder.timing ? `<br>Prescription timing text: <strong>${escapeHTML(reminder.timing)}</strong>` : ""} ${sourceReport ? `<br>Source report: <strong>${escapeHTML(sourceReport)}</strong>` : ""}</p>` +
            field("Medicine name", "medicine_name", "text", { required: true, value: reminder.medicine_name }) +
            field("Dose", "dose", "text", { required: true, value: reminder.dose, placeholder: "e.g. 1 tablet (as prescribed)" }) +
            field("Times each day (24-hour, comma separated)", "times", "text", { required: true, value: (reminder.times || []).join(", ") || (isSuggested ? "" : "08:00"), placeholder: "08:00, 20:00" }) +
            field("Repeat", "frequency", "select", { required: true, value: reminder.frequency || (isSuggested ? "unknown" : "daily"), choices: [{ value: "unknown", label: "Choose schedule" }, { value: "daily", label: "Every day" }, { value: "weekly", label: "Selected weekdays" }] }) +
            field("Weekdays (for selected weekdays)", "days_of_week", "text", { value: (reminder.days_of_week || []).map(day => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][day]).join(", "), placeholder: "e.g. Mon, Thu" }) +
            field("Start date", "start_date", "date", { required: true, value: reminder.start_date || (isSuggested ? "" : today()) }) +
            field("Duration (days)", "duration_days", "number", { required: true, value: reminder.duration_days || (isSuggested ? "" : 7), placeholder: "7" }) +
            `<label class="reminder-confirm-label"><input type="checkbox" name="verified" required> I checked the medicine, dose, schedule, and duration against the original prescription.</label>`,
            form => {
                const times = String(form.get("times") || "").split(",").map(value => value.trim());
                const validTimes = times.length && times.every(value => /^([01]\d|2[0-3]):[0-5]\d$/.test(value));
                const frequency = form.get("frequency");
                const weekdayNumbers = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
                const weekdayNames = String(form.get("days_of_week") || "").split(",").map(value => value.trim().slice(0, 3).toLowerCase()).filter(Boolean);
                const daysOfWeek = [...new Set(weekdayNames.map(day => weekdayNumbers[day]).filter(day => day !== undefined))];
                const durationDays = Number(form.get("duration_days"));
                if (!validTimes) throw new Error("Enter reminder times in 24-hour format, such as 08:00, 20:00.");
                if (!["daily", "weekly"].includes(frequency)) throw new Error("Choose the repeat schedule from the original prescription.");
                if (frequency === "weekly" && (!daysOfWeek.length || daysOfWeek.length !== weekdayNames.length)) throw new Error("Enter weekdays like Mon, Thu for a selected-weekday schedule.");
                if (!Number.isInteger(durationDays) || durationDays < 1 || durationDays > 365) throw new Error("Enter a duration between 1 and 365 days.");
                const startDate = form.get("start_date");
                const end = new Date(`${startDate}T12:00:00`);
                end.setDate(end.getDate() + durationDays - 1);
                const nextReminder = {
                    ...reminder,
                    id: reminder.id || id(),
                    medicine_name: form.get("medicine_name").trim(),
                    dose: form.get("dose").trim(),
                    times: [...new Set(times)].sort(),
                    frequency,
                    days_of_week: frequency === "weekly" ? daysOfWeek : [],
                    start_date: startDate,
                    duration_days: durationDays,
                    end_date: end.toISOString().slice(0, 10),
                    source_file: sourceReport,
                    active: true,
                    completed_occurrences: reminder.completed_occurrences || [],
                    alerted_occurrences: reminder.alerted_occurrences || [],
                    snoozed_occurrence: "",
                    snoozed_until: ""
                };
                const draftAnalysisId = reminder.draft_analysis_id;
                const draftIndex = reminder.draft_index;
                delete nextReminder.draft_analysis_id;
                delete nextReminder.draft_index;
                if (!nextReminder.medicine_name || !nextReminder.dose) throw new Error("Enter the medicine name and dose.");
                if (reminder.id) state.medicationReminders = state.medicationReminders.map(item => item.id === reminder.id ? nextReminder : item);
                else state.medicationReminders.unshift(nextReminder);
                if (draftAnalysisId) {
                    const analysis = state.analyses.find(item => item.id === draftAnalysisId);
                    analysis?.care_action_draft?.medications?.splice(draftIndex, 1);
                }
                persist();
                renderAll();
                toast(reminder.id ? "Medicine reminder updated." : "Medicine reminder saved.");
            },
            existing?.id ? "Save changes" : isSuggested ? "Confirm and save reminder" : "Save reminder"
        );
    };

    const openMealModal = () => {
        openModal(
            "Add a meal",
            field("Meal name", "name", "text", {
                required: true,
                placeholder: "e.g. Vegetable rice"
            }) +
            field("Meal time", "meal_time", "select", {
                required: true,
                choices: ["Breakfast", "Lunch", "Dinner", "Snack"]
            }) +
            field("Date", "date", "date", { required: true, value: today() }) +
            field("Notes or ingredients", "notes", "textarea", {}),
            form => {
                const meal = {
                    id: id(),
                    name: form.get("name").trim(),
                    meal_time: form.get("meal_time"),
                    date: form.get("date"),
                    notes: form.get("notes").trim()
                };

                if (!meal.name) throw new Error("Enter a meal name.");

                state.meals.push(meal);
                persist();
                renderAll();
                toast("Meal added.");
            }
        );
    };

    const openUploadModal = () => {
        openModal(
            "Upload a medical record",
            field("Record title", "name", "text", {
                required: true,
                placeholder: "e.g. Blood test report"
            }) +
            field("Record category", "category", "select", {
                required: true,
                choices: [
                    { value: "lab", label: "Lab report" },
                    { value: "prescription", label: "Prescription" },
                    { value: "discharge", label: "Discharge summary" },
                    { value: "imaging", label: "Imaging" },
                    { value: "other", label: "Other" }
                ]
            }) +
            `<div class="form-field">
                <label for="recordFile">Document (PDF, JPG, PNG, WebP, or DOCX)</label>
                <input type="file" id="recordFile" name="file"
                    accept=".pdf,.png,.jpg,.jpeg,.webp,.docx,application/pdf,image/png,image/jpeg,image/webp,application/vnd.openxmlformats-officedocument.wordprocessingml.document" required>
            </div>`,
            async form => {
                const file = form.get("file");
                if (!(file instanceof File) || !file.size) {
                    throw new Error("Choose a document first.");
                }
                if (!isSupportedMedicalDocument(file)) {
                    throw new Error("Choose a PDF, JPG, JPEG, PNG, WebP, or DOCX file.");
                }
                if (file.size > 10 * 1024 * 1024) {
                    throw new Error("The maximum file size is 10 MB.");
                }

                const body = new FormData();
                body.append("file", file);

                const response = await fetch("/api/medical-records", {
                    method: "POST",
                    body
                });

                const data = await response.json().catch(() => ({}));

                if (!response.ok) {
                    throw new Error(data.error || data.message || "Upload failed.");
                }

                state.records.unshift({
                    id: data.id || id(),
                    name: form.get("name").trim() || file.name,
                    category: form.get("category"),
                    file_name: data.file_name || file.name,
                    storage_path: data.storage_path || "",
                    size: data.size || file.size,
                    mime_type: data.mime_type || file.type,
                    created_at: data.created_at || new Date().toISOString(),
                    storage: data.storage || "server",
                    file_available: data.file_available === true,
                    status: data.status || "uploaded"
                });

                persist();
                renderAll();
                toast("Record uploaded to the server.");
            },
            "Upload record"
        );
    };

    const openHealthNoteModal = () => {
        openModal(
            "Save a health note",
            `<p class="field-help">Add details such as your usual blood pressure, a health condition, or symptoms. You can type them or import a small .txt file. Saved notes can be used as context in AI Health Mentor when AI processing consent is enabled.</p>` +
            field("Note title", "name", "text", {
                required: true,
                placeholder: "e.g. Blood pressure readings"
            }) +
            `<div class="form-field">
                <label for="healthNoteText">Health details</label>
                <textarea id="healthNoteText" name="note" rows="6" maxlength="10000"
                    placeholder="For example: My blood pressure was 138/86 on 24 October 2026."></textarea>
            </div>
            <div class="form-field">
                <label for="healthNoteFile">Or choose a text file (.txt, up to 100 KB)</label>
                <input type="file" id="healthNoteFile" name="noteFile" accept=".txt,text/plain">
            </div>`,
            async form => {
                const title = String(form.get("name") || "").trim();
                const typedText = String(form.get("note") || "").trim();
                const file = form.get("noteFile");
                let fileText = "";
                if (file instanceof File && file.size) {
                    if (!file.name.toLowerCase().endsWith(".txt") || file.size > 100 * 1024) {
                        throw new Error("Choose a .txt file smaller than 100 KB.");
                    }
                    fileText = (await file.text()).trim();
                }
                const noteText = [typedText, fileText].filter(Boolean).join("\n\n");
                if (!noteText) throw new Error("Enter health details or choose a text file.");
                if (noteText.length > 10000) throw new Error("Keep the health note under 10,000 characters.");
                const accountSyncedWorkspace = Boolean(activeUserId)
                    && !accountCacheFallback
                    && !document.body.classList.contains("local-demo-mode");

                state.records.unshift({
                    id: id(),
                    record_type: "health_note",
                    name: title,
                    category: "other",
                    file_name: file?.name || "",
                    extracted_text: noteText,
                    created_at: new Date().toISOString(),
                    size: new Blob([noteText]).size,
                    status: "Saved note",
                    storage: accountSyncedWorkspace ? "account workspace" : "this browser",
                    file_available: false
                });
                persist();
                renderAll();
                toast(accountSyncedWorkspace
                    ? "Health note saved to your account workspace."
                    : "Health note saved in this browser. Sign in to sync it across devices.");
            },
            "Save note"
        );
    };

    const removeTask = taskId => {
        state.tasks = state.tasks.filter(task => task.id !== taskId);
        persist();
        renderAll();
        toast("Task deleted.");
    };

    const toggleTask = taskId => {
        const task = state.tasks.find(item => item.id === taskId);
        if (!task) return;

        task.completed = !task.completed;
        persist();
        renderAll();
    };

    const resetCompletedTasks = () => {
        const completedTasks = state.tasks.filter(task => task.completed);
        if (!completedTasks.length) {
            toast("There are no completed tasks to reset.");
            return;
        }

        state.tasks = state.tasks.map(task => task.completed
            ? { ...task, completed: false }
            : task
        );
        persist();
        renderAll();
        toast("Completed tasks have been reset.");
    };

    const deleteAppointment = appointmentId => {
        state.appointments = state.appointments.filter(item => item.id !== appointmentId);
        persist();
        renderAll();
        toast("Appointment removed.");
    };

    const renderCareReminders = () => {
        const container = $("#careReminderList");
        if (!container) return;
        const todayDate = today();
        const now = new Date();
        const cards = [];
        state.medicationReminders.forEach(reminder => {
            const ended = todayDate > reminder.end_date;
            if (ended && reminder.active) reminder.active = false;
            const runsToday = reminder.frequency !== "weekly" || (reminder.days_of_week || []).includes(new Date(`${todayDate}T12:00:00`).getDay());
            const nextOccurrence = (runsToday ? (reminder.times || []) : []).map(time => ({
                time,
                key: `${todayDate}@${time}`,
                at: new Date(`${todayDate}T${time}`)
            })).find(item => !((reminder.completed_occurrences || []).includes(item.key)));
            const isActiveToday = reminder.active && todayDate >= reminder.start_date && todayDate <= reminder.end_date;
            const snoozed = Boolean(nextOccurrence && reminder.snoozed_occurrence === nextOccurrence.key && reminder.snoozed_until && new Date(reminder.snoozed_until) > now);
            const due = Boolean(isActiveToday && nextOccurrence && nextOccurrence.at <= now && !snoozed);
            const snoozeText = reminder.snoozed_until ? new Intl.DateTimeFormat(uiLocale(), { timeStyle: "short" }).format(new Date(reminder.snoozed_until)) : "";
            const status = ended ? "Course ended" : !reminder.active ? "Stopped" : snoozed ? `Snoozed until ${snoozeText}` : due ? "Due today" : todayDate < reminder.start_date ? `Starts ${formatDate(reminder.start_date)}` : !runsToday ? "Not scheduled today" : `Next: ${nextOccurrence?.time || "Complete today’s doses"}`;
            cards.push(`<article class="care-reminder-item ${due ? "is-due" : ""}">
                <div class="care-reminder-icon"><i data-lucide="pill"></i></div>
                <div class="care-reminder-copy"><strong>${escapeHTML(reminder.medicine_name)}</strong><p>${escapeHTML(reminder.dose)} · ${escapeHTML((reminder.times || []).join(", "))}</p><small>${escapeHTML(status)} · through ${escapeHTML(formatDate(reminder.end_date))}${reminder.source_file ? ` · from ${escapeHTML(reminder.source_file)}` : ""}</small></div>
                <div class="care-reminder-actions">${due && nextOccurrence ? `<button class="button button-secondary button-small" type="button" data-action="complete-medication-reminder" data-id="${escapeHTML(reminder.id)}" data-occurrence="${escapeHTML(nextOccurrence.key)}">Taken</button><button class="text-button" type="button" data-action="snooze-medication-reminder" data-id="${escapeHTML(reminder.id)}" data-occurrence="${escapeHTML(nextOccurrence.key)}">Snooze 10 min</button>` : ""}<button class="icon-button" type="button" data-action="edit-medication-reminder" data-id="${escapeHTML(reminder.id)}" aria-label="Edit medicine reminder">✎</button>${reminder.active ? `<button class="text-button" type="button" data-action="stop-medication-reminder" data-id="${escapeHTML(reminder.id)}">Stop</button>` : `<button class="icon-button" type="button" data-action="delete-medication-reminder" data-id="${escapeHTML(reminder.id)}" aria-label="Delete reminder">×</button>`}</div>
            </article>`);
        });
        state.appointments.forEach(appointment => {
            const lead = Number(appointment.reminder_lead_minutes ?? 60);
            if (lead < 0 || appointment.reminder_status === "stopped") return;
            const at = new Date(`${appointment.date}T${appointment.time || "09:00"}`);
            if (Number.isNaN(at.getTime()) || at < now) return;
            const status = appointment.reminder_status === "confirmed" ? "Reminder confirmed" : appointment.reminder_snoozed_until ? `Snoozed until ${new Intl.DateTimeFormat(uiLocale(), { timeStyle: "short" }).format(new Date(appointment.reminder_snoozed_until))}` : `Reminder ${lead === 0 ? "at appointment time" : ` ${lead < 60 ? `${lead} min` : lead === 60 ? "1 hr" : `${lead / 1440} day`} before`}`;
            cards.push(`<article class="care-reminder-item">
                <div class="care-reminder-icon"><i data-lucide="calendar-clock"></i></div>
                <div class="care-reminder-copy"><strong>${escapeHTML(appointment.title)}</strong><p>${escapeHTML(formatDate(appointment.date))} · ${escapeHTML(appointment.time || "Time not set")}${appointment.provider ? ` · ${escapeHTML(appointment.provider)}` : ""}</p><small>${escapeHTML(status)}</small></div>
                <div class="care-reminder-actions">${appointment.reminder_status !== "confirmed" ? `<button class="button button-secondary button-small" type="button" data-action="confirm-appointment-reminder" data-id="${escapeHTML(appointment.id)}">Confirm</button><button class="text-button" type="button" data-action="snooze-appointment-reminder" data-id="${escapeHTML(appointment.id)}">Snooze 10 min</button>` : ""}<button class="icon-button" type="button" data-action="edit-appointment" data-id="${escapeHTML(appointment.id)}" aria-label="Edit appointment">✎</button><button class="text-button" type="button" data-action="stop-appointment-reminder" data-id="${escapeHTML(appointment.id)}">Stop</button></div>
            </article>`);
        });
        container.innerHTML = cards.length ? cards.join("") : `<div class="empty-state compact-empty"><strong>No reminders yet</strong><p>Add a medicine schedule or set a reminder when you create an appointment.</p><button class="button button-secondary button-small" type="button" data-action="add-medication-reminder">Add medicine reminder</button></div>`;
        refreshIcons();
    };

    const renderPendingCareActions = () => {
        const panel = $("#pendingCareActionsPanel");
        const container = $("#pendingCareActionsList");
        if (!panel || !container) return;
        const pending = state.analyses.filter(analysis =>
            analysis?.care_action_draft && !analysis.care_action_draft.error &&
            ((analysis.care_action_draft.medications || []).length || (analysis.care_action_draft.doctor_questions || []).length || (analysis.care_action_draft.follow_up_tasks || []).length)
        );
        panel.hidden = pending.length === 0;
        if (!pending.length) {
            container.innerHTML = "";
            return;
        }
        container.innerHTML = pending.map(analysis => {
            const draft = analysis.care_action_draft;
            const medicines = (draft.medications || []).map((medicine, index) => `
                <article class="care-draft-item">
                    <div><strong>${escapeHTML(medicine.name)}</strong><p>${escapeHTML(medicine.dose)}${medicine.timing ? ` · ${escapeHTML(medicine.timing)}` : ""}</p>
                        <small>${escapeHTML(analysis.file_name || "Saved prescription")}</small></div>
                    <div class="care-draft-actions"><button class="button button-secondary button-small" type="button" data-action="review-care-draft" data-id="${escapeHTML(analysis.id)}" data-index="${index}">Review & edit</button>
                        <button class="text-button" type="button" data-action="reject-care-draft" data-id="${escapeHTML(analysis.id)}" data-index="${index}">Reject</button></div>
                </article>`).join("");
            const tasks = (draft.follow_up_tasks || []).map((task, index) => `
                <article class="care-draft-item">
                    <div><strong>${escapeHTML(task.title)}</strong><p>${escapeHTML(task.notes || "Optional follow-up task")}</p>
                        <small>Suggested from: “${escapeHTML(task.evidence)}”</small></div>
                    <div class="care-draft-actions"><button class="button button-secondary button-small" type="button" data-action="add-care-task" data-id="${escapeHTML(analysis.id)}" data-index="${index}">Review & add task</button>
                        <button class="text-button" type="button" data-action="reject-care-task" data-id="${escapeHTML(analysis.id)}" data-index="${index}">Reject</button></div>
                </article>`).join("");
            const questions = draft.doctor_questions || [];
            return `<section class="pending-care-report"><h3>${escapeHTML(analysis.file_name || "Saved prescription")}</h3>
                ${medicines}
                ${tasks ? `<h4>Optional follow-up tasks</h4>${tasks}` : ""}
                ${questions.length ? `<ul>${questions.map(question => `<li>${escapeHTML(question)}</li>`).join("")}</ul>
                    <div class="care-draft-actions"><button class="button button-secondary button-small" type="button" data-action="review-draft-questions" data-id="${escapeHTML(analysis.id)}">Edit questions in AI Health Mentor</button>
                    <button class="text-button" type="button" data-action="reject-draft-questions" data-id="${escapeHTML(analysis.id)}">Dismiss questions</button></div>` : ""}
            </section>`;
        }).join("");
        refreshIcons();
    };

    const checkDueReminders = () => {
        const now = new Date();
        const todayDate = today();
        let changed = false;
        state.medicationReminders.forEach(reminder => {
            if (!reminder.active) return;
            if (todayDate > reminder.end_date) {
                reminder.active = false;
                changed = true;
                return;
            }
            if (todayDate < reminder.start_date || todayDate > reminder.end_date) return;
            if (reminder.frequency === "weekly" && !(reminder.days_of_week || []).includes(now.getDay())) return;
            for (const time of reminder.times || []) {
                const key = `${todayDate}@${time}`;
                const dueAt = new Date(`${todayDate}T${time}`);
                if (dueAt > now || (reminder.completed_occurrences || []).includes(key)) continue;
                if (reminder.snoozed_occurrence === key && reminder.snoozed_until && new Date(reminder.snoozed_until) > now) continue;
                reminder.alerted_occurrences = reminder.alerted_occurrences || [];
                if (reminder.alerted_occurrences.includes(key)) continue;
                reminder.alerted_occurrences.push(key);
                reminder.snoozed_occurrence = "";
                reminder.snoozed_until = "";
                changed = true;
                toast(`${t("Medicine reminder")}: ${reminder.medicine_name} · ${reminder.dose}`, "info");
                break;
            }
        });
        state.appointments.forEach(appointment => {
            const lead = Number(appointment.reminder_lead_minutes ?? 60);
            if (lead < 0 || appointment.reminder_status === "stopped" || appointment.reminder_status === "confirmed") return;
            const appointmentAt = new Date(`${appointment.date}T${appointment.time || "09:00"}`);
            const dueAt = new Date(appointmentAt.getTime() - lead * 60_000);
            if (appointmentAt.getTime() < now.getTime() - 15 * 60_000 || dueAt > now) return;
            if (appointment.reminder_snoozed_until && new Date(appointment.reminder_snoozed_until) > now) return;
            if (appointment.reminder_last_alerted) return;
            appointment.reminder_last_alerted = true;
            appointment.reminder_snoozed_until = "";
            changed = true;
            toast(`${t("Appointment reminder")}: ${appointment.title}`, "info");
        });
        if (changed) persist();
        renderCareReminders();
    };

    const startReminderScheduler = () => {
        if (medicationReminderTimer) return;
        checkDueReminders();
        medicationReminderTimer = window.setInterval(checkDueReminders, 60_000);
    };

    const renderTasks = () => {
        const container = $("#dietTaskList");
        if (!container) return;

        let tasks = [...state.tasks];

        if (state.taskFilter === "pending") tasks = tasks.filter(task => !task.completed);
        if (state.taskFilter === "completed") tasks = tasks.filter(task => task.completed);

        if (!tasks.length) {
            container.innerHTML = `
                <div class="empty-state">
                    <strong>${state.tasks.length ? "No tasks in this filter" : "Create your first health task"}</strong>
                    <p>Add reminders for your daily routine.</p>
                    <button class="button button-secondary button-small"
                        type="button" data-action="add-task">Add a task</button>
                </div>`;
        } else {
            container.innerHTML = tasks.map(task => `
                <article class="task-item ${task.completed ? "completed" : ""}">
                    <label class="task-checkbox">
                        <input type="checkbox" data-action="toggle-task"
                            data-id="${escapeHTML(task.id)}" ${task.completed ? "checked" : ""}>
                        <span></span>
                    </label>
                    <div class="task-item-content">
                        <strong>${escapeHTML(task.title)}</strong>
                        <p>${escapeHTML(task.category || "Other")} · Due ${escapeHTML(formatDate(task.due_date))}</p>
                        ${task.notes ? `<small>${escapeHTML(task.notes)}</small>` : ""}
                    </div>
                    <button class="icon-button" type="button" data-action="delete-task"
                        data-id="${escapeHTML(task.id)}" aria-label="Delete task">×</button>
                </article>
            `).join("");
        }

        const total = state.tasks.length;
        const completed = state.tasks.filter(task => task.completed).length;
        const percentage = total ? Math.round(completed / total * 100) : 0;
        const taskCount = $("#dietTaskCount");
        if (taskCount) taskCount.textContent = `${total} ${total === 1 ? "task" : "tasks"}`;

        const progressText = $("#taskProgressText");
        const progressBar = $("#taskProgressBar");

        if (progressText) {
            progressText.textContent = state.language === "te"
                ? `${total} పనుల్లో ${completed} పూర్తయ్యాయి`
                : state.language === "hi"
                    ? `${total} में से ${completed} काम पूरे`
                    : `${completed} of ${total} completed`;
        }
        if (progressBar) progressBar.style.width = `${percentage}%`;

        const remaining = $("#metricTasks");
        if (remaining) {
            const remainingCount = total - completed;
            remaining.textContent = remainingCount > 0 ? String(remainingCount) : "";
        }
        const resetButton = $("#resetCompletedTasksButton");
        if (resetButton) resetButton.disabled = completed === 0;

        const overview = $("#overviewTaskList");
        if (overview) {
            const items = state.tasks.filter(task => !task.completed).slice(0, 4);

            overview.innerHTML = items.length ? items.map(task => `
                <label class="compact-task-item">
                    <input type="checkbox" data-action="toggle-task"
                        data-id="${escapeHTML(task.id)}">
                    <span>
                        <strong>${escapeHTML(task.title)}</strong>
                        <small>${escapeHTML(task.category || "Other")} · ${escapeHTML(formatDate(task.due_date))}</small>
                    </span>
                </label>
            `).join("") : `
                <div class="empty-state compact-empty">
                    <strong>${total ? "All caught up!" : "Your task list starts here"}</strong>
                    <p>${total ? "You have completed all your tasks." : "Add a task to organize your day."}</p>
                    <button class="text-button" type="button" data-action="add-task">Create a task</button>
                </div>`;
        }
    };

    const renderAppointments = () => {
        const container = $("#appointmentList");
        if (!container) return;

        const now = new Date();
        let appointments = [...state.appointments];

        if (state.appointmentFilter === "upcoming") {
            appointments = appointments.filter(item =>
                new Date(`${item.date}T${item.time || "23:59"}`) >= now
            );
        } else if (state.appointmentFilter === "past") {
            appointments = appointments.filter(item =>
                new Date(`${item.date}T${item.time || "23:59"}`) < now
            );
        }

        appointments.sort((a, b) =>
            `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`)
        );

        const count = $("#appointmentCount");
        if (count) {
            count.textContent = state.language === "te"
                ? `${appointments.length} అపాయింట్‌మెంట్‌లు`
                : state.language === "hi"
                    ? `${appointments.length} अपॉइंटमेंट`
                    : `${appointments.length} appointment${appointments.length === 1 ? "" : "s"}`;
        }

        if (!appointments.length) {
            container.innerHTML = `
                <div class="empty-state">
                    <strong>No appointments here</strong>
                    <p>Create an appointment to keep your healthcare schedule organized.</p>
                    <button class="button button-primary button-small"
                        type="button" data-action="open-appointment">Create appointment</button>
                </div>`;
        } else {
            container.innerHTML = appointments.map(item => `
                <article class="appointment-item">
                    <div class="appointment-date">
                        <strong>${escapeHTML(new Date(`${item.date}T12:00:00`).getDate())}</strong>
                        <span>${escapeHTML(new Intl.DateTimeFormat(uiLocale(), {
                            month: "short"
                        }).format(new Date(`${item.date}T12:00:00`)))}</span>
                    </div>
                    <div class="appointment-item-content">
                        <strong>${escapeHTML(item.title)}</strong>
                        <p>${escapeHTML(item.category || "Appointment")} · ${escapeHTML(item.time || "")}</p>
                        ${item.provider ? `<small>${escapeHTML(item.provider)}</small>` : ""}
                        ${item.location ? `<small>${escapeHTML(item.location)}</small>` : ""}
                        ${item.notes ? `<small>${escapeHTML(item.notes)}</small>` : ""}
                    </div>
                    <button class="icon-button" type="button" data-action="edit-appointment"
                        data-id="${escapeHTML(item.id)}" aria-label="Edit appointment">✎</button>
                    <button class="icon-button" type="button" data-action="delete-appointment"
                        data-id="${escapeHTML(item.id)}" aria-label="Delete appointment">×</button>
                </article>
            `).join("");
        }

        const metric = $("#metricAppointments");
        if (metric) {
            const upcomingCount = state.appointments.filter(item =>
                new Date(`${item.date}T${item.time || "23:59"}`) >= now
            ).length;
            metric.textContent = upcomingCount > 0 ? String(upcomingCount) : "";
        }

        const overview = $("#overviewAppointmentList");
        if (overview) {
            const upcoming = state.appointments
                .filter(item => new Date(`${item.date}T${item.time || "23:59"}`) >= now)
                .sort((a, b) => `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`))
                .slice(0, 3);

            overview.innerHTML = upcoming.length ? upcoming.map(item => `
                <article class="compact-appointment-item">
                    <span class="compact-appointment-icon">+</span>
                    <span>
                        <strong>${escapeHTML(item.title)}</strong>
                        <small>${escapeHTML(formatDate(item.date))} · ${escapeHTML(item.time || "")}</small>
                    </span>
                </article>
            `).join("") : `
                <div class="empty-state">
                    <strong>No upcoming appointments</strong>
                    <p>Your saved appointments will appear here.</p>
                    <button class="button button-secondary button-small"
                        type="button" data-action="open-appointment">Add appointment</button>
                </div>`;
        }
    };

    const renderRecords = () => {
        const container = $("#recordsList");
        if (!container) return;

        const query = ($("#recordsSearch")?.value || "").toLowerCase().trim();
        const categories = ["all", "lab", "prescription", "imaging", "other"];

        const records = state.records.filter(record => {
            const category = (record.category || "other").toLowerCase();
            const categoryMatches = state.recordFilter === "all" ||
                category === state.recordFilter;
            const textMatches = `${record.name} ${record.file_name} ${category}`
                .toLowerCase().includes(query);
            return categoryMatches && textMatches;
        });

        $$("[data-record-filter]").forEach(button => {
            button.classList.toggle("active", button.dataset.recordFilter === state.recordFilter);
        });

        const count = $("#recordsTotal");
        const lab = $("#recordsLabCount");
        const prescriptions = $("#recordsPrescriptionCount");
        const navCount = $("#recordsNavCount");
        const metric = $("#metricRecords");

        if (count) count.textContent = state.records.length;
        if (lab) lab.textContent = state.records.filter(r => r.category === "lab").length;
        if (prescriptions) prescriptions.textContent = state.records.filter(r => r.category === "prescription").length;
        if (navCount) navCount.textContent = state.records.length;
        if (metric) {
            metric.textContent = state.records.length > 0 ? String(state.records.length) : "";
        }

        if (!records.length) {
            container.innerHTML = `
                <div class="empty-state">
                    <strong>${state.records.length ? "No matching records" : "Your medical library is ready"}</strong>
                    <p>${state.records.length ? "Try another search or filter." : "Upload a report or prescription to begin."}</p>
                    <button class="button button-primary button-small"
                        type="button" data-action="open-upload">Add a record</button>
                </div>`;
            return;
        }

        container.innerHTML = records.map(record => {
            const recordId = encodeURIComponent(String(record.id || ""));
            const savedAnalysis = record.analysis_id
                ? state.analyses.find(analysis => analysis.id === record.analysis_id)
                : null;
            const fileActions = record.file_available && recordId
                ? `<div class="record-row-actions">
                    <a class="button button-secondary button-small record-file-link"
                        href="/api/medical-records/${recordId}/file" target="_blank"
                        rel="noopener noreferrer"><i data-lucide="eye"></i> View</a>
                    <a class="button button-secondary button-small record-file-link"
                        href="/api/medical-records/${recordId}/download"
                        rel="noopener noreferrer"><i data-lucide="download"></i> Download</a>
                </div>`
                : "";

            return `
                <article class="record-row">
                    <span class="record-icon"><i data-lucide="file-text"></i></span>
                    <div class="record-row-copy">
                        <strong>${escapeHTML(record.name || record.file_name)}</strong>
                        <small>${escapeHTML(record.record_type === "health_note" ? "Health note" : (record.category || "other"))} · ${escapeHTML(formatDate(record.created_at))}</small>
                        ${record.record_type === "health_note"
                            ? `<small>${escapeHTML((record.extracted_text || "").slice(0, 220))}${(record.extracted_text || "").length > 220 ? "…" : ""}</small>`
                            : `<small>${escapeHTML(record.file_name || "")} · ${escapeHTML(formatSize(Number(record.size) || 0))}</small>`}
                        ${savedAnalysis
                            ? `<details class="record-analysis-preview"><summary>View saved analysis</summary><div class="analysis-text">${formatAnalysisContent(savedAnalysis.summary || "No analysis text was saved.")}</div></details>`
                            : ""}
                    </div>
                    <span class="record-status">${escapeHTML(record.status || "saved")}</span>
                    ${fileActions}
                </article>
            `;
        }).join("");
        refreshIcons();
    };

    const renderMeals = () => {
        const container = $("#mealPlanList");
        if (!container) return;

        const meals = state.meals.filter(meal => meal.date === today());

        const mealSlots = [
            { name: "Breakfast", icon: "sunrise" },
            { name: "Lunch", icon: "sun" },
            { name: "Dinner", icon: "sunset" },
            { name: "Snack", icon: "coffee" }
        ];
        const hasSnack = meals.some(meal => meal.meal_time === "Snack");

        container.innerHTML = mealSlots.filter(slot => slot.name !== "Snack" || hasSnack).map(slot => {
            const slotMeals = meals.filter(meal => meal.meal_time === slot.name);
            if (!slotMeals.length) {
                return `<div class="meal-placeholder">
                    <i data-lucide="${slot.icon}"></i>
                    <strong>${escapeHTML(t(slot.name))}</strong>
                    <span>${escapeHTML(t("No meal added"))}</span>
                </div>`;
            }

            return slotMeals.map(meal => `<article class="meal-card">
                <i data-lucide="${slot.icon}"></i>
                <strong>${escapeHTML(t(slot.name))}</strong>
                <p>${escapeHTML(meal.name)}</p>
                ${meal.notes ? `<p>${escapeHTML(meal.notes)}</p>` : ""}
                <div class="meal-card-actions">
                    <button type="button" data-action="delete-meal" data-id="${escapeHTML(meal.id)}">Delete</button>
                </div>
            </article>`).join("");
        }).join("");
        refreshIcons();
    };

    const welcomeGreetings = [
        {
            en: ["Hello, {name}! Welcome back!", "Hello, welcome back!"],
            te: ["హలో {name}, తిరిగి స్వాగతం!", "హలో, తిరిగి స్వాగతం!"],
            hi: ["नमस्ते, {name}! आपका फिर से स्वागत है!", "नमस्ते, आपका फिर से स्वागत है!"]
        },
        {
            en: ["It’s lovely to see you, {name}!", "It’s lovely to see you!"],
            te: ["{name}, మిమ్మల్ని మళ్లీ చూడటం చాలా సంతోషంగా ఉంది!", "మిమ్మల్ని మళ్లీ చూడటం చాలా సంతోషంగా ఉంది!"],
            hi: ["{name}, आपसे फिर मिलकर बहुत अच्छा लगा!", "आपसे फिर मिलकर बहुत अच्छा लगा!"]
        },
        {
            en: ["A fresh start awaits you, {name}!", "A fresh start awaits you!"],
            te: ["{name}, ఈ రోజు కొత్తగా ప్రారంభిద్దాం!", "ఈ రోజు కొత్తగా ప్రారంభిద్దాం!"],
            hi: ["{name}, आज एक नई शुरुआत करें!", "आज एक नई शुरुआत करें!"]
        },
        {
            en: ["Welcome, {name}! Let’s make today yours!", "Welcome! Let’s make today yours!"],
            te: ["స్వాగతం {name}! ఈ రోజును మీకోసం ప్రత్యేకంగా చేసుకుందాం!", "స్వాగతం! ఈ రోజును మీకోసం ప్రత్యేకంగా చేసుకుందాం!"],
            hi: ["स्वागत है, {name}! आज का दिन आपके नाम करें!", "स्वागत है! आज का दिन आपके नाम करें!"]
        },
        {
            en: ["Ready for a brighter day, {name}?", "Ready for a brighter day?"],
            te: ["{name}, మంచి రోజుకు సిద్ధంగా ఉన్నారా?", "మంచి రోజుకు సిద్ధంగా ఉన్నారా?"],
            hi: ["{name}, एक अच्छे दिन के लिए तैयार हैं?", "एक अच्छे दिन के लिए तैयार हैं?"]
        },
        {
            en: ["Glad you’re here, {name}!", "Glad you’re here!"],
            te: ["{name}, మీరు ఇక్కడ ఉండటం ఆనందంగా ఉంది!", "మీరు ఇక్కడ ఉండటం ఆనందంగా ఉంది!"],
            hi: ["{name}, आपका यहाँ होना अच्छा लगा!", "आपका यहाँ होना अच्छा लगा!"]
        }
    ];

    const chooseWelcomeGreeting = () => {
        let previous = -1;
        try {
            const stored = sessionStorage.getItem("nexhealth_welcome_greeting");
            if (stored !== null) previous = Number(stored);
        } catch {
            // Keep a random greeting even when browser storage is unavailable.
        }
        const available = welcomeGreetings.map((_, index) => index).filter(index => index !== previous);
        welcomeGreetingIndex = available[Math.floor(Math.random() * available.length)] ?? 0;
        try {
            sessionStorage.setItem("nexhealth_welcome_greeting", String(welcomeGreetingIndex));
        } catch {
            // The greeting still renders when session storage is unavailable.
        }
    };

    const renderWelcomeGreeting = () => {
        const heading = $("#welcomeGreeting");
        if (!heading) return;
        const profileName = String(state.profile?.name || "").trim().split(/\s+/)[0].slice(0, 32);
        const greeting = welcomeGreetings[welcomeGreetingIndex] || welcomeGreetings[0];
        const localizedGreeting = greeting[state.language] || greeting.en;
        heading.textContent = (profileName ? localizedGreeting[0] : localizedGreeting[1])
            .replace("{name}", profileName);
    };

    const renderProfile = () => {
        const profile = state.profile;
        const name = profile.name || "Your profile";
        const nameElement = $("#topbarName");
        const avatar = $("#topbarAvatar");
        const activeProfileLabel = $("#activeProfileLabel");
        const activeFamilyProfile = (Array.isArray(state.familyProfiles) ? state.familyProfiles : [])
            .find(member => member.id === state.activeFamilyProfileId);

        if (nameElement) nameElement.textContent = name;
        if (avatar) avatar.textContent = name === "Your profile" ? "U" : name.charAt(0).toUpperCase();
        if (activeProfileLabel) activeProfileLabel.textContent = activeFamilyProfile && activeFamilyProfile.relationship !== "Self"
            ? `${activeFamilyProfile.relationship} profile`
            : "Personal account";
        renderWelcomeGreeting();

        $$("[data-profile-value]").forEach(element => {
            element.textContent = profile[element.dataset.profileValue] || "Not provided";
        });
    };

    const renderFamilyProfiles = () => {
        const container = $("#familyProfilesList");
        if (!container) return;
        const profiles = Array.isArray(state.familyProfiles) ? state.familyProfiles : [];
        if (!profiles.length) {
            container.innerHTML = `<p class="family-profile-help">Create a separate profile for each family member. Their reports, reminders, plans, and AI chats stay in that profile.</p>`;
            return;
        }
        container.innerHTML = profiles.map(member => `
            <div class="family-profile-row">
                <span><strong>${escapeHTML(member.name || "Family profile")}</strong><small>${escapeHTML(member.relationship || "Family member")}${member.id === state.activeFamilyProfileId ? " · Active" : ""}</small></span>
                <span class="family-profile-actions">
                    ${member.id !== state.activeFamilyProfileId ? `<button class="button button-secondary button-small" type="button" data-action="switch-family-profile" data-id="${escapeHTML(member.id)}">Open</button>` : ""}
                    ${member.relationship !== "Self" ? `<button class="text-button" type="button" data-action="remove-family-profile" data-id="${escapeHTML(member.id)}">Remove</button>` : ""}
                </span>
            </div>`).join("");
    };

    const switchFamilyProfile = profileId => {
        saveActiveFamilySnapshot();
        const member = state.familyProfiles.find(profile => profile.id === profileId);
        if (!member || !member.workspace) return;
        familyScopedKeys.forEach(key => {
            const value = member.workspace[key];
            state[key] = value == null
                ? (Array.isArray(state[key]) ? [] : key === "personalizedPlan" ? null : {})
                : JSON.parse(JSON.stringify(value));
        });
        state.activeFamilyProfileId = member.id;
        persist();
        renderAll();
        toast(`Opened ${member.name || "family profile"}.`);
    };

    const openAddFamilyProfile = () => {
        openModal(
            "Add a family profile",
            `<p class="family-profile-help">Create a separate workspace for a parent, child, spouse, or caregiver. You can review or remove it later.</p>` +
                field("Name", "family_name", "text", { required: true, maxLength: 80 }) +
                field("Relationship", "relationship", "select", { required: true, choices: ["Parent", "Child", "Spouse", "Caregiver", "Other"] }) +
                field("Age (optional)", "family_age", "number", { min: 1, max: 120 }),
            form => {
                if (!state.familyProfiles.length) {
                    state.familyProfiles.push({
                        id: "self",
                        name: state.profile?.name || "My profile",
                        relationship: "Self",
                        workspace: Object.fromEntries(familyScopedKeys.map(key => [key, JSON.parse(JSON.stringify(state[key] ?? null))]))
                    });
                    state.activeFamilyProfileId = "self";
                }
                const name = String(form.get("family_name") || "").trim().slice(0, 80);
                if (!name) throw new Error("Enter a profile name.");
                const profileId = id();
                const age = String(form.get("family_age") || "").trim();
                const blank = {
                    records: [], tasks: [], appointments: [], medicationReminders: [], meals: [], analyses: [],
                    messages: [], mentorConversations: [], activeMentorConversationId: "", analyzerConversations: [],
                    activeAnalyzerConversationId: "", activeConversationType: "mentor", profile: { name, age },
                    dietPreferences: {}, personalizedPlan: null
                };
                state.familyProfiles.push({ id: profileId, name, relationship: String(form.get("relationship") || "Other"), workspace: blank });
                switchFamilyProfile(profileId);
            },
            "Create profile"
        );
    };

    const removeFamilyProfile = profileId => {
        const member = state.familyProfiles.find(profile => profile.id === profileId);
        if (!member || member.relationship === "Self") return;
        if (member.workspace?.records?.length) {
            toast("Remove this profile’s medical records first so their uploaded files are handled correctly.", "warning");
            return;
        }
        if (!confirm(`Remove ${member.name || "this profile"} and its saved workspace from this account?`)) return;
        if (state.activeFamilyProfileId === profileId) {
            const self = state.familyProfiles.find(profile => profile.relationship === "Self");
            if (self) switchFamilyProfile(self.id);
        }
        state.familyProfiles = state.familyProfiles.filter(profile => profile.id !== profileId);
        persist();
        renderFamilyProfiles();
    };

    const openProfileModal = () => {
        const profile = state.profile;

        openModal(
            "Your health profile",
            field("Full name", "name", "text", { value: profile.name || "" }) +
            field("Age", "age", "number", { min: 1, max: 120, value: profile.age || "" }) +
            field("Gender", "gender", "select", {
                choices: ["Prefer not to say", "Female", "Male", "Other"],
                value: profile.gender || "Prefer not to say"
            }) +
            field("Height (cm)", "height", "number", {
                min: 30, max: 260, step: "0.1", value: profile.height || ""
            }) +
            field("Weight (kg)", "weight", "number", {
                min: 1, max: 500, step: "0.1", value: profile.weight || ""
            }) +
            field("Health conditions (optional)", "conditions", "textarea", {
                value: profile.conditions || "",
                placeholder: "e.g. asthma or high blood pressure. Share only what you want used for wellness suggestions."
            }) +
            field("Allergies or notes", "notes", "textarea", {
                value: profile.notes || "",
                placeholder: "Optional. Only enter information you want stored in this browser."
            }),
            form => {
                state.profile = {
                    name: form.get("name").trim(),
                    age: form.get("age"),
                    gender: form.get("gender"),
                    height: form.get("height"),
                    weight: form.get("weight"),
                    conditions: form.get("conditions").trim().slice(0, 500),
                    notes: form.get("notes").trim()
                };

                persist();
                renderProfile();
                renderFamilyProfiles();
                toast("Profile saved in this browser.");
            }
        );
    };

    const renderConsent = () => {
        $$("[data-consent]").forEach(input => {
            input.checked = Boolean(state.consent[input.dataset.consent]);
        });
    };

    const renderConsentHistory = () => {
        const container = $("#consentHistoryList");
        if (!container) return;
        const entries = Array.isArray(state.consentHistory) ? state.consentHistory : [];
        if (!entries.length) {
            container.innerHTML = `<div class="empty-state compact-empty">
                <i data-lucide="history"></i>
                <strong>No consent history available</strong>
                <p>Your saved preference changes will appear here.</p>
            </div>`;
            refreshIcons();
            return;
        }

        container.innerHTML = [...entries].reverse().slice(0, 20).map(entry => {
            const date = entry.createdAt ? new Date(entry.createdAt) : null;
            const dateText = date && !Number.isNaN(date.getTime())
                ? new Intl.DateTimeFormat(uiLocale(), { dateStyle: "medium", timeStyle: "short" }).format(date)
                : "";
            const updates = (Array.isArray(entry.changes) ? entry.changes : []).map(change =>
                `${escapeHTML(change.label)}: ${change.enabled ? "On" : "Off"}`
            ).join(" · ");
            return `<div class="consent-history-entry">
                <strong>Preferences updated</strong>
                <span>${escapeHTML(dateText)}</span>
                <p>${updates}</p>
            </div>`;
        }).join("");
    };

    const renderDietPreferences = () => {
        const preferences = state.dietPreferences || {};
        if ($("#dietPreference")) $("#dietPreference").value = preferences.diet || "";
        if ($("#dietAllergies")) $("#dietAllergies").value = preferences.allergies || "";
        if ($("#wellnessGoal")) $("#wellnessGoal").value = preferences.goal || "";
        if ($("#currentDailySteps")) $("#currentDailySteps").value = preferences.dailySteps || "";
        if ($("#usualSleepHours")) $("#usualSleepHours").value = preferences.sleepHours || "";
    };

    const renderWellnessReportOption = () => {
        const checkbox = $("#includeWellnessReportData");
        const help = $("#wellnessReportOptionHelp");
        if (!checkbox) return;
        const available = state.analyses.some(item =>
            typeof item?.summary === "string" || typeof item?.extracted_text === "string"
        ) || state.records.some(item => item?.record_type === "health_note" && typeof item?.extracted_text === "string") ||
            (Array.isArray(state.medicationReminders) && state.medicationReminders.length > 0);
        checkbox.disabled = !available;
        if (!available) checkbox.checked = false;
        if (help) help.textContent = available
            ? "Saved prescription analyses, reports, health notes, and medication reminders will be sent only for this plan request. Verify details against the originals."
            : "No saved prescription or health information is available yet. You can still create a plan from your profile and routine.";
    };

    const renderAll = () => {
        const date = $("#currentDate");
        if (date) {
            date.textContent = new Intl.DateTimeFormat(uiLocale(), {
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric"
            }).format(new Date());
        }

        const analyses = $("#metricAnalyses");
        if (analyses) {
            analyses.textContent = state.analyses.length > 0 ? String(state.analyses.length) : "";
        }

        renderTasks();
        renderAppointments();
        renderCareReminders();
        renderPendingCareActions();
        renderRecords();
        renderMeals();
        renderProfile();
        renderFamilyProfiles();
        renderDietPreferences();
        renderWellnessReportOption();
        renderConsent();
        renderConsentHistory();
        renderMentorMessages();
        renderSavedPersonalizedPlan();
    };

    const apiRequest = async (url, options = {}) => {
        let response;

        try {
            response = await fetch(url, { credentials: "same-origin", ...options });
        } catch {
            throw new Error("Cannot connect to the Flask server. Make sure app.py is running.");
        }

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
            throw new Error(data.error || data.message || `Request failed (${response.status}).`);
        }

        return data;
    };

    const renderRecordSharing = () => {
        const requestList = $("#recordSharingRequests");
        const sharedList = $("#recordsSharedWithMe");
        const status = $("#recordSharingStatus");
        const revokeButton = $("#revokeRecordSharing");
        const codePanel = $("#recordShareCodePanel");
        const authenticated = document.body.classList.contains("account-authenticated");

        if (!authenticated) {
            if (status) status.textContent = "Sign in to create a code, request access, or manage record sharing. Guest records cannot be shared between accounts.";
            if (requestList) requestList.innerHTML = "<p>Sign in to load access requests.</p>";
            if (sharedList) sharedList.innerHTML = "<p>Sign in to load records shared with you.</p>";
            if (revokeButton) revokeButton.hidden = true;
            if (codePanel) codePanel.hidden = true;
            return;
        }

        if (revokeButton) revokeButton.hidden = !recordSharing.active;
        if (status && recordSharing.active) status.textContent = "Your request code is active. It only allows signed-in people to request access; you approve each person.";
        if (requestList) {
            const requests = Array.isArray(recordSharing.requests) ? recordSharing.requests : [];
            requestList.innerHTML = requests.length ? requests.map(item => {
                const email = escapeHTML(item.recipient_email || "Signed-in NexHealth user");
                if (item.status === "pending") return `
                    <article class="record-sharing-item">
                        <div><strong>${email}</strong><small>Requesting access to records currently in your library</small></div>
                        <div class="record-sharing-item-actions">
                            <button class="button button-primary button-small" type="button" data-record-share-review="approve" data-request-id="${escapeHTML(item.id)}">Approve</button>
                            <button class="button button-secondary button-small" type="button" data-record-share-review="reject" data-request-id="${escapeHTML(item.id)}">Decline</button>
                        </div>
                    </article>`;
                return `<article class="record-sharing-item"><div><strong>${email}</strong><small>Can view the records that existed when you approved.</small></div><div class="record-sharing-item-actions"><span class="record-sharing-approved">Approved</span><button class="button button-secondary button-small" type="button" data-record-share-revoke="${escapeHTML(item.id)}">Revoke</button></div></article>`;
            }).join("") : "<p>No access requests.</p>";
        }

        if (sharedList) {
            const shares = Array.isArray(recordSharing.shares) ? recordSharing.shares : [];
            const entries = shares.flatMap(group => {
                const records = Array.isArray(group.records) ? group.records : [];
                const analyses = Array.isArray(group.analyses) ? group.analyses : [];
                return records.map(record => ({ record, ownerEmail: group.owner_email, analysis: analyses.find(item => item.id === record.analysis_id) }));
            });
            sharedList.innerHTML = entries.length ? entries.map(({ record, ownerEmail, analysis }) => {
                const recordId = encodeURIComponent(String(record.id || ""));
                const fileActions = record.file_available
                    ? `<div class="record-row-actions"><a class="button button-secondary button-small record-file-link" href="/api/shared-medical-records/${recordId}/file" target="_blank" rel="noopener noreferrer">View</a><a class="button button-secondary button-small record-file-link" href="/api/shared-medical-records/${recordId}/download">Download</a></div>`
                    : "";
                const analysisBlock = analysis?.summary
                    ? `<details class="record-analysis-preview"><summary>View saved analysis</summary><div class="analysis-text">${formatAnalysisContent(analysis.summary)}</div></details>`
                    : "";
                return `<article class="record-sharing-item record-sharing-shared-item"><div><strong>${escapeHTML(record.name || record.file_name || "Health record")}</strong><small>Shared by ${escapeHTML(ownerEmail || "a NexHealth user")} · ${escapeHTML(formatDate(record.created_at || ""))}</small>${analysisBlock}${fileActions}</div></article>`;
            }).join("") : "<p>No records have been shared with you.</p>";
        }
    };

    const loadRecordSharing = async () => {
        if (!document.body.classList.contains("account-authenticated")) {
            renderRecordSharing();
            return;
        }
        const status = $("#recordSharingStatus");
        if (status) status.textContent = "Loading private sharing status…";
        try {
            const [access, shared] = await Promise.all([
                apiRequest("/api/record-sharing"),
                apiRequest("/api/record-sharing/records")
            ]);
            recordSharing.active = access.share_active === true;
            recordSharing.requests = Array.isArray(access.requests) ? access.requests : [];
            recordSharing.shares = Array.isArray(shared.shares) ? shared.shares : [];
            renderRecordSharing();
            if (status && !recordSharing.active) status.textContent = "Record sharing is off. Generate a code only when you are ready to invite someone.";
        } catch (error) {
            if (status) status.textContent = error.message;
            if ($("#recordSharingRequests")) $("#recordSharingRequests").innerHTML = "<p>Could not load access requests.</p>";
            if ($("#recordsSharedWithMe")) $("#recordsSharedWithMe").innerHTML = "<p>Could not load shared records.</p>";
        }
    };

    const createRecordSharingCode = async () => {
        const button = $("#generateRecordShareCode");
        const status = $("#recordSharingStatus");
        if (button) button.disabled = true;
        try {
            const result = await apiRequest("/api/record-sharing/code", { method: "POST" });
            recordSharing.active = true;
            recordSharing.code = String(result.code || "");
            $("#recordShareCodeValue").textContent = recordSharing.code;
            $("#recordShareCodePanel").hidden = false;
            if (status) status.textContent = "New code generated. Any previous request code was replaced; already approved access remains until revoked.";
            renderRecordSharing();
            toast("NexHealth demo code generated. It is not an ABHA number.");
        } catch (error) {
            if (status) status.textContent = error.message;
            toast(error.message, "error");
        } finally {
            if (button) button.disabled = false;
        }
    };

    const revokeRecordSharing = async () => {
        if (!window.confirm("Revoke the sharing code and all approved access to your NexHealth records? People will immediately lose access.")) return;
        const button = $("#revokeRecordSharing");
        if (button) button.disabled = true;
        try {
            await apiRequest("/api/record-sharing/revoke", { method: "POST" });
            recordSharing.active = false;
            recordSharing.requests = [];
            recordSharing.code = "";
            $("#recordShareCodePanel").hidden = true;
            if ($("#recordSharingStatus")) $("#recordSharingStatus").textContent = "Sharing code and approved access have been revoked.";
            renderRecordSharing();
            toast("Record sharing revoked.");
        } catch (error) {
            toast(error.message, "error");
        } finally {
            if (button) button.disabled = false;
        }
    };

    const setAuthFeedback = (message, kind = "error") => {
        const feedback = $("#authFeedback");
        if (!feedback) return;
        feedback.textContent = message;
        feedback.dataset.kind = kind;
    };

    const hydrateWorkspace = async user => {
        workspaceHydrated = false;
        if (user.demo_mode) {
            try {
                const consent = await apiRequest("/api/consent/ai");
                state.consent = { ...state.consent, aiProcessing: consent.enabled === true };
                save(STORAGE.consent, state.consent);
            } catch {
                state.consent = { ...state.consent, aiProcessing: false };
                save(STORAGE.consent, state.consent);
            }
            workspaceHydrated = true;
            return;
        }

        const [workspaceResult, consentResult] = await Promise.all([
            apiRequest("/api/workspace").then(value => ({ value }), error => ({ error })),
            apiRequest("/api/consent/ai").then(value => ({ value }), error => ({ error }))
        ]);

        if (workspaceResult.error) {
            toast(`Database is not available: ${workspaceResult.error.message}. Your current data remains in this browser.`, "error");
        } else {
            try {
                if (workspaceResult.value.workspace) {
                    applyWorkspaceSnapshot(workspaceResult.value.workspace);
                } else {
                    await apiRequest("/api/workspace", {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ workspace: workspaceSnapshot() })
                    });
                }
                accountCacheFallback = false;
                clearAccountLocalCache();
            } catch (error) {
                toast(`Database is not available: ${error.message}. Your current data remains in this browser.`, "error");
            }
        }

        state.consent = {
            ...state.consent,
            aiProcessing: consentResult.value?.enabled === true
        };
        workspaceHydrated = true;
    };

    const updateAuthMode = () => {
        const signup = authMode === "signup";
        $("#authTitle").textContent = signup ? "Create your account" : "Welcome back";
        $("#authDescription").textContent = signup
            ? "Create an account to open your personal health workspace."
            : "Sign in to open your personal health workspace.";
        $("#authSubmit").textContent = signup ? "Create account" : "Sign in";
        $("#authModeToggle").textContent = signup ? "I already have an account" : "Create an account";
        $("#authPassword").autocomplete = signup ? "new-password" : "current-password";
        $("#authPassword").minLength = signup ? 8 : 1;
        setAuthFeedback("");
        applyTranslations();
    };

    const openAuthPrompt = () => {
        authMode = "login";
        updateAuthMode();
        document.body.classList.add("auth-prompt");
        window.requestAnimationFrame(() => $("#authEmail")?.focus());
    };

    const closeAuthPrompt = () => {
        document.body.classList.remove("auth-prompt");
        $("#authForm")?.reset();
        authMode = "login";
        updateAuthMode();
    };

    const startAuthenticatedApp = async (user, guestWorkspace = null) => {
        activateUser(user);
        document.body.classList.toggle("local-demo-mode", Boolean(user.demo_mode));
        document.body.classList.toggle("account-authenticated", !user.demo_mode);
        document.body.classList.add("auth-ready");
        document.body.classList.remove("auth-prompt", "auth-pending");
        const appShell = $("#appShell");
        if (appShell) {
            appShell.inert = true;
            appShell.setAttribute("aria-busy", "true");
        }
        chooseWelcomeGreeting();
        updateSettingsAccountPanels();
        applyTranslations();
        renderAll();
        navigate("overview");
        refreshIcons();

        await hydrateWorkspace(user);
        if (guestWorkspace && hasWorkspaceData(guestWorkspace)) {
            mergeGuestWorkspace(guestWorkspace);
            const savedMessage = {
                te: "మీ అతిథి కార్యస్థల డేటా మీ ఖాతాకు జోడించబడింది.",
                hi: "आपके अतिथि कार्यक्षेत्र का डेटा आपके खाते में जोड़ दिया गया है."
            }[state.language] || "Your guest workspace data has been added to your account.";
            toast(savedMessage, "success");
        }
        updateSettingsAccountPanels();
        if (!appEventsBound) {
            bindEvents();
            appEventsBound = true;
        }
        applyTranslations();
        renderAll();
        navigate("overview");
        refreshIcons();
        startReminderScheduler();
        if (appShell) {
            appShell.inert = false;
            appShell.setAttribute("aria-busy", "false");
        }

        apiRequest("/api/health").then(health => {
            if (!health.ai_configured) {
                console.warn("NexHealth: OPENROUTER_API_KEY is not configured.");
            }
        }).catch(error => {
            console.warn("NexHealth backend health check failed:", error.message);
        });
    };

    const startGuestApp = () => {
        activeUserId = "";
        STORAGE = { ...STORAGE_BASE };
        workspaceHydrated = true;
        document.body.classList.add("local-demo-mode", "auth-ready");
        document.body.classList.remove("account-authenticated", "auth-prompt");
        document.body.classList.remove("auth-pending");
        const appShell = $("#appShell");
        if (appShell) {
            appShell.inert = false;
            appShell.setAttribute("aria-busy", "false");
        }
        updateSettingsAccountPanels();
        chooseWelcomeGreeting();
        if (!appEventsBound) {
            bindEvents();
            appEventsBound = true;
        }
        applyTranslations();
        renderAll();
        navigate("overview");
        refreshIcons();
        startReminderScheduler();
    };

    const bindAuthEvents = () => {
        $("#authCancelButton")?.addEventListener("click", closeAuthPrompt);
        $("#authGate")?.addEventListener("click", event => {
            if (event.target === event.currentTarget) closeAuthPrompt();
        });

        $("#authModeToggle")?.addEventListener("click", () => {
            authMode = authMode === "login" ? "signup" : "login";
            updateAuthMode();
        });

        $("#authForm")?.addEventListener("submit", async event => {
            event.preventDefault();
            const form = event.currentTarget;
            if (!form.reportValidity()) return;

            const submit = $("#authSubmit");
            submit.disabled = true;
            setAuthFeedback("Connecting securely…", "info");
            try {
                const result = await apiRequest(`/api/auth/${authMode}`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: $("#authEmail").value.trim(),
                        password: $("#authPassword").value
                    })
                });

                if (result.confirmation_required) {
                    authMode = "login";
                    updateAuthMode();
                    setAuthFeedback("Check your email to confirm the account, then sign in.", "info");
                    return;
                }
                if (!result.authenticated || !result.user?.id) {
                    throw new Error("The sign-in service did not return an active session.");
                }
                const guestWorkspace = document.body.classList.contains("account-authenticated")
                    ? null
                    : JSON.parse(JSON.stringify(workspaceSnapshot()));
                form.reset();
                await startAuthenticatedApp(result.user, guestWorkspace);
            } catch (error) {
                const message = error.message.includes("not configured")
                    ? "Server setup is incomplete. Add SUPABASE_URL and SUPABASE_ANON_KEY to the server environment."
                    : error.message;
                setAuthFeedback(message);
            } finally {
                submit.disabled = false;
            }
        });
    };

    const renderLabTrends = data => {
        const containers = [$("#labTrendsResults"), $("#overviewLabTrendsResults")].filter(Boolean);
        if (!containers.length) return;
        const trends = Array.isArray(data?.trends) ? data.trends : [];
        const charts = trends.map(trend => {
            const points = (Array.isArray(trend.points) ? trend.points : [])
                .filter(point => point && Number.isFinite(Number(point.value)) && /^\d{4}-\d{2}-\d{2}$/.test(String(point.date || "")))
                .slice(-6);
            if (points.length < 2) return "";
            const values = points.map(point => Number(point.value));
            let min = Math.min(...values);
            let max = Math.max(...values);
            if (min === max) { min -= 1; max += 1; }
            const left = 48, right = 368, top = 22, bottom = 134;
            const coordinates = points.map((point, index) => ({
                x: left + (right - left) * index / (points.length - 1),
                y: bottom - ((Number(point.value) - min) / (max - min)) * (bottom - top)
            }));
            const polyline = coordinates.map(point => `${point.x},${point.y}`).join(" ");
            const circles = coordinates.map((point, index) => `<circle class="lab-trend-point" cx="${point.x}" cy="${point.y}" r="5"><title>${escapeHTML(points[index].date)}: ${escapeHTML(points[index].display || points[index].value)} ${escapeHTML(points[index].unit || "")}</title></circle>`).join("");
            const firstDate = escapeHTML(points[0].date);
            const lastDate = escapeHTML(points[points.length - 1].date);
            const unit = escapeHTML(points.find(point => point.unit)?.unit || "");
            const pointList = points.map(point => `<li><strong>${escapeHTML(point.display || point.value)}${unit ? ` ${unit}` : ""}</strong><span>${escapeHTML(point.date)} · ${escapeHTML(point.source || "Saved report")}</span></li>`).join("");
            return `<article class="lab-trend-chart-card">
                <div class="lab-trend-chart-heading"><h3>${escapeHTML(trend.test || "Lab result")}</h3><span>${unit}</span></div>
                <p>${escapeHTML(trend.summary || "Values reported over time; discuss what they mean with your clinician.")}</p>
                <svg class="lab-trend-chart" viewBox="0 0 400 174" role="img" aria-label="${escapeHTML(`${trend.test || "Lab result"} over time`)}">
                    <line class="lab-trend-gridline" x1="${left}" y1="${top}" x2="${right}" y2="${top}" />
                    <line class="lab-trend-gridline" x1="${left}" y1="${bottom}" x2="${right}" y2="${bottom}" />
                    <text class="lab-trend-axis" x="4" y="${top + 4}">${escapeHTML(max.toLocaleString())}</text>
                    <text class="lab-trend-axis" x="4" y="${bottom + 4}">${escapeHTML(min.toLocaleString())}</text>
                    <polyline class="lab-trend-line" points="${polyline}" />${circles}
                    <text class="lab-trend-date" x="${left}" y="160" text-anchor="start">${firstDate}</text>
                    <text class="lab-trend-date" x="${right}" y="160" text-anchor="end">${lastDate}</text>
                </svg>
                <ol class="lab-trend-points">${pointList}</ol>
                <small class="lab-trend-note">Report values only · not a diagnosis</small>
            </article>`;
        }).filter(Boolean);
        const markup = charts.length
            ? `<div class="lab-trend-chart-list">${charts.join("")}</div>`
            : `<div class="empty-state"><span class="empty-state-icon"><i data-lucide="chart-no-axes-combined"></i></span><strong>Your trends will appear here</strong><p>At least two clear, dated results for the same test and unit are needed. Unclear values are left out.</p></div>`;
        containers.forEach(container => { container.innerHTML = markup; });
        refreshIcons();
    };

    const renderHealthInsights = data => {
        renderLabTrends(data);
        const container = $("#healthInsightsResults");
        if (!container) return;
        const citationMarkup = citations => (Array.isArray(citations) ? citations : []).map(citation => `
            <div class="health-insight-evidence"><p>“${escapeHTML(citation.evidence || "")}”</p>
                <small class="health-insight-source">${escapeHTML(citation.source || "Saved report")}${citation.date ? ` · ${escapeHTML(citation.date)}` : ""}</small>
            </div>`).join("");
        const group = (title, items, renderItem) => !items?.length ? "" :
            `<section class="health-insight-group"><h3>${escapeHTML(title)}</h3>${items.map(renderItem).join("")}</section>`;
        const trends = group("Trends", data.trends, item => `<article class="health-insight-card">
            <strong>${escapeHTML(item.test)} · ${escapeHTML(item.direction || "change observed")}</strong><p>${escapeHTML(item.summary || "")}</p>${citationMarkup(item.citations)}</article>`);
        const risks = group("Values to discuss with your healthcare professional", data.risk_flags, item => `<article class="health-insight-card">
            <strong>${escapeHTML(item.test || item.title || "Report finding")}</strong><p>${escapeHTML(item.guidance || "Discuss this report finding with your healthcare professional.")}</p>${citationMarkup(item.citations)}</article>`);
        const steps = group("Preventive next steps", data.next_steps, (item, index) => {
            const citations = Array.isArray(item.citations) ? item.citations : [];
            const source = citations[0]?.source || "Saved report";
            const evidence = citations[0]?.evidence || "";
            const actions = citations.length ? `<div class="health-insight-actions">
                <button class="button button-secondary button-small" type="button" data-action="add-health-insight-task" data-title="${escapeHTML(item.overdue ? "Check whether follow-up is still due" : "Discuss the recommended follow-up")}" data-guidance="${escapeHTML(item.guidance || "")}" data-evidence="${escapeHTML(evidence)}" data-source="${escapeHTML(source)}" data-due-date="${escapeHTML(item.due_date || "")}" data-card-id="followup-${index}">Review &amp; edit task</button>
                <button class="text-button" type="button" data-action="reject-health-insight">Dismiss</button>
            </div>` : "";
            return `<article class="health-insight-card" data-health-insight-card="followup-${index}">
                <strong>${escapeHTML(item.title || "Discuss with your clinician")}</strong><p>${escapeHTML(item.guidance || "")}</p>${citationMarkup(citations)}${actions}</article>`;
        });
        const gaps = Array.isArray(data.data_gaps) ? data.data_gaps : [];
        const gapsMarkup = gaps.length ? `<section class="health-insight-group"><h3>What is missing</h3>${gaps.map(gap => `<p class="health-insight-gap">${escapeHTML(gap)}</p>`).join("")}</section>` : "";
        container.innerHTML = trends || risks || steps || gapsMarkup
            ? `${trends}${risks}${steps}${gapsMarkup}`
            : `<div class="empty-state compact-empty"><strong>No report-backed insights found</strong><p>The saved reports did not contain enough clear, dated information to identify a trend or flag. No values were inferred.</p></div>`;
    };

    const generateHealthInsights = async () => {
        const buttons = [$("#generateHealthInsightsButton"), $("#overviewGenerateHealthInsightsButton")].filter(Boolean);
        const container = $("#healthInsightsResults");
        const overview = $("#overviewLabTrendsResults");
        if (!buttons.length || !container || buttons.some(button => button.disabled)) return;
        if (!state.consent.aiProcessing) {
            requestAIConsent(generateHealthInsights);
            return;
        }
        const reports = state.analyses.filter(item => item && (item.extracted_text || item.summary)).slice(0, 8);
        if (!reports.length) {
            container.innerHTML = `<div class="empty-state compact-empty"><strong>Analyze a report first</strong><p>Health insights use saved report analyses and extracted text from this workspace.</p></div>`;
            if (overview) overview.innerHTML = `<div class="empty-state compact-empty"><strong>Your report trends will appear here</strong><p>Analyze and save reports first. Two clear, dated results for the same test are needed to draw a trend.</p></div>`;
            return;
        }
        buttons.forEach(button => { button.disabled = true; });
        container.innerHTML = `<div class="empty-state compact-empty" role="status"><strong>Reviewing saved reports…</strong><p>Looking for dated, comparable evidence. Unclear values will be left out.</p></div>`;
        if (overview) overview.innerHTML = `<div class="empty-state compact-empty" role="status"><strong>Reviewing saved reports…</strong><p>Looking for dated, comparable results to show here.</p></div>`;
        try {
            const result = await apiRequest("/api/health-insights", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    language: state.language,
                    profile: { age: state.profile?.age || "", conditions: String(state.profile?.conditions || "").slice(0, 500) },
                    reports: reports.map(item => ({
                        id: String(item.id || "").slice(0, 80),
                        source: String(item.file_name || item.name || "Saved report").slice(0, 160),
                        type: String(item.type || "unknown").slice(0, 40),
                        summary: String(item.summary || "").slice(0, 2500),
                        extracted_text: String(item.extracted_text || "").slice(0, 6000),
                        needs_review: item.ocr_review_required !== false || !item.extracted_text || item.type === "prescription"
                    }))
                })
            });
            renderHealthInsights(result);
        } catch (error) {
            container.innerHTML = `<div class="empty-state compact-empty"><strong>Insights unavailable</strong><p>${escapeHTML(error.message || "Try again later.")}</p></div>`;
            if (overview) overview.innerHTML = `<div class="empty-state compact-empty"><strong>Trends unavailable</strong><p>${escapeHTML(error.message || "Try again later.")}</p></div>`;
        } finally {
            buttons.forEach(button => { button.disabled = false; });
            refreshIcons();
        }
    };

    const renderCareActionDrafts = analysis => {
        const container = $("#careActionDrafts");
        if (!container || !analysis) return;
        const draft = analysis.care_action_draft;
        if (draft?.error) {
            container.innerHTML = `<p class="care-draft-note">${escapeHTML(draft.error)}</p>`;
            return;
        }
        if (!draft) {
            container.innerHTML = `<p class="care-draft-note" role="status">Preparing reviewable reminder and doctor-question drafts…</p>`;
            return;
        }
        const medicines = (draft.medications || []).map((medicine, index) => `
            <article class="care-draft-item">
                <div><strong>${escapeHTML(medicine.name)}</strong><p>${escapeHTML(medicine.dose)}${medicine.timing ? ` · ${escapeHTML(medicine.timing)}` : ""}</p>
                    <small>Suggested from: “${escapeHTML(medicine.evidence)}”</small></div>
                <div class="care-draft-actions"><button class="button button-secondary button-small" type="button" data-action="review-care-draft" data-id="${escapeHTML(analysis.id)}" data-index="${index}">Review & edit</button>
                    <button class="text-button" type="button" data-action="reject-care-draft" data-id="${escapeHTML(analysis.id)}" data-index="${index}">Reject</button></div>
            </article>`).join("");
        const followUpTasks = (draft.follow_up_tasks || []).map((task, index) => `
            <article class="care-draft-item">
                <div><strong>${escapeHTML(task.title)}</strong><p>${escapeHTML(task.notes || "Optional follow-up task")}</p>
                    <small>Suggested from: “${escapeHTML(task.evidence)}”</small></div>
                <div class="care-draft-actions"><button class="button button-secondary button-small" type="button" data-action="add-care-task" data-id="${escapeHTML(analysis.id)}" data-index="${index}">Review & add task</button>
                    <button class="text-button" type="button" data-action="reject-care-task" data-id="${escapeHTML(analysis.id)}" data-index="${index}">Reject</button></div>
            </article>`).join("");
        const questions = Array.isArray(draft.doctor_questions) ? draft.doctor_questions : [];
        const gaps = Array.isArray(draft.data_gaps) ? draft.data_gaps : [];
        container.innerHTML = `<section class="care-draft-panel"><h3>Reviewable care suggestions</h3>
            <p class="care-draft-note">These are optional drafts. Review them before adding a task; verify any medicine details against the original before saving a reminder.</p>
            ${medicines || `<p class="care-draft-note">No reminder draft could be verified from the readable prescription text. You can enter a reminder manually.</p>`}
            ${followUpTasks ? `<h4>Optional follow-up tasks</h4>${followUpTasks}` : ""}
            ${questions.length ? `<h4>Questions to review with your clinician</h4><ul>${questions.map(question => `<li>${escapeHTML(question)}</li>`).join("")}</ul>
                <button class="button button-secondary button-small" type="button" data-action="review-draft-questions" data-id="${escapeHTML(analysis.id)}">Edit these in AI Health Mentor</button>` : ""}
            ${gaps.length ? `<p class="care-draft-note">${gaps.map(escapeHTML).join(" ")}</p>` : ""}
            <p class="care-draft-note">AI suggestions can be wrong. Confirm every name, dose, time, and duration with the original prescription and a pharmacist.</p></section>`;
        refreshIcons();
    };

    const prepareCareActionDrafts = async analysis => {
        if (!analysis || !analysis.extracted_text) {
            analysis.care_action_draft = { medications: [], doctor_questions: [], follow_up_tasks: [], data_gaps: ["No readable prescription text was extracted."] };
            renderCareActionDrafts(analysis);
            persist();
            return;
        }
        renderCareActionDrafts(analysis);
        try {
            const draft = await apiRequest("/api/care-action-drafts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ language: state.language, source: analysis.file_name, extracted_text: analysis.extracted_text })
            });
            analysis.care_action_draft = draft;
        } catch (error) {
            analysis.care_action_draft = { error: `Could not prepare suggestions: ${error.message}` };
        }
        persist();
        renderCareActionDrafts(analysis);
    };

    const analyzeReport = async () => {
        const fileInput = $("#reportFileInput");
        const file = fileInput?.files?.[0];

        if (!file) {
            toast("Choose a PDF, JPG, JPEG, PNG, WebP, or DOCX file first.", "warning");
            fileInput?.focus();
            return;
        }

        if (!isSupportedMedicalDocument(file)) {
            toast("Choose a PDF, JPG, JPEG, PNG, WebP, or DOCX file.", "error");
            return;
        }

        if (file.size > 10 * 1024 * 1024) {
            toast("The maximum file size is 10 MB.", "error");
            return;
        }

        if (!state.consent.aiProcessing) {
            requestAIConsent(analyzeReport);
            return;
        }

        const button = $("#analyzeReportButton");
        const resultsPanel = $("#analysisResultsPanel");
        const results = $("#analysisResults");
        const status = $("#analysisStatus");

        if (state.busy) return;
        state.busy = true;

        if (button) {
            button.disabled = true;
            button.textContent = "Analyzing report...";
        }

        if (resultsPanel) resultsPanel.hidden = false;
        if (status) status.textContent = "Processing";
        if (results) {
            results.textContent = "Reading your document and requesting an explanation...";
        }

        const type = $("#analysisType")?.value || "summary";
        const analysisId = id();
        let savedRecord = null;

        try {
            // Keep the original file in the signed-in user's private storage.
            // Guest mode still saves the analysis and record entry locally below.
            if (activeUserId && document.body.classList.contains("account-authenticated")) {
                const recordBody = new FormData();
                recordBody.append("file", file);
                const uploadResponse = await fetch("/api/medical-records", {
                    method: "POST",
                    body: recordBody
                });
                const uploaded = await uploadResponse.json().catch(() => ({}));
                if (!uploadResponse.ok) {
                    throw new Error(uploaded.error || uploaded.message || "The document could not be saved to Medical records.");
                }
                savedRecord = {
                    id: uploaded.id || id(),
                    name: file.name,
                    category: type === "prescription" ? "prescription" : type === "lab" ? "lab" : "other",
                    file_name: uploaded.file_name || file.name,
                    storage_path: uploaded.storage_path || "",
                    size: uploaded.size || file.size,
                    mime_type: uploaded.mime_type || file.type,
                    created_at: uploaded.created_at || new Date().toISOString(),
                    storage: uploaded.storage || "supabase",
                    file_available: uploaded.file_available === true,
                    status: "Analyzed",
                    analysis_id: analysisId
                };
                state.records.unshift(savedRecord);
                persist();
                renderAll();
            }

            const body = new FormData();
            body.append("file", file);

            const context = $("#analysisContext")?.value?.trim() || "";

            body.append("analysis_type", type);
            body.append("context", context);
            body.append("language", state.language);

            const data = await apiRequest("/api/analyze-report", {
                method: "POST",
                body
            });

            const answer = data.summary || data.analysis || data.message || "No analysis was returned.";

            const analysis = {
                id: analysisId,
                file_name: file.name,
                type,
                summary: answer,
                extracted_text: typeof data.extracted_text === "string"
                    ? data.extracted_text.slice(0, 8000)
                    : "",
                ocr_review_required: data.ocr_review_required === true,
                ocr_confidence: Number.isFinite(data.ocr_confidence) ? data.ocr_confidence : null,
                analysis_method: String(data.analysis_method || "").slice(0, 80),
                created_at: data.created_at || new Date().toISOString()
            };
            state.analyses.unshift(analysis);

            if (!savedRecord) {
                savedRecord = {
                    id: id(),
                    record_type: "analyzed_report",
                    name: file.name,
                    category: type === "prescription" ? "prescription" : type === "lab" ? "lab" : "other",
                    file_name: file.name,
                    size: file.size,
                    mime_type: file.type || "application/octet-stream",
                    created_at: analysis.created_at,
                    storage: "this browser",
                    file_available: false,
                    status: "Analysis saved here",
                    analysis_id: analysisId
                };
                state.records.unshift(savedRecord);
            }

            persist();

            if (results) {
                const analysisMethod = data.analysis_method === "vision_fallback"
                    ? t("Vision model used because OCR was unavailable")
                    : data.vision_check_used
                        ? (data.analysis_method || "").startsWith("pdf_text_llm")
                            ? t("PDF text + AI with vision cross-check")
                            : t("OCR + AI with vision cross-check")
                        : data.analysis_method === "pdf_text_llm"
                            ? t("PDF text + AI")
                            : t("OCR + AI");
                const pipelineDetails = [
                    `${t("Analysis method")}: ${analysisMethod}`
                ];
                if (data.vision_check_error) {
                    pipelineDetails.push(t("Vision cross-check unavailable"));
                }
                if (data.ocr_error) {
                    pipelineDetails.push(data.ocr_error);
                }
                results.innerHTML = `
                    <div class="analysis-answer">
                        <h3>Report explanation</h3>
                        <p class="analysis-pipeline-status">${escapeHTML(pipelineDetails.join(" · "))}</p>
                        ${data.ocr_review_required ? `<p class="medical-disclaimer analysis-review-notice">${escapeHTML(t("Additional verification recommended"))}. ${escapeHTML(t("AI readings can be wrong. Verify medicines and doses with the original document and a pharmacist."))}</p>` : ""}
                        <div class="analysis-text">${formatAnalysisContent(answer)}</div>
                        <button class="button button-secondary analysis-continue-button" type="button"
                            data-analysis-conversation="${escapeHTML(state.analyses[0].id)}">
                            <i data-lucide="messages-square"></i>
                            ${escapeHTML(t("Continue conversation in AI Health Mentor"))}
                        </button>
                        ${type === "prescription" ? `<button class="button button-secondary analysis-continue-button" type="button" data-action="add-medication-reminder" data-source="${escapeHTML(file.name)}"><i data-lucide="pill"></i> Create medicine reminder</button>` : ""}
                        ${type === "prescription" ? `<div id="careActionDrafts"></div>` : ""}
                        ${data.extracted_text ? `
                            <details>
                                <summary>Review extracted text</summary>
                                <pre>${escapeHTML(data.extracted_text)}</pre>
                            </details>` : ""}
                        <p class="medical-disclaimer analysis-educational-note">
                            Educational information only. Verify extracted values against the
                            original document and discuss results with a qualified professional.
                        </p>
                    </div>`;
            }

            if (type === "prescription") await prepareCareActionDrafts(state.analyses[0]);

            if (status) status.textContent = "Complete";
            renderAll();
            toast(savedRecord.storage === "this browser"
                ? "Analysis saved to Medical records in this browser."
                : "Report analysis completed and saved to your private Medical records.");
        } catch (error) {
            if (status) status.textContent = "Could not analyze";
            if (results) results.textContent = savedRecord
                ? `The document is saved in Medical records, but analysis did not finish: ${error.message}`
                : error.message;
            toast(savedRecord
                ? `Document saved to Medical records. Analysis did not finish: ${error.message}`
                : error.message, "error");
        } finally {
            state.busy = false;
            if (button) {
                button.disabled = false;
                button.innerHTML = '<i data-lucide="sparkles"></i> Analyze report';
            }
            refreshIcons();
        }
    };

    const setMentorHistoryOpen = open => {
        const panel = $("#mentorHistoryPanel");
        const toggle = $("#mentorHistoryToggle");
        if (!panel || !toggle) return;
        panel.hidden = !open;
        toggle.setAttribute("aria-expanded", String(open));
    };

    const renderConversationHistory = () => {
        const renderList = (type, selector) => {
            const container = $(selector);
            if (!container) return;
            const conversations = type === "analyzer"
                ? (Array.isArray(state.analyzerConversations) ? state.analyzerConversations : [])
                : (ensureMentorConversations(), state.mentorConversations);
            if (!conversations.length) {
                container.innerHTML = `<p class="mentor-history-empty">${escapeHTML(t("No conversations yet"))}</p>`;
                return;
            }
            const selectedId = activeConversationId(type);
            container.innerHTML = conversations.map(conversation => {
                const label = conversation.title || "New chat";
                const localizedLabel = label === "New chat" ? t(label) : label;
                return `
                    <div class="mentor-history-entry">
                        <button class="mentor-conversation-item" type="button"
                            aria-current="${state.activeConversationType === type && conversation.id === selectedId}"
                            data-conversation-type="${type}"
                            data-conversation-id="${escapeHTML(conversation.id)}"
                            title="${escapeHTML(localizedLabel)}">
                            <span>${escapeHTML(localizedLabel)}</span>
                        </button>
                        <button class="mentor-conversation-delete" type="button"
                            data-delete-conversation="${type}"
                            data-conversation-id="${escapeHTML(conversation.id)}"
                            aria-label="Delete ${escapeHTML(localizedLabel)}" title="${escapeHTML(t("Delete chat"))}">
                            <i data-lucide="trash-2"></i>
                        </button>
                    </div>`;
            }).join("");
        };

        renderList("mentor", "#mentorConversationTabs");
        renderList("analyzer", "#analyzerConversationList");
    };

    const renderMentorMessages = () => {
        const container = $("#mentorMessages");
        if (!container) return;
        ensureActiveConversation();
        renderConversationHistory();

        if (!state.messages.length) {
            container.innerHTML = `
                <div class="mentor-message mentor-message-assistant">
                    <span class="message-avatar"><i data-lucide="sparkles"></i></span>
                    <div class="message-content">
                        <span class="message-author">NexHealth Mentor</span>
                        <p>Welcome! I can help explain general health information, clarify medical terminology, or help you prepare questions for a healthcare professional.</p>
                        <p>For questions about your saved reports, health notes, and details from other Mentor chats, I’ll cite the source and date when available. If I can’t find the answer in your saved information, I’ll say so.</p>
                        <p>I cannot diagnose conditions, prescribe medication, or replace professional medical advice.</p>
                    </div>
                </div>`;
            refreshIcons();
            return;
        }

        container.innerHTML = state.messages.map((message, index) => `
            <article class="mentor-message ${message.role === "user" ? "mentor-message-user" : "mentor-message-assistant"}" data-message-index="${index}">
                <span class="message-avatar">${message.role === "user" ? "U" : "✦"}</span>
                <div class="message-content">
                    <span class="message-author">${escapeHTML(message.author || (message.role === "user" ? "You" : "NexHealth Mentor"))}</span>
                    ${formatMentorContent(message.content)}
                    ${message.role === "user" ? `<button class="mentor-message-edit" type="button" data-edit-message="${index}" aria-label="Edit your message" title="${escapeHTML(t("Edit"))}"><i data-lucide="pencil"></i><span>${escapeHTML(t("Edit"))}</span></button>` : ""}
                    ${message.role !== "user" ? `<button class="mentor-message-speak" type="button" data-speak-message="${index}" aria-label="Listen to this reply"><i data-lucide="volume-2"></i><span>Listen</span></button>` : ""}
                </div>
            </article>
        `).join("");

        container.scrollTop = container.scrollHeight;
        refreshIcons();
    };

    const speakMentorMessage = index => {
        if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) {
            toast("Spoken replies are not supported by this browser.", "warning");
            return;
        }
        const message = state.messages[index];
        if (!message || message.role === "user") return;
        if (window.speechSynthesis.speaking && speakingMessageIndex === index) {
            window.speechSynthesis.cancel();
            speakingMessageIndex = null;
            return;
        }
        const plain = document.createElement("div");
        plain.innerHTML = formatMentorContent(message.content);
        const text = (plain.textContent || "").trim();
        if (!text) return;
        window.speechSynthesis.cancel();
        const utterance = new window.SpeechSynthesisUtterance(text);
        utterance.lang = ({ en: "en-IN", te: "te-IN", hi: "hi-IN" })[message.language || state.language] || "en-IN";
        speakingMessageIndex = index;
        utterance.onend = () => { speakingMessageIndex = null; };
        utterance.onerror = () => { speakingMessageIndex = null; };
        window.speechSynthesis.speak(utterance);
    };

    const startMentorConversation = () => {
        const active = ensureConversationGroup("mentor", true, true);
        if (!active.messages.length) {
            setMentorHistoryOpen(false);
            $("#mentorInput")?.focus();
            return;
        }
        const conversation = createMentorConversation();
        state.mentorConversations.unshift(conversation);
        state.activeMentorConversationId = conversation.id;
        state.activeConversationType = "mentor";
        state.messages = conversation.messages;
        persist();
        renderMentorMessages();
        setMentorHistoryOpen(false);
        $("#mentorInput")?.focus();
    };

    const selectConversation = (type, conversationId) => {
        const conversation = conversationGroup(type).find(item => item.id === conversationId);
        if (!conversation) return;
        state.activeConversationType = type;
        setActiveConversationId(type, conversation.id);
        state.messages = conversation.messages;
        persist();
        renderMentorMessages();
        setMentorHistoryOpen(false);
    };

    const deleteConversation = (type, conversationId) => {
        if (state.busy) {
            toast("Wait for the current reply before deleting a chat.", "warning");
            return;
        }
        const conversations = conversationGroup(type);
        const conversation = conversations.find(item => item.id === conversationId);
        if (!conversation || !confirm(`Delete “${conversation.title || "New chat"}”? This cannot be undone.`)) return;
        const wasActive = state.activeConversationType === type && activeConversationId(type) === conversationId;
        if (type === "analyzer") {
            state.analyzerConversations = conversations.filter(item => item.id !== conversationId);
        } else {
            state.mentorConversations = conversations.filter(item => item.id !== conversationId);
        }
        if (wasActive) {
            if (type === "mentor") {
                const replacement = createMentorConversation();
                state.mentorConversations.unshift(replacement);
                state.activeMentorConversationId = replacement.id;
                state.activeConversationType = "mentor";
                state.messages = replacement.messages;
            } else {
                const mentorConversation = ensureConversationGroup("mentor", true);
                state.activeConversationType = "mentor";
                state.activeMentorConversationId = mentorConversation.id;
                state.messages = mentorConversation.messages;
            }
        }
        persist();
        renderMentorMessages();
        toast("Chat deleted.");
    };

    const beginEditMentorMessage = messageIndex => {
        if (state.busy) {
            toast("Wait for the current reply before editing a message.", "warning");
            return;
        }
        const message = state.messages[messageIndex];
        const article = $(`#mentorMessages [data-message-index="${messageIndex}"]`);
        const content = article?.querySelector(".message-content");
        if (!message || message.role !== "user" || !content) return;
        content.innerHTML = `
            <span class="message-author">${escapeHTML(message.author || "You")}</span>
            <form class="mentor-message-edit-form" data-edit-message-form="${messageIndex}">
                <textarea maxlength="4000" required aria-label="Edit your message">${escapeHTML(message.content)}</textarea>
                <div>
                    <button class="button button-primary button-small" type="submit">${escapeHTML(t("Update and regenerate"))}</button>
                    <button class="text-button" type="button" data-cancel-message-edit>${escapeHTML(t("Cancel"))}</button>
                </div>
            </form>`;
        content.querySelector("textarea")?.focus();
        content.querySelector("textarea")?.setSelectionRange(message.content.length, message.content.length);
    };

    const saveEditedMentorMessage = async (messageIndex, editedText) => {
        const text = editedText.trim();
        if (!text) {
            toast("Enter a message first.", "warning");
            return;
        }
        if (text.length > 4000) {
            toast("Keep your message under 4,000 characters.", "warning");
            return;
        }
        if (!state.consent.aiProcessing) {
            requestAIConsent(() => saveEditedMentorMessage(messageIndex, text));
            return;
        }
        if (state.busy) return;

        const conversation = ensureActiveConversation();
        const conversationType = state.activeConversationType;
        const conversationId = conversation.id;
        const targetMessage = conversation.messages[messageIndex];
        if (!targetMessage || targetMessage.role !== "user") return;
        targetMessage.content = text;
        targetMessage.created_at = new Date().toISOString();
        conversation.messages = conversation.messages.slice(0, messageIndex + 1);
        conversation.updatedAt = new Date().toISOString();
        state.messages = conversation.messages;
        syncActiveConversation(true);
        const history = conversation.messages.slice(-12).map(item => ({ role: item.role, content: item.content }));
        persist();
        renderMentorMessages();

        const input = $("#mentorInput");
        const button = $("#mentorSendButton");
        if (button) button.disabled = true;
        state.busy = true;
        try {
            if (activeUserId && workspaceHydrated && !document.body.classList.contains("local-demo-mode")) {
                if (workspaceSaveTimer) {
                    clearTimeout(workspaceSaveTimer);
                    workspaceSaveTimer = null;
                }
                await flushWorkspaceSave();
            }
            const data = await apiRequest("/api/mentor", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: text,
                    language: state.language,
                    history,
                    record_context: mentorRecordContextForRequest()
                })
            });
            appendConversationMessage(conversationType, conversationId, {
                id: id(), role: "assistant",
                language: state.language,
                content: data.reply || data.answer || data.response || data.message || "The service did not return a response."
            });
        } catch (error) {
            appendConversationMessage(conversationType, conversationId, {
                id: id(), role: "assistant", language: state.language, content: `I couldn't connect to the mentor service. ${error.message}`
            });
            toast(error.message, "error");
        } finally {
            state.busy = false;
            if (button) button.disabled = false;
            input?.focus();
        }
    };

    const appendConversationMessage = (type, conversationId, message) => {
        const conversation = conversationGroup(type).find(item => item.id === conversationId);
        if (!conversation) return;
        conversation.messages.push(message);
        conversation.updatedAt = new Date().toISOString();
        if (state.activeConversationType === type && activeConversationId(type) === conversationId) {
            state.messages = conversation.messages;
        }
        persist();
        renderMentorMessages();
    };

    const continueAnalysisInMentor = analysisId => {
        const analysis = state.analyses.find(item => item.id === analysisId);
        if (!analysis) {
            toast("This analysis is no longer available.", "error");
            return;
        }

        let conversation = state.analyzerConversations.find(item => item.analysisId === analysis.id);
        if (!conversation) {
            const reportContext = [
                `### Report analysis from AI Analyzer`,
                `**Report:** ${analysis.file_name || "Uploaded report"}`,
                "",
                analysis.summary || "No report summary was saved.",
                "",
                "Use this prior analysis as context for follow-up questions. It is educational information, not a diagnosis. Verify important values with a healthcare professional."
            ].join("\n");
            conversation = {
                ...createMentorConversation(),
                title: `${analysis.file_name || "Report follow-up"}`.slice(0, 42),
                source: "analyzer",
                analysisId: analysis.id,
                createdAt: analysis.created_at || new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                messages: [{ id: id(), role: "assistant", author: "AI Analyzer", content: reportContext }]
            };
            state.analyzerConversations.unshift(conversation);
        }

        state.activeConversationType = "analyzer";
        state.activeAnalyzerConversationId = conversation.id;
        state.messages = conversation.messages;
        persist();
        preserveNextMentorNavigation = true;
        navigate("ai-mentor");
        renderMentorMessages();
        $("#mentorInput")?.focus();
    };

    const guestMentorRecordContext = () => ({
        profile: {
            conditions: String(state.profile?.conditions || "").slice(0, 500),
            notes: String(state.profile?.notes || "").slice(0, 500)
        },
        medicationReminders: state.medicationReminders.slice(0, 30).map(reminder => ({
            medicine_name: String(reminder.medicine_name || "").slice(0, 180),
            dose: String(reminder.dose || "").slice(0, 120),
            active: reminder.active === true,
            times: Array.isArray(reminder.times) ? reminder.times.slice(0, 6) : [],
            start_date: reminder.start_date || "",
            end_date: reminder.end_date || "",
            source_file: String(reminder.source_file || "").slice(0, 120)
        })),
        records: state.records.slice(0, 20).map(record => ({
            name: record.name || record.file_name || "",
            created_at: record.created_at || "",
            category: record.category || "",
            record_type: record.record_type || "",
            extracted_text: record.record_type === "health_note" ? String(record.extracted_text || "").slice(0, 5000) : ""
        })),
        mentorConversations: state.mentorConversations.slice(0, 24).map(conversation => ({
            title: conversation.title || "Health Mentor chat",
            createdAt: conversation.createdAt || "",
            updatedAt: conversation.updatedAt || "",
            messages: (Array.isArray(conversation.messages) ? conversation.messages : []).slice(-40).map(message => ({
                role: message.role,
                content: String(message.content || "").slice(0, 700),
                created_at: message.created_at || ""
            }))
        })),
        analyses: state.analyses.slice(0, 12).map(analysis => ({
            file_name: analysis.file_name || analysis.name || "Saved analysis",
            created_at: analysis.created_at || "",
            summary: typeof analysis.summary === "string" ? analysis.summary.slice(0, 5000) : "",
            extracted_text: typeof analysis.extracted_text === "string" ? analysis.extracted_text.slice(0, 6000) : ""
        }))
    });

    const mentorRecordContextForRequest = () =>
        document.body.classList.contains("local-demo-mode") ? guestMentorRecordContext() : undefined;

    const sendMentorMessage = async message => {
        const input = $("#mentorInput");
        const button = $("#mentorSendButton");
        const text = message.trim();

        if (!text) {
            toast("Enter a question first.", "warning");
            return;
        }

        if (text.length > 4000) {
            toast("Keep your message under 4,000 characters.", "warning");
            return;
        }

        if (!state.consent.aiProcessing) {
            requestAIConsent(() => sendMentorMessage(text));
            return;
        }

        if (state.busy) return;

        const conversation = ensureActiveConversation();
        const conversationType = state.activeConversationType;
        const conversationId = conversation.id;
        state.messages.push({ id: id(), role: "user", content: text, created_at: new Date().toISOString() });
        syncActiveConversation(true);
        const history = state.messages.slice(-12).map(item => ({ role: item.role, content: item.content }));
        persist();
        renderMentorMessages();

        if (input) input.value = "";
        if (button) button.disabled = true;
        state.busy = true;

        try {
            if (activeUserId && workspaceHydrated && !document.body.classList.contains("local-demo-mode")) {
                if (workspaceSaveTimer) {
                    clearTimeout(workspaceSaveTimer);
                    workspaceSaveTimer = null;
                }
                await flushWorkspaceSave();
            }
            const data = await apiRequest("/api/mentor", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: text,
                    language: state.language,
                    history,
                    record_context: mentorRecordContextForRequest()
                })
            });

            const answer = data.reply || data.answer || data.response || data.message ||
            "The service did not return a response.";

            appendConversationMessage(conversationType, conversationId, {
                id: id(),
                role: "assistant",
                language: state.language,
                content: answer
            });
        } catch (error) {
            appendConversationMessage(conversationType, conversationId, {
                id: id(),
                role: "assistant",
                language: state.language,
                content: `I couldn't connect to the mentor service. ${error.message}`
            });
            toast(error.message, "error");
        } finally {
            state.busy = false;
            if (button) button.disabled = false;
            input?.focus();
        }
    };

    const renderPersonalizedPlan = (plan, completedItems = {}) => {
        const validEntries = entries => entries.filter(item => item && (item.title || item.description));
        const rows = (entries = [], groupKey = "") => validEntries(entries)
            .map((item, index) => {
                const itemKey = `${groupKey}-${index}`;
                const completed = completedItems[itemKey] === true;
                const itemTitle = item.title || "";
                return `
                    <div class="task-row personalized-plan-row${completed ? " is-complete" : ""}">
                        <button class="task-checkbox${completed ? " checked" : ""}" type="button"
                            data-action="toggle-plan-item" data-plan-item="${escapeHTML(itemKey)}"
                            role="checkbox" aria-checked="${completed}" aria-label="${escapeHTML(itemTitle || t(groupKey))}"></button>
                        <span class="task-row-copy">
                            <strong>${escapeHTML(itemTitle)}</strong>
                            ${item.description ? `<small>${escapeHTML(item.description)}</small>` : ""}
                            ${item.why ? `<small class="plan-reason">${escapeHTML(t("Why this may fit"))}: ${escapeHTML(item.why)}</small>` : ""}
                        </span>
                    </div>
                `;
            }).join("");
        const group = (title, key, entries) => validEntries(entries).length ? `
            <details class="personalized-plan-group" data-plan-group="${key}" open>
                <summary><h3>${escapeHTML(t(title))}</h3><span class="plan-group-count">${validEntries(entries).filter((_, index) => completedItems[`${key}-${index}`] === true).length}/${validEntries(entries).length}</span><span class="plan-group-chevron" aria-hidden="true"></span></summary>
                <div class="compact-task-list">${rows(entries, key)}</div>
            </details>` : "";

        const movement = plan.movement && typeof plan.movement === "object" ? plan.movement : {};
        const sleep = plan.sleep && typeof plan.sleep === "object" ? plan.sleep : {};
        const movementRows = [];
        if (movement.steps) movementRows.push({ title: t("Daily step target"), description: movement.steps, why: movement.steps_why || "" });
        (Array.isArray(movement.activities) ? movement.activities : []).forEach(activity => {
            if (typeof activity === "string" && activity.trim()) movementRows.push({ title: activity, description: "" });
            else if (activity && typeof activity === "object" && (activity.activity || activity.title)) {
                movementRows.push({ title: activity.activity || activity.title, description: activity.details || "", why: activity.why || "" });
            }
        });
        const mealRows = (Array.isArray(plan.meals) ? plan.meals : []).filter(meal => meal && typeof meal === "object")
            .map(meal => ({ title: meal.time || t("Meals"), description: meal.plan || "", why: meal.why || "" }));
        const sleepRows = [];
        if (sleep.hours) sleepRows.push({ title: t("Sleep target"), description: sleep.hours, why: sleep.why || "" });
        if (sleep.routine) sleepRows.push({ title: t("Bedtime routine"), description: sleep.routine });
        const habitRows = (Array.isArray(plan.habits) ? plan.habits : []).filter(habit => habit && typeof habit === "object")
            .map(habit => ({ title: habit.title || "", description: habit.details || "", why: habit.why || "" }));
        const groups = [
            group("Movement", "movement", movementRows),
            group("Meals", "meals", mealRows),
            group("Sleep", "sleep", sleepRows),
            group("Daily habits", "habits", habitRows)
        ].join("");

        if (!groups) throw new Error(t("Could not create a structured plan. Please try again."));
        return `<h2>${escapeHTML(t("Your daily plan"))}</h2><div class="personalized-plan-checklist">${groups}</div>`;
    };

    const renderSavedPersonalizedPlan = () => {
        const panel = $("#personalizedPlanPanel");
        const content = $("#personalizedPlanContent");
        if (!panel || !content) return;
        const saved = state.personalizedPlan;
        if (!saved || !saved.plan || typeof saved.plan !== "object") {
            panel.hidden = true;
            content.replaceChildren();
            return;
        }

        const currentDay = today();
        if (!saved.completedForDate) {
            state.personalizedPlan = { ...saved, completedForDate: currentDay };
            persist();
        } else if (saved.completedForDate !== currentDay) {
            state.personalizedPlan = {
                ...saved,
                completedForDate: currentDay,
                completedItems: {}
            };
            persist();
        }

        try {
            const currentPlan = state.personalizedPlan;
            content.innerHTML = renderPersonalizedPlan(currentPlan.plan, currentPlan.completedItems || {});
            refreshIcons();
            panel.hidden = false;
            panel.classList.remove("plan-error");
            panel.classList.add("plan-ready");
        } catch (error) {
            console.warn("Could not render the saved personalized plan.", error);
        }
    };

    const generatePersonalizedPlan = async () => {
        const button = $("#personalizedPlanButton");
        const panel = $("#personalizedPlanPanel");
        const content = $("#personalizedPlanContent");
        if (!button || !panel || !content || button.disabled) return;

        const text = (value, limit = 500) => String(value ?? "").trim().slice(0, limit);
        const profile = state.profile || {};
        const preferences = state.dietPreferences || {};
        const steps = Number(preferences.dailySteps);
        const sleepHours = Number(preferences.sleepHours);
        const hasRequiredInfo = Number(profile.age) >= 1 && Number(profile.age) <= 120 &&
            Boolean(preferences.diet) && Boolean(preferences.goal) &&
            String(preferences.dailySteps ?? "").trim() !== "" &&
            Number.isFinite(steps) && steps >= 0 && steps <= 100000 &&
            Number.isFinite(sleepHours) && sleepHours > 0 && sleepHours <= 24;

        if (!hasRequiredInfo) {
            panel.hidden = true;
            openModal(
                "Personalized plan",
                `<p class="plan-missing-information">${escapeHTML(t("There's no information. Please fill your complete information for the personalized plan."))}</p>`,
                async () => {},
                "OK"
            );
            return;
        }

        if (!state.consent.aiProcessing) {
            requestAIConsent(generatePersonalizedPlan);
            return;
        }

        const payload = {
            language: state.language,
            profile: {
                age: profile.age || "",
                gender: profile.gender || "",
                height: profile.height || "",
                weight: profile.weight || "",
                conditions: text(profile.conditions),
                notes: text(profile.notes)
            },
            preferences: {
                diet: text(preferences.diet),
                allergies: text(preferences.allergies),
                goal: text(preferences.goal),
                daily_steps: preferences.dailySteps || "",
                sleep_hours: preferences.sleepHours || ""
            },
            health_context: {
                include_reports: $("#includeWellnessReportData")?.checked === true,
                analyzed_reports: $("#includeWellnessReportData")?.checked === true
                    ? state.analyses.filter(item => item && (item.summary || item.extracted_text)).slice(0, 5).map(item => ({
                        source: text(item.file_name || item.name || "Saved analysis", 120),
                        date: text(item.created_at || item.date || "Date not recorded", 40),
                        type: text(item.type || "medical record", 40),
                        summary: text(item.summary, 1800),
                        extracted_text: text(item.extracted_text, 1800)
                    }))
                    : [],
                health_notes: $("#includeWellnessReportData")?.checked === true
                    ? state.records.filter(item => item?.record_type === "health_note" && item.extracted_text)
                        .slice(-8).map(item => ({
                            source: text(item.name || "Saved health note", 120),
                            date: text(item.created_at || "Date not recorded", 40),
                            text: text(item.extracted_text, 1200)
                        }))
                    : [],
                medication_reminders: $("#includeWellnessReportData")?.checked === true
                    ? state.medicationReminders.filter(item => item && item.active === true).slice(0, 12).map(item => ({
                        name: text(item.medicine_name, 120),
                        dose: text(item.dose, 80),
                        source: text(item.source_file || "User-entered reminder", 100),
                        end_date: text(item.end_date || "", 40)
                    }))
                    : []
            },
            meals: state.meals.filter(meal => meal.date === today()).slice(0, 12).map(meal => ({
                type: text(meal.meal_time),
                name: text(meal.name),
                notes: text(meal.notes),
                date: text(meal.date)
            })),
            tasks: state.tasks.slice(0, 20).map(task => ({
                title: text(task.title || task.name),
                category: text(task.category),
                completed: Boolean(task.completed)
            }))
        };

        button.disabled = true;
        panel.hidden = false;
        panel.classList.remove("plan-ready", "plan-error");
        content.innerHTML = `<div class="plan-loading" role="status"><span class="plan-spinner" aria-hidden="true"></span><span>${escapeHTML(t("Analyzing your profile and routine…"))}</span></div>`;

        try {
            const data = await apiRequest("/api/personalized-plan", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            if (!data.plan || typeof data.plan !== "object") throw new Error(t("Could not create a structured plan. Please try again."));
            state.personalizedPlan = {
                plan: data.plan,
                createdAt: data.created_at || new Date().toISOString(),
                completedItems: {},
                completedForDate: today()
            };
            persist();
            renderSavedPersonalizedPlan();
        } catch (error) {
            content.innerHTML = `<p class="plan-error-message">${escapeHTML(error.message || t("Could not create a structured plan. Please try again."))}</p>`;
            panel.classList.add("plan-error");
        } finally {
            button.disabled = false;
        }
    };

    const resetPersonalizedPlanChecklist = () => {
        const saved = state.personalizedPlan;
        if (!saved?.plan) return;
        state.personalizedPlan = {
            ...saved,
            completedItems: {},
            completedForDate: today()
        };
        persist();
        renderSavedPersonalizedPlan();
        toast(t("Today's plan checklist has been reset."));
    };

    const clearMentor = () => {
        if (state.busy) {
            toast("Wait for the current reply before clearing this chat.", "warning");
            return;
        }
        if (!confirm("Clear the messages in this chat?")) return;
        const conversation = ensureActiveConversation();
        conversation.messages = [];
        if (state.activeConversationType === "mentor") conversation.title = "New chat";
        conversation.updatedAt = new Date().toISOString();
        state.messages = [];
        persist();
        renderMentorMessages();
        toast("This chat was cleared.");
    };

    const exportData = () => {
        const data = {
            exported_at: new Date().toISOString(),
            records: state.records,
            tasks: state.tasks,
            appointments: state.appointments,
            medication_reminders: state.medicationReminders,
            meals: state.meals,
            analyses: state.analyses,
            messages: state.messages,
            mentor_conversations: state.mentorConversations,
            active_mentor_conversation_id: state.activeMentorConversationId,
            analyzer_conversations: state.analyzerConversations,
            active_analyzer_conversation_id: state.activeAnalyzerConversationId,
            active_conversation_type: state.activeConversationType,
            profile: state.profile,
            diet_preferences: state.dietPreferences,
            consent: state.consent,
            consent_history: state.consentHistory,
            personalized_plan: state.personalizedPlan,
            family_profiles: state.familyProfiles,
            active_family_profile_id: state.activeFamilyProfileId
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], {
            type: "application/json"
        });

        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = `nexhealth-backup-${today()}.json`;
        anchor.click();
        URL.revokeObjectURL(url);

        toast("Export prepared.");
    };

    const clearBrowserWorkspace = () => {
        Object.values(STORAGE).forEach(key => localStorage.removeItem(key));
        localStorage.removeItem(userStorageKey("nexhealth_mock_abha"));
        localStorage.removeItem(userStorageKey("nexhealth_mock_abha_consent"));

        state.records = [];
        state.tasks = [];
        state.appointments = [];
        state.medicationReminders = [];
        state.meals = [];
        state.analyses = [];
        state.messages = [];
        state.mentorConversations = [];
        state.activeMentorConversationId = "";
        state.analyzerConversations = [];
        state.activeAnalyzerConversationId = "";
        state.activeConversationType = "mentor";
        state.profile = {};
        state.dietPreferences = {};
        $("#dietPreferencesForm")?.reset();
        state.consent = {
            necessary: true,
            analytics: false,
            aiProcessing: false,
            healthcareSharing: false
        };
        state.consentHistory = [];
        state.personalizedPlan = null;
        state.familyProfiles = [];
        state.activeFamilyProfileId = "";

        renderAll();
    };

    const deleteLocalData = () => {
        const confirmed = confirm(
            "Delete NexHealth data stored in this browser? This does not delete server files or remote data."
        );

        if (!confirmed) return;
        clearBrowserWorkspace();
        toast("Browser data deleted.");
    };

    const deleteSyncedHealthData = async () => {
        if (!document.body.classList.contains("account-authenticated")) return;
        const confirmed = confirm(t(
            "Permanently delete your synced health workspace and uploaded medical files from this account? This cannot be undone. Your NexHealth login account will remain active."
        ));
        if (!confirmed) return;

        const button = $("#deleteCloudHealthDataButton");
        const status = $("#cloudDataDeletionStatus");
        if (button) button.disabled = true;
        if (status) status.textContent = t("Deleting synced data…");

        try {
            if (workspaceSaveTimer) {
                clearTimeout(workspaceSaveTimer);
                workspaceSaveTimer = null;
            }
            if (!await flushWorkspaceSave()) {
                throw new Error("The workspace could not be synchronized before deletion.");
            }
            await apiRequest("/api/workspace", { method: "DELETE" });
            clearBrowserWorkspace();
            if (status) status.textContent = t("Synced health data and uploaded files were deleted.");
            toast(t("Synced health data and uploaded files were deleted."), "success");
        } catch {
            const message = t("Could not fully delete synced data. Please try again or contact support.");
            if (status) status.textContent = message;
            toast(message, "error");
        } finally {
            if (button) button.disabled = false;
        }
    };

    const runSearch = query => {
        const value = query.trim().toLowerCase();
        if (!value) return;

        const routes = [
            ["overview", "overview"],
            ["medical-records", "medical-records"],
            ["records", "medical-records"],
            ["analyzer", "ai-analyzer"],
            ["report", "ai-analyzer"],
            ["diet", "diet-tasks"],
            ["task", "diet-tasks"],
            ["meal", "diet-tasks"],
            ["appointment", "appointments"],
            ["service", "health-services"],
            ["mentor", "ai-mentor"],
            ["privacy", "privacy-consent"],
            ["settings", "settings"]
        ];

        const match = routes.find(([word]) => value.includes(word));

        if (match) {
            navigate(match[1]);
            return;
        }

        navigate("medical-records");

        const search = $("#recordsSearch");
        if (search) {
            search.value = query;
            renderRecords();
        }
    };

    const bindEvents = () => {

        const languageSelect = $("#siteLanguage");

        $$("[data-voice-target]").forEach(button => {
            button.addEventListener("click", () => startVoiceInput(button));
        });

        const dietPreferencesForm = $("#dietPreferencesForm");
        if (dietPreferencesForm) {
            dietPreferencesForm.addEventListener("submit", event => {
                event.preventDefault();
                state.dietPreferences = {
                    diet: $("#dietPreference").value,
                    allergies: $("#dietAllergies").value.trim().slice(0, 300),
                    goal: $("#wellnessGoal").value,
                    dailySteps: $("#currentDailySteps").value,
                    sleepHours: $("#usualSleepHours").value
                };
                persist();
                toast("Preferences saved.");
            });
        }

        $("#personalizedPlanButton")?.addEventListener("click", generatePersonalizedPlan);
        $("#resetPersonalizedPlanButton")?.addEventListener("click", resetPersonalizedPlanChecklist);
        $("#resetCompletedTasksButton")?.addEventListener("click", resetCompletedTasks);

        if (languageSelect) {
            languageSelect.value = state.language;

            languageSelect.addEventListener("change", (event) => {
                const selectedLanguage = event.target.value;

                if (!translations[selectedLanguage]) return;

                state.language = selectedLanguage;

                try {
                    localStorage.setItem(
                        "nexhealth_language",
                        selectedLanguage
                    );
                } catch (error) {
                    console.warn("Could not save language preference.", error);
                }

                applyTranslations();
                renderAll();
            });
        }

        $("#settingsLanguage")?.addEventListener("change", event => {
            const mainLanguage = $("#siteLanguage");
            if (!mainLanguage) return;
            mainLanguage.value = event.target.value;
            mainLanguage.dispatchEvent(new Event("change", { bubbles: true }));
        });


        document.addEventListener("click", event => {
            const recordShareReview = event.target.closest("[data-record-share-review]");
            if (recordShareReview) {
                const approve = recordShareReview.dataset.recordShareReview === "approve";
                if (approve && !window.confirm("Approve this person's request? They will be able to view every record currently in your NexHealth library and its saved analysis. New records are excluded, and you can revoke access later.")) return;
                recordShareReview.disabled = true;
                apiRequest(`/api/record-sharing/requests/${encodeURIComponent(recordShareReview.dataset.requestId)}/review`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ approve })
                }).then(() => {
                    toast(approve ? "Access approved for your current records." : "Access request declined.");
                    return loadRecordSharing();
                }).catch(error => {
                    toast(error.message, "error");
                    recordShareReview.disabled = false;
                });
                return;
            }

            const recordShareRevoke = event.target.closest("[data-record-share-revoke]");
            if (recordShareRevoke) {
                if (!window.confirm("Revoke this person's access to your shared records? They will immediately lose access.")) return;
                recordShareRevoke.disabled = true;
                apiRequest(`/api/record-sharing/requests/${encodeURIComponent(recordShareRevoke.dataset.recordShareRevoke)}/revoke`, { method: "POST" })
                    .then(() => {
                        toast("This person's record access was revoked.");
                        return loadRecordSharing();
                    })
                    .catch(error => {
                        toast(error.message, "error");
                        recordShareRevoke.disabled = false;
                    });
                return;
            }

            if (event.target.closest("#generateRecordShareCode")) {
                createRecordSharingCode();
                return;
            }
            if (event.target.closest("#revokeRecordSharing")) {
                revokeRecordSharing();
                return;
            }
            if (event.target.closest("#copyRecordShareCode")) {
                if (!recordSharing.code) return;
                if (!navigator.clipboard?.writeText) {
                    toast("Select and copy the code manually.", "warning");
                    return;
                }
                navigator.clipboard.writeText(recordSharing.code)
                    .then(() => toast("Code copied."))
                    .catch(() => toast("Select and copy the code manually.", "warning"));
                return;
            }

            const speakButton = event.target.closest("[data-speak-message]");
            if (speakButton) {
                speakMentorMessage(Number(speakButton.dataset.speakMessage));
                return;
            }

            const recordCategoryButton = event.target.closest("[data-record-category]");
            if (recordCategoryButton) {
                state.recordFilter = recordCategoryButton.dataset.recordCategory;
                navigate("medical-records");
                return;
            }

            const screenButton = event.target.closest("[data-screen]");

            if (screenButton) {
                event.preventDefault();
                navigate(screenButton.dataset.screen);
                return;
            }

            const promptButton = event.target.closest("[data-mentor-prompt]");
            if (promptButton) {
                navigate("ai-mentor");
                sendMentorMessage(promptButton.dataset.mentorPrompt);
                return;
            }

            const closeButton = event.target.closest("[data-close-modal]");
            if (closeButton) {
                closeModal();
                return;
            }

            const actionButton = event.target.closest("[data-action]");
            if (!actionButton) return;

            const action = actionButton.dataset.action;
            const itemId = actionButton.dataset.id;

            switch (action) {
                case "add-family-profile":
                    openAddFamilyProfile();
                    break;
                case "switch-family-profile":
                    switchFamilyProfile(itemId);
                    break;
                case "remove-family-profile":
                    removeFamilyProfile(itemId);
                    break;
                case "toggle-plan-item": {
                    const plan = state.personalizedPlan;
                    const planItem = actionButton.dataset.planItem;
                    if (!plan?.plan || !planItem) break;
                    const completedItems = { ...(plan.completedItems || {}) };
                    completedItems[planItem] = completedItems[planItem] !== true;
                    state.personalizedPlan = { ...plan, completedItems, completedForDate: today() };
                    persist();
                    actionButton.classList.toggle("checked", completedItems[planItem]);
                    actionButton.setAttribute("aria-checked", String(completedItems[planItem]));
                    actionButton.closest(".personalized-plan-row")?.classList.toggle("is-complete", completedItems[planItem]);
                    const group = actionButton.closest(".personalized-plan-group");
                    const groupChecks = group ? $$("[data-action='toggle-plan-item']", group) : [];
                    const completeCount = groupChecks.filter(check => check.getAttribute("aria-checked") === "true").length;
                    const countLabel = group?.querySelector(".plan-group-count");
                    if (countLabel) countLabel.textContent = `${completeCount}/${groupChecks.length}`;
                    break;
                }
                case "open-upload":
                    openUploadModal();
                    break;
                case "add-health-note":
                    openHealthNoteModal();
                    break;
                case "add-task":
                    openTaskModal();
                    break;
                case "add-care-task": {
                    const analysis = state.analyses.find(item => item.id === itemId);
                    const index = Number(actionButton.dataset.index);
                    const suggestion = analysis?.care_action_draft?.follow_up_tasks?.[index];
                    if (!suggestion) break;
                    openTaskModal({ ...suggestion, _analysisId: analysis.id, _draftIndex: index }, analysis.file_name || "Saved prescription");
                    break;
                }
                case "add-health-insight-task":
                    openTaskModal({
                        title: actionButton.dataset.title || "Discuss the recommended follow-up",
                        category: "Appointment",
                        notes: actionButton.dataset.guidance || "",
                        evidence: actionButton.dataset.evidence || "",
                        due_date: actionButton.dataset.dueDate || "",
                        _healthInsightCardId: actionButton.dataset.cardId || ""
                    }, actionButton.dataset.source || "Saved report");
                    break;
                case "reject-health-insight":
                    actionButton.closest(".health-insight-card")?.remove();
                    break;
                case "reject-care-task": {
                    const analysis = state.analyses.find(item => item.id === itemId);
                    analysis?.care_action_draft?.follow_up_tasks?.splice(Number(actionButton.dataset.index), 1);
                    persist();
                    renderCareActionDrafts(analysis);
                    renderPendingCareActions();
                    break;
                }
                case "open-appointment":
                    openAppointmentModal();
                    break;
                case "edit-appointment": {
                    const appointment = state.appointments.find(item => item.id === itemId);
                    if (appointment) openAppointmentModal(appointment);
                    break;
                }
                case "add-medication-reminder":
                    openMedicationReminderModal(null, actionButton.dataset.source || "");
                    break;
                case "review-care-draft": {
                    const analysis = state.analyses.find(item => item.id === itemId);
                    const draftIndex = Number(actionButton.dataset.index);
                    const suggestion = analysis?.care_action_draft?.medications?.[draftIndex];
                    if (!suggestion) break;
                    openMedicationReminderModal({
                        medicine_name: suggestion.name,
                        dose: suggestion.dose,
                        timing: suggestion.timing,
                        times: suggestion.times || [],
                        frequency: suggestion.frequency === "unknown" ? "unknown" : suggestion.frequency,
                        days_of_week: suggestion.days || [],
                        duration_days: suggestion.duration_days,
                        source_file: analysis.file_name,
                        draft_analysis_id: analysis.id,
                        draft_index: draftIndex
                    }, analysis.file_name, true);
                    break;
                }
                case "reject-care-draft": {
                    const analysis = state.analyses.find(item => item.id === itemId);
                    analysis?.care_action_draft?.medications?.splice(Number(actionButton.dataset.index), 1);
                    persist();
                    renderCareActionDrafts(analysis);
                    renderPendingCareActions();
                    break;
                }
                case "reject-draft-questions": {
                    const analysis = state.analyses.find(item => item.id === itemId);
                    if (analysis?.care_action_draft) analysis.care_action_draft.doctor_questions = [];
                    persist();
                    renderPendingCareActions();
                    break;
                }
                case "review-draft-questions": {
                    const analysis = state.analyses.find(item => item.id === itemId);
                    const questions = analysis?.care_action_draft?.doctor_questions || [];
                    if (!questions.length) break;
                    navigate("ai-mentor");
                    const input = $("#mentorInput");
                    if (input) {
                        input.value = questions.map((question, index) => `${index + 1}. ${question}`).join("\n");
                        input.focus();
                    }
                    break;
                }
                case "edit-medication-reminder": {
                    const reminder = state.medicationReminders.find(item => item.id === itemId);
                    if (reminder) openMedicationReminderModal(reminder);
                    break;
                }
                case "complete-medication-reminder": {
                    const reminder = state.medicationReminders.find(item => item.id === itemId);
                    const occurrence = actionButton.dataset.occurrence;
                    if (!reminder || !occurrence) break;
                    reminder.completed_occurrences = [...new Set([...(reminder.completed_occurrences || []), occurrence])];
                    reminder.snoozed_occurrence = "";
                    reminder.snoozed_until = "";
                    persist();
                    renderCareReminders();
                    toast("Dose marked as taken.");
                    break;
                }
                case "snooze-medication-reminder": {
                    const reminder = state.medicationReminders.find(item => item.id === itemId);
                    const occurrence = actionButton.dataset.occurrence;
                    if (!reminder || !occurrence) break;
                    reminder.snoozed_occurrence = occurrence;
                    reminder.snoozed_until = new Date(Date.now() + 10 * 60_000).toISOString();
                    reminder.alerted_occurrences = (reminder.alerted_occurrences || []).filter(key => key !== occurrence);
                    persist();
                    renderCareReminders();
                    toast("Medicine reminder snoozed for 10 minutes.", "info");
                    break;
                }
                case "stop-medication-reminder": {
                    const reminder = state.medicationReminders.find(item => item.id === itemId);
                    if (!reminder) break;
                    reminder.active = false;
                    persist();
                    renderCareReminders();
                    toast("Medicine course reminder stopped.");
                    break;
                }
                case "delete-medication-reminder":
                    state.medicationReminders = state.medicationReminders.filter(item => item.id !== itemId);
                    persist();
                    renderCareReminders();
                    break;
                case "confirm-appointment-reminder": {
                    const appointment = state.appointments.find(item => item.id === itemId);
                    if (!appointment) break;
                    appointment.reminder_status = "confirmed";
                    persist();
                    renderCareReminders();
                    toast("Appointment reminder confirmed.");
                    break;
                }
                case "snooze-appointment-reminder": {
                    const appointment = state.appointments.find(item => item.id === itemId);
                    if (!appointment) break;
                    appointment.reminder_status = "pending";
                    appointment.reminder_snoozed_until = new Date(Date.now() + 10 * 60_000).toISOString();
                    appointment.reminder_last_alerted = false;
                    persist();
                    renderCareReminders();
                    toast("Appointment reminder snoozed for 10 minutes.", "info");
                    break;
                }
                case "stop-appointment-reminder": {
                    const appointment = state.appointments.find(item => item.id === itemId);
                    if (!appointment) break;
                    appointment.reminder_status = "stopped";
                    persist();
                    renderCareReminders();
                    toast("Appointment reminder stopped.");
                    break;
                }
                case "add-meal":
                    openMealModal();
                    break;
                case "toggle-task":
                    toggleTask(itemId);
                    break;
                case "delete-task":
                    removeTask(itemId);
                    break;
                case "delete-appointment":
                    deleteAppointment(itemId);
                    break;
                case "delete-meal":
                    state.meals = state.meals.filter(meal => meal.id !== itemId);
                    persist();
                    renderMeals();
                    toast("Meal removed.");
                    break;
                case "export-data":
                    exportData();
                    break;
                case "delete-local-data":
                    deleteLocalData();
                    break;
                case "edit-profile":
                    openProfileModal();
                    break;
                case "privacy-help":
                    toast("Privacy support is not connected to a support service yet.", "warning");
                    break;
            }
        });

        $("#mobileMenuButton")?.addEventListener("click", () => {
            const open = !document.body.classList.contains("sidebar-open");
            document.body.classList.toggle("sidebar-open", open);
            $("#mobileMenuButton").setAttribute("aria-expanded", String(open));
        });

        $("#sidebarOverlay")?.addEventListener("click", () => {
            document.body.classList.remove("sidebar-open");
        });

        $("#profileTrigger")?.addEventListener("click", openProfileModal);

        $("#settingsLoginButton")?.addEventListener("click", openAuthPrompt);

        $("#notificationButton")?.addEventListener("click", () => {
            if (!document.body.classList.contains("account-authenticated")) {
                const guestNotice = {
                    te: "అతిథి మోడ్: మీ డేటా ఈ బ్రౌజర్‌లో మాత్రమే సేవ్ అవుతుంది. ఇతర పరికరాల్లో ఉపయోగించడానికి సెట్టింగ్స్‌లో సైన్ ఇన్ చేయండి.",
                    hi: "अतिथि मोड: आपका डेटा केवल इस ब्राउज़र में सहेजा जाता है। दूसरे डिवाइस पर उपयोग के लिए सेटिंग्स में साइन इन करें।"
                }[state.language] || "Guest mode: your data is saved only in this browser. Sign in from Settings to sync it and use it on other devices.";
                toast(guestNotice, "info");
                return;
            }
            const pending = state.tasks.filter(task => !task.completed).length;
            const upcoming = state.appointments.filter(item =>
                new Date(`${item.date}T${item.time || "23:59"}`) >= new Date()
            ).length;
            const activeMedicine = state.medicationReminders.filter(item => item.active).length;
            navigate("appointments");
            toast(`${activeMedicine} medicine reminders · ${upcoming} upcoming appointments · ${pending} tasks remaining`, "info");
        });

        $("#globalSearch")?.addEventListener("keydown", event => {
            if (event.key === "Enter") runSearch(event.target.value);
        });

        document.addEventListener("keydown", event => {
            if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
                event.preventDefault();
                $("#globalSearch")?.focus();
            }

            if (event.key === "Escape") closeModal();
        });

        $("#recordsSearch")?.addEventListener("input", renderRecords);

        $("#recordShareRequestForm")?.addEventListener("submit", async event => {
            event.preventDefault();
            const input = $("#recordShareCodeInput");
            const code = String(input?.value || "").trim();
            if (!/^\d{14}$/.test(code)) {
                toast("Enter the 14-digit NexHealth demo sharing code.", "warning");
                input?.focus();
                return;
            }
            const button = event.currentTarget.querySelector("button[type=submit]");
            if (button) button.disabled = true;
            try {
                const result = await apiRequest("/api/record-sharing/request", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ code })
                });
                input.value = "";
                const message = result.status === "approved"
                    ? "This account already has approved access."
                    : "Access request sent. Records remain private until the owner approves it.";
                if ($("#recordSharingStatus")) $("#recordSharingStatus").textContent = message;
                toast(message);
                await loadRecordSharing();
            } catch (error) {
                toast(error.message, "error");
                if ($("#recordSharingStatus")) $("#recordSharingStatus").textContent = error.message;
            } finally {
                if (button) button.disabled = false;
            }
        });

        $("#recordShareCodeInput")?.addEventListener("input", event => {
            event.target.value = event.target.value.replace(/\D/g, "").slice(0, 14);
        });

        $$("[data-record-filter]").forEach(button => {
            button.addEventListener("click", () => {
                state.recordFilter = button.dataset.recordFilter;
                renderRecords();
            });
        });

        $$("[data-task-filter]").forEach(button => {
            button.addEventListener("click", () => {
                state.taskFilter = button.dataset.taskFilter;
                $$("[data-task-filter]").forEach(item =>
                    item.classList.toggle("active", item === button)
                );
                renderTasks();
            });
        });

        $$("[data-appointment-filter]").forEach(button => {
            button.addEventListener("click", () => {
                state.appointmentFilter = button.dataset.appointmentFilter;
                $$("[data-appointment-filter]").forEach(item =>
                    item.classList.toggle("active", item === button)
                );
                renderAppointments();
            });
        });

        $("#analyzeReportButton")?.addEventListener("click", analyzeReport);
        $("#generateHealthInsightsButton")?.addEventListener("click", generateHealthInsights);
        $("#overviewGenerateHealthInsightsButton")?.addEventListener("click", generateHealthInsights);

        $("#reportFileInput")?.addEventListener("change", event => {
            const file = event.target.files?.[0];
            const selected = $("#selectedReportFile");

            if (!file) {
                if (selected) selected.hidden = true;
                return;
            }

            if (!isSupportedMedicalDocument(file)) {
                event.target.value = "";
                if (selected) selected.hidden = true;
                toast("Choose a PDF, JPG, JPEG, PNG, WebP, or DOCX file.", "warning");
                return;
            }

            if (selected) selected.hidden = false;
            if ($("#selectedFileName")) $("#selectedFileName").textContent = file.name;
            if ($("#selectedFileSize")) $("#selectedFileSize").textContent = formatSize(file.size);
        });

        $("#takeReportPhoto")?.addEventListener("click", () => {
            $("#reportCameraInput")?.click();
        });

        $("#reportCameraInput")?.addEventListener("change", event => {
            const photo = event.target.files?.[0];
            const reportInput = $("#reportFileInput");
            if (!photo || !reportInput) return;

            const transfer = new DataTransfer();
            transfer.items.add(photo);
            reportInput.files = transfer.files;
            reportInput.dispatchEvent(new Event("change", { bubbles: true }));
            event.target.value = "";
        });

        $("#removeSelectedFile")?.addEventListener("click", () => {
            if ($("#reportFileInput")) $("#reportFileInput").value = "";
            if ($("#selectedReportFile")) $("#selectedReportFile").hidden = true;
        });

        const dropzone = $("#reportDropzone");

        if (dropzone) {
            dropzone.addEventListener("dragover", event => {
                event.preventDefault();
                dropzone.classList.add("drag-over");
            });

            dropzone.addEventListener("dragleave", () => {
                dropzone.classList.remove("drag-over");
            });

            dropzone.addEventListener("drop", event => {
                event.preventDefault();
                dropzone.classList.remove("drag-over");

                const file = event.dataTransfer?.files?.[0];
                if (!file || !$("#reportFileInput")) return;

                const transfer = new DataTransfer();
                transfer.items.add(file);
                $("#reportFileInput").files = transfer.files;
                $("#reportFileInput").dispatchEvent(new Event("change", { bubbles: true }));
            });
        }

        $("#mentorForm")?.addEventListener("submit", event => {
            event.preventDefault();
            sendMentorMessage($("#mentorInput")?.value || "");
        });

        $("#mentorInput")?.addEventListener("keydown", event => {
            if (event.key !== "Enter" || event.shiftKey || event.isComposing) return;
            event.preventDefault();
            if (!state.busy) sendMentorMessage(event.currentTarget.value || "");
        });

        $("#clearMentorButton")?.addEventListener("click", clearMentor);
        $("#newMentorConversationButton")?.addEventListener("click", startMentorConversation);
        $("#mentorHistoryToggle")?.addEventListener("click", () => {
            setMentorHistoryOpen($("#mentorHistoryPanel")?.hidden !== false);
        });
        $("#mentorConversationTabs")?.addEventListener("click", event => {
            const deleteButton = event.target.closest("[data-delete-conversation]");
            if (deleteButton) {
                deleteConversation("mentor", deleteButton.dataset.conversationId);
                return;
            }
            const item = event.target.closest("[data-conversation-id]");
            if (item) selectConversation("mentor", item.dataset.conversationId);
        });
        $("#analyzerConversationList")?.addEventListener("click", event => {
            const deleteButton = event.target.closest("[data-delete-conversation]");
            if (deleteButton) {
                deleteConversation("analyzer", deleteButton.dataset.conversationId);
                return;
            }
            const item = event.target.closest("[data-conversation-id]");
            if (item) selectConversation("analyzer", item.dataset.conversationId);
        });
        $("#mentorMessages")?.addEventListener("click", event => {
            const editButton = event.target.closest("[data-edit-message]");
            if (editButton) {
                beginEditMentorMessage(Number(editButton.dataset.editMessage));
                return;
            }
            const cancelButton = event.target.closest("[data-cancel-message-edit]");
            if (cancelButton) renderMentorMessages();
        });
        $("#mentorMessages")?.addEventListener("submit", event => {
            const form = event.target.closest("[data-edit-message-form]");
            if (!form) return;
            event.preventDefault();
            const text = form.querySelector("textarea")?.value || "";
            saveEditedMentorMessage(Number(form.dataset.editMessageForm), text);
        });
        $("#analysisResults")?.addEventListener("click", event => {
            const button = event.target.closest("[data-analysis-conversation]");
            if (button) continueAnalysisInMentor(button.dataset.analysisConversation);
        });
        document.addEventListener("click", event => {
            if (!event.target.closest("#mentorHistoryPanel, #mentorHistoryToggle")) {
                setMentorHistoryOpen(false);
            }
        });
        document.addEventListener("keydown", event => {
            if (event.key === "Escape") setMentorHistoryOpen(false);
        });

        $("#consentPreferencesForm")?.addEventListener("submit", async event => {
            event.preventDefault();
            const nextConsent = {
                ...state.consent,
                aiProcessing: $("#consentAiProcessing")?.checked === true,
                healthcareSharing: $("#consentDataSharing")?.checked === true,
                analytics: $("#consentAnalytics")?.checked === true
            };
            const saveButton = event.currentTarget.querySelector('button[type="submit"]');
            const status = $("#consentSaveStatus");
            if (saveButton) saveButton.disabled = true;
            if (status) status.textContent = "Saving preferences...";
            try {
                await apiRequest("/api/consent/ai", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ enabled: nextConsent.aiProcessing })
                });
            } catch (error) {
                if (status) status.textContent = error.message;
                toast(error.message, "error");
                if (saveButton) saveButton.disabled = false;
                return;
            }

            const labels = {
                aiProcessing: "AI processing",
                healthcareSharing: "Healthcare data sharing",
                analytics: "Optional analytics"
            };
            const changes = Object.keys(labels)
                .filter(key => Boolean(state.consent[key]) !== nextConsent[key])
                .map(key => ({ label: labels[key], enabled: nextConsent[key] }));
            state.consent = nextConsent;
            if (changes.length) {
                state.consentHistory = [...(state.consentHistory || []), {
                    createdAt: new Date().toISOString(),
                    changes
                }].slice(-100);
            }
            persist();
            renderConsentHistory();
            if (status) status.textContent = "Preferences saved.";
            toast(changes.length ? "Consent preferences saved." : "Preferences are up to date.");
            if (saveButton) saveButton.disabled = false;
        });

        $$("[data-privacy-action]").forEach(button => {
            button.addEventListener("click", () => {
                switch (button.dataset.privacyAction) {
                    case "export":
                        exportData();
                        break;
                    case "correct":
                        openProfileModal();
                        break;
                    case "delete":
                        deleteLocalData();
                        break;
                }
            });
        });

        $("#exportDataButton")?.addEventListener("click", exportData);
        $("#deleteLocalDataButton")?.addEventListener("click", deleteLocalData);
        $("#deleteCloudHealthDataButton")?.addEventListener("click", deleteSyncedHealthData);
        $("#editProfileButton")?.addEventListener("click", openProfileModal);
        const signOut = async () => {
            try {
                await apiRequest("/api/auth/logout", { method: "POST" });
            } catch (error) {
                console.warn("Sign-out request failed; clearing this browser session.", error.message);
            }
            window.location.reload();
        };
        $("#signOutButton")?.addEventListener("click", signOut);
        $("#settingsSignOutButton")?.addEventListener("click", signOut);
    };

    const init = async () => {
        bindAuthEvents();
        updateAuthMode();
        // Open the local workspace immediately; session restoration can be slow
        // when the server or database is waking up.
        startGuestApp();
        try {
            const session = await apiRequest("/api/auth/session");
            if (session.authenticated && session.user?.id) {
                await startAuthenticatedApp(session.user);
            }
        } catch (error) {
            console.warn("NexHealth session restore failed; opening a local guest workspace.", error.message);
        }

        document.body.classList.remove("auth-pending");
        refreshIcons();
        console.info("NexHealth authentication initialized.");
    };

    return {
        init,
        navigate,
        renderAll,
        exportData,
        deleteLocalData
    };
})();

document.addEventListener("DOMContentLoaded", NexHealth.init);

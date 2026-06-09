import { FunctionComponent, JSX } from "preact";

import Title from "../Title/Title";

const WorkExperience: FunctionComponent = (): JSX.Element => {
    return (
        <section id="experience" className="projects">
            <Title title="Work Experience" />

            <div className="w-full flex flex-col items-start text-left">
                
                <div data-aos="fade-up" className="w-full border-b border-white/10 pb-8 mb-8">
                    <h3 className="text-3xl font-bold highlight mb-1">Software Engineer</h3>
                    <h4 className="text-xl font-semibold opacity-90 mb-1"><span>Inspira Grupa – 4zida</span></h4>
                    <p className="text-base opacity-70 mb-6">April 2025 – Present</p>
                    
                    <ul className="list-disc pl-12 space-y-4 leading-relaxed">
                        <li className="text-[16px]"><span className="font-semibold highlight">User Dashboard & Listings (FE):</span> Built the user profile system for private individuals, enabling them to activate, edit, delete, pause, or renew their listings, with access to favorites, saved searches, and expense history.</li>
                        <li className="text-[16px]"><span className="font-semibold highlight">Payment Integration (FE):</span> Implemented features for listing payments, allowing users to generate a QR code or choose credit card payment, along with displaying success or failure transaction status.</li>
                        <li className="text-[16px]"><span className="font-semibold highlight">Authentication Flow (FE):</span> Developed secure pages for forgotten passwords and password resets.</li>
                        <li className="text-[16px]"><span className="font-semibold highlight">Interactive Tools & UI (FE):</span> Created an interactive "Buy vs. Rent" calculator and financial chart to help users analyze payoff periods.</li>
                        <li className="text-[16px]"><span className="font-semibold highlight">Feature Development (FE):</span> Created pages for neighborhood overviews, investor directories, agency listings, price lists, and a modern login/registration landing page featuring real-time user reviews.</li>
                        <li className="text-[16px]"><span className="font-semibold highlight">Notifications & Search (FE):</span> Implemented saved search alerts via Telegram, Viber, and Email, as well as parameter-based quick search filters by distance.</li>
                        <li className="text-[16px]"><span className="font-semibold highlight">Mobile Development (FE):</span> Contributed to the Expo mobile app, handling minor bug fixes and small updates using a CDN to pull data efficiently.</li>
                        <li className="text-[16px]"><span className="font-semibold highlight">Backend Development (BE):</span> Created ad-hoc API endpoints to support quick updates and custom data needs.</li>
                        <li className="text-[16px]"><span className="font-semibold highlight">Data & A/B Testing (BE):</span> Collected user data and logs from active A/B tests, collaborating with development and marketing teams to analyze the results.</li>
                        <li className="text-[16px]"><span className="font-semibold highlight">Internal AI Hackathon:</span>  Developed the frontend features that allowed an AI to pre-fill listing descriptions and checkboxes based on uploaded images, including a listing quality rating tool.</li>
                    </ul>
                </div>

                <div data-aos="fade-up" className="w-full">
                    <h3 className="text-3xl font-bold highlight mb-1">Software Engineer - Intern</h3>
                    <h4 className="text-xl font-semibold opacity-90 mb-1"><span>ENON Solutions</span></h4>
                    <p className="text-base opacity-70 mb-6">November 2024 (3 Months)</p>
                    
                    <ul className="list-disc pl-12 space-y-4 leading-relaxed mb-6">
                        <li className="text-[16px]">Passed a technical interview focusing on core JavaScript, data structures, algorithms, and <span className="font-semibold highlight">Big O notation</span> for evaluating code complexity.</li>
                        <li className="text-[16px]">Mastered frontend development using <span className="font-semibold highlight">Vue.js, Vue Router, and Pinia</span> for application state management.</li>
                        <li className="text-[16px]">Gained backend experience working with the <span className="font-semibold highlight">Mars engine</span> and <span className="font-semibold highlight">MySQL</span> database development.</li>
                        <li className="text-[16px]"><span className="font-semibold highlight">eCoinWall Project:</span> Applied learned technologies to build a cryptocurrency website aimed av helping users quickly and securely invest and trade.</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default WorkExperience;
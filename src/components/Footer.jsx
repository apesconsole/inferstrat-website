import React, { useState } from "react";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-center text-white py-8">
        {/* Logo */}
        <div className="mb-4">
          <img
            src="./images/logo.png" 
            alt="Inferstrat"
            className="mx-auto h-10 w-auto object-contain"
          />
        </div>

        <div className="mb-2">
          <button
            onClick={() => setShowModal(true)}
            className="text-white hover:underline text-sm transition duration-300 ease-in-out"
          >
            Terms & Conditions
          </button>
        </div>

        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} InferStrat — Market Research & Consulting
        </p>
      </footer>

      {/* Animated Modal */}
      <div 
        className={`fixed inset-0 z-50 ${showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300 ease-in-out`}
      >
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setShowModal(false)}
        />
        <div className="flex items-center justify-center min-h-screen p-4">
          <div 
            className={`bg-white rounded-lg p-6 max-w-2xl w-full transform ${
              showModal ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
            } transition-all duration-300 ease-in-out relative`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Terms & Conditions</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700 transition duration-300 ease-in-out"
              >
                <span className="text-2xl">×</span>
              </button>
            </div>
            <div className="text-gray-600 max-h-[60vh] overflow-y-auto pr-2">
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
                <p>
                  These Terms & Conditions ("Terms") govern your access to and use of
                  services provided by Inferstat ("we", "us", "our") through
                  inferstat.com and related platforms. By using our site or engaging
                  our services you agree to these Terms.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">2. Our Services</h2>
                <p>
                  We provide market research and data analytics services including
                  social media analytics, survey data collection (online and physical),
                  and insights for clients across FMCG, Banking, and related sectors.
                  Descriptions of specific services, deliverables, timelines and fees
                  will be set out in separate engagement letters, proposals or
                  statements of work.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">3. Data Collection & Privacy</h2>
                <p>
                  We collect and process data as described in our Privacy Policy. Data
                  may come from social media platforms, surveys, or other sources. We
                  take commercially reasonable measures to protect personal data, but
                  you acknowledge that no system is completely secure.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">4. Use of Third‑Party Data & Partners</h2>
                <p>
                  We may use third‑party data sources, tools and partners to deliver
                  services. Where applicable, we rely on the terms and policies of
                  those providers. References to partnerships (for example, with
                  technology providers) do not create any direct contractual
                  relationship between those third parties and you.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">5. Intellectual Property</h2>
                <p>
                  Unless otherwise agreed in writing, we retain ownership of our
                  methodologies, tools, models, code and know‑how. Clients receive a
                  limited, non‑exclusive license to use deliverables for their internal
                  business purposes only. You may not redistribute, resell or publish
                  our work without prior written permission.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">6. Client Responsibilities</h2>
                <p>
                  Clients must provide accurate, timely information and access required
                  for project delivery. You are responsible for compliance with laws
                  and regulations applicable to your use of the deliverables.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">7. Fees & Payment</h2>
                <p>
                  Fees, payment terms and any expenses will be set out in the proposal
                  or engagement document. Late payments may attract interest or
                  suspension of services.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">8. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, our liability for any claim
                  arising out of or related to these Terms or our services is limited
                  to the fees paid by you for the specific service giving rise to the
                  claim. We are not liable for indirect, incidental, special or
                  consequential damages.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">9. Indemnification</h2>
                <p>
                  You agree to indemnify and hold us harmless from third‑party claims
                  resulting from your use of our services or your violation of these
                  Terms.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">10. Termination</h2>
                <p>
                  Either party may terminate an engagement as specified in the
                  applicable engagement document. Termination does not relieve you of
                  obligations to pay fees for services performed prior to termination.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">11. Changes to These Terms</h2>
                <p>
                  We may update these Terms from time to time. Material changes will be
                  communicated via our website or directly to clients where feasible.
                  Continued use of our services after changes indicates acceptance.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">12. Governing Law & Contact</h2>
                <p className="mb-2">
                  These Terms are governed by the laws applicable to our place of
                  business unless otherwise specified in an engagement document.
                </p>
                <p>
                  For questions about these Terms, email: <a href="mailto:contact@inferstat.com" className="text-blue-600">contact@inferstrat.com</a>
                </p>
              </section>

              <p className="text-sm text-gray-600">
                Note: This page is for informational purposes and does not constitute
                legal advice. For contract drafting or legal questions, consult a
                qualified attorney.
              </p>
              <div className="mt-6">
                <div className="inline-block rounded-full border-4 border-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-all duration-300">
                    <button
                      onClick={() => window.open("./terms.txt", "_blank")}
                      className="px-5 py-2 rounded-full bg-transparent font-semibold
                                text-transparent bg-clip-text
                                bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
                                hover:from-green-400 hover:via-blue-500 hover:to-purple-600
                                transition-all duration-300"
                    >
                      Download File →
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
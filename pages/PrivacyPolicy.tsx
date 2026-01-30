import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPolicyPage: React.FC = () => {
  // Ensure we start at the top of the page when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-brand-cream min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Header Section */}
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center text-brand-primary font-bold mb-8 hover:text-brand-accent transition-colors">
             <ArrowLeft className="w-4 h-4 mr-2" />
             Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">Privacy Policy</h1>
          <p className="text-brand-gray/60 font-medium">Last Updated: January 10, 2026</p>
        </div>

        {/* Content Section */}
        <div className="prose prose-lg prose-slate max-w-none text-brand-gray">
          
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4">Introduction</h2>
            <p className="mb-4">
              Tealeaf Consulting ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-bold text-brand-dark mt-6 mb-3">Personal Information You Provide</h3>
            <p className="mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-brand-accent">
              <li>Schedule a discovery call or consultation</li>
              <li>Request information about our services</li>
              <li>Subscribe to our newsletter or communications</li>
              <li>Fill out a contact form</li>
              <li>Engage our services</li>
            </ul>
            <p className="mb-4">This information may include:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-brand-accent">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name and role</li>
              <li>Business information</li>
              <li>Financial information (when you become a client)</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-bold text-brand-dark mt-6 mb-3">Automatically Collected Information</h3>
            <p className="mb-4">When you visit our website, we may automatically collect certain information about your device, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-brand-accent">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring URLs</li>
              <li>Pages viewed and time spent on pages</li>
              <li>Click data and navigation patterns</li>
              <li>Device identifiers</li>
            </ul>

            <h3 className="text-xl font-bold text-brand-dark mt-6 mb-3">Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-brand-accent">
              <li>Provide, operate, and maintain our services</li>
              <li>Process your requests and respond to inquiries</li>
              <li>Schedule and conduct discovery calls and consultations</li>
              <li>Send you service-related communications</li>
              <li>Deliver newsletters and marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Analyze usage trends and preferences</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and interests</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4">How We Share Your Information</h2>
            <p className="mb-6">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
            
            <h3 className="text-xl font-bold text-brand-dark mb-3">Service Providers</h3>
            <p className="mb-4">We may share your information with third-party service providers who perform services on our behalf, including:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-brand-accent">
              <li>Website hosting providers</li>
              <li>Email service providers</li>
              <li>Calendar and scheduling tools</li>
              <li>Customer relationship management (CRM) systems</li>
              <li>Analytics providers</li>
              <li>Payment processors</li>
            </ul>
            <p className="mb-6">These service providers are contractually obligated to use your information only as necessary to provide services to us and to protect your information.</p>

            <h3 className="text-xl font-bold text-brand-dark mb-3">Business Transfers</h3>
            <p className="mb-6">If we are involved in a merger, acquisition, financing, reorganization, bankruptcy, or sale of assets, your information may be transferred as part of that transaction.</p>

            <h3 className="text-xl font-bold text-brand-dark mb-3">Legal Requirements</h3>
            <p className="mb-6">We may disclose your information if required to do so by law or in response to valid requests by public authorities, including to meet national security or law enforcement requirements.</p>

            <h3 className="text-xl font-bold text-brand-dark mb-3">Protection of Rights</h3>
            <p className="mb-2">We may disclose your information when we believe it is necessary to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-brand-accent">
              <li>Comply with applicable laws or regulations</li>
              <li>Protect and defend our rights or property</li>
              <li>Prevent or investigate possible wrongdoing</li>
              <li>Protect the personal safety of users or the public</li>
              <li>Protect against legal liability</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4">Data Retention</h2>
            <p className="mb-4">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
            <p>
              Client financial and business records are retained in accordance with applicable accounting and legal requirements.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4">Data Security</h2>
            <p className="mb-4">We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6 marker:text-brand-accent">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication</li>
              <li>Secure data storage</li>
              <li>Employee training on data protection</li>
            </ul>
            <p>
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4">Your Privacy Rights</h2>
            <p className="mb-6">Depending on your location, you may have certain rights regarding your personal information:</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-brand-dark">Access and Correction</h4>
                <p>You have the right to access and update your personal information. You may contact us to request access to or correction of your information.</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark">Deletion</h4>
                <p>You may request that we delete your personal information, subject to certain exceptions required by law or legitimate business purposes.</p>
              </div>
              <div>
                <h4 className="font-bold text-brand-dark">Opt-Out</h4>
                <p>You may opt out of receiving marketing communications from us by following the unsubscribe link in our emails, contacting us directly, or updating your communication preferences. Service-related emails may still be sent.</p>
              </div>
            </div>
            
            <p className="mt-6">To exercise any of these rights, please contact us using the information provided below.</p>
          </section>

           <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-brand-dark mb-4">Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
            <div className="bg-white/50 border border-brand-dark/5 p-6 rounded-xl">
              <p className="font-bold text-brand-dark mb-2">Tealeaf Consulting</p>
              <p>Email: privacy@tealeafconsulting.com</p>
              <p>Address: San Francisco, CA</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
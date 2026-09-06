import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy and Terms of Use for Project Lantern.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container-layout py-16 md:py-24">
      <div className="content-column">
        <h1 className="text-3xl md:text-5xl font-sans font-800 text-text leading-tight mb-8">
          Privacy Policy
        </h1>
        
        <div className="prose max-w-none">
          <p className="text-text-muted italic mb-10">Last Updated: September 6, 2026</p>
          
          <h2>1. Introduction</h2>
          <p>
            Welcome to Project Lantern ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy governs the privacy policies and practices of our website. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.
          </p>
          <p>
            By accessing or using our website, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy.
          </p>

          <h2>2. Medical Disclaimer</h2>
          <p>
            <strong>Project Lantern is strictly an educational and informational resource.</strong> The content provided on this platform is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician, neurologist, geriatrician, or other qualified health provider with any questions you may have regarding a medical condition.
          </p>
          <p>
            Never disregard professional medical advice or delay in seeking it because of something you have read on this website. Reliance on any information provided by Project Lantern, our clinical board, or other visitors to the website is solely at your own risk.
          </p>

          <h2>3. Information We Collect</h2>
          <p>
            We collect information in the following ways:
          </p>
          <ul>
            <li><strong>Personal Information (Optional):</strong> You are not required to create an account to read our articles. However, if you choose to use the Daily Symptom Tracker, we collect your email address and password to securely create and maintain your account.</li>
            <li><strong>Health Data (Optional):</strong> If you use the Daily Symptom Tracker, any data you log (such as sleep quality, wandering incidents, or agitation levels) is stored securely in our database. This data is strictly private, encrypted at rest, and linked only to your account so that you can view your own history. We do not sell this data, and we do not use it for marketing.</li>
            <li><strong>Usage Data:</strong> We may automatically collect non-personally identifiable information when you visit, use, or navigate the site. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser characteristics, and referring URLs. We use this strictly to maintain the security and operation of our website, and for our internal analytics.</li>
          </ul>

          <h2>4. How We Use Your Information</h2>
          <p>
            We use the information we collect or receive:
          </p>
          <ul>
            <li>To facilitate your use of the website and ensure it is functioning optimally.</li>
            <li>To respond to your inquiries and offer support.</li>
            <li>To monitor and analyze usage and trends to improve your experience.</li>
          </ul>

          <h2>5. Sharing of Your Information</h2>
          <p>
            We will not share, sell, rent, or trade your personal information with third parties for their commercial purposes. We may share your information only in the following situations:
          </p>
          <ul>
            <li><strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
            <li><strong>Vital Interests and Legal Rights:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</li>
          </ul>

          <h2>6. Data Security</h2>
          <p>
            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our website is at your own risk. You should only access the services within a secure environment.
          </p>

          <h2>7. Updates to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have questions or comments about this policy or our privacy practices, please contact us through our public GitHub repository or email us directly if you have been provided with contact information.
          </p>
        </div>
      </div>
    </div>
  )
}

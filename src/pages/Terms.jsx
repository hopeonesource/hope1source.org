import { Link } from 'react-router-dom'
import PageHero, { Confirm, DraftBanner } from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { org } from '../content/org.js'

const banned = [
  'Using the Service in breach of another agreement you are party to, including an employment agreement.',
  'Letting someone else use your account, impersonating you, or logging into an account you are not allowed to use.',
  'Forging identifiers or misrepresenting your identity or affiliation.',
  'Faking visits or usage.',
  'Sending appointment reminders that associate a client with a sensitive service, especially one regulated by HIPAA.',
  'Allowing bots or automated access without our express written permission.',
  'Interfering with operation or security, including malware, vulnerability probes, or flooding the Service.',
  'Harvesting contact information of other users.',
  'Using the Service for a commercial purpose, or for a third party, in a way these terms do not allow.',
  'Reverse engineering or attempting to derive source code of the underlying intellectual property.',
  'Framing, mirroring, or simulating the Service.',
  'Forging TCP/IP packet headers or header information in email or newsgroup postings.',
]

const carriers = [
  'AT&T',
  'Sprint',
  'T-Mobile',
  'Verizon Wireless',
  'Metro PCS',
  'Nextel',
  'Virgin Mobile',
  'US Cellular',
  'ACS Wireless',
  'All West Wireless',
  'Bluegrass',
  'Boost',
  'Cambridge Telecom',
  'Cellcom',
  'Cellular South',
  'Centennial',
  'Cincinnati Bell',
  'Cricket Wireless',
  'Dobson',
  'Cellular One of East Central Illinois',
  'Appalachian Wireless',
  'Farmer’s Mutual Telephone Company',
  'General Communications',
  'Golden State Cellular',
  'PC Management',
  'Inland Cellular',
  'Illinois Valley Cellular',
  'Nex-Tech Wireless',
  'Nucla-Naturita',
  'nTelos',
  'Revol',
  'Silver Star PCS (Gold Star)',
  'Snake River PCS',
  'South Central',
  'Syringa',
  'Thumb Cellular',
  'UBET Wireless',
  'Unicel',
  'United Wireless',
  'West Central Wireless',
]

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms of service (draft)"
        description="Draft terms for the Hope1Source mission site and related HopeOneSource services. Needs legal review. Prior effective date was December 6, 2016."
      />
      <PageHero
        kicker="Terms · draft"
        title="Terms of service."
        lede="Last updated in draft on October 1, 2026. Adapted from the public terms. The prior effective date was December 6, 2016. Do not treat this page as the binding agreement until counsel republishes it."
      />
      <article className="section prose-section">
        <div className="wrap narrow prose legal">
          <DraftBanner />
          <Confirm>
            Set a new effective date on republish. Do not leave December 6, 2016 in place unless counsel explicitly
            keeps it.
          </Confirm>

          <h2>Services</h2>
          <p>
            Welcome to {org.programLegacy}, a managed program of the 501(c)(3) nonprofit {org.legalName}. The program
            provides an outreach platform for housing, career, and social-service providers (“Service Providers”) to
            send relevant, location-aware text messages to people who have registered (“Clients”). Clients receive
            messages based on settings they choose and can change.
          </p>
          <p>
            In this draft, “Site” means the mission website at <strong>https://{org.siteHost}</strong> together with
            the Check-ins hub at <strong>{org.hubUrl}</strong> and the partner portal at{' '}
            <strong>{org.portalUrl}</strong>, unless counsel defines the Site more narrowly.
          </p>
          <Confirm>
            Decide whether one set of terms covers hope1source.org and hopeonesource.me, or whether the product hub
            needs its own agreement. The October 2026 stub had redefined Site as hopeonesource.me only.
          </Confirm>
          <p>
            Clients receive texts from a long code or another number on file with the program. Relevance depends on the
            services a client asked for, demographics used to judge likely eligibility, and a level of need the client
            last indicated: high (experiencing homelessness), medium (at risk), or low (neither). The point is to raise
            the chance that the right person hears about the right service when they need it.
          </p>
          <p>
            Services are mapped for providers, including local government. One example from the prior terms: a provider
            may post that food is available for female military veterans ages 22–40 who are experiencing homelessness
            in a general area. Registered clients who meet those parameters can receive a text. Other providers can see
            posted services on a map when they are logged in. Providers can also message their own contacts from the
            product.
          </p>
          <p>
            Offerings may change. A provider may stop a service for a time or for good. We may limit access and change
            categories. How often a client is texted depends on their settings and on how often providers post. A fixed
            count cannot be promised. The prior registration copy said frequency would not exceed 50 texts a month.
            Confirm that cap before quoting it.
          </p>
          <p>
            Providers may also send check-in polls, wellness checks, and appointment or event reminders to their
            designated contacts with the internal outreach tool. Clients may opt out by replying STOP.
          </p>
          <Confirm>
            The old terms named an SMS long code, 855-947-3417, “or another long phone number.” Confirm the live
            number. Industry pages said to text HOPE to 51523. The same old terms mentioned short code 51513. Publish
            one code only after it is confirmed. Also confirm the exact welcome text and the HELP link. A sample in the
            old terms read along the lines of: “Welcome to HopeOneSource: Alerts from local providers. Go to
            hopeonesource.me for HELP. Reply STOP to cancel. Msg&Data rates may apply.”
          </Confirm>
          <p>
            These terms govern access to the Site and use of the services. Access is conditioned on compliance. By
            accessing or contributing, you agree to these terms. Some features may add further terms at signup.
          </p>

          <h2>Accounts</h2>
          <h3>Registration</h3>
          <p>
            Some parts of the Service require an account. You represent that the information you provide is current,
            accurate, and complete, and that you will keep it that way. Web-enabled computers at public libraries are
            encouraged for clients who do not have their own internet access.
          </p>
          <p>
            A client account uses a phone number or email as the user name. That user name is not displayed publicly.
            You will be asked to choose a password. Older terms also mentioned Facebook or another social login.
          </p>
          <Confirm>Confirm whether social login is still offered.</Confirm>
          <p>
            A service-provider account asks for a screen name and a password. You may not choose a name that is taken,
            misleading, or an impersonation, or that otherwise breaks these terms. The screen name can be shown next to
            a service you post. We may reclaim a name that violates these terms.
          </p>
          <h3>Passwords</h3>
          <p>
            You are responsible for the confidentiality of your passwords and for activity from your account. A
            forgotten password may be reset with a token sent to your email or phone. Tell us promptly if you learn of
            unauthorized use. Accounts are not transferable. Personal information is collected over secured connections
            and encrypted before storage, using SSL and industry-grade controls. That is a design goal, not a promise
            of perfect security.
          </p>
          <h3>Termination of an account</h3>
          <p>
            We may suspend or terminate an account, or delete content posted through it, with or without notice, if you
            violate these terms or act in a way that shows you will not comply. We are not liable to you for that
            action.
          </p>

          <h2>Privacy</h2>
          <p>
            Registration information is governed by the <Link to="/privacy">privacy policy</Link>.
          </p>
          <Confirm>Confirm the final privacy path: /privacy on this site, a page on the hub, or both.</Confirm>

          <h2>Content</h2>
          <p>
            “Content” means information posted or submitted through the services, and content we embed at a user’s
            direction. It should stay relevant to the program. It may not be illegal, obscene, defamatory, threatening,
            infringing, invasive of privacy, or otherwise injurious.
          </p>
          <p>Examples of unacceptable content include:</p>
          <ol>
            <li>Material that is unlawful, obscene, defamatory, threatening, pornographic, harassing, hateful, or that encourages crime.</li>
            <li>False or misleading information.</li>
            <li>Impersonation, or a misleading inclusion of a person or organization.</li>
            <li>Internal outreach that ties a person to a sensitive service, especially one regulated by HIPAA.</li>
            <li>Irrelevant statements, commercial solicitations, or spam.</li>
            <li>Material that violates proprietary rights, privacy, or publicity rights.</li>
          </ol>
          <p>
            The list is not complete. We decide what is unacceptable, case by case, and we may change the standard. We
            may remove or disable content without prior notice. We do not promise to pre-screen contributions. We may
            also terminate an account for a violation.
          </p>
          <h3>Your content</h3>
          <p>
            You are responsible for content you post, including its legality. You keep your rights in that content and
            you are responsible for protecting them.
          </p>
          <p>
            By contributing external outreach content, you grant us a non-exclusive, royalty-free, perpetual,
            irrevocable, worldwide license to use it in connection with operating the Site and services, including the
            rights to copy, distribute, transmit, display, perform, reproduce, edit, translate, reformat, and
            incorporate it into a collective work. The prior terms said check-ins and reminder features do not take
            that license. By the same contribution you also grant other users a non-exclusive, royalty-free, perpetual,
            irrevocable, worldwide license to use that external outreach content. Again, the prior terms carved out
            check-ins and reminders.
          </p>
          <p>
            You represent that you own the content or have the rights to grant these licenses, including any privacy or
            publicity release you need, and that the content does not infringe intellectual property or break an
            agreement. You represent that you are who you say you are, that you have not submitted fictitious
            information, and that the content is not threatening, harassing, false, defamatory, obscene, or otherwise
            unlawful.
          </p>
          <p>
            External outreach content is publicly available to anyone who can access the services. Be careful. A public
            profile or a message sent through a third-party channel can expose a user name and whatever personal detail
            you choose to include. Material on the service is a community product and does not necessarily represent
            our views. We do not promise that content has been reviewed or is accurate. You are responsible for your
            reliance on it.
          </p>
          <h3>Links</h3>
          <p>
            We do not review every site that links to the Service or that the Service links to. A link is not an
            endorsement. We are not responsible for third-party sites or for harm from them.
          </p>

          <h2>Mobile messaging</h2>
          <p>The prior terms listed these carriers. Treat the list as historical until messaging counsel updates it:</p>
          <ul className="carrier-list">
            {carriers.map((carrier) => (
              <li key={carrier}>{carrier}</li>
            ))}
          </ul>
          <p>T-Mobile is not liable for undelivered or delayed messages, per the prior terms.</p>
          <Confirm>
            Confirm the carrier list against current A2P / 10DLC paperwork. Retire names that no longer apply.
          </Confirm>
          <p>
            {org.legalName} and its partner organizations are not liable for delays in SMS messages connected with the
            SMS gateway.
          </p>

          <h2>Unauthorized activities</h2>
          <p>You may use the services only for lawful purposes. You will not, and you will not help anyone else to:</p>
          <ul>
            {banned.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Security violations may bring civil or criminal liability. We may investigate and may work with law
            enforcement.
          </p>

          <h2>Copyright complaints</h2>
          <p>
            If you believe your copyrighted material has been used in a way that infringes, contact us through the
            partnerships address and the mailing address below.
          </p>
          <Confirm>
            Confirm the DMCA agent’s name, email, and mailing address before relying on this sentence as a designation.
          </Confirm>

          <h2>Intellectual property</h2>
          <p>
            The Site and services are protected by copyright, trademark, and other laws. {org.programLegacy} and its
            licensors own the Site and services and the associated intellectual property. You may not remove proprietary
            notices. Feedback you offer about improvements is assigned to the program and becomes its property, as the
            prior terms stated.
          </p>

          <h2>Ending access</h2>
          <p>
            We may suspend or end access if you breach these terms, if we believe the law requires it, or immediately
            upon notice to the email on your account. We are not liable for that suspension or ending. After it, you
            may not be able to reach the account, and we do not have to keep or forward content. Obligations that by
            their nature should survive — including ownership, confidentiality, indemnification, and limits of
            liability — survive.
          </p>

          <h2>Cost</h2>
          <p>
            The prior terms said the outreach platform is free for vulnerable community members and for the contacts of
            partnering service providers, though carrier message and data rates may apply, and that providers receive
            access as agreed in their partnership proposal. Cancellations of a premium or enterprise arrangement were
            to use the cancellation form provided before a trial ended.
          </p>
          <Confirm>
            Align this section with current Check-ins offers on {org.hubUrl} so the terms and the product site do not
            disagree. This mission site does not publish a price table.
          </Confirm>

          <h2>Disclaimers and limitation of liability</h2>
          <p>
            We disclaim responsibility and liability for the availability, timeliness, security, or reliability of the
            services or of any software provided through the Site.
          </p>
          <p className="legal-caps">
            The Site and the services are provided on an “as is” and “as available” basis without warranties of any
            kind, either express or implied, including warranties of merchantability, fitness for a particular purpose,
            and non-infringement. We disclaim warranties about accuracy, security, reliability, timeliness, and
            performance. We do not warrant that use will be uninterrupted, timely, or error-free.
          </p>
          <p className="legal-caps">
            To the extent not prohibited by law, we will not be liable for any damages of any kind arising from the use
            of, or inability to use, the Site or the services. You use them at your own risk. Under no circumstances
            shall we be liable for any direct, indirect, special, or consequential damages, including loss of profits,
            income, or business opportunities, even if we or our suppliers have been notified of the possibility.
          </p>
          <p>
            Some jurisdictions do not allow certain warranty exclusions or limits on consequential damages, so parts of
            the above may not apply to you. We also provide the website and its contents on an “as is” basis and
            disclaim the warranties of merchantability, fitness for a particular purpose, and non-infringement unless
            otherwise stated.
          </p>

          <h2>Indemnity</h2>
          <p>
            You agree to indemnify and hold {org.programLegacy}, our affiliates, officers, employees, and agents
            harmless, including costs and attorneys’ fees, from a third-party claim arising out of your use of the Site
            or services, your violation of these terms, or your content infringing someone’s rights.
          </p>

          <h2>General</h2>
          <p>
            These terms are governed by the laws of the State of Virginia, without regard to conflict-of-law rules. You
            agree to the sole jurisdiction and venue of the federal or state courts serving Arlington County, Virginia,
            for a dispute arising from the Site, the services, or your use of them.
          </p>
          <Confirm>Confirm that Virginia law and Arlington County venue are still correct.</Confirm>
          <p>
            These terms are the entire agreement on this subject and replace prior understandings. If a court finds a
            provision unenforceable, the rest remains in effect. We may modify the terms. Changes will be posted, and
            we will try to give at least 30 days’ notice before new terms take effect. Continuing to use the Site after
            they take effect is agreement to the revision. A failure to enforce a provision is not a waiver.
          </p>

          <h2>Contact</h2>
          <ul>
            <li>
              {org.email} and, historically, {org.legacyEmail}
            </li>
            <li>Phone candidate: {org.phoneDisplay}</li>
            <li>
              Mail: {org.legalName} ({org.product}), {org.street}, {org.city}, {org.region} {org.postal} — confirm the
              address
            </li>
            <li>
              Donate, for convenience only and not as part of these terms:{' '}
              <a href={org.donateUrl}>Every.org · Hope With Love</a>
            </li>
          </ul>
        </div>
      </article>
    </>
  )
}

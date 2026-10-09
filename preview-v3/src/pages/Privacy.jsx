import PageHero, { Confirm, DraftBanner } from '../components/PageHero.jsx'
import Seo from '../components/Seo.jsx'
import { org } from '../content/org.js'

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy policy (draft)"
        description="Draft privacy policy for Hope1Source Check-ins. Hope with Love is the 501(c)(3)."
      />
      <PageHero
        kicker="Privacy · draft"
        title="Privacy policy."
        lede="Draft privacy policy for Hope1Source Check-ins. Not legal advice."
      />
      <article className="section prose-section">
        <div className="wrap narrow prose legal">
          <DraftBanner />
          <p>
            This draft applies to the websites, apps, and related services operated by {org.legalName} (“we,” “us”)
            under the names {org.program}, {org.programLegacy}, and {org.product}. The hosts in view are{' '}
            <strong>https://{org.siteHost}</strong> (this mission site), <strong>{org.hubUrl}</strong> (the Check-ins
            hub), and <strong>{org.portalUrl}</strong> (the partner portal), together the “Service.”
          </p>
          <Confirm>
            Confirm that one policy should cover hope1source.org, hopeonesource.me, and the portal, or publish separate
            notices.
          </Confirm>
          <p>
            Operator: {org.legalName}, described publicly as an incorporated 501(c)(3) nonprofit.
          </p>

          <h2>Information you provide</h2>
          <p>
            We collect certain personally identifiable information when you register for an account or check in through
            an outreach tool. That information may include your name, email, location, phone number, birthday, gender,
            or other information that identifies you. It is used to make the experience relevant, for reporting to
            authorized service providers on check-ins, and for security, including reducing the chance that someone
            pretends to be you in order to reach a limited community service.
          </p>
          <p>
            You do not have to register or provide personal information to read the general pages of this mission site.
            A participating service provider may still require information when you check in to their service.
          </p>

          <h2>Disclosure of information</h2>
          <p>
            {org.programLegacy} is administered by {org.legalName}. The organization uses industry-standard encryption
            practices to protect core elements of personally identifiable information stored in the system.
          </p>
          <p>
            Personally identifiable information is not shared, sold, or transferred to any non-governmental third party
            without prior consent, unless the law requires it. If a disclosure is required by law or legal process, or
            to respond to a lawful request from a legal authority, we will notify you unless we are prohibited from
            doing so, using the email or phone number on the account, so you may object. If you do not challenge the
            request, we may be legally required to turn the information over.
          </p>
          <p>
            System administrators and service providers working on the operation of the services may access general
            contact information, only as needed to connect you with a service you requested, and they are obligated not
            to use it for other purposes. If you have taken part with a provider using the platform, you may receive
            notifications about information and available services.
          </p>
          <p>
            We may share aggregated information and non-personally identifiable information with you, with the service
            provider you accessed, and with third parties for industry analysis, demographic profiling, research, and
            similar purposes.
          </p>

          <h2>How to access your information</h2>
          <p>
            If you have an account, the draft proposes that you review or change what you provided in account settings.
            The working address for partner access is <a href={org.portalUrl}>{org.portalUrl}</a>.
          </p>
          <Confirm>
            Confirm the account URL. Older copy pointed at hopeonesource.org or checkins.org. This draft proposes the
            partner portal.
          </Confirm>
          <p>
            If you delete all of that information, the account is deactivated and you will not be able to reach posted
            services, your data, or content posted through the account.
          </p>
          <p>
            Service providers should treat posts and updates about their services as public. Contributed public content
            may be visible online and through text notifications. Identification of contributed content may include an
            account name or IP address.
          </p>
          <p>
            To ask for deletion of personal information, contact us. We will use commercially reasonable efforts to
            honor the request. We may retain an archived copy where the law or another legitimate purpose requires it.
            Editing or deleting content may change what is displayed and may not permanently remove every copy.
          </p>

          <h2>Security</h2>
          <p>
            We use administrative, physical, and electronic measures designed to protect information from unauthorized
            access. No security measure is perfect, and no transmission can be guaranteed against interception or
            misuse. If personal information is compromised in a security breach, we will notify you as applicable law
            requires.
          </p>
          <p>
            {org.legalName} follows generally accepted industry standards to protect personal information submitted over
            the internet, during transmission and after it is received. No method of transmission or electronic storage
            is 100% secure. Absolute security is not guaranteed.
          </p>
          <p>
            Measures include limiting personal information to a need-to-know basis, collecting it over secured
            connections, and protecting it with industry-grade security software, including secure socket layer
            technology (SSL). Core personal information is encrypted before storage.
          </p>
          <p>
            By registering anywhere internationally, you consent to our providing your name, gender, date of birth,
            contact information, and the location of services you accessed only to the service providers you accessed,
            not to providers you only receive alerts about.
          </p>
          <p>
            By registering in the United States, you also consent to our providing your name, gender, date of birth,
            contact information, and ID status to service providers that aim to help you obtain required documentation,
            with your prior consent, so they can serve you. In the United States you also consent to our providing
            Homeless Management Information System (HMIS) data elements, including homelessness status, location,
            gender, and date of birth, using industry-standard practices to the local Continuum of Care’s HMIS lead or
            administrator, to support a by-name list and coordinated local services, consistent with federal policy.
          </p>
          <p>
            Service providers are not authorized to send custom appointment reminders through the platform that directly
            tie any person to a HIPAA-regulated sensitive service, for example by naming a scheduled HIV-treatment
            appointment. Report a suspected infraction to the contacts below.
          </p>
          <Confirm>
            Privacy questions on this site go to {org.email}. An older page also listed {org.legacyEmail}. Use the
            partnerships address.
          </Confirm>

          <h2>Links to other sites</h2>
          <p>
            {org.legalName} is not responsible for the practices of websites you reach through links from the Service,
            or for their content. When you leave the Service, this policy no longer applies. The other site’s policies
            do.
          </p>

          <h2>Access and retention</h2>
          <p>
            If your information changes, or you no longer want the Service, you may correct it, delete inaccuracies, or
            ask us to stop contacting you by updating the account or by contacting {org.legalName}. The draft response
            window is 15 days. Information is retained while the account is active or as needed to provide the service.
            To cancel an account or ask that information no longer be used to provide services, use the email below. We
            may retain and use information as needed to meet legal obligations, resolve disputes, and enforce
            agreements.
          </p>
          <Confirm>Privacy requests on this site go to {org.email}.</Confirm>

          <h2>Children’s privacy</h2>
          <p>
            The Service is not directed to children under 13. We do not knowingly collect or solicit personal
            information from anyone under 13, or knowingly allow them to register. If we learn that we have collected
            personal information from a child under 13 without verified parental consent, we will take steps to remove
            it. If you believe we may have information from or about a child under 13, contact us.
          </p>
          <h2>Changes</h2>
          <p>
            We may update this policy to reflect changes in practice. Changes will be posted on this page and are
            effective when posted. We may also modify this statement, or any additional terms that apply to the
            platform, as the services change. Review it from time to time. If you do not agree, discontinue use of the
            platform.
          </p>

          <h2>Contact for this draft</h2>
          <ul>
            <li>Organization: {org.legalName}, the 501(c)(3) operating {org.brand}</li>
            <li>Mission site: https://{org.siteHost}</li>
            <li>Email: {org.email}</li>
            <li>No street address or phone number is published on this site.</li>
          </ul>
        </div>
      </article>
    </>
  )
}

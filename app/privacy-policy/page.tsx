import { PageHero } from "@/components/blocks";
import { business } from "@/data/business";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Policy | Brookshire Washateria & Cleaners",
  description: "How Brookshire Washateria & Cleaners handles information collected through this website.",
  path: "/privacy-policy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" lead="Last updated November 2026." crumbs={[{ name: "Privacy Policy" }]} />
      <section className="py-14">
        <div className="container-site prose-local max-w-3xl">
          <p>
            This website is operated by {business.name}, {business.address.street}, {business.address.city},{" "}
            {business.address.state} {business.address.zip}. This policy explains what information we collect through the
            website and how we use it.
          </p>
          <h2>Information we collect</h2>
          <p>
            We don't require you to create an account or submit personal information to use this site. If you call or email us,
            we use your contact details only to respond to you.
          </p>
          <p>
            Like most websites, we use analytics tools (such as Google Analytics) that collect anonymous usage data, for
            example pages visited, device type and approximate location. This helps us improve the site.
          </p>
          <h2>Third-party services</h2>
          <p>
            Pages may embed Google Maps, and links may take you to other sites such as Google, Yelp, our order portal or our sister
            location. Those services have their own privacy policies.
          </p>
          <h2>Money transfer and bill pay</h2>
          <p>
            Information you provide in store for money transfers or bill payments is collected and handled by the provider
            under its own privacy policy and applicable law.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about this policy? Call {business.phone} or email {business.email}.
          </p>
        </div>
      </section>
    </>
  );
}

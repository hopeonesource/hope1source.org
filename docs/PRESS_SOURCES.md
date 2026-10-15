# v4 press source audit

Checked October 14, 2026 for T131. The source tables below record the external-link version. T132 now recreates all ten H1S releases within v4; see the migration notes below. Independent coverage continues to link to its publisher.

The legacy H1S article template repeats November 24, 2020 on unrelated articles, including releases written later. Index dates also changed after migration. Use original release datelines or the linked publisher's publication date instead of those template/index values. Archive capture timestamps are not publication dates.

## Releases

| Item | Displayed date | Linked source and evidence |
| --- | --- | --- |
| Frank Adames receives National Service Award | March 4, 2022 | [Official H1S LinkedIn announcement](https://www.linkedin.com/feed/update/urn:li:activity:6905633384241197056), linked from the original H1S article. Its structured `datePublished` is `2022-03-04T22:01:39.251Z`. This is the announcement date, not an assertion about when the separate H1S article was first posted. Source label identifies the announcement. The article index changed from March 16, 2022 to January 12, 2023. |
| DC Councilmember steadfast on strengthening a proven network | October 10, 2022 | [H1S release](https://www.hope1source.org/article/conveningdc2), body explicitly says “Date Released: October 10, 2022.” Ignore the template date and index's October 11 date. |
| Hurricane Florence emergency alerts | September 13, 2018 | [Archived original release](https://web.archive.org/web/20190819210945/https://www.hopeonesource.org/news/hopeonesource-hurricane-florence-press-release), explicit release dateline. Replaces March 9, 2022 from the migrated index. |
| Contactless outreach during COVID-19 | 2020 | [H1S release](https://www.hope1source.org/article/hopeonesource-gives-local-service-providers-a-simple-contactless-way-to-connect-with-the-people-they-serve-during-covid-19). Current and May 2022 archived indexes agree on December 15, 2020, but the article has no independent release dateline and the template prints November 24. Display only the supported year rather than imply the exact day is verified. |
| Helping over 2,000 people experiencing homelessness | November 2019 | [Archived original release](https://web.archive.org/web/20191113001443/https://www.hopeonesource.org/news/hopeonesource-now-helping-over-2000-people-experiencing-homelessness), release dateline gives November 2019 without a day. |
| Text messages help vulnerable DC residents | April 15, 2019 | [Archived original, “Monica & Pete Aren't Alone…”](https://web.archive.org/web/20190819214019/https://www.hopeonesource.org/news/monica-pete-arent-alone), explicit release dateline. |
| Preventing hypothermia deaths | January 22, 2018 | [Archived original release](https://web.archive.org/web/20190819214524/https://www.hopeonesource.org/news/hopeonesource-winter-2019-press-release-0). Both HTML and PDF print January 22, 2018, but the heading and Winter Plan reference say 2019. Preserve the date actually printed and label it as such; the historical publication year remains uncertain. Do not silently change the printed year to 2019. |
| Convening over 20 DC service providers | March 9, 2018 | [PRWeb release](https://www.prweb.com/releases/dc_convening_to_increase_access_to_services_for_vulnerable_populations/prweb15291042.htm), publisher dateline March 9, 2018 at 03:00 ET. Original H1S release has March 7; use March 9 because that matches this destination. |
| Derrick Woodfork and over 70 providers | January 19, 2017 | [Archived original release](https://web.archive.org/web/20190819213716/https://www.hopeonesource.org/news/hopeonesource-january-2017-release), explicit dateline. |
| Partnering with providers to reduce homelessness | 2016 | [Archived original release](https://web.archive.org/web/20191020151317/https://www.hopeonesource.org/news/hopeonesource-september-2016-release). Heading says September 2016, body references October 1, 2016, and neither HTML nor PDF has a publication dateline. Use the year only. PDF creation time is not publication evidence. |

## Coverage

| Item | Displayed date | Linked source and evidence |
| --- | --- | --- |
| Charleston VA free produce | December 6, 2020 | [VA News](https://news.va.gov/81753/free-produce-veterans-charleston-va/), displayed publication date, by Erin Curran. The H1S post links the older `blogs.va.gov/VAntage/81753/` URL for this same article. August 10, 2020 belongs to a separate Charleston VA version; the footer's last-updated date is also not the publication date. |
| On Giving Tuesday and social justice | December 2, 2020 | [Erin Blakley's LinkedIn article](https://www.linkedin.com/pulse/giving-tuesday-social-justice-erin-blakley), “Published Dec 2, 2020.” H1S linked this exact slug. Publisher title is now “The User Experience of Homelessness,” noted in the source label while preserving the existing v4 title. |
| DC text-notification service expanding | April 17, 2019 | [Street Sense Media](https://streetsensemedia.org/article/notification-service-hopeonesource-expanded-greatly-after-start-as-an-interagency-council-on-homeless-pilot-program/), by Aaron Raubvogel. Publication date is visible in indexed publisher content and the publisher's news archive. |
| Services open during COVID-19 | March 24, 2020 | [Street Sense Media](https://streetsensemedia.org/article/coronavirus-services-homeless-resource/), by Avi Bajpai. The [August 2020 archived publisher copy](https://web.archive.org/web/20200813115734/https://www.streetsensemedia.org/article/coronavirus-services-homeless-resource/) shows the byline date and `article:published_time="2020-03-24T21:38:10Z"`; a [March 2025 copy](https://web.archive.org/web/20250324062421/https://streetsensemedia.org/article/coronavirus-services-homeless-resource/) agrees in its visible date and JSON-LD. |
| Text-messaging system as a guide to homeless services | September 9, 2015 | [Street Sense Media](https://streetsensemedia.org/article/text-messaging-system-a-potential-guide-to-homeless-services/), byline Lindsey Habenicht, September 9, 2015. |

## T131 verification

- All 15 titles render as direct external links with `target="_blank"` and `rel="noopener noreferrer"`.
- Dates use semantic `<time>` elements with matching machine-readable precision.
- Mobile (390px) and desktop (1440px) render without horizontal overflow; inspected full-page screenshots.
- v4 build and prerender checks pass for 29 pages, 12 aliases, and 447 internal links, including metadata, JSON-LD, sitemap, and the noindex preview 404.

## T132: internal article migration

All ten H1S releases now open at `/v4/press/{id}`. Their full substantive prose and quotations are preserved from first-party source bodies, with original headings, contacts, and historical names. They are labeled “Archived press release.” Site navigation, related-article cards, repeated template dates, and empty paragraphs are not article content and were excluded. Independent coverage was not copied.

| New article path (relative to v4) | Original route preserved as an alias |
| --- | --- |
| `/press/frank-adames-national-service-award` | `/article/northern-va-resident-receives-national-service-award-for-helping-those-most-vulnerable-including-refugees` |
| `/press/dc-community-network` | `/article/conveningdc2` |
| `/press/hurricane-florence-alerts` | `/article/emergency-alerts-during-hurricane-florence` |
| `/press/contactless-outreach-covid-19` | `/article/hopeonesource-gives-local-service-providers-a-simple-contactless-way-to-connect-with-the-people-they-serve-during-covid-19` |
| `/press/helping-2000-people` | `/article/helping-over-2-000-people-experiencing-homelessness` |
| `/press/text-messages-for-dc-residents` | `/article/power-of-text-messages-to-help-vulnerable-dc-residents` |
| `/press/preventing-hypothermia-deaths` | `/article/how-dc-can-prevent-hypothermia-deaths-this-winter` |
| `/press/dc-service-provider-convening` | `/article/enabling-sso-with-a-generic-identity-provider` |
| `/press/derrick-woodfork-resources` | `/article/accessing-free-meals-and-job-resources-from-more-than-70-service-providers` |
| `/press/partner-network-homelessness` | `/article/reduce-numbers-of-those-experiencing-homelessness` |

Seven original `/news/…` paths also map to these articles. The historical `/form/get-involved` path maps to `/get-involved`. All links to old H1S pages inside article bodies now resolve to the corresponding v4 page, including the `dc.hopeonesource.org` host. Provenance URLs remain in content metadata and this audit, not as outbound reader links. The preview banner's old-site comparison link was removed.

### Date and source fidelity

- Frank's article now displays **2022**, because the reproduced H1S article has no verified day. March 4 dated the separate LinkedIn announcement previously used as the destination.
- The service-provider convening now displays **March 7, 2018**, matching the original H1S release reproduced here. March 9 dated the PRWeb version previously used as the destination.
- Other source precision limits remain as documented above. The hypothermia date conflict is explicitly retained in an article note; a precise `datePublished` is omitted from its structured data.
- The Council release's apparent “October 12, 2012” typo remains in its original prose. Its contact anchor had a mismatched mailto address; the destination now matches the displayed `partnerships@hope1source.me` address.
- An orphan caption referencing two photographs was omitted from the 2018 convening release after its source PDF returned 404 and photo assets were unavailable. No substantive article prose was removed.
- The original Hurricane Florence alert screenshot could not be recovered from the legacy asset URLs or archive. Its generic replacement phone photograph was omitted, and only the positional lead-in “Pictured above, the” was changed to “The”; the paragraph's substantive wording is unchanged.

### Delivery and checks

- One responsive article template keeps readable line lengths, complete uncropped images, local navigation, and the existing back-to-top control.
- Source-site images are served locally in smaller and larger variants with intrinsic dimensions and responsive selection. Asset filenames and source URLs are retained as provenance metadata where available.
- Full article content, individual canonical URLs, and article structured data are prerendered. The build remains a noindex preview pending PR review.
- v4 generates its own host redirect file so the shared legacy `/article/* → /press` rule cannot bypass the recreated releases. Current-site routing files are unchanged.
- Build verification checks all 39 pages, 30 aliases, 616 internal links, complete article prose in static HTML, local images, and absence of outbound old-site links.
- All ten articles were checked at 320px, 390px, and 1440px: no horizontal overflow, one H1 per page, and no broken article images. A release-title click, legacy article URL, and return-to-index navigation were exercised; return navigation starts at the top.
- The future `https://hope1source.org/` root build also passed (39 pages, 30 aliases, 704 internal links). The default noindex preview build was restored afterward; no deployment occurred. The back-to-top button was exercised on a migrated article and returned both scroll and keyboard focus to the page top.

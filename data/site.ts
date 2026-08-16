// =============================================================================
// SITE & CONTACT DETAILS — edit this file to change how buyers reach you.
// -----------------------------------------------------------------------------
// These details appear in the footer and in the "Inquire" panel that shows
// when a painting is enlarged. Update the email and phone below and the whole
// site updates automatically.
// =============================================================================

export const site = {
  /** The museum / collection name. */
  name: 'The Meridian Collection',

  /** Sales email address. Used for the "Email to inquire" links. */
  email: 'alihalihan@gmail.com',

  /** Sales phone number, shown to visitors exactly as written here. */
  phone: '+7 700 156 7881',
}

// A version of the phone number safe to use inside a tel: link
// (digits and a leading + only). Generated from `site.phone` automatically.
export const phoneHref = `tel:${site.phone.replace(/[^\d+]/g, '')}`

// A mailto: link that opens a fresh email to the sales address.
export const emailHref = `mailto:${site.email}`

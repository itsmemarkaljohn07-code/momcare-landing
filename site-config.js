/*
 * MomCare landing page settings. This is the only file you need to edit.
 *
 * To turn on the Download button, set BOTH:
 *   apkUrl: 'https://…/momcare.apk'
 *   status: 'available'
 * While either is missing the button stays disabled and reads "Coming soon".
 *
 * version, apkSizeMb and sha256 are shown under the button only when filled in.
 * dashboardUrl powers the "Staff sign-in" links; empty = disabled with a tooltip.
 */
window.MOMCARE_CONFIG = {
  apkUrl: '',
  version: '',
  apkSizeMb: null,
  sha256: '',
  dashboardUrl: '',
  status: 'coming-soon' // 'coming-soon' | 'available'
};

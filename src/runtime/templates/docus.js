// @ts-nocheck
import { createDocus } from '#docus'

export default async (ctx, inject) => {
  let docusConfig = {}
  let themeConfig = {}

  <% if (options.hasDocusConfig) { %>
  docusConfig = (await import('#docus-cache/docus.config.json')).default
  <% } %>

  <% if (options.hasThemeConfig) { %>
  themeConfig = (await import('#docus-cache/theme.config.json')).default
  <% } %>

  await createDocus(ctx, { docusConfig, themeConfig }, inject)
}

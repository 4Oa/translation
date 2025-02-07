
// Contest name translation
const translations = {
  free: 'Free',
  triangle: 'Triangle',
  out: 'Out',
  out_return: 'O&R',
  sprint: 'Sprint',
  declaration: 'Task',
  dmst: 'DMSt',
  nsfw: 'NSFW',
  au: 'IRC'
}

export function i18nContestNames (key: keyof typeof translations): string {
  if (!translations[key]) {
    console.error('Translation not found for', key)
    return ''
  } else {
    return translations[key]
  }
}

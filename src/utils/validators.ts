export const required = (value: string) => {
  return value && value ? undefined : 'This field is required'
}

export const maxLength = (max: number) => (value: string) => {
  return value && value.length > max ? `Must be ${max} characters or less` : undefined
}


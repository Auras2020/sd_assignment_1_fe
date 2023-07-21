export const formatDate = (date: Date | null | undefined) => {
  return date instanceof Date ? date?.toLocaleDateString('en-GB').split('/').reverse().join('-') : date
}

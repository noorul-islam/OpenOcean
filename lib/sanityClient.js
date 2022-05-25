import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'ji1dmpz5',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skiIReGHuOJdk4omz2nOQ8E7aIWEeY6UfTIlUgODnuMSsPdTqmxzRWtA4CY3f2HVVrxzsDhROcGjVQ4Wu3uC6oZBjuQahx8eYNDEAfJQ4Tp6dsqBrS0fohrktMDKMLVlDFpO9xY31ati8DDHTlf8mHGijqxenloxB34ISOybacdJoG8PoTjY',
  useCdn: false,
})

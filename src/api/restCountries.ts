import {
  Capital,
  Flags,
  Language,
  Name,
  RestCountriesResponse,
} from 'src/@types/api'

const BASE_URL = 'https://restcountries.com/v3.1'

export const getNames = async (filter = ''): Promise<Name[]> => {
  const fields = ['name', 'cca3'].join(',')
  const route = filter ? `name/${filter}` : 'all'

  const response = await fetch(`${BASE_URL}/${route}?fields=${fields}`)

  const data = (await response.json()) as RestCountriesResponse[]

  return data.map((country) => ({
    value: country.cca3,
    label: country.name.common,
  }))
}

export const getFlags = async (filter = ''): Promise<Flags[]> => {
  const fields = ['name', 'cca3', 'flags'].join(',')
  const route = filter ? `name/${filter}` : 'all'

  const response = await fetch(`${BASE_URL}/${route}?fields=${fields}`)

  const data = (await response.json()) as RestCountriesResponse[]

  return data.map((country) => ({
    value: country.cca3,
    label: country.name.common,
    image: country.flags.png,
  }))
}

const capitalsCache: Capital[] = []

const fetchCapitals = async () => {
  const fields = ['name', 'cca3', 'capital'].join(',')
  const response = await fetch(`${BASE_URL}/all?fields=${fields}`)

  const data = (await response.json()) as RestCountriesResponse[]

  const capitals = data
    .map((country) => ({
      value: country.cca3,
      label: country.capital[0],
    }))
    .filter(({ label }) => Boolean(label))

  capitalsCache.push(...capitals)
}

export const getCapitals = async (filter = ''): Promise<Capital[]> => {
  if (capitalsCache.length === 0) {
    await fetchCapitals()
  }

  return capitalsCache.filter((capital) =>
    capital.label.toLowerCase().includes(filter.toLowerCase())
  )
}

const cache: Language[] = []

const fetchLanguages = async () => {
  const fields = ['name', 'cca3', 'languages'].join(',')
  const response = await fetch(`${BASE_URL}/all?fields=${fields}`)

  const data = (await response.json()) as RestCountriesResponse[]

  const languages = data
    .flatMap((country) =>
      Object.entries(country.languages).map(([key, value]) => ({
        value: key,
        label: value,
      }))
    )
    .filter(
      (language, index, self) =>
        index === self.findIndex((t) => t.value === language.value)
    )

  cache.push(...languages)
}

export const getLanguages = async (filter = ''): Promise<Language[]> => {
  if (cache.length === 0) {
    await fetchLanguages()
  }

  return cache.filter((language) =>
    language.label.toLowerCase().includes(filter.toLowerCase())
  )
}

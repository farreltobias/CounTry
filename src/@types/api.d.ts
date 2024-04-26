export type RestCountriesResponse = {
  name: {
    common: string // 'Brazil'
  }
  cca3: string // 'BRA'
  flags: {
    png: string // 'https://flagcdn.com/w320/br.png'
  }
  languages: {
    [key: string]: string // 'por': 'Portuguese'
  }
  capital: [string] // ['Brasília']
}

export type Flags = {
  value: string // 'BRA'
  label: string // 'Brazil'
  image: string // 'https://flagcdn.com/w320/br.png'
}

export type Capital = {
  value: string // 'BRA'
  label: string // 'Brasília'
}

export type Language = {
  value: string // 'BRA'
  label: string // 'Portuguese'
}

export type Name = {
  value: string // 'BRA'
  label: string // 'Brazil'
}

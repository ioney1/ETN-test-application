type InfoProps = 'key' | 'results' | 'page' | 'version'
type ResultsObject = {
  name: {[K in 'title' | 'first' | 'last']: string}
  login: {[K in 'uuid' | 'username' | 'password' | 'salt' | 'md5' | 'sha1' | 'sha256']: string}
  picture: {[K in 'large' | 'medium' | 'thumbnail']: string}

}
export type ContactsApiResponse = {
  info: {[K in InfoProps]: string}
  results: ResultsObject[]
}
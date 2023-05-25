import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId:'dib1918d',
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: 'skfjk6PQputaaVZogGJBma7xm2WMvvlO41fj93o81Cix1El34wQxXLddnYQVjQ4ay10JsxFF4Oq4EcEgFMIvNmBnTCcx9Q27yphBKicaNLruReJEgxNiKXAkN1wqxNO3TTscemHWAspQ8VBPemSqp1K57nxsacuspmZYSnUhspzQb1LYWhYt',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

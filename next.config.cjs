/** @type {import('next').NextConfig} */
import withCSS from 'next-css';
import withPurgeCss from 'next-purgecss';

export default withCSS(
  withPurgeCss({
    purgeCssPaths: ['pages/**/*', 'components/**/*'],
    reactStrictMode: true,
  })
);



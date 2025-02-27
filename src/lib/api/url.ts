function getBaseURL() {
  // if (process.env.VERCEL_URL) {
  //   return `https://${process.env.VERCEL_URL}`;
  // }

  // if (process.env.CI) {
  //   return 'http://127.0.0.1:3000';
  // }

  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }

  return 'http://localhost:3000';
}

export const BASE_URL = getBaseURL();

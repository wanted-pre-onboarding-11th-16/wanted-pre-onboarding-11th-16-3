import axios from 'axios';

import { TARGET_PATH as TARGET_REPO } from '@/constants/repo';

const PERSONAL_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const client = axios.create({
  baseURL: `${BASE_URL}${TARGET_REPO}`,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${PERSONAL_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28',
  },
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  },
);

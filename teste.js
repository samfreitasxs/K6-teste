import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
      { duration: '10s', target: 10 },
      { duration: '20s', target: 10 },
      { duration: '10', target: 0 },
    ],
  };

export default function () {
  http.get('https://serverest.dev/usuarios');
  sleep(1);
}
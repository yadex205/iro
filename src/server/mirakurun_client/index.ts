import url from 'url';
import axios, { AxiosInstance } from 'axios';

const DEFAULT_MIRAKURUN_PORT = 40772;

interface MirakurunVersion {
  current: string;
  latest: string;
}

export default class MirakurunClient {
  private agent: AxiosInstance;

  public constructor() {
    this.agent = axios.create({
      baseURL: url.format({ protocol: 'http',
                            hostname: '192.168.1.222',
                            port: DEFAULT_MIRAKURUN_PORT,
                            pathname: '/api' })
    });
  }

  private async get<T>(endpoint: string): Promise<T> {
    const res = await this.agent.get<T>(endpoint);
    return res.data;
  }

  public async version() {
    return await this.get<MirakurunVersion>('version');
  }
}

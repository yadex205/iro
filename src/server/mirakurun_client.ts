import url from 'url';
import axios, { AxiosInstance } from 'axios';
import { Version, Channel, Program, TunerDevice } from 'mirakurun/api';

const DEFAULT_MIRAKURUN_PORT = 40772;

export default class MirakurunClient {
  private agent: AxiosInstance;

  public constructor() {
    this.agent = axios.create({
      baseURL: url.format({
        protocol: 'http',
        hostname: '192.168.1.222',
        port: DEFAULT_MIRAKURUN_PORT,
        pathname: '/api'
      })
    });
  }

  private async get<T>(endpoint: string): Promise<T> {
    const res = await this.agent.get<T>(endpoint);
    return res.data;
  }

  public async version() {
    return await this.get<Version>('version');
  }

  public async channels() {
    return await this.get<Channel[]>('channels');
  }

  public async programs() {
    return await this.get<Program[]>('programs');
  }

  public async tuners() {
    return await this.get<TunerDevice[]>('tuners');
  }
}

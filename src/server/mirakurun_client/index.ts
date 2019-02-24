import url from 'url';
import axios, { AxiosInstance } from 'axios';

const DEFAULT_MIRAKURUN_PORT = 40772;

interface Version {
  current: string;
  latest: string;
}

interface Service {
  id: number;
  serviceId: number;
  networkId: number;
  name: string;
}

interface Channel {
  type: string;
  channel: string;
  name: string;
  services: Service[];
}

interface Program {
  id: number;
  eventId: number;
  serviceId: number;
  networkId: number;
  startAt: number;
  duration: number;
  isFree: boolean;
  name?: string;
  description?: string;
  extended?: { [key: string]: string };
  video?: {
    type: string;
    resolution: string;
    streamContent: number;
    componentType: number;
  };
  audio?: {
    samplingRate: number;
    componentType: number;
  };
  genres?: {
    lv1: number;
    lv2: number;
    un1: number;
    un2: number;
  }[];
  relatedItems: {
    serviceId: number;
    eventId: number;
  }[];
}

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
}

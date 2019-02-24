/**
 * @jest-environment node
 */

import request, { Response } from 'supertest';
import HttpStatus from 'http-status-codes';
import app from '../../src/server/app';

describe('GET /api', () => {
  let res: Response;

  beforeAll(async () => {
    res = await request(app).get('/api');
  });

  it('responds with valid status code', async () => {
    expect(res.status).toBe(HttpStatus.OK);
  });

  it('returns expected response', async () => {
    expect(res.body).toEqual(
      expect.objectContaining({
        app_version: expect.any(String),
        mirakurun_version: expect.any(String)
      })
    );
  });
});

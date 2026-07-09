import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';

export const createRateLimiter = (
  windowMs: number,
  max: number
) => {
  return rateLimit({
    windowMs,
    max,
    message: 'Too many requests, please try again later',
  });
};

export const loginLimiter = createRateLimiter(15 * 60 * 1000, 5); // 5 requests per 15 minutes
export const signupLimiter = createRateLimiter(60 * 60 * 1000, 3); // 3 requests per hour
export const contactLimiter = createRateLimiter(60 * 60 * 1000, 5); // 5 requests per hour

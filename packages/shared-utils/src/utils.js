export function createApiResponse(success, data, error) {
  return {
    success,
    data,
    error,
    timestamp: new Date().toISOString()
  };
}

export function createSuccessResponse(data) {
  return createApiResponse(true, data);
}

export function createErrorResponse(error) {
  return createApiResponse(false, undefined, error);
}

export function formatLogMessage(level, message, meta) {
  return {
    level,
    message,
    timestamp: new Date().toISOString(),
    meta
  };
}

export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function sanitizeString(input) {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .replace(/\s+/g, ' ');
}

export function generateId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
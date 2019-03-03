export type LogLevel = 'info' | 'warn' | 'error' | 'log';

function log(level: LogLevel) {
  return (...args: any[]) => {
    if (process.env.NODE_ENV !== 'production') {
      console[level](...args);
    }
  };
}

const logger = {
  log: log('log'),
  info: log('info'),
  warn: log('warn'),
  error: log('error'),
};

export default logger;

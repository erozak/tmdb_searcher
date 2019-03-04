declare module '*.svg' {
  const value: any;
  export = value;
}

declare module 'iso-639-1' {
  const iso6391 = {
    getName: (code: string) => string,
    validate: (code: string) => boolean,
  };

  export = iso6391;
}

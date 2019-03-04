export interface IMeta {
  title: string;
  description: undefined | string;
}

export function meta(title: string, description?: string): IMeta {
  return {
    title,
    description,
  };
}

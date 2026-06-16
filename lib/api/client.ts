type RequestOptions = RequestInit & {
  revalidate?: number | false;
  next?: {
    revalidate?: number | false;
  };
};

const defaultRevalidate = 60;

export async function apiRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const isServer = typeof window === "undefined";
  const headers = new Headers(options.headers);

  if (!headers.has("content-type") && !(options.body instanceof FormData)) {
    headers.set("content-type", "application/json");
  }

  const requestInit: RequestInit & { next?: { revalidate?: number | false } } = {
    ...options,
    headers,
  };

  const method = options.method ?? "GET";
  const shouldCache = method === "GET";

  if (shouldCache) {
    requestInit.cache = options.cache ?? "force-cache";

    if (isServer) {
      requestInit.next = options.next ?? { revalidate: options.revalidate ?? defaultRevalidate };
    }
  } else {
    requestInit.cache = options.cache ?? "no-store";
  }

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
  const resolvedUrl = baseUrl ? new URL(path, baseUrl).toString() : path;

  const response = await fetch(resolvedUrl, requestInit);

  if (!response.ok) {
    const errorMessage = await response.text().catch(() => "");
    throw new Error(errorMessage || `Request failed with status ${response.status}`);
  }

  const contentType = response.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return (await response.json()) as T;
  }

  const text = await response.text();
  return text as T;
}

export {};

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      eventName: string | Date,
      params?: Record<string, any>
    ) => void;

    clarity?: (
      command: "set",
      key: string,
      value: string | boolean | number
    ) => void;
  }
}

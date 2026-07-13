import { publicationCardImageSources } from "../data/portfolio";

type ConnectionAwareNavigator = Navigator & {
  connection?: {
    saveData?: boolean;
  };
};

type IdleAwareWindow = Window & {
  cancelIdleCallback?: (handle: number) => void;
  requestIdleCallback?: (
    callback: () => void,
    options?: { timeout: number },
  ) => number;
};

let publicationImagePromise: Promise<void> | undefined;

function loadImage(src: string) {
  return new Promise<void>((resolve) => {
    const image = new Image();
    let settled = false;
    image.decoding = "async";
    image.fetchPriority = "high";

    const settle = () => {
      if (settled) return;
      settled = true;
      image.decode().catch(() => undefined).finally(resolve);
    };

    image.addEventListener("load", settle, { once: true });
    image.addEventListener("error", () => resolve(), { once: true });
    image.src = src;

    if (image.complete) settle();
  });
}

export function preloadPublicationImages() {
  if (!publicationImagePromise) {
    publicationImagePromise = Promise.all(publicationCardImageSources.map(loadImage)).then(() => undefined);
  }

  return publicationImagePromise;
}

export function schedulePublicationImagePreload() {
  const navigatorWithConnection = navigator as ConnectionAwareNavigator;
  if (navigatorWithConnection.connection?.saveData) return () => undefined;

  const idleWindow = window as IdleAwareWindow;
  if (idleWindow.requestIdleCallback) {
    const handle = idleWindow.requestIdleCallback(() => {
      void preloadPublicationImages();
    }, { timeout: 2200 });

    return () => idleWindow.cancelIdleCallback?.(handle);
  }

  const handle = window.setTimeout(() => {
    void preloadPublicationImages();
  }, 900);

  return () => window.clearTimeout(handle);
}

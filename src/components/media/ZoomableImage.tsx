import { Maximize2, Minus, Plus, RotateCcw, X } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type KeyboardEvent as ReactKeyboardEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";
import { createPortal } from "react-dom";
import { bilingual, useLanguage } from "../../i18n/LanguageContext";
import "./ZoomableImage.css";

type ZoomableImageProps = Omit<
  ComponentPropsWithoutRef<"img">,
  "alt" | "onClick" | "onKeyDown" | "role" | "tabIndex"
> & {
  alt: string;
  caption?: string;
};

type ImageSize = {
  height: number;
  width: number;
};

const MIN_ZOOM = 0.5;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.25;

function clampZoom(value: number) {
  return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Number(value.toFixed(2))));
}

export function ZoomableImage({ alt, caption, className, title, ...imageProps }: ZoomableImageProps) {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [naturalSize, setNaturalSize] = useState<ImageSize | null>(null);
  const [fitSize, setFitSize] = useState<ImageSize | null>(null);
  const triggerRef = useRef<HTMLImageElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const viewerLabel = caption || alt;

  const openViewer = () => {
    setZoom(1);
    setIsOpen(true);
  };

  const closeViewer = () => {
    setIsOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  const adjustZoom = (delta: number) => {
    setZoom((current) => clampZoom(current + delta));
  };

  const handleTriggerKeyDown = (event: ReactKeyboardEvent<HTMLImageElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openViewer();
    }
  };

  const handleWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    adjustZoom(event.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP);
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "+" || event.key === "=") adjustZoom(ZOOM_STEP);
      if (event.key === "-") adjustZoom(-ZOOM_STEP);
      if (event.key === "0") setZoom(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !naturalSize || !stageRef.current) return;

    const stage = stageRef.current;
    const updateFitSize = () => {
      const availableWidth = Math.max(stage.clientWidth - 28, 1);
      const availableHeight = Math.max(stage.clientHeight - 28, 1);
      const fitScale = Math.min(
        availableWidth / naturalSize.width,
        availableHeight / naturalSize.height,
        1,
      );

      setFitSize({
        width: Math.max(Math.round(naturalSize.width * fitScale), 1),
        height: Math.max(Math.round(naturalSize.height * fitScale), 1),
      });
    };

    updateFitSize();
    const observer = new ResizeObserver(updateFitSize);
    observer.observe(stage);
    return () => observer.disconnect();
  }, [isOpen, naturalSize]);

  return (
    <>
      <img
        {...imageProps}
        alt={alt}
        aria-haspopup="dialog"
        aria-label={bilingual(language, `Open image viewer: ${alt}`, `打开图片查看器：${alt}`)}
        className={[className, "is-zoomable-image"].filter(Boolean).join(" ")}
        draggable={false}
        onClick={openViewer}
        onKeyDown={handleTriggerKeyDown}
        ref={triggerRef}
        role="button"
        tabIndex={0}
        title={title ?? bilingual(language, "Click to view and zoom", "点击查看并缩放")}
      />

      {isOpen
        ? createPortal(
            <div className="image-lightbox-backdrop" onMouseDown={(event) => {
              if (event.currentTarget === event.target) closeViewer();
            }}>
              <section
                aria-label={bilingual(language, `Image viewer: ${viewerLabel}`, `图片查看器：${viewerLabel}`)}
                aria-modal="true"
                className="image-lightbox-dialog"
                role="dialog"
              >
                <header className="image-lightbox-toolbar">
                  <p title={viewerLabel}>{viewerLabel}</p>
                  <div>
                    <button
                      aria-label={bilingual(language, "Zoom out", "缩小")}
                      disabled={zoom <= MIN_ZOOM}
                      onClick={() => adjustZoom(-ZOOM_STEP)}
                      type="button"
                    >
                      <Minus aria-hidden="true" size={18} />
                    </button>
                    <output aria-label={bilingual(language, "Current zoom", "当前缩放比例")}>{Math.round(zoom * 100)}%</output>
                    <button
                      aria-label={bilingual(language, "Zoom in", "放大")}
                      disabled={zoom >= MAX_ZOOM}
                      onClick={() => adjustZoom(ZOOM_STEP)}
                      type="button"
                    >
                      <Plus aria-hidden="true" size={18} />
                    </button>
                    <button
                      aria-label={bilingual(language, "Reset zoom", "恢复默认大小")}
                      disabled={zoom === 1}
                      onClick={() => setZoom(1)}
                      type="button"
                    >
                      <RotateCcw aria-hidden="true" size={17} />
                    </button>
                    <button
                      aria-label={bilingual(language, "Close image viewer", "关闭图片查看器")}
                      className="image-lightbox-close"
                      onClick={closeViewer}
                      ref={closeButtonRef}
                      type="button"
                    >
                      <X aria-hidden="true" size={20} />
                    </button>
                  </div>
                </header>

                <div className="image-lightbox-stage" onWheel={handleWheel} ref={stageRef}>
                  <div className="image-lightbox-stage-inner">
                    <div
                      className="image-lightbox-canvas"
                      style={fitSize ? {
                        height: fitSize.height * zoom,
                        width: fitSize.width * zoom,
                      } : undefined}
                    >
                      <img
                        alt={alt}
                        className={fitSize ? "image-lightbox-image" : "image-lightbox-image is-measuring"}
                        decoding="async"
                        onLoad={(event) => setNaturalSize({
                          height: event.currentTarget.naturalHeight,
                          width: event.currentTarget.naturalWidth,
                        })}
                        src={imageProps.src}
                      />
                    </div>
                  </div>
                </div>

                <footer className="image-lightbox-footer">
                  <Maximize2 aria-hidden="true" size={15} />
                  <span>{bilingual(language, "Mouse wheel or controls to zoom · Esc to close", "滚轮或按钮缩放 · Esc 关闭")}</span>
                </footer>
              </section>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  /** Optional label below the device (e.g. caption) */
  footer?: ReactNode;
};

/** iPhone-style device bezel — Apple product-page depth without 3D assets. */
export function DeviceFrame({
  src,
  alt,
  width,
  height,
  sizes,
  priority,
  footer,
}: Props) {
  return (
    <figure className="device-frame">
      <div className="device-frame-shell" aria-hidden="true">
        <div className="device-frame-island" />
        <div className="device-frame-screen">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="device-frame-img"
            sizes={sizes}
            priority={priority}
          />
        </div>
      </div>
      {footer ? <figcaption className="device-frame-footer">{footer}</figcaption> : null}
    </figure>
  );
}

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "@/sanity/env";

import "./Post.css";

import type { SanityDocument } from "next-sanity";
import type { ReactNode } from "react";

export interface PostProps {
  children?: ReactNode;
  data: SanityDocument;
}

const builder = imageUrlBuilder({ projectId, dataset });

export function Post({ children, data }: PostProps) {
  const { title, mainImage, body } = data;

  return (
    <main className="Post">
      {title ? <h1>{title}</h1> : null}
      {mainImage ? (
        <Image
          src={builder
            .image(mainImage)
            .width(300)
            .height(300)
            .quality(80)
            .url()}
          width={300}
          height={300}
          alt={mainImage.alt || ""}
        />
      ) : null}
      {body ? <PortableText value={body} /> : null}
    </main>
  );
}

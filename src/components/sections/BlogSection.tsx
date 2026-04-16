"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BLOG } from "@/lib/constants";
import { useLocale } from "@/lib/i18n/context";
import { duration, easing, reveal } from "@/lib/motion";
import type { BlogPost } from "@/types";
import type { Locale } from "@/lib/i18n/types";

/**
 * 블로그 URL을 현재 로케일에 맞게 변환한다.
 * - ko: https://blog.algo-su.com/posts/{slug}
 * - en: https://blog.algo-su.com/en/posts/{slug}
 */
function localizeBlogHref(href: string, locale: Locale): string {
  if (locale === "en") {
    return href.replace("/posts/", "/en/posts/");
  }
  return href;
}

function PostTile({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <motion.div
      ref={ref}
      animate={{
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 24,
        scale: inView ? 1 : 0.97,
      }}
      transition={{
        duration: duration.reveal,
        delay,
        ease: easing.reveal,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FeaturedPost({ post }: { post: BlogPost }) {
  const { t, ts, locale } = useLocale();
  return (
    <a
      href={localizeBlogHref(post.href, locale)}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col justify-between rounded-2xl border border-card-border bg-foreground p-7 text-background transition-all duration-200 hover:shadow-lg hover:shadow-accent-purple/5 hover:border-accent-purple/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple/50"
    >
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.1em] opacity-60">
          {ts("ui.featured")}
        </span>
        <h4 className="mt-3 text-xl font-extrabold leading-snug tracking-tight md:text-2xl">
          {t(post.title)}
        </h4>
      </div>
      <div className="mt-6 flex items-end justify-between">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-background/15 px-2.5 py-1 text-[11px] font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <ArrowUpRight className="h-5 w-5 opacity-40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
      </div>
    </a>
  );
}

function CompactPost({ post }: { post: BlogPost }) {
  const { t, locale } = useLocale();
  return (
    <a
      href={localizeBlogHref(post.href, locale)}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col justify-between rounded-2xl border border-card-border bg-background p-6 transition-all duration-200 hover:shadow-lg hover:shadow-accent-purple/5 hover:border-accent-purple/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple/50"
    >
      <div>
        <span className="text-[11px] font-medium text-muted">
          {t(post.category)} · {post.date}
        </span>
        <h4 className="mt-2 text-base font-bold leading-snug tracking-tight text-foreground">
          {t(post.title)}
        </h4>
      </div>
      <div className="mt-4 flex items-end justify-between">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-card px-2.5 py-1 text-[11px] font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <ArrowUpRight className="h-4 w-4 text-muted opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-60" />
      </div>
    </a>
  );
}

function SmallPost({ post }: { post: BlogPost }) {
  const { t, locale } = useLocale();
  return (
    <a
      href={localizeBlogHref(post.href, locale)}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full items-center justify-between rounded-2xl border border-card-border bg-background p-5 transition-all duration-200 hover:shadow-lg hover:shadow-accent-purple/5 hover:border-accent-purple/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple/50"
    >
      <div>
        <h4 className="text-sm font-bold tracking-tight text-foreground">
          {t(post.title)}
        </h4>
        <span className="mt-1 block text-[11px] text-muted">{post.date}</span>
      </div>
      <ArrowUpRight className="h-4 w-4 flex-none text-muted opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-60" />
    </a>
  );
}

export function BlogSection() {
  const { t, ts, locale } = useLocale();
  const posts = BLOG.posts;
  const blogRootUrl = locale === "en" ? `${BLOG.url}/en` : BLOG.url;
  const featured = posts[0];
  const compact = posts.slice(1, 3);
  const small = posts.slice(3, 6);

  return (
    <section id="blog" className="bg-card py-20 md:py-32">
      <div className="mx-auto max-w-[1100px] px-6">
        {/* Header */}
        <PostTile delay={0}>
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
            {ts("ui.writing")}
          </span>
          <h2
            className="mt-3 text-2xl font-extrabold tracking-tight text-foreground md:text-3xl"
            style={{ letterSpacing: "-0.04em" }}
          >
            {t(BLOG.title)}
          </h2>
          <p className="mt-2 text-[15px] text-muted">{t(BLOG.subtitle)}</p>
        </PostTile>

        {/* Post Grid */}
        <div className="mt-8 grid grid-cols-1 gap-3.5 md:grid-cols-3">
          {/* Featured */}
          <PostTile delay={0.08} className="md:row-span-2">
            <FeaturedPost post={featured} />
          </PostTile>

          {/* Compact ×2 */}
          {compact.map((post, i) => (
            <PostTile
              key={post.href}
              delay={0.16 + i * 0.08}
              className="md:col-span-2"
            >
              <CompactPost post={post} />
            </PostTile>
          ))}

          {/* Small ×3 */}
          {small.map((post, i) => (
            <PostTile key={post.href} delay={0.32 + i * 0.08}>
              <SmallPost post={post} />
            </PostTile>
          ))}
        </div>

        {/* CTA */}
        <PostTile delay={0.56} className="mt-10 text-center">
          <a
            href={blogRootUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all duration-200 hover:shadow-lg hover:shadow-accent-purple/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple/50"
          >
            {ts("ui.blogCta")}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </PostTile>
      </div>
    </section>
  );
}

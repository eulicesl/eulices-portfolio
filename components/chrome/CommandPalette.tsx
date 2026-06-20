"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { siteSections } from "@/lib/navigation";
import { profile } from "@/lib/content";

type CommandItem = {
  id: string;
  label: string;
  hint?: string;
  href: string;
  external?: boolean;
  group: "Navigate" | "Contact";
};

const actionItems: CommandItem[] = [
  {
    id: "email",
    label: "Email Eulices",
    hint: profile.email,
    href: `mailto:${profile.email}`,
    group: "Contact",
  },
  {
    id: "github",
    label: "Open GitHub",
    hint: "github.com/eulicesl",
    href: profile.github,
    external: true,
    group: "Contact",
  },
  {
    id: "linkedin",
    label: "Open LinkedIn",
    hint: "in/euliceslopez",
    href: profile.linkedin,
    external: true,
    group: "Contact",
  },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const navItems: CommandItem[] = useMemo(
    () =>
      siteSections.map((s) => ({
        id: s.id,
        label: s.label,
        hint: s.shortLabel,
        href: s.id === "top" ? "#top" : `#${s.id}`,
        group: "Navigate" as const,
      })),
    [],
  );

  const allItems = useMemo(() => [...navItems, ...actionItems], [navItems]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allItems;
    return allItems.filter((item) => {
      const section = siteSections.find((s) => s.id === item.id);
      const keywords = section?.keywords?.join(" ") ?? "";
      return (
        item.label.toLowerCase().includes(q) ||
        (item.hint?.toLowerCase().includes(q) ?? false) ||
        keywords.includes(q)
      );
    });
  }, [allItems, query]);

  const grouped = useMemo(() => {
    const groups = new Map<string, CommandItem[]>();
    for (const item of filtered) {
      const list = groups.get(item.group) ?? [];
      list.push(item);
      groups.set(item.group, list);
    }
    return groups;
  }, [filtered]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActiveIndex(0);
  }, []);

  const goTo = useCallback(
    (item: CommandItem) => {
      close();
      if (item.external) {
        window.open(item.href, "_blank", "noopener,noreferrer");
        return;
      }
      const target = document.querySelector(item.href);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      if (item.href === "#top") {
        window.history.replaceState(null, "", " ");
      } else {
        window.history.replaceState(null, "", item.href);
      }
    },
    [close],
  );

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("open-command-palette", onOpen);
    return () => window.removeEventListener("open-command-palette", onOpen);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (!open) return;
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % Math.max(filtered.length, 1));
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) =>
          i <= 0 ? Math.max(filtered.length - 1, 0) : i - 1,
        );
      }
      if (e.key === "Enter" && filtered[activeIndex]) {
        e.preventDefault();
        goTo(filtered[activeIndex]);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close, filtered, activeIndex, goTo]);

  useEffect(() => {
    if (open) {
      setActiveIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.querySelector<HTMLElement>(
      `[data-cmd-index="${activeIndex}"]`,
    );
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, open]);

  useEffect(() => {
    document.documentElement.classList.toggle("palette-open", open);
    return () => document.documentElement.classList.remove("palette-open");
  }, [open]);

  let runningIndex = 0;

  if (!open) return null;

  return (
    <div className="cmd-root" role="presentation">
      <button
        type="button"
        className="cmd-backdrop"
        aria-label="Close command palette"
        onClick={close}
      />
      <dialog
        className="cmd-dialog"
        open
        aria-modal="true"
        aria-label="Command palette"
      >
        <div className="cmd-search">
          <span className="cmd-search-icon" aria-hidden="true">
            ⌘
          </span>
          <input
            ref={inputRef}
            type="search"
            className="cmd-input"
            placeholder="Jump to a section or action…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-activedescendant={
              filtered[activeIndex]
                ? `cmd-item-${filtered[activeIndex].id}`
                : undefined
            }
            autoComplete="off"
            spellCheck={false}
          />
          <kbd className="cmd-kbd" aria-hidden="true">
            esc
          </kbd>
        </div>

        <div className="cmd-list" ref={listRef} role="listbox">
          {filtered.length === 0 ? (
            <p className="cmd-empty">No matches for &ldquo;{query}&rdquo;</p>
          ) : (
            Array.from(grouped.entries()).map(([group, items]) => (
              <div key={group}>
                <div className="cmd-group-label">{group}</div>
                <ul className="cmd-group">
                  {items.map((item) => {
                    const index = runningIndex++;
                    const isActive = index === activeIndex;
                    return (
                      <li key={item.id} role="presentation">
                        <button
                          type="button"
                          id={`cmd-item-${item.id}`}
                          data-cmd-index={index}
                          role="option"
                          aria-selected={isActive}
                          className={`cmd-item${isActive ? " cmd-item-active" : ""}`}
                          onClick={() => goTo(item)}
                          onMouseEnter={() => setActiveIndex(index)}
                        >
                          <span className="cmd-item-label">{item.label}</span>
                          {item.hint ? (
                            <span className="cmd-item-hint">{item.hint}</span>
                          ) : null}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))
          )}
        </div>
      </dialog>
    </div>
  );
}

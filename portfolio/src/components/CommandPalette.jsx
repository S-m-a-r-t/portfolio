import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Command } from 'cmdk';
import { ArrowUpRight, Copy, ExternalLink, FileText, Github, Linkedin, Search, Sparkles } from 'lucide-react';
import { NAV_ITEMS, PROJECTS } from '../constants.jsx';

const EMAIL = 'akshat12.saini@gmail.com';

const CommandPalette = ({ open, setOpen }) => {
  const inputRef = useRef(null);
  const dialogRef = useRef(null);
  const [query, setQuery] = useState('');

  const actions = useMemo(() => {
    const sectionActions = NAV_ITEMS.map((item) => ({
      id: `section-${item.label}`,
      label: item.label,
      group: 'Navigate',
      keywords: [item.label, ...(item.keywords || [])],
      run: () => {
        const target = document.querySelector(item.href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setOpen(false);
      },
    }));

    const projectActions = PROJECTS.slice(0, 2).map((project) => ({
      id: `project-${project.title}`,
      label: `View flagship project: ${project.title}`,
      group: 'Projects',
      keywords: [project.title, 'flagship', 'project'],
      run: () => {
        const target = document.querySelector('#projects');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setOpen(false);
      },
    }));

    return [
      ...sectionActions,
      ...projectActions,
      {
        id: 'resume',
        label: 'Open resume PDF',
        group: 'Quick actions',
        keywords: ['resume', 'cv', 'pdf'],
        run: () => {
          window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
          setOpen(false);
        },
      },
      {
        id: 'github',
        label: 'View GitHub',
        group: 'Quick actions',
        keywords: ['github', 'code', 'profile'],
        run: () => {
          window.open('https://github.com/S-m-a-r-t', '_blank', 'noopener,noreferrer');
          setOpen(false);
        },
      },
      {
        id: 'linkedin',
        label: 'View LinkedIn',
        group: 'Quick actions',
        keywords: ['linkedin', 'social', 'profile'],
        run: () => {
          window.open('https://linkedin.com/in/akshat-saini-626142255/', '_blank', 'noopener,noreferrer');
          setOpen(false);
        },
      },
      {
        id: 'email',
        label: 'Copy email',
        group: 'Quick actions',
        keywords: ['email', 'contact', 'mail'],
        run: async () => {
          try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
              await navigator.clipboard.writeText(EMAIL);
            }
          } catch (error) {
            console.error('Clipboard copy failed', error);
          }
          setOpen(false);
        },
      },
    ];
  }, [setOpen]);

  useEffect(() => {
    if (!open) {
      setQuery('');
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    inputRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        return;
      }

      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'button, [href], input, [tabindex]:not([tabindex="-1"])'
        );

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, setOpen]);

  const filteredActions = useMemo(() => {
    if (!query.trim()) return actions;

    const normalized = query.toLowerCase();

    return actions.filter((action) => {
      const haystack = [action.label, action.group, ...(action.keywords || [])]
        .join(' ')
        .toLowerCase();
      return haystack.includes(normalized);
    });
  }, [actions, query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center bg-[#030014]/80 px-4 pt-24 backdrop-blur-md sm:px-6">
      <div
        ref={dialogRef}
        className="w-full max-w-2xl overflow-hidden rounded-[28px] border border-mono/15 bg-[#0b1120]/95 shadow-mono-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        <div className="flex items-center gap-3 border-b border-white/10 bg-[#0d1728] px-4 py-3">
          <Search className="h-4 w-4 text-mono" />
          <Command value={query} onValueChange={setQuery} label="Command palette" shouldFilter={false} className="w-full">
            <Command.Input
              ref={inputRef}
              value={query}
              onValueChange={setQuery}
              placeholder="Search sections, files, or actions..."
              className="w-full border-0 bg-transparent text-base text-white placeholder:text-slate-400 focus:outline-none"
            />
          </Command>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg border border-white/10 bg-white/[0.02] px-2 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300 transition-colors hover:border-mono/25 hover:text-mono"
          >
            Esc
          </button>
        </div>

        <Command className="max-h-[420px] overflow-y-auto bg-[#0b1120] p-2" value={query} onValueChange={setQuery} shouldFilter={false}>
          <Command.List>
            {filteredActions.length === 0 ? (
              <Command.Empty className="px-3 py-6 text-sm text-slate-400">No matches found.</Command.Empty>
            ) : (
              Object.entries(
                filteredActions.reduce((groups, action) => {
                  if (!groups[action.group]) groups[action.group] = [];
                  groups[action.group].push(action);
                  return groups;
                }, {})
              ).map(([group, items]) => (
                <Command.Group key={group} heading={group} className="px-1 pb-2 pt-3">
                  {items.map((action) => (
                    <Command.Item
                      key={action.id}
                      value={action.label}
                      onSelect={() => action.run()}
                      className="group flex cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-slate-200 outline-none data-[selected=true]:bg-white/[0.04] data-[selected=true]:text-white"
                    >
                      <span className="flex items-center gap-3">
                        {action.id.includes('project') ? (
                          <Sparkles className="h-4 w-4 text-primary" />
                        ) : action.id === 'resume' ? (
                          <FileText className="h-4 w-4 text-primary" />
                        ) : action.id === 'github' ? (
                          <Github className="h-4 w-4 text-primary" />
                        ) : action.id === 'linkedin' ? (
                          <Linkedin className="h-4 w-4 text-primary" />
                        ) : action.id === 'email' ? (
                          <Copy className="h-4 w-4 text-primary" />
                        ) : (
                          <ArrowUpRight className="h-4 w-4 text-primary" />
                        )}
                        <span className="text-sm font-medium">{action.label}</span>
                      </span>

                      <span className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                        {action.group === 'Navigate' ? 'Jump' : action.group === 'Projects' ? 'Open' : 'Action'}
                      </span>
                    </Command.Item>
                  ))}
                </Command.Group>
              ))
            )}
          </Command.List>
        </Command>
      </div>
    </div>
  );
};

export default CommandPalette;

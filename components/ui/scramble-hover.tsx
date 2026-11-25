'use client';

import { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const DEFAULT_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export type ScrambleHoverProps = {
  text: string;
  scrambleSpeed?: number;
  maxIterations?: number;
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  scrambledClassName?: string;
};

type ActiveCharacter = {
  key: string;
  character: string;
};

export function ScrambleHover({
  text,
  scrambleSpeed = 32,
  maxIterations = 4,
  useOriginalCharsOnly = false,
  characters = DEFAULT_CHARACTERS,
  className,
  scrambledClassName,
}: ScrambleHoverProps) {
  const [active, setActive] = useState<ActiveCharacter | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current =
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  }, []);

  useEffect(
    () => () => {
      if (timerRef.current) clearInterval(timerRef.current);
    },
    [],
  );

  const stop = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  const pool = useOriginalCharsOnly
    ? Array.from(new Set(text.replace(/\s/g, '').split(''))).filter((character) =>
        /[a-z0-9]/i.test(character),
      )
    : Array.from(characters);

  const pickCharacter = useCallback(
    (original: string) => {
      const source = pool.length > 0 ? pool : Array.from(DEFAULT_CHARACTERS);
      const candidate = source[Math.floor(Math.random() * source.length)];
      return original === original.toLowerCase() ? candidate.toLowerCase() : candidate.toUpperCase();
    },
    [pool],
  );

  const scramble = useCallback(
    (key: string, original: string) => {
      if (reducedMotionRef.current || !/[a-z0-9]/i.test(original)) return;

      stop();
      const iterations = Math.max(1, maxIterations);
      let count = 0;

      setActive({ key, character: pickCharacter(original) });

      timerRef.current = setInterval(() => {
        count += 1;

        if (count >= iterations) {
          stop();
          setActive(null);
          return;
        }

        setActive({ key, character: pickCharacter(original) });
      }, scrambleSpeed);
    },
    [maxIterations, pickCharacter, scrambleSpeed, stop],
  );

  const lines = text.split('\n');

  return (
    <span className={cn('scramble', className)}>
      <span className="sr-only">{text.replace(/\n/g, ' ')}</span>
      <span aria-hidden="true">
        {lines.map((line, lineIndex) => (
          <span key={lineIndex} className="block" data-scramble-line>
            {line.split(' ').map((word, wordIndex) => (
              <Fragment key={wordIndex}>
                {wordIndex > 0 ? ' ' : null}
                <span className="inline-block whitespace-nowrap">
                  {word.split('').map((character, characterIndex) => {
                    const key = `${lineIndex}-${wordIndex}-${characterIndex}`;
                    const isActive = active?.key === key;

                    return (
                      <span
                        key={key}
                        data-scramble-char
                        data-character={character}
                        data-scrambling={isActive ? 'true' : undefined}
                        onPointerOver={() => scramble(key, character)}
                        className="scramble-char relative inline-block"
                      >
                        {isActive ? (
                          <span
                            aria-hidden="true"
                            data-scramble-overlay
                            className={cn(
                              'pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap',
                              scrambledClassName,
                            )}
                          >
                            {active.character}
                          </span>
                        ) : (
                          character
                        )}
                      </span>
                    );
                  })}
                </span>
              </Fragment>
            ))}
          </span>
        ))}
      </span>
    </span>
  );
}

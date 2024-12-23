import { RefObject, useEffect, useRef } from 'react';

const defaultEvents = ['mousedown', 'touchstart'];

export const useClickAway = <E extends Event = Event>(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: E) => void,
  events: string[] = defaultEvents
) => {
  const savedCallback = useRef(onClickAway);

  // Mettre à jour le callback chaque fois qu'onClickAway change
  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);

  // Utiliser useEffect pour ajouter et nettoyer les écouteurs d'événements
  useEffect(() => {
    const handler = (event: Event) => {
      const { current: el } = ref;
      if (el && !el.contains(event.target as Node)) {
        savedCallback.current(event as E);
      }
    };

    // Ajouter les écouteurs d'événements pour chaque événement
    events.forEach((eventName) => {
      document.addEventListener(eventName, handler);
    });

    // Nettoyer les écouteurs d'événements lors du démontage
    return () => {
      events.forEach((eventName) => {
        document.removeEventListener(eventName, handler);
      });
    };
  }, [events, ref]);
};

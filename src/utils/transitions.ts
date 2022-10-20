export const fade = (direction: string = 'in', options = {}) => {
  let sets =
    direction == 'in'
      ? [
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
        ]
      : [
          {
            opacity: 1,
          },
          {
            opacity: 0,
          },
        ];
  return (el: Element, done: () => void): void | undefined => {
    el.animate(sets, {
      duration: 1000,
      ...options,
    }).finished.then(done);
  };
};

export const popTransition = (options = {}) => {
  return (el: Element, done: () => void): void | undefined => {
    el.animate(
      [
        {
          opacity: 1,
        },
        {
          opacity: 0,
          transform: 'scale3d(1.5, 1.5, 1.5)',
        },
      ],
      {
        duration: 1000,
        ...options,
      }
    ).finished.then(done);
  };
};

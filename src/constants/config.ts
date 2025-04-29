export const FILE_SIZES = {
  AVATAR_MAX_KB: 500
};

export const BREAKPOINTS = {
  MOBILE: 430
};

export const fromKBtoBytes = (size: number): number => {
  return size * 1024;
}; 
import type { FloatingPlacement, FloatingPosition, FloatingSide } from '../types';

export function getFloatingPosition(
  dir: 'rtl' | 'ltr',
  position: FloatingPosition,
): FloatingPosition {
  if (dir === 'rtl' && (position.includes('right') || position.includes('left'))) {
    const [side, placement] = position.split('-') as [FloatingSide, FloatingPlacement];
    const flippedPosition = side === 'right' ? 'left' : 'right';
    return placement === undefined ? flippedPosition : `${flippedPosition}-${placement}`;
  }

  return position;
}

export function getFloatingSide(dir: 'rtl' | 'ltr', position: FloatingPosition) {
  const [side] = position.split('-') as [FloatingSide];
  if (dir === 'rtl') {
    return side === 'right' ? 'left' : 'right';
  }

  return side;
}
